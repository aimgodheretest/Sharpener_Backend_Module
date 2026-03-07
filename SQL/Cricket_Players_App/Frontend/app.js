const BASE_URL = "http://localhost:3000/player";

let editPlayerId = null;

// ADD PLAYER
async function addPlayer() {
  const player = {
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    photoUrl: document.getElementById("photoUrl").value,
    birthplace: document.getElementById("birthplace").value,
    career: document.getElementById("career").value,
    matches: document.getElementById("matches").value,
    score: document.getElementById("score").value,
    fifties: document.getElementById("fifties").value,
    centuries: document.getElementById("centuries").value,
    wickets: document.getElementById("wickets").value,
    average: document.getElementById("average").value,
  };

  try {
    if (editPlayerId) {
      const res = await axios.put(`${BASE_URL}/update/${editPlayerId}`, player);

      alert("Player Updated Successfully");

      displayPlayer(res.data); // show updated player immediately

      editPlayerId = null;

      document.getElementById("submitBtn").innerText = "Submit";
    } else {
      await axios.post(`${BASE_URL}/add`, player);

      alert("Player Added Successfully");
    }

    clearForm();
  } catch (error) {
    console.error(error);
  }
}

// SEARCH PLAYER
async function searchPlayer() {
  const name = document.getElementById("searchName").value;

  if (!name) {
    alert("Enter player name");
    return;
  }
  localStorage.setItem("lastPlayer", name);
  try {
    const res = await axios.get(`${BASE_URL}/search/${name}`);

    const player = res.data;

    if (!player) {
      document.getElementById("playerProfile").innerHTML =
        "<h2>Player Not Found</h2>";

      return;
    }

    displayPlayer(player);
  } catch (error) {
    console.error(error);

    document.getElementById("playerProfile").innerHTML =
      "<h2>Player Not Found</h2>";
  }
}

// DISPLAY PLAYER
function displayPlayer(player) {
  const profile = document.getElementById("playerProfile");

  profile.innerHTML = `

  <div class="player-card">

    <img src="${player.photoUrl}">

    <div class="player-name">${player.name}</div>
    <div class="player-dob">${player.dob}</div>

    <h3>Personal Information</h3>

    <p><strong>Matches:</strong> ${player.matches}</p>
    <p><strong>Runs:</strong> ${player.score}</p>
    <p><strong>Fifties:</strong> ${player.fifties}</p>
    <p><strong>Centuries:</strong> ${player.centuries}</p>
    <p><strong>Wickets:</strong> ${player.wickets}</p>
    <p><strong>Average:</strong> ${player.average}</p>

    <div class="action-buttons">

      <button onclick='editPlayer(${JSON.stringify(player)})'>
          Edit Player
      </button>

      <button class="delete-btn" onclick="deletePlayer(${player.id})">
      Delete Player
      </button>

    </div>

    <h3>Career</h3>

    <p>${player.career}</p>

  </div>

  `;
}

function editPlayer(player) {
  document.getElementById("name").value = player.name;
  document.getElementById("dob").value = player.dob;
  document.getElementById("photoUrl").value = player.photoUrl;
  document.getElementById("birthplace").value = player.birthplace;
  document.getElementById("career").value = player.career;
  document.getElementById("matches").value = player.matches;
  document.getElementById("score").value = player.score;
  document.getElementById("fifties").value = player.fifties;
  document.getElementById("centuries").value = player.centuries;
  document.getElementById("wickets").value = player.wickets;
  document.getElementById("average").value = player.average;

  editPlayerId = player.id;

  document.getElementById("submitBtn").innerText = "Update Player";
}

// DELETE PLAYER
async function deletePlayer(id) {
  const confirmDelete = confirm("Are you sure you want to delete this player?");

  if (!confirmDelete) return;

  try {
    await axios.delete(`${BASE_URL}/delete/${id}`);

    document.getElementById("playerProfile").innerHTML = "";

    alert("Player Deleted Successfully");
  } catch (error) {
    console.error(error);
  }
}

// CLEAR FORM
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("photoUrl").value = "";
  document.getElementById("birthplace").value = "";
  document.getElementById("career").value = "";
  document.getElementById("matches").value = "";
  document.getElementById("score").value = "";
  document.getElementById("fifties").value = "";
  document.getElementById("centuries").value = "";
  document.getElementById("wickets").value = "";
  document.getElementById("average").value = "";
}

window.onload = async function () {
  const lastPlayer = localStorage.getItem("lastPlayer");

  if (lastPlayer) {
    try {
      const res = await axios.get(`${BASE_URL}/search/${lastPlayer}`);
      displayPlayer(res.data);
    } catch (error) {
      console.error(error);
    }
  }
};
