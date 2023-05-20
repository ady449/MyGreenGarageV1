import fetch from "cross-fetch";
require("dotenv").config();

const port = process.env.PORT || 3000;
const localhost = process.env.DB_HOST;

async function fetchData() {
  const response = await fetch(`http://${localhost}:${port}/getAll`);
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
  let result;
  var result2 = await fetch(`http://${localhost}:${port}/login`, {
    method: "POST",
    body: JSON.stringify(login),
    headers: { "Content-Type": "application/json" },
  });

  const response = await result2.json();
  //   console.log(response);
  return response;
}
export { fetchData, updateTemp, loginUser };
