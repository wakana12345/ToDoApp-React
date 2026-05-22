/*
use test
*/

import { renderHook, act } from "@testing-library/react";

/*hooks*/
import { useApp } from "./useApp";

/* constants */
// import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

describe("【Hooksテスト】", () => {
  describe("【関数テスト】onChangeAddInputValue", () => {
    test("正常系 addInputValueが更新できる", () => {
      // 予測値
      const expectedValue = "テスト";
      // ダミー引数
      const eventObject = {
        target: {
          value: expectedValue,
        },
      };
      // hooksを呼び出す
      const { result } = renderHook(() => useApp());

      /*テスト確認*/
      // addInputValueが空文字であること
      expect(result.current[0].addInputValue).toBe("");

      //hooks関数の実行
      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe(expectedValue);
    });
  });
});
