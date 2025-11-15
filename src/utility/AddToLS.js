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
    Swal.fire({
  icon: "error",
  title: "Install This App",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
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

export { getItems, addItem };
