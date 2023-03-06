import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
<<<<<<< HEAD
  console.log(config.backendEndpoint+"/cities");
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
=======

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
>>>>>>> fd7af8b4a3181ef2a4513d2bcd7834cac44efcea
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
<<<<<<< HEAD
  try{
const result = await fetch(`${config.backendEndpoint}/cities`);
const data = await result.json(); 
return(data);
  }catch(err){
    return null;
  }
=======

>>>>>>> fd7af8b4a3181ef2a4513d2bcd7834cac44efcea
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
<<<<<<< HEAD
const content =document.getElementById("data");
// const  divelement =document.createElement("div");
// content.appendChild(divelement);
const responsive = document.createElement("div")
responsive.className = "col col-lg-3 col-md-6 col-xs-12 mb-3"
content.append(responsive)
const imgelement =document.createElement("a");
responsive.appendChild(imgelement);
imgelement.id=id;
imgelement.href="pages/adventures/?city="+id;
imgelement.className="tile";

const img = document.createElement("img");
img.src=image;
img.alt=city;
imgelement.appendChild(img);


const textele =document.createElement("div");
textele.className="tile-text ";
imgelement.append(textele);
const idalink =document.createElement("a");
idalink.href="pages/adventures/?city="+id;
idalink.textContent=city;
textele.appendChild(idalink);

const pele = document.createElement("p");
pele.textContent=description;
textele.appendChild(pele);














=======
>>>>>>> fd7af8b4a3181ef2a4513d2bcd7834cac44efcea

}

export { init, fetchCities, addCityToDOM };
