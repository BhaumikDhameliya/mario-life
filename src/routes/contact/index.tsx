import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(ContactStyles);
  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        cumque consectetur nemo. Ut nemo praesentium, reprehenderit nihil labore
        maxime voluptas dolorum commodi. Placeat sit quia voluptatum dolorem
        dolores nisi.
      </p>
    </article>
  );
});
