import Swal from "sweetalert2";

const getItems = () => {
  const items = localStorage.getItem("selectApps");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const addItem = (id) => {
  const items = getItems();
  if (items.includes(id)) {
    return;
  } else {
    items.push(id);
    const newItem = JSON.stringify(items);
    Swal.fire({
      title: "Installed",
      icon: "success",
      draggable: true,
    });
    localStorage.setItem("selectApps", newItem);

  }
};

const removeItem = (id) => {
  const allItems = getItems();
  const items = allItems.filter((item) => item !== id);
  const newItems = JSON.stringify(items);
    Swal.fire({
      title: "Uninstalled",
      icon: "error",
      draggable: true,
    });

  localStorage.setItem("selectApps", newItems);

};

export { getItems, addItem, removeItem };
