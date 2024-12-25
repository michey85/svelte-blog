import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) error(res.status, res.statusText);

  const posts = await res.json();

  return {
    posts
  };
}
