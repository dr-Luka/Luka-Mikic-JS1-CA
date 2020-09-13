const detailsContainer = document.querySelector(".detailsContainer");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://www.breakingbadapi.com/api/characters/${id}`;

async function fetchCharacters() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    detailsContainer.innerHTML = "";

    document.title = `${details[0].name} - ${details[0].status}`;

    createHTML(details);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "Sorry, there was an error.";
  }
}
fetchCharacters();
function createHTML(details) {
  detailsContainer.innerHTML += `<h1>${details[0].name}</h1>
                                <p>Nickname: ${details[0].nickname}</p>
                                <p>Portrayed by: ${details[0].portrayed}</p>
                                <p>Occupation: ${details[0].occupation[0]}</p>
                                <p>Birthday: ${details[0].birthday}</p>
	  							              <p>Status: ${details[0].status}</p>`;
}
