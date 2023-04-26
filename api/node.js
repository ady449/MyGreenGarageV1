import fetch from "cross-fetch";

async function fetchData() {
  const response = await fetch("http://localhost:3000/api/");
  const data = await response.json();
  return data;
}

export { fetchData };
