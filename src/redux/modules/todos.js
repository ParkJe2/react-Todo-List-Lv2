import uuid from "react-uuid";
const New_Todo = "New_Todo";
const Get_Todo_By_Id = "Get_Todo_By_Id";
const Delete_Todo = "Delete_Todo";
const Toggle_Status_Todo = "Toggle_Status_Todo";

// Todo 생성 함수
export const newTodo = (payload) => {
  return {
    type: New_Todo,
    payload,
  };
};

// Todo 삭제 함수
export const deleteTodo = (payload) => {
  return {
    type: Delete_Todo,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: Toggle_Status_Todo,
    payload,
  };
};

// Todo 상태 변경 함수
export const getTodoById = (payload) => {
  return {
    type: Get_Todo_By_Id,
    payload,
  };
};

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  // 로컬스토리지에서 todo 가져오기 / 없으면 빈 배열 사용
  todo: {
    id: uuid(),
    title: "",
    contents: "",
    isDone: false,
  },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case New_Todo:
      const newTodo = action.payload;
      const updatedTodos = [...state.todos, newTodo]; // 새 todo를 기존 todo에 추가
      saveToLocalStorage(updatedTodos); // 로컬스토리지에 저장
      return {
        ...state,
        todos: [...state.todos, action.payload], // 기존+새todo 반환
      };

    case Delete_Todo:
      const deletedTodoId = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== deletedTodoId);
      saveToLocalStorage(filteredTodos); // 로컬 스토리지에 저장
      return {
        ...state,
        todos: filteredTodos,
      };

    case Toggle_Status_Todo:
      const toggledTodoId = action.payload;
      const updatedTodosToggle = state.todos.map((todo) => {
        if (todo.id === toggledTodoId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo; // 변경이 없는 경우 기존 Todo 그대로 반환
        }
      });
      saveToLocalStorage(updatedTodosToggle); // 변경된 todo 로컬스토리지에 저장
      return {
        ...state,
        todos: updatedTodosToggle, //  변경된 todo 상태 반환
      };

    case Get_Todo_By_Id:
      return {
        ...state,
        todo: state.todos.find((t) => {
          return t.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

const saveToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
  // 매개변수로 받은 todos 배열을 문자열로 변환한 뒤에 'todos' 키로 로컬스토리지에 저장
};

export default todos;
