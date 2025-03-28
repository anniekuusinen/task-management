const path = require('path');
const fs = require('fs');
const tasks = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/tasks.json'), 'utf8')
);

const getTasks = (req, res, next) => {
    try {
        res.json({
            taskListName: tasks.taskListName,
            tasks: tasks.tasks
        });
    } catch (err) {
        next(err)
    }
};

module.exports = { getTasks };