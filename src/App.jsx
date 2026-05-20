import "./App.css";

/*compornents*/
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

/* hooks */
import { useApp } from "./hooks/useApp";

export const App = () => {
  /* hooks */
  const [state, action] = useApp();
  // const {
  //   addInputValue,
  //   onChangeAddInputValue,
  //   handleAddTodo,
  //   todoList,
  //   handleDeleteTodo,
  // } = useApp();

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>

      {/* Todo追加領域 */}
      <section className="common-area">
        <AddTodo
          addInputValue={state.addInputValue}
          onChangeAddInputValue={action.onChangeAddInputValue}
          handleAddTodo={action.handleAddTodo}
        />
        {/* <AddTodo
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        /> */}
      </section>

      {/* Todo一覧表示 */}
      <section className="common-area">
        <TodoList
          todoList={state.todoList}
          handleDeleteTodo={action.handleDeleteTodo}
        />
      </section>
    </div>
  );
};
