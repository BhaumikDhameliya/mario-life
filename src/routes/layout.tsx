import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "../components/header/header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="container">
          <Slot />
        </section>
      </main>
      <footer>
        <p>Copyright {new Date().getFullYear()} Mario Life</p>
      </footer>
    </>
  );
});
