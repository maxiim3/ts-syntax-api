import {NextRequest, NextResponse} from "next/server";
import getOriginalTSSyntaxEnum from "@/app/utils/getOriginalTSSyntax";
import {AllCategoriesType, getAllCategories} from "@/app/utils/getByCategory";

export async function GET(
    request: Request,
    {params}: { params: { category: keyof AllCategoriesType} }
) {
    const category = params.category

    const all = getAllCategories()
    const response = all[category]
    if(!response) {
        return Response.json({error: `Category ${category} not found`})
    }

    return Response.json({category: response})
}
