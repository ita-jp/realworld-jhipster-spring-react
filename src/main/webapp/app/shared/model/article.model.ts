import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { ITag } from 'app/shared/model/tag.model';

export interface IArticle {
  id?: number;
  slug?: string;
  title?: string | null;
  description?: string | null;
  body?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  user?: IUser | null;
  tags?: ITag[] | null;
}

export const defaultValue: Readonly<IArticle> = {};
