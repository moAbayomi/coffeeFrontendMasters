const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");

        Router.go(href);
      });

      window.addEventListener("popstate", (event) => {
        Router.go(event.state.route, false);
      });
    });

    Router.go(location.pathname);
  },
  go: (path, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({}, "", path);
    }

    let pageContent = document.querySelector("main");
    let pageEl = null;

    switch (path) {
      case "/": {
        pageEl = document.createElement("menu-page");
        break;
      }
      case "/order": {
        pageEl = document.createElement("order-page");
        break;
      }

      default: {
        if (path.startsWith("/product-")) {
          pageEl = document.createElement("details-page");
          pageEl.dataset.productId = path.substring(path.lastIndexOf("-") + 1);
        }
        break;
      }
    }
    if (pageEl) {
      pageContent.innerHTML = "";
      pageContent.appendChild(pageEl);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
