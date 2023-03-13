import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h2>Okie Dokie</h2>
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
