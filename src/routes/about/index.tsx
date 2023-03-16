import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";

// index!.tsx - to exclued layout.tsx
// index@test.tsx - to use layout-test.tsx

export default component$(() => {
  //   applies to global style
  //   useStyles$(AboutStyles);
  useStylesScoped$(AboutStyles);
  return (
    <article>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        cumque consectetur nemo. Ut nemo praesentium, reprehenderit nihil labore
        maxime voluptas dolorum commodi. Placeat sit quia voluptatum dolorem
        dolores nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        cumque consectetur nemo. Ut nemo praesentium, reprehenderit nihil labore
        maxime voluptas dolorum commodi. Placeat sit quia voluptatum dolorem
        dolores nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore
        cumque consectetur nemo. Ut nemo praesentium, reprehenderit nihil labore
        maxime voluptas dolorum commodi. Placeat sit quia voluptatum dolorem
        dolores nisi.
      </p>
    </article>
  );
});
