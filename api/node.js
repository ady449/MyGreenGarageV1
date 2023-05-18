import fetch from "cross-fetch";
// const os = require("os");

// console.log(localhost);

// const localhost = os.networkInterfaces();
// console.log(localhost);

const localhost = "192.168.100.9";
async function fetchData() {
  const response = await fetch(`http://${localhost}:3000/getAll`);
  const data = await response.json();
  return data;
}
async function updateTemp(id, temp) {
  const tempdata = { temperature: temp };
  console.log(JSON.stringify(tempdata));
  fetch(`http://${localhost}:3000/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(tempdata),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

async function loginUser(un, ps) {
  const login = { username: un, password: ps };
  var result = false;
  fetch(`http://${localhost}:3000/login`, {
    method: "POST",
    body: JSON.stringify(login),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => (result = json));
  return result;
}
export { fetchData, updateTemp, loginUser };
