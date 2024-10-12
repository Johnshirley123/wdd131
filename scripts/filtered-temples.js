const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls ",
        location: "1000 Memorial Dr Idaho Falls, Idaho",
        dedicated: "1940, October, 19",
        area: 85624,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-31085-main.jpg"
      },
      {
        templeName: "Rexburg Idaho",
        location: "750 S 2nd E Rexburg, Idaho",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-1057-main.jpg"
      },
      {
        templeName: "Mesa Arizona",
        location: "101 S LeSueur Mesa, Arizona",
        dedicated: "1927, October, 23-26",
        area: 75000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
      },
  ];

  renderTemples(temples);

const mainHeading = document.querySelector("#main-heading");
const allTemples = document.querySelector("#allTemples");
allTemples.addEventListener("click", () => {
	mainHeading.innerHTML = "Home";
	renderTemples(temples);
});

const oldTemples = document.querySelector("#oldTemples");
oldTemples.addEventListener("click", () => {
	mainHeading.innerHTML = "Old Temples";
	renderTemples(temples.filter(temple => temple.dedicated.substring(0, 4) < 1900));
});

const newTemples = document.querySelector("#newTemples");
newTemples.addEventListener("click", () => {
	mainHeading.innerHTML = "New Temples";
	renderTemples(temples.filter(temple => temple.dedicated.substring(0, 4) > 2000));
});

const largeTemples = document.querySelector("#largeTemples");
largeTemples.addEventListener("click", () => {
	mainHeading.innerHTML = "Large Temples";
	renderTemples(temples.filter(temple => temple.area > 90000));
	
});

const smallTemples = document.querySelector("#smallTemples");
smallTemples.addEventListener("click", () => {
	mainHeading.innerHTML = "Small Temples";
	renderTemples(temples.filter(temple => temple.area < 10000));
});

function templeCardsTemplate(temple) {
	return `
	<div class="temples">
	<h3 class="temple-name">${temple.templeName}</h3>
	<div class="data">
	
	<p><span>LOCATION: </span>${temple.location}</p>
	<p><span>DEDICATED: </span>${temple.dedicated}</p>
	<p><span>SIZE: </span>${temple.area} sq ft</p>
	</div>
	
	<div class="temple-image">
	<img src=${temple.imageUrl} alt=${temple.templeName} width="270" loading="lazy">
	</div>
	</div>
      `
}



function renderTemples(templesArray) {
	const html = templesArray.map(templeCardsTemplate);
	document.querySelector(".pictures").innerHTML = html.join("");
}

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = today.getFullYear();


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const titulo = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	titulo.classList.toggle('hide');
});

