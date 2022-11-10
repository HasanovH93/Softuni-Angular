import { IUser } from "./users";

export interface ITheme {
    themeName: string;
    subscribers: string[];
    userId: IUser;
    posts: string[];
    created_at: string;
}