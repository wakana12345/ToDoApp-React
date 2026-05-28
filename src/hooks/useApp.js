import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useApp = () => {
  /* 状態管理変数の宣言 */
  //TodoList
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);

  // 入力時データ
  const [addInputValue, setAddInputValue] = useState("");

  //採番用ID
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  //検索キーワード変数
  const [searchKeyword, setSearchKeyword] = useState("");

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

  // 検索キーワードを更新
  const handleSearchTodo = (e) => {
    setSearchKeyword(e.target.value);
  };

  const showTodoList = todoList.filter((todo) => {
    const regexp = new RegExp("^" + searchKeyword, "i");
    return todo.title.match(regexp);
  });

  return [
    {
      todoList: showTodoList,
      addInputValue,
      searchKeyword,
    },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
      handleSearchTodo,
    },
  ];
};
