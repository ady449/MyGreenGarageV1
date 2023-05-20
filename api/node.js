import fetch from "cross-fetch";

async function fetchData() {
  const response = await fetch(
    `https://mygreengarageserver.onrender.com/getAll`
  );
  const data = await response.json();
  return data;
}
async function updateTemp(id, temp) {
  const tempdata = { temperature: temp };
  console.log(JSON.stringify(tempdata));
  fetch(`https://mygreengarageserver.onrender.com/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(tempdata),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

async function loginUser(un, ps) {
  const login = { username: un, password: ps };

  var result2 = await fetch(`https://mygreengarageserver.onrender.com/login`, {
    method: "POST",
    body: JSON.stringify(login),
    headers: { "Content-Type": "application/json" },
  });

  const response = await result2.json();
  //   console.log(response);
  return response;
}

async function registerUser(us, ps, em) {
  const register = { username: us, password: ps, email: em };
  console.log("problem" + JSON.stringify(register));
  var result2 = await fetch(
    `https://mygreengarageserver.onrender.com/register`,
    {
      method: "POST",
      body: JSON.stringify(register),
      headers: { "Content-Type": "application/json" },
    }
  );
  const response = await result2.json();
  if ("message" in response) {
    return false;
  }
  if ("username" in response) {
    return true;
  }

  return response;
}
export { fetchData, updateTemp, loginUser, registerUser };
