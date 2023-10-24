import {
    CategoryFactory,
    DeclarationsFactory,
    ExpressionsFactory,
    JsDocTokensFactory,
    JsxTokensFactory,
    KeywordTokensFactory,
    LiteralTokensFactory,
    PunctuationTokensFactory,
    SpecialOrMetaTokensFactory,
    StatementsFactory,
    TriviaTokensFactory,
    TypeNodesFactory
} from "@/app/factories/category.strategy.factory";
import {TokenFactory} from "@/app/factories/token.factory";

import getOriginalTSSyntaxEnum from "@/app/utils/getOriginalTSSyntax";

export interface AllCategoriesType {
    triviaTokens: CategoryFactory;
    literalTokens: CategoryFactory;
    punctuationTokens: CategoryFactory;
    keywordTokens: CategoryFactory;
    typeNodes: CategoryFactory;
    expressions: CategoryFactory;
    statements: CategoryFactory;
    declarations: CategoryFactory;
    jsxTokens: CategoryFactory;
    jsDocTokens: CategoryFactory;
    specialOrMetaTokens: CategoryFactory;
}

export function getAllCategories(): AllCategoriesType {
    const allTokens: TokenFactory[] = getOriginalTSSyntaxEnum()

    let hashedDictionary: AllCategoriesType = {
        triviaTokens: new TriviaTokensFactory(),
        literalTokens: new LiteralTokensFactory(),
        punctuationTokens: new PunctuationTokensFactory(),
        keywordTokens: new KeywordTokensFactory(),
        typeNodes: new TypeNodesFactory(),
        expressions: new ExpressionsFactory(),
        statements: new StatementsFactory(),
        declarations: new DeclarationsFactory(),
        jsxTokens: new JsxTokensFactory(),
        jsDocTokens: new JsDocTokensFactory(),
        specialOrMetaTokens: new SpecialOrMetaTokensFactory(),
    }


    for (let token of allTokens) {
        const tokenKind = token.kind

        if (hashedDictionary.specialOrMetaTokens.identifier.test(tokenKind)) {
            hashedDictionary.specialOrMetaTokens.addToken(token)
        } else if (hashedDictionary.jsxTokens.identifier.test(tokenKind)) {
            hashedDictionary.jsxTokens.addToken(token)
        } else if (hashedDictionary.jsDocTokens.identifier.test(tokenKind)) {
            hashedDictionary.jsDocTokens.addToken(token)
        } else if (hashedDictionary.triviaTokens.identifier.test(tokenKind)) {
            hashedDictionary.triviaTokens.addToken(token)
        } else if (hashedDictionary.typeNodes.identifier.test(tokenKind)) {
            hashedDictionary.typeNodes.addToken(token)
        } else if (hashedDictionary.expressions.identifier.test(tokenKind)) {
            hashedDictionary.expressions.addToken(token)
        } else if (hashedDictionary.statements.identifier.test(tokenKind)) {
            hashedDictionary.statements.addToken(token)
        } else if (hashedDictionary.declarations.identifier.test(tokenKind)) {
            hashedDictionary.declarations.addToken(token)
        } else if (hashedDictionary.literalTokens.identifier.test(tokenKind)) {
            hashedDictionary.literalTokens.addToken(token)
        } else if (hashedDictionary.punctuationTokens.identifier.test(tokenKind)) {
            hashedDictionary.punctuationTokens.addToken(token)
        } else if (hashedDictionary.keywordTokens.identifier.test(tokenKind)) {
            hashedDictionary.keywordTokens.addToken(token)
        }
    }


    return hashedDictionary
}
