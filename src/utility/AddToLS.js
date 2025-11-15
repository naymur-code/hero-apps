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
    localStorage.setItem("selectApps", newItem);
    Swal.fire({
      title: "Install",
      icon: "success",
      draggable: true,
    });
  }
};

const removeItem = (id) => {
  const allItems = getItems();
  const items = allItems.filter((item) => item !== id);
  const newItems = JSON.stringify(items);
  localStorage.setItem("selectApps", newItems);

  console.log(id, newItems);
};

export { getItems, addItem, removeItem };
