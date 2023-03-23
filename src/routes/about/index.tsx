import {
  component$,
  useSignal,
  // useStyles$,
  useStylesScoped$,
  $,
} from "@builder.io/qwik";
import Modal from "~/components/modal/modal";
import AboutStyles from "./about.css?inline";

// index!.tsx - to exclued layout.tsx
// index@test.tsx - to use layout-test.tsx

export default component$(() => {
  //   applies to global style
  //   useStyles$(AboutStyles);
  useStylesScoped$(AboutStyles);

  const modalVisible = useSignal(false);

  const closeModal = $(() => {
    modalVisible.value = false;
  });

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
      <button
        onClick$={() => {
          modalVisible.value = true;
        }}
      >
        Open Modal
      </button>
      {modalVisible.value && (
        <Modal size="lg" frosted={true} close={closeModal}>
          <div q:slot="content">
            <h2>Great News!!!</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
              quisquam?
            </p>
          </div>

          <div q:slot="footer">
            <button>submit</button>
          </div>
        </Modal>
      )}
    </article>
  );
});
