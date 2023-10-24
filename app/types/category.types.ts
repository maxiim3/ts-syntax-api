import {TokenType} from "@/app/types/token.types";

export type CategoryIdentifier = RegExp
export type CategoryType = {
    description: string;
    tokens: TokenType[];
    length: number;
    identifier: CategoryIdentifier;
};
export type CategoryProps = Omit<CategoryType, 'length'>
