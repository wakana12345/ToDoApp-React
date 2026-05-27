/*
  AddTodo
*/

import "./style.css";

// InputForm Compornent
import { InputForm } from "../Common/InputForm";

export const AddTodo = (props) => {
  const { addInputValue, onChangeAddInputValue, handleAddTodo } = props;
  return (
    <>
      <h2 className="add-title">ADD TODO</h2>

      {/* addInputValue更新処理 */}
      {/* <input
        className="input"
        type="text"
        value={addInputValue}
        placeholder="New Todo"
        onChange={onChangeAddInputValue}
        onKeyDown={handleAddTodo}
      /> */}

      {/* InputFormを使用 */}
      <InputForm
        InputValue={addInputValue}
        handleChangeValue={onChangeAddInputValue}
        handleKeyDown={handleAddTodo}
        placeholder={"New Todo"}
      />
    </>
  );
};
