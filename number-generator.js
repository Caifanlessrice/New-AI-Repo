class NumberGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
        }
        #number-display {
          font-size: 5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        button {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
      </style>
      <div id="number-display">0000</div>
      <button>Generate</button>
    `;

    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.generateNumber();
    });
  }

  generateNumber() {
    const number = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    this.shadowRoot.getElementById("number-display").textContent = number;
  }
}

customElements.define("number-generator", NumberGenerator);
