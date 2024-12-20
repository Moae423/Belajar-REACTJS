import Todo from "./Todo.jsx";

export default function TodoList() {
  // collection Of Component
  const data = [
    {
      id: 0,
      text: "Belajar React",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Belajar Vue",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Belajar ResfulAPI",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Belajar RUST",
      isCompleted: false,
    },
  ];
  // const todos = data.map((todo) => <Todo key={todo.id} {...todo} />);
  return (
    <>
      <h2>TodoList Today</h2>
      <ul>
        {/* PROPS */}
        {data.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
}
