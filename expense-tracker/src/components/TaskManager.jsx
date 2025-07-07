import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from './ui/Button';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = { id: Date.now(), text: newTask.trim(), completed: false };
    setTasks(prev => [...prev, task]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center text-blue-600">Task Manager</h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 px-4 py-2 border rounded"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 justify-center">
        {['All', 'Active', 'Completed'].map(option => (
          <Button
            key={option}
            variant={filter === option ? 'primary' : 'secondary'}
            onClick={() => setFilter(option)}
          >
            {option}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center bg-white p-2 rounded shadow">
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
