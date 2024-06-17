export type Task = {
  id: string;
  user_id: string;
  title: string;
  date: string;
  status: "pending" | "done" | "hold" | "cancelled";
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
