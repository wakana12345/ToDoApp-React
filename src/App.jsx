import "./App.css";

/*compornents*/
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { InputForm } from "./components/Common/InputForm";

/* hooks */
import { useApp } from "./hooks/useApp";

export const App = () => {
  /* hooks */
  const [state, action] = useApp();

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
      </section>

      {/* Input Form領域 */}
      <section className="common-area">
        <InputForm
          handleChangeValue={action.handleSearchTodo}
          value={state.searchKeyword}
          placeholder={"Search Keyword"}
        />
      </section>

      {/* Todo検索 */}
      <section className="common-area"></section>

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
