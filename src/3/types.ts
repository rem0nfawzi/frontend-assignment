export type todoStatusType = "pending" | "done";

export type todoType = {
  id: string;
  title: string;
  status: todoStatusType;
};
