import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const clickAddBtnHandler = (e) => {
    e.preventDefault();
    // 불필요한 새로고침 동작 막기

    if (!title) return alert("제목을 입력해주세요");
    if (!content) return alert("내용을 입력해주세요");
    // 빈 값 검사

    const newTodos = {
      id: uuidv4(),
      title,
      content,
    };
    // 좌, 우 키값이 동일할 경우 생략 가능

    setTodos([...todos, newTodos]);
    setTitle("");
    setContent("");
    // 기존 배열(todos)을 풀고 newTodos를 더해 새로운 배열로 변환
    // 제목, 내용 인풋값 초기화
  };

  return (
    <form className="add-form">
      <div className="group">
        <input value={title} placeholder="제목을 입력해주세요" onChange={titleChangeHandler} />
        <input value={content} className="input-content" placeholder="내용을 입력해주세요" onChange={contentChangeHandler} />
        <button className="add-btn" onClick={clickAddBtnHandler}>
          추가하기
        </button>
      </div>
    </form>
  );
};

export default Form;
