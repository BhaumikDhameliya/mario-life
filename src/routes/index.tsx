import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const name = useSignal("mario");
  const person = useStore({ name: "peach", age: 30 });
  const blogs = useStore([
    { id: 1, title: "my first blog" },
    { id: 2, title: "my second blog" },
    { id: 3, title: "my third blog" },
  ]);
  return (
    <div>
      <h2>Okie Dokie</h2>
      <p>Hello, {name.value}</p>
      <p>
        Hello, {person.name} - {person.age}
      </p>
      <button
        onClick$={() => {
          name.value = "luigi";
        }}
      >
        click me
      </button>
      <button
        onClick$={() => {
          person.name = "bowser";
        }}
      >
        click me again
      </button>

      {blogs.map((blog) => {
        return <div key={blog.id}>{blog.title}</div>;
      })}

      <button onClick$={() => blogs.pop()}>remove a blog</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "a blog site about everthing mario",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "somestylesheet.com/styles.css",
    },
  ],
};
