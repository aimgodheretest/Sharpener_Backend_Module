const form = document.getElementById("form");
const userList = document.getElementById("users");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  await axios.post("http://localhost:3000/users/add", user);

  getUsers();
});

async function getUsers() {
  const res = await axios.get("http://localhost:3000/users");

  userList.innerHTML = "";

  res.data.forEach((user) => {
    const li = document.createElement("li");

    li.innerHTML = `
    Name:${user.name} 
    <br> 
    Email:${user.email} 
    <br> 
    Phone:${user.phone}
    <button onclick="deleteUser(${user.id})">Delete</button>
    `;

    userList.appendChild(li);
  });
}

async function deleteUser(id) {
  await axios.delete(`http://localhost:3000/users/delete/${id}`);

  getUsers();
}

window.onload = getUsers;
