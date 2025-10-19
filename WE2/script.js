document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menuItems");
  const searchBox = document.getElementById("searchBox");
  const addForm = document.getElementById("addForm");

  let menuItems = [];

  // Load items from localStorage and JSON
  async function loadMenu() {
    const localItems = JSON.parse(localStorage.getItem("menuItems")) || [];

    try {
      const response = await fetch("menu.json");
      const jsonItems = await response.json();
      menuItems = [...jsonItems, ...localItems];
    } catch (err) {
      console.error("Failed to load menu.json:", err);
      menuItems = [...localItems];
    }

    displayMenu(menuItems);
  }

  function displayMenu(items) {
    menuContainer.innerHTML = "";
    if (items.length === 0) {
      menuContainer.innerHTML = "<p>No items found 😢</p>";
      return;
    }

    items.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("menu-item");
      div.innerHTML = `
        <h3>☕ ${item.name}</h3>
        <p><strong>Price:</strong> ${item.price}</p>
        <p>${item.description}</p>
      `;
      menuContainer.appendChild(div);
    });
  }

  // Search filter
  searchBox.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredItems = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchText)
    );
    displayMenu(filteredItems);
  });

  // Handle new item submission
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("newName").value.trim();
    const price = document.getElementById("newPrice").value.trim();
    const description = document.getElementById("newDescription").value.trim();

    if (!name || !price || !description) return;

    const newItem = { name, price, description };
    menuItems.push(newItem);

    // Save to localStorage
    const savedItems = JSON.parse(localStorage.getItem("menuItems")) || [];
    savedItems.push(newItem);
    localStorage.setItem("menuItems", JSON.stringify(savedItems));

    displayMenu(menuItems);
    addForm.reset();
  });

  loadMenu();
});
