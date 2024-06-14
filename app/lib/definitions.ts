export type Task = {
  id: string;
  user_id: string;
  title: string;
  date: string;
  status: "pending" | "done" | "hold" | "cancelled";
};
