export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    this.root.appendChild(styles);
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
    background-color: var(--color5);
    border: 0;
    margin: 10px 3%;
    padding: 5px 0;
    border-radius: 40px;
    color: var(--color3);
    font-size: 16px;
    flex-grow: 1;
}

article section div {
    flex-grow: 2;
}

ul {
    background-color: var(--color6);
    margin: 4px 6px;
    padding: 0px 12px;
    border-radius: 10px;
    padding-bottom: 10px;
}

article { 
    background-color: white;
    margin-bottom: 16px;
    padding-bottom: 1px;
    border-radius: 5px;
}

article img {
    width: 100%;
}

article a {
    text-decoration: none;
    display: block;
}

article section {
    display: flex;
}




h4 {
    margin: 8px 0 0 12px;
    color: #333D29;
    font-size: 18px;
    font-weight: bold;
}

.price {
    margin: 0px 0 0px 12px;
    color: #B08968
}`;

    /*   async function loadCSS() {
    const request = await fetch("/components/MenuPage.css");
    const css = await request.text();
    console.log(css);
    styles.textContent = css;
  }

    loadCSS(); */
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appmenuchange", () => {
      console.log("connected");
      this.render();
    });
  }

  render() {
    console.log(app.store.menu);
    if (app.store.menu) {
      for (let category of app.store.menu) {
        let liCategory = document.createElement("li");
        liCategory.innerHTML = `<h3>${category.name}</h3>
            <ul class="category"></ul>`;
        this.root.querySelector("#menu").appendChild(liCategory);
      }
    } else {
      this.root.innerHTML = `<h3>Menu is loading...</h3>`;
    }
  }
}

customElements.define("menu-page", MenuPage);
