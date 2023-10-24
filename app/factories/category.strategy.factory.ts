import {CategoryIdentifier, CategoryProps, CategoryType} from "@/app/types/category.types";
import {TokenType} from "@/app/types/token.types";

export class CategoryFactory implements CategoryType {
    description: string
    tokens: TokenType[]
    identifier: CategoryIdentifier
    length: number

    constructor(props: CategoryProps) {
        this.description = props.description
        this.tokens = props.tokens
        this.identifier = props.identifier
        this.length = this.tokens.length
    }

    addToken(token: TokenType) {
        this.tokens.push(token)
        this.length = this.tokens.length
    }
}

export class TriviaTokensFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Trivia tokens are syntactically insignificant tokens, like whitespace, comments, and tokens that represent text literals (string literals, regular expression literals, and template literals).',
            tokens: [],
            identifier: /(Trivia)/,
        })
    }
}

export class LiteralTokensFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Literal tokens are tokens that represent literal values. These include numeric literals, string literals, regular expression literals, and template literals.',
            tokens: [],
            identifier: /(Literal|JsxText|RegularExpression|Template)/,
        })
    }
}

export class PunctuationTokensFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Punctuation tokens are tokens that represent syntactic punctuation.',
            tokens: [],
            identifier: /(Token|Equals)/,
        })
    }
}

export class KeywordTokensFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Keyword tokens are tokens that represent keywords.',
            tokens: [],
            identifier: /(Keyword)/,
        })
    }
}

export class TypeNodesFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Type nodes are nodes that represent types.',
            tokens: [],
            identifier: /(Type)/,
        })
    }
}

export class ExpressionsFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Expression nodes are nodes that represent expressions.',
            tokens: [],
            identifier: /(Expression|ElementAccess|Call|New|TaggedTemplate|TypeAssertion|Parenthesized|Function|Arrow|Delete|TypeOf|Void|Await|PrefixUnary|PostfixUnary|Binary|Conditional|Template|Yield|Spread|Class|Omitted|With|Satisfies|MetaProperty|Synthetic|CommaList|PartiallyEmitted|SyntheticReference)/,
        })
    }
}

export class StatementsFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Statement nodes are nodes that represent statements.',
            tokens: [],
            identifier: /(Statement|Block|Empty)/,
        })
    }
}

export class DeclarationsFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Declaration nodes are nodes that represent declarations.',
            tokens: [],
            identifier: /(Declaration|VariableDeclarationList|Function|Class|Interface|TypeAlias|Enum|Module|NamespaceExport|ImportEquals|Import|ExportAssignment|Export|Missing|ExternalModuleReference)/,
        })
    }
}

export class JsxTokensFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'JSX tokens are tokens that represent JSX syntax.',
            tokens: [],
            identifier: /(Jsx)/,
        })
    }
}

export class JsDocTokensFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'JSDoc tokens are tokens that represent JSDoc syntax.',
            tokens: [],
            identifier: /(JSDoc)/,
        })
    }
}

export class SpecialOrMetaTokensFactory extends CategoryFactory {
    constructor() {
        super({
            description: 'Special or meta tokens are tokens that do not fit into any of the other categories.',
            tokens: [],
            identifier: /(EndOfFile|FirstToken|LastJSDocTagNode|Count|SyntaxList|NotEmitted|CommaListExpression|SyntheticReferenceExpression)/,


        })
    }
}
