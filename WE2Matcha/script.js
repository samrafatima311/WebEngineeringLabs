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
      menuContainer.innerHTML = "<p>No matcha found 🍃</p>";
      return;
    }

    items.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("menu-item");
      div.innerHTML = `
        <img src="${item.image || 'https://cdn-icons-png.flaticon.com/512/739/739142.png'}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p><strong>Price:</strong> ${item.price}</p>
          <p>${item.description}</p>
        </div>
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
    const image = document.getElementById("newImage").value.trim();

    if (!name || !price || !description) return;

    const newItem = { name, price, description, image };
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

// 🍵 Matcha Ambience Player Script
let player;
let isPlaying = false;

// Load YouTube IFrame Player API dynamically
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// Called when API is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '5qap5aO4i9A', // 🌿 Example: lo-fi cafe beats
    playerVars: {
      start: 60,   // Start time (in seconds)
      end: 180,    // End time (in seconds)
      autoplay: 0,
      loop: 0,
      controls: 0,
      showinfo: 0,
      rel: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Set default volume when player is ready
function onPlayerReady() {
  player.setVolume(10); // 10 = soft volume
}

// Stop player at the end time
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    const stopCheck = setInterval(() => {
      if (player.getCurrentTime() >= 180) { // match end time
        player.pauseVideo();
        clearInterval(stopCheck);
      }
    }, 500);
  }
}

// Button toggle logic
document.getElementById("audioToggle").addEventListener("click", () => {
  if (!isPlaying) {
    player.playVideo();
    player.unMute();
    player.setVolume(10);
    document.getElementById("audioToggle").textContent = "🔇 Pause Ambience";
    isPlaying = true;
  } else {
    player.pauseVideo();
    document.getElementById("audioToggle").textContent = "🎵 Play Ambience";
    isPlaying = false;
  }
});


