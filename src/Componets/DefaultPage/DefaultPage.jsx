import tasks from "../../Images/tasks.jpg";

export const DefaultPage = () => {
  return (
    <div className="home">
      <img src={tasks} alt="tasks" width={250} />
      <h2>What do you want to do today</h2>
      <h3>Tap + to add your tasks</h3>
    </div>
  );
};
