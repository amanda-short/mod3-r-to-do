import { checkError, client } from './client.js';

export async function getTodo() {
  const response = await client.from('todo').select();

  return checkError(response);
}

export async function createTodo(item) {
  const response = await client.from('todo').insert([{ item }]).single();

  return checkError(response);
}

export async function toggleTodo({ id, complete }) {
  const response = await client.from('todo').update({ complete: !complete }).match({ id }).single();

  return checkError(response);
}
