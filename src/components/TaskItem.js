const TaskItem = ({ task }) => {
  const { id, name, active } = task;

  return (
    <>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{active}</h1>
    </>
  );
};

export default TaskItem;
