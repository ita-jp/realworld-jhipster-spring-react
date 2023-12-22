import dayjs from 'dayjs';

export interface IArticle {
  id?: number;
  slug?: string;
  title?: string | null;
  description?: string | null;
  body?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IArticle> = {};
