import ts from "typescript";
import {TokenType} from "@/app/types/token.types";

export class TokenFactory implements TokenType {
    tokenId: number
    kind: string

    constructor(tokenHash: number) {
        this.tokenId = tokenHash
        this.kind = ts.SyntaxKind[tokenHash]
    }
}
