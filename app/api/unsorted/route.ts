import {NextRequest, NextResponse} from "next/server";
import getOriginalTSSyntaxEnum from "@/app/utils/getOriginalTSSyntax";

export function GET(request: NextRequest) {

    const original = getOriginalTSSyntaxEnum()
    return Response.json({original})
}
