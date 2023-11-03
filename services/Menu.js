import API from "./API.js";

export async function loadData() {
  const data = await API.fetchData();
  app.store.menu = data;
}
