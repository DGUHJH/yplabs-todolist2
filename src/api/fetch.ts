import {hAxios} from './method';

export type GetTodoListResponseType = {
  data: {
    id: number;
    content: string;
  }[];
};

export const getTodoList = async () => {
  return hAxios(`todo/`, 'get');
};

type DeleteTodoItemRequestType = {
  id: number;
};

type DeleteTodoItemResponseType = any;

export const deleteTodoItem = async (data: DeleteTodoItemRequestType) => {
  return hAxios(`todo/${data.id}/`, 'delete');
};

type CreateTodoItemRequestType = {
  content: string;
};

type CreateTodoItemResponseType = {
  data: {
    id: number;
    content: string;
  };
};

export const createTodoItem = async (data: CreateTodoItemRequestType) => {
  return hAxios(`todo/`, 'post', data);
};

type UpdateTodoItemRequestType = {
  id: number;
  content: string;
};

type UpdateTodoItemResponseType = any;

export const updateTodoItem = async (data: UpdateTodoItemRequestType) => {
  return hAxios(`todo/${data.id}/`, 'patch', {
    content: data.content,
  });
};
