const wishlistContainer=document.getElementById("wishlistContainer");
function loadWishlist(){
const wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
if(wishlist.length===0){wishlistContainer.innerHTML='<div class="empty-wishlist"><div class="empty-icon">💔</div><h2>Your Wishlist Is Empty</h2><p>Add your favourite motorcycles to see them here.</p><a href="bikes.html" class="btn primary-btn">Explore Bikes</a></div>';return;}
wishlistContainer.innerHTML="";
wishlist.forEach(id=>{const bike=bikes.find(item=>item.id===id);if(bike)wishlistContainer.innerHTML+=`<div class="bike-card"><div class="bike-image"><img src="${bike.image}" alt="${bike.name}"></div><div class="bike-info"><span class="category-tag">${bike.category}</span><h3>${bike.name}</h3><p>${bike.brand}</p><div class="card-bottom"><a href="bike-details.html?id=${bike.id}" class="details-link">View Details →</a><button class="remove-btn" onclick="removeWishlist(${bike.id})">Remove</button></div></div></div>`;});
}
function removeWishlist(id){let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];wishlist=wishlist.filter(bikeId=>bikeId!==id);localStorage.setItem("wishlist",JSON.stringify(wishlist));loadWishlist();updateWishlistCount();}
loadWishlist();
