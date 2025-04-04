# Task Management Single Page Application

## Overview

This is a single page task manager application built with React, TypeScript, and Node.js. It allows users to request and manage tasks, marking them as complete and requesting new sets of tasks.

## Feature

- Fetch tasks from backend.
- Display tasks in a responsive card layout.
- Mark tasks as complete.
- Display completed tasks with SVG visualization.
- Request new set of tasks.
- Uses Context API for state management.
- Built with TypeScript for type safety.

## Application Components
- Task List Component
    - Displays a list of tasks fetched from the backend.
    - Shows the task list name as a header.
    - Each task has a button that allows the user to mark it as "Completed."

- No-Tasks Component
    - Displays a visual representation (SVG elements) of completed tasks.
    - This component is shown when all tasks have been completed.

## Technologies Used

- Front-end: React, TypeScript, Context API, MUI (Material UI)
- Back-end: Node.js, Express

## How to Run

1. Clone the repository: `git clone https://github.com/anniekuusinen/task-management.git`
2. Install dependencies:
   - Backend: `cd back-end && npm install`
   - Frontend: `cd task-manager && npm install`
3. Start the backend server:
   - `cd back-end`
   - `node index.js`
4. Start the frontend development server:
   - `cd task-manager`
   - `npm start`

## Additional Notes

* The backend server runs on port 3001 by default.
* The frontend development server runs on port 3000 by default.
* Make sure both the backend and frontend servers are running before interacting with the application.
