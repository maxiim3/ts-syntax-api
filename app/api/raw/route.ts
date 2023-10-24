import {NextRequest, NextResponse} from "next/server";
import getOriginalTSSyntaxEnum from "@/app/utils/getOriginalTSSyntax";

export function GET(request: NextRequest) {

    const list = getOriginalTSSyntaxEnum().map((item) => item.kind)
    return Response.json({rawList: list})
}
