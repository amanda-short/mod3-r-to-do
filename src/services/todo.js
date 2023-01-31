import { checkError, client } from './client';

export async function getTodo() {
  const response = await client.from('todo_item').select();

  return checkError(response);
}

export async function createTodo(name) {
  const response = await client.from('todo_item').insert([{ name }]).single();

  return checkError(response);
}

export async function toggleTodo({ id, complete }) {
  const response = await client
    .from('todo_item')
    .update({ complete: !complete })
    .match({ id })
    .single();

  return checkError(response);
}
