import "./App.css";
import { useState } from "react";

// ToDoの初期値
const initTodo = [
  {
    id: 1,
    title: "Todo1",
  },
  {
    id: 2,
    title: "Todo2",
  },
];

export const App = () => {
  /* 状態管理変数の宣言 */
  //TodoList
  const [todoList, setTodoList] = useState(initTodo);
  console.log(todoList);

  // 入力時データ
  const [addInputValue, setAddInputValue] = useState("");

  //採番用ID
  const [uniqueId, setUniqueId] = useState(initTodo.length);

  /* イベント発生時に実行される関数 */
  //入力データの更新
  const onChangeAddInputValue = (event) => {
    setAddInputValue(event.target.value);
  };

  // add ToDo
  const handleAddTodo = (event) => {
    //エンターキーを押されてかつ、空文字じゃないとき
    if (event.key === "Enter" && addInputValue !== "") {
      const newUniqueId = uniqueId + 1;
      const newTodoList = [
        ...todoList,
        {
          id: newUniqueId,
          title: addInputValue,
        },
      ];
      setTodoList(newTodoList);
      setUniqueId(newUniqueId);
      setAddInputValue("");
    }
  };

  //Delete ToDo
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`${targetTitle}を削除しますか？`)) {
      const newTodoList = todoList.filter((todo) => {
        return todo.id !== targetId;
      });
      setTodoList(newTodoList);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>

      {/* Todo追加領域 */}
      <section className="common-area">
        <h2 className="add-title">ADD TODO</h2>

        {/* addInputValue更新処理 */}
        <input
          className="input"
          type="text"
          value={addInputValue}
          placeholder="New Todo"
          onChange={onChangeAddInputValue}
          onKeyDown={handleAddTodo}
        />
      </section>

      {/* Todo一覧表示 */}
      <section className="common-area">
        <ul className="list">
          {todoList.map((todo) => {
            return (
              <li className="todo" key={todo.id}>
                <span className="task">{todo.title}</span>
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => handleDeleteTodo(todo.id, todo.title)}
                ></i>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
