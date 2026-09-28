document.addEventListener("DOMContentLoaded",function(){
updateWishlistCount();
const themeBtn=document.getElementById("themeBtn");
if(themeBtn){themeBtn.addEventListener("click",function(){document.body.classList.toggle("dark-mode");if(document.body.classList.contains("dark-mode")){localStorage.setItem("theme","dark");themeBtn.textContent="☀️";}else{localStorage.setItem("theme","light");themeBtn.textContent="🌙";}});}
if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark-mode");if(themeBtn)themeBtn.textContent="☀️";}
const menuBtn=document.getElementById("menuBtn"),navbar=document.getElementById("navbar");
if(menuBtn&&navbar)menuBtn.addEventListener("click",()=>navbar.classList.toggle("show"));
});
function updateWishlistCount(){const wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];const counter=document.getElementById("wishlistCount");if(counter)counter.textContent=wishlist.length;}
function addToWishlist(id){let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];if(!wishlist.includes(id)){wishlist.push(id);localStorage.setItem("wishlist",JSON.stringify(wishlist));alert("Bike added to wishlist ❤️");}else alert("This bike is already in your wishlist.");updateWishlistCount();}
