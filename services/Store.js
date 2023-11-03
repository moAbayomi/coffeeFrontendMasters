import API from "./API.js";

const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, key, value) {
    target[key] = value;
    if (key == "menu") {
      window.dispatchEvent(new Event("appmenuchange"));
    }
    if (key == "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
});

export default proxiedStore;
