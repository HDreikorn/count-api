const API_PATH = "https://api.countapi.xyz";
const config = require("../config.json");

export async function sendHitCount() {
  let url = `${API_PATH}/hit/${
    process.env.REACT_APP_API_KEY || config.API_KEY
  }`;
  console.log(url);

  let data = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.error);
    })
    .catch((err) => console.log(err));

  return data;
}
