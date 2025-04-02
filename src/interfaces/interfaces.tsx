export interface Task {
  id: string;
  name: string;
  type: "rectangle" | "circle" | "polygon";
}

export interface TaskInfo {
  taskListName: string;
  tasks: Task[];
}

export interface TaskContextType {
  error: Error | null;
  loading: boolean;
  incompletedTasks: TaskInfo | null;
  completedTasks: Task[];
  fetchTasks: () => void;
  markTaskAsCompleted: (taskId: string) => void;
}
