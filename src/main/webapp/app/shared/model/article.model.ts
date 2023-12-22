import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';

export interface IArticle {
  id?: number;
  slug?: string;
  title?: string | null;
  description?: string | null;
  body?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  user?: IUser | null;
}

export const defaultValue: Readonly<IArticle> = {};
