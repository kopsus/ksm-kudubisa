import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import bcrypt, { genSalt } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { username, password } = body;

    if (/\s/.test(username)) {
      return ResponseHandler.InvalidData(
        "Username tidak boleh mengandung spasi."
      );
    }

    if (!body) {
      ResponseHandler.InvalidData();
    }

    // Validasi password
    if (!password || password.length < 8 || !/[a-zA-Z]/.test(password)) {
      return ResponseHandler.InvalidData(
        "Password harus minimal 8 karakter dan mengandung minimal 1 huruf."
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      return ResponseHandler.InvalidData(
        `Username ${existingUser.username} sudah terdaftar`
      );
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
        rt: body.rt ?? null, // Set rt to null if not provided
        rw: body.rw ?? null, // Set rw to null if not provided
      },
      select: {
        username: true,
        namaLengkap: true,
        noTlp: true,
        rt: true,
        rw: true,
      },
    });

    return ResponseHandler.created(newUser);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
