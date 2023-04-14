const languagesElement = document.getElementById("languages");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    console.log(texts)
}

languagesElement.addEventListener("click", (e) => {
    changeLanguage(e.target.dataset.language)
})
