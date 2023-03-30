import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useGetBlogDetail = routeLoader$<BlogData>(
  async ({ params, redirect }) => {
    try {
      const res = await fetch("http://localhost:3000/blogs/" + params.id);
      if (!res.ok) {
        console.log("redirecting user");
        throw redirect(302, "/");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("error----->", error);
    }
  }
);

export default component$(() => {
  const blog = useGetBlogDetail();
  if (!blog.value) return null;
  return (
    <div class="blog">
      <div>
        <h2>{blog.value.title}</h2>
        <p>{blog.value.content}</p>
      </div>
    </div>
  );
});
