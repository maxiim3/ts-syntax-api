import {NextRequest, NextResponse} from "next/server";

export function GET(request: NextRequest) {
   return Response.json({message: "Hello World!"})
}
