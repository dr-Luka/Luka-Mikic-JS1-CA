const container = document.querySelector(".container");
const url = "https://www.breakingbadapi.com/api/characters";

async function getCharacters() {
  try {
    const response = await fetch(url);
    const characters = await response.json();
    console.log(characters);
    container.innerHTML = "";

    characters.forEach((character) => {
      container.innerHTML += `<a href="details.html?id=${character.char_id}">
                              <h2>${character.name}</h2>
                              <p>${character.occupation[0]}</p>
                              <p>${character.status}</p></a>`;
    });
  } catch (error) {
    console.log(error);
    container.innerHTML = "Sorry, there was an error.";
  }
}
getCharacters();
