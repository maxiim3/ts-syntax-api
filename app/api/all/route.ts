import {NextRequest, NextResponse} from "next/server";
import getOriginalTSSyntaxEnum from "@/app/utils/getOriginalTSSyntax";
import {getAllCategories} from "@/app/utils/getByCategory";

export function GET(request: NextRequest) {

    const all = getAllCategories()
    return Response.json({all})
}
