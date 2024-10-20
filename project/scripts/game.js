const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = today.getFullYear();
lastModified.innerHTML = new Date(document.lastModified);

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	titulo.classList.toggle('hide');
});