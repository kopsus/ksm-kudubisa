import { NextResponse } from "next/server";

export const ResponseHandler = {
  get<T>(data: T, message = "Success") {
    return NextResponse.json(
      {
        status: 200,
        message,
        data,
      },
      { status: 200 } // Tambahkan status HTTP eksplisit
    );
  },

  created<T>(data: T, message = "Created") {
    return NextResponse.json(
      {
        status: 201,
        message,
        data,
      },
      { status: 201 }
    );
  },

  updated<T>(data: T, message = "Updated") {
    return NextResponse.json(
      {
        status: 200,
        message,
        data,
      },
      { status: 200 }
    );
  },

  deleted<T>(data: T, message = "Deleted") {
    return NextResponse.json(
      {
        status: 200,
        message,
        data,
      },
      { status: 200 }
    );
  },

  InvalidData(message = "Invalid Data") {
    return NextResponse.json(
      {
        status: 400,
        message,
      },
      { status: 400 }
    );
  },

  serverError(message = "Internal Server Error") {
    return NextResponse.json(
      {
        status: 500,
        message,
      },
      { status: 500 }
    );
  },

  unauthorized(message = "Unauthorized") {
    return NextResponse.json(
      {
        status: 401,
        message,
      },
      { status: 401 }
    );
  },

  forbidden(message = "Forbidden") {
    return NextResponse.json(
      {
        status: 403,
        message,
      },
      { status: 403 }
    );
  },

  notFound(message = "Not Found") {
    return NextResponse.json(
      {
        status: 404,
        message,
      },
      { status: 404 }
    );
  },
};
