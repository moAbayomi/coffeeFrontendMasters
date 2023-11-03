export class OrderPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("order-form-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    const styles = document.createElement("style");
    styles.textContent = `ul {
    list-style: none;
    padding: 0;
}

h3 {
    color: var(--color4);
    font-weight: normal;
    padding-top: 15px;
    font-size: 17px;
}

button {
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

h2 {
    text-align: center;
    color: var(--secondaryColor);
    font-weight: normal;
    font-size: 20px;
    flex: 5;
    margin: 8px;
    text-align: center;
}

.empty {
    text-align: center;
    color: var(--color3)
}

ul {
    background-color: var(--color6);
    padding: 16px;
    margin: 12px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px silver;
    
}

li {
    display: flex;
    border-bottom: 1px solid var(--color5);
}

li:last-child {
    border: 0;
}

.qty {
    color: var(--color4);
    flex: 1;
}

.name {
    font-weight: bold;
    color: var(--secondaryColor);
    flex: 5;
}

.total {
    font-weight: bold;
    color: var(--color3);
    flex: 5;
    text-align: right;
    margin-right: 16px;
    font-size: 17px;

}

.toolbar span {
    display: block;
    padding: 0 8px;
}

.price, .price-total {
    color: var(--secondaryColor);
    flex: 1;

    text-align: right;
}

.price-total {
    font-weight: bold;
    font-size: 17px;
    flex: 2;
    text-align: left;
}


a {
    text-decoration: none;
}

label, input {
    display: block;
    width: 90%;
    margin-left: 5%;
}

input {
    background-color: var(--color6);
    margin-bottom: 6px;
    font-size: large;
    border: 1px solid var(--color3);
    border-radius: 15px;
}`;
    this.root.appendChild(styles);
  }
}

customElements.define("order-page", OrderPage);
