const bikeContainer=document.getElementById("bikeContainer");
const searchInput=document.getElementById("searchInput");
const categoryFilter=document.getElementById("categoryFilter");
const brandFilter=document.getElementById("brandFilter");

function displayBikes(){
const search=searchInput.value.toLowerCase(),category=categoryFilter.value,brand=brandFilter.value;
const filteredBikes=bikes.filter(bike=>bike.name.toLowerCase().includes(search)&&(category==="All"||bike.category===category)&&(brand==="All"||bike.brand===brand));
bikeContainer.innerHTML="";
if(filteredBikes.length===0){bikeContainer.innerHTML='<div class="no-results"><h2>No Bikes Found</h2><p>Try changing your search or filters.</p></div>';return;}
filteredBikes.forEach(bike=>bikeContainer.innerHTML+=createBikeCard(bike));
}
searchInput.addEventListener("input",displayBikes);
categoryFilter.addEventListener("change",displayBikes);
brandFilter.addEventListener("change",displayBikes);
const params=new URLSearchParams(window.location.search),categoryFromURL=params.get("category");
if(categoryFromURL)categoryFilter.value=categoryFromURL;
displayBikes();
