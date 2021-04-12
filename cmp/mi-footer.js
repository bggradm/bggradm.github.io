class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h1>
        &copy; 2021
        Gutierrez Vargas Kevin Brayan
      </h1>`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
