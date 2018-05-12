export interface IUser {
  firstName: string;
  lastName: string;
  readonly fullName: string;
  username: string;
  avatarUrl: string;
}

export interface INote {
  imageUrl: string | null;
  text: string;
  time: Date;
  author: IUser;
  children: null | INote[];
}
