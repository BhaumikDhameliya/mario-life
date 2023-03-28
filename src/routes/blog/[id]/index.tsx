import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const getBlogDetail = routeLoader$<BlogData>(async ({ params }) => {
  const res = await fetch("http://localhost:3000/blogs/" + params.id);
  const data = await res.json();
  return data;
});

export default component$(() => {
  const blog = getBlogDetail();
  return (
    <div class="blog">
      <div>
        <h2>{blog.value.title}</h2>
        <p>{blog.value.content}</p>
      </div>
    </div>
  );
});
