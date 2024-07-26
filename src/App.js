import "./App.css";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: todos.length + 1,
      title: e.target.todoValue.value,
      isCompleted: false,
    };

    setTodos([...todos, data]);

    e.target.reset();
  };

  console.log(todos);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-[600px] flex items-center justify-center gap-4 m-8 mx-auto"
      >
        <input
          className="w-[75%] py-3 pl-2 rounded-md border-[2px] border-blue-600"
          required
          name="todoValue"
          type="text"
          placeholder="add your todo "
        />
        <button className="bg-blue-500 w-[25%] text-white font-bold  px-6 py-2 rounded-lg p-3">
          Add
        </button>
      </form>
      <div className="flex items-center justify-center gap-10 ">
        <button className="bg-blue-500 p-2 rounted-2 text-white ">All (0)</button>
        <button className="bg-blue-500 p-2 rounted-2 text-white ">Complated (0)</button>
        <button className="bg-blue-500 p-2 rounted-2 text-white ">UnComplated (0)</button>
      </div>
      <ul className="w-[600px] mx-auto mt-5 flex flex-col gap-3">
        {todos.map((item) => (
          <li className="bg-blue-300 p-3 rounded-lg ">
            <div>
            <span> {item.id} </span>
            <strong>{item.title}</strong>
            
            </div>
            </li>
        ))}
      </ul>
    </>
  );
}

export default App;
