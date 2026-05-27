/*
  InputForm
*/

import "./style.css";

export const InputForm = (props) => {
  const { InputValue, handleChangeValue, handleKeyDown, placeholder } = props;
  return (
    <>
      {/* InputValue更新処理 */}
      <input
        className="input"
        type="text"
        value={InputValue}
        placeholder={placeholder}
        onChange={handleChangeValue}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
