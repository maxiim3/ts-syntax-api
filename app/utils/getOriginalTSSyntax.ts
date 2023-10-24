import {TokenFactory} from "@/app/factories/token.factory";

/**
 * Returns the list of the complete TSSyntax types base on their token code
 **/
export default function getOriginalTSSyntaxEnum() {
    const tsSyntax: TokenFactory[] = []
    Array(364).fill(0).map((_, i) => tsSyntax.push(new TokenFactory(i)))
    return tsSyntax
}
