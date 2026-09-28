const params=new URLSearchParams(window.location.search);
const bikeId=Number(params.get("id"));
const bike=bikes.find(item=>item.id===bikeId);
const container=document.getElementById("bikeDetails");

if(!bike){
container.innerHTML='<div class="no-results"><h2>Bike Not Found</h2><a href="bikes.html" class="btn primary-btn">Back to Bikes</a></div>';
}else{
container.innerHTML=`<div class="details-grid"><div class="details-image"><img src="${bike.image}" alt="${bike.name}"></div><div class="details-content"><span class="category-tag">${bike.category}</span><h1>${bike.name}</h1><h3>${bike.brand}</h3><p class="details-description">${bike.description}</p><div class="spec-grid"><div><strong>Engine</strong><span>${bike.engine}</span></div><div><strong>Power</strong><span>${bike.power}</span></div><div><strong>Top Speed</strong><span>${bike.speed}</span></div><div><strong>Price</strong><span>${bike.price}</span></div></div><div class="details-buttons"><button onclick="addToWishlist(${bike.id})" class="btn primary-btn">❤️ Add to Wishlist</button><a href="wallpapers.html" class="btn secondary-btn">🖼️ Wallpapers</a></div></div></div><div class="about-bike"><h2>About ${bike.name}</h2><p>The ${bike.name} is a ${bike.category.toLowerCase()} motorcycle from ${bike.brand}. It combines design, engineering and riding performance to provide a unique motorcycling experience.</p></div>`;
}
