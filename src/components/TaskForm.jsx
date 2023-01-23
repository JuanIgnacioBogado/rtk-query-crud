import { useCreateTaskMutation } from '../api/apiSlice';

export const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const description = e.target.description.value.trim();
    const done = e.target.done.checked;

    if ([name, description].includes('')) return;

    createTask({ name, description, done });
    e.target.reset();
    e.target.name.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" autoFocus />
      <input type="text" name="description" />
      <input type="checkbox" name="done" />
      <button type="submit">Add Task</button>
    </form>
  );
};
