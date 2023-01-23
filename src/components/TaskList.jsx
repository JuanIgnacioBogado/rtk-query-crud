import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation
} from '../api/apiSlice';

import { TaskForm } from './TaskForm';

export const TaskList = () => {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const { data: tasks = [], isError, isLoading, error } = useGetTasksQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <TaskForm />

      <ul>
        {tasks?.map(task => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <input
              type="checkbox"
              name="done"
              id={task.id}
              defaultChecked={task.done}
              onChange={e => updateTask({ ...task, done: e.target.checked })}
            />
            <label htmlFor={task.id}>Done</label>
          </li>
        ))}
      </ul>
    </>
  );
};
