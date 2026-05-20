import "./App.css";
import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./constants/data";

/*compornents*/
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export const App = () => {
  /* 状態管理変数の宣言 */
  //TodoList
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);

  // 入力時データ
  const [addInputValue, setAddInputValue] = useState("");

  //採番用ID
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

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
        <AddTodo
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>

      {/* Todo一覧表示 */}
      <section className="common-area">
        <TodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo} />
      </section>
    </div>
  );
};
