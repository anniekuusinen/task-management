import React, { FunctionComponent, useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TaskContext } from "./context/TaskContext";
import TaskList from "./components/TasksList";
import NoTasks from "./components/NoTasks";

const App: FunctionComponent = () => {
  const [showTasks, setShowTasks] = useState(false);
  const taskContext = useContext(TaskContext);
  if (!taskContext) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          Unable to load tasks.
        </Typography>
      </Box>
    );
  }

  const { incompletedTasks, completedTasks, fetchTasks, error, loading } =
    taskContext;

  const requestTasks = () => {
    setShowTasks(true);
    fetchTasks();
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Loading tasks...
        </Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          {error?.message || "An error occurred while fetching tasks."}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {!showTasks ? (
        <Button variant="contained" color="primary" onClick={requestTasks}>
          Request Tasks
        </Button>
      ) : incompletedTasks && incompletedTasks.tasks.length ? (
        // Show the task list if tasks are available
        <>
          <TaskList
            taskListName={incompletedTasks.taskListName}
            taskList={incompletedTasks}
          />
          <Typography variant="h6" align="center" gutterBottom>
            {incompletedTasks.tasks.length} tasks remaining
          </Typography>
        </>
      ) : (
        // Show "No Tasks" component if no tasks are available
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            All tasks completed.
          </Typography>
          <NoTasks completedTasks={completedTasks} />
        </Box>
      )}
    </Box>
  );
};

export default App;
