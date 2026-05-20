/*
  AddTodo
*/

import "./style.css";

export const AddTodo = (props) => {
  const { addInputValue, onChangeAddInputValue, handleAddTodo } = props;
  return (
    <>
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
    </>
  );
};
