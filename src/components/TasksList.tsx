import React, { FunctionComponent, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { TaskInfo } from "../interfaces/interfaces";

interface TaskListProps {
  taskList: TaskInfo;
  taskListName: string;
}
const TaskList: FunctionComponent<TaskListProps> = ({
  taskList,
  taskListName,
}) => {
  const { markTaskAsCompleted } = useContext(TaskContext)!;

  return (
    <Box>
      <Typography variant="h2" align="center" gutterBottom>
        {taskListName}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        {taskList.tasks.map((task) => (
          <Grid key={task.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {task.name}
                </Typography>
                <Typography variant="h6" component="div" color="text.secondary">
                  Type: {task.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => markTaskAsCompleted(task.id)}
                >
                  Mark as completed
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default TaskList;
