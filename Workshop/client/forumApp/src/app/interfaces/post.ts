import { IUser } from "./users";

export interface IPost {
  likes: string[];
  _id: string;
  text: string;
  userId: IUser;
  themeId: {
    subscribers: string[];
    posts: string[];
    _id: string;
    themeName: string;
    userId: string;
    created_ad: string;
    updatedAt: string;
    __v: number;
  };
  created_at: string;
  updatedAt: string;
  __v: number;
}
