import React from "react";

const TodoList = ({ item, todos, setTodos, doneTodos, setDoneTodo, isDone }) => {
  // '삭제' 버튼 클릭 이벤트
  const clickDelBtnHandler = (id) => {
    const newWorkingTodos = todos.filter((todo) => todo.id !== id);
    const newDoneTodos = doneTodos.filter((item) => item.id !== id);
    setTodos(newWorkingTodos);
    setDoneTodo(newDoneTodos);
  };

  // '완료' 버튼 클릭 이벤트
  const clickDoneBtnHandler = (id) => {
    const newDoneTodos = todos.find((item) => item.id === id);
    setDoneTodo([...doneTodos, newDoneTodos]);
    setTodos(todos.filter((item) => item.id !== id));
  };

  // '취소' 버튼 클릭 이벤트
  const clickCancelBtnHandler = (id) => {
    const canceledItem = doneTodos.find((item) => item.id === id);
    const newDoneTodos = doneTodos.filter((item) => item.id !== id);
    setDoneTodo(newDoneTodos);
    setTodos([...todos, canceledItem]);
  };

  return (
    <div className="todo-container" key={item.id}>
      <h2 className="todo-title">{item.title}</h2>
      <div className="todo-content">{item.content}</div>
      <div className="btns">
        <button className="del-btn" onClick={() => clickDelBtnHandler(item.id)}>
          삭제하기
        </button>
        {isDone ? (
          <button className="done-btn" onClick={() => clickCancelBtnHandler(item.id)}>
            취소
          </button>
        ) : (
          <button className="done-btn" onClick={() => clickDoneBtnHandler(item.id)}>
            완료
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
