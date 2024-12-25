import { error } from '@sveltejs/kit';

async function getPost(id: string, fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

	if (!response.ok) error(response.status);

	return response.json();
}

export async function load({ params, fetch }) {
	const { id } = params;

	return {
    post: getPost(id, fetch)
  };
}
