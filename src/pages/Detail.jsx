import React, { useEffect } from "react";
import { getTodoById } from "../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Detail = () => {
  const dispatch = useDispatch();
  // 액션 디스패치 함수를 가져오기
  const todo = useSelector((state) => state.todos.todo);
  // 선택된 Todo 가져오기

  const { id } = useParams();
  // URL에서 ID 값 가져오기
  const navigate = useNavigate();
  // 페이지 이동 함수 가져오기

  useEffect(() => {
    dispatch(getTodoById(id));
    // 페이지가 로드될 때 getTodoById 액션을 디스패치해서 선택된 Todo 가져오기
  }, [dispatch, id]);

  return (
    <Layout>
      <Header />
      <StDetailList>선택된 List의 상세 페이지 입니다.</StDetailList>
      <StDetailContainer>
        <StDetailWrap>
          <div>
            <StDetailHeader>
              <StDetailId>ID : {todo.id}</StDetailId>
              <StBackBtn
                onClick={() => {
                  navigate("/");
                }}
              >
                이전으로 🏠
              </StBackBtn>
            </StDetailHeader>
            <StDetailTitle>제목 : {todo.title}</StDetailTitle>
            <StDetailContents>내용 : {todo.contents}</StDetailContents>
          </div>
        </StDetailWrap>
      </StDetailContainer>
    </Layout>
  );
};

export default Detail;

const StDetailList = styled.div`
  width: 100%;
  height: 130px;

  font-size: 20px;

  padding-left: 2rem;
  border-radius: 10px;
  margin-bottom: 1.875rem;

  background-color: #e8e2e2;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 0.625rem;
  justify-content: center;
  word-break: break-all;
`;

const StDetailWrap = styled.div`
  width: 600px;
  height: 330px;
  border: 3px solid #4f4557;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 2.8rem;
  word-break: break-all;
`;

const StDetailHeader = styled.header`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 1.5rem;
  align-items: center;
`;

const StDetailId = styled.div`
  font-size: 21px;
  color: #4f4557;
  padding: 11.25rem 0 3.125rem 0.375rem;
`;

const StBackBtn = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 0.9375rem;
  /* border: 1px solid #f5f5f5; */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 22px;
  color: #4f4557;

  background-color: transparent;
`;

const StDetailTitle = styled.h2`
  padding: 5.625rem 0 1.875rem 1.875rem;
  font-size: 22px;
  color: #4f4557;
`;

const StDetailContents = styled.div`
  padding-left: 1.875rem;
  font-size: 17px;
  color: #4f4557;
`;
