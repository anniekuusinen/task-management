export interface Task {
  id: string;
  name: string;
  type: "rectangle" | "circle" | "polygon";
}

export interface TaskInfo {
  taskListName: string;
  tasks: Task[];
}
