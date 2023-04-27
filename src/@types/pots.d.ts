export type PostTypesResult = {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
};

export type PostTypes = {
  count: number;
  next: string;
  previous: string;
  results: [PostTypesResult];
};
