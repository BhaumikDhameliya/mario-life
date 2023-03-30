import { component$ } from "@builder.io/qwik";
import { routeLoader$, Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/card/card";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

// export const onGet: RequestHandler<BlogData[]> = async () => {
//   console.log("fetching the data"); // always on the server

//   const res = await fetch("http://localhost:3000/blogs");
//   const data = await res.json();

//   return data;
// };

export const useGetBlogsData = routeLoader$<BlogData[]>(async () => {
  try {
    const res = await fetch("http://localhost:3000/blogs");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error----->", error);
  }
});

export default component$(() => {
  const blogs = useGetBlogsData();
  return (
    <div>
      <h1>Okie Dokie!</h1>

      <div class="blogs">
        {blogs &&
          blogs.value &&
          blogs.value.map((blog) => (
            <Card key={blog.id}>
              <h3 q:slot="title">{blog.title}</h3>
              <p q:slot="content">{blog.content.slice(0, 50)}...</p>

              <Link q:slot="footer" href={"/blog/" + blog.id}>
                <button>Read More</button>
              </Link>
            </Card>
          ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "a blog site about everything Super Mario related",
    },
  ],
};
