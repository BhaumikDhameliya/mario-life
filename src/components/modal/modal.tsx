import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";

interface ModalProps {
  size: "sm" | "lg";
  frosted?: boolean;
}

export default component$((props: ModalProps) => {
  useStylesScoped$(ModalStyles);
  debugger;
  return (
    <div class={`modal ${props.size} ${props.frosted && "frosted"}`}>
      <div class="modal-content">
        <div class="close">close</div>
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});
