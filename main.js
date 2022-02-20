const evilButton = document.querySelector(`.newInsult`);
const evilDiv = document.querySelector(`.insult`);

const apiData = {
    url: `https://cors-anywhere.herokuapp.com/https://evilinsult.com`,
    type: `/generate_insult.php`,
}

const { url, type } = apiData;
const apiURL = `${url}${type}`;

const insultME = () => {
    fetch(apiURL)
        .then((insult) => insult.text())
        .then((insultPromise) => refresh(insultPromise))

    const refresh = (insult) => {
        evilDiv.textContent = insult;
    }
}

insultME()

evilButton.addEventListener(`click`, insultME);
