import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { username } = body;

    if (/\s/.test(username)) {
      return ResponseHandler.InvalidData(
        "Username tidak boleh mengandung spasi."
      );
    }

    if (!body) {
      ResponseHandler.InvalidData();
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

    const hashedPassword = await bcrypt.hash(body.password, 10);

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
