/*Todo*/
import "./style.css";

export const TodoList = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
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
  );
};
