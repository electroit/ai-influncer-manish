const options = {
  method: "GET",
  headers: {
    'X-API-ID': '4b065b0c-92f2-464b-bbb9-2522e7c7f1f6',
    'X-API-KEY': 'e7cafd100dcefbd848d42b39b3b422a07e6a8f9b'
  },
};

export async function GetAllAvatarData() {
  return fetch("https://api.creatify.ai/api/personas/", options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
}
