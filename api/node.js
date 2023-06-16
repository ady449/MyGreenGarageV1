import fetch from "cross-fetch";

async function fetchData() {
  const response = await fetch(
    `https://mygreengarageserver.onrender.com/getAllNames`
  );
  const data = await response.json();
  return data;
}
async function updateCar(car) {
  const carData = car;
  //   console.log(JSON.stringify(carData));
  fetch(`https://mygreengarageserver.onrender.com/update/${car._id}`, {
    method: "PUT",
    body: JSON.stringify(carData),
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
async function addCar(
  model,
  brand,
  dateofmanufacture,
  batterylevel,
  batterylife,
  vin,
  range,
  km,
  insurance,
  temperature,
  isLocked,
  camera,
  geolocation
) {
  const register = {
    brand: brand,
    model: model,
    dateofmanufacture: dateofmanufacture,
    batterylevel: batterylevel,
    batterylife: batterylife,
    vin: vin,
    range: range,
    km: km,
    insurance: insurance,
    temperature: temperature,
    isLocked: isLocked,
    camera: camera,
    geolocation: geolocation,
  };
  console.log("problem" + JSON.stringify(register));
  var result2 = await fetch(
    `https://mygreengarageserver.onrender.com/insertCar`,
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
async function getCarById(id) {
  var response = await fetch(
    `https://mygreengarageserver.onrender.com/getOneCar/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  //   console.log(data[0]);
  return data[0];
}
export { fetchData, updateCar, loginUser, registerUser, getCarById, addCar };
