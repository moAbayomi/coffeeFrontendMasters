export class DetailsPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("details-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    const styles = document.createElement("style");
    styles.textContent = `button {
    display: block;
    background-color: var(--color5);
    border: 0;
    width: 80%;
    margin: 16px 10%;
    padding: 12px 0;
    border-radius: 40px;
    color: var(--color3);
    font-size: 16px;
}

header {
    display: flex;
    flex-direction: row;
}

header>a {
    display: block;
    flex: 1;
    text-decoration: none;
    color: var(--primaryColor);
    padding: 12px 0 12px 8px;
    text-align: center;
    font-size: 14px;
}

h2 {
    color: var(--secondaryColor);
    font-weight: normal;
    font-size: 20px;
    flex: 5;
    margin: 8px;
    text-align: center;
}

img {
    width: 96%;
    margin: 0 2%;
    margin-top: 12px;
}

.description {
    margin: 4px;
    padding: 0 12px;
    color: var(--primaryColor);
    font-size: 13px;
}

.price {
    color: var(--secondaryColor);
    padding: 0 24px;
}

`;
    this.root.appendChild(styles);
  }
}

customElements.define("details-page", DetailsPage);
