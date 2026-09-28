const bikes = [
{id:1,name:"Yamaha YZF-R1",brand:"Yamaha",category:"Sports",engine:"998 cc",power:"200 HP",speed:"299 km/h",price:"₹20.39 Lakh",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",description:"The Yamaha YZF-R1 is a legendary superbike known for its racing technology, aggressive design and powerful performance."},
{id:2,name:"Ducati Panigale V4",brand:"Ducati",category:"Sports",engine:"1103 cc",power:"215 HP",speed:"300+ km/h",price:"₹27 Lakh",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",description:"The Ducati Panigale V4 combines Italian design with superbike performance and advanced electronics."},
{id:3,name:"BMW R 1300 GS",brand:"BMW",category:"Adventure",engine:"1300 cc",power:"145 HP",speed:"225 km/h",price:"₹20.95 Lakh",image:"https://images.unsplash.com/photo-1558981403-c5f9891e0e6f?auto=format&fit=crop&w=1000&q=80",description:"The BMW R 1300 GS is an adventure motorcycle designed for long journeys and challenging terrain."},
{id:4,name:"Kawasaki Ninja ZX-10R",brand:"Kawasaki",category:"Sports",engine:"998 cc",power:"203 HP",speed:"299 km/h",price:"₹17.34 Lakh",image:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",description:"The Kawasaki Ninja ZX-10R is a high-performance superbike inspired by Kawasaki's racing technology."},
{id:5,name:"Honda Gold Wing",brand:"Honda",category:"Cruiser",engine:"1833 cc",power:"125 HP",speed:"180 km/h",price:"₹39.20 Lakh",image:"https://images.unsplash.com/photo-1558980664-10ea6b7d7e9c?auto=format&fit=crop&w=1000&q=80",description:"The Honda Gold Wing is designed for comfortable long-distance touring with premium features."},
{id:6,name:"Royal Enfield Classic 350",brand:"Royal Enfield",category:"Classic",engine:"349 cc",power:"20.2 HP",speed:"114 km/h",price:"₹1.93 Lakh",image:"https://images.unsplash.com/photo-1525160354320-d8e92641c563?auto=format&fit=crop&w=1000&q=80",description:"The Classic 350 combines timeless styling with modern engineering and is one of India's popular motorcycles."},
{id:7,name:"KTM 1290 Super Duke R",brand:"KTM",category:"Naked",engine:"1301 cc",power:"180 HP",speed:"280 km/h",price:"₹22 Lakh",image:"https://images.unsplash.com/photo-1558980664-10ea6b7d7e9c?auto=format&fit=crop&w=1000&q=80",description:"The KTM Super Duke R is an aggressive naked motorcycle focused on raw performance and sharp handling."},
{id:8,name:"Yamaha MT-09",brand:"Yamaha",category:"Naked",engine:"890 cc",power:"117 HP",speed:"240 km/h",price:"₹12 Lakh",image:"https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=80",description:"The Yamaha MT-09 is a lightweight naked motorcycle known for its strong engine and distinctive styling."}
];

const destinations = [
{name:"Leh-Ladakh",location:"Ladakh, India",image:"https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1200&q=80",description:"A legendary motorcycle destination famous for high-altitude mountain roads and spectacular landscapes.",activities:["Motorcycle touring","Visit Pangong Lake","Explore mountain passes","Photography","Camping"]},
{name:"Manali",location:"Himachal Pradesh, India",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",description:"A popular starting point for Himalayan motorcycle adventures.",activities:["Mountain riding","Visit Rohtang Pass","River rafting","Camping","Local sightseeing"]},
{name:"Goa",location:"Goa, India",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",description:"A coastal destination with scenic roads, beaches and relaxed motorcycle rides.",activities:["Beach riding","Visit beaches","Explore local markets","Photography","Sunset rides"]},
{name:"Spiti Valley",location:"Himachal Pradesh, India",image:"https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=1200&q=80",description:"A remote Himalayan valley offering dramatic landscapes and challenging motorcycle routes.",activities:["Mountain riding","Photography","Camping","Visit monasteries","Explore villages"]}
];

const blogs = [
{id:1,title:"10 Iconic Motorcycles Every Rider Should Know",category:"Motorcycles",date:"September 10, 2026",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",text:"Motorcycles have evolved from simple transportation machines into symbols of technology, adventure and personal freedom."},
{id:2,title:"Best Motorcycle Destinations in India",category:"Travel",date:"September 5, 2026",image:"https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1000&q=80",text:"India has some incredible motorcycle routes ranging from Himalayan mountain roads to coastal highways."},
{id:3,title:"Sports Bike vs Cruiser: What's Different?",category:"Guide",date:"August 28, 2026",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",text:"Sports bikes and cruisers are designed around very different riding experiences."},
{id:4,title:"How to Prepare for a Long Motorcycle Ride",category:"Tips",date:"August 20, 2026",image:"https://images.unsplash.com/photo-1558981403-c5f9891e0e6f?auto=format&fit=crop&w=1000&q=80",text:"Preparation is an important part of every long-distance motorcycle journey."}
];

function createBikeCard(bike){
return `<div class="bike-card"><div class="bike-image"><img src="${bike.image}" alt="${bike.name}"><button class="heart-btn" onclick="addToWishlist(${bike.id})">♡</button></div><div class="bike-info"><span class="category-tag">${bike.category}</span><h3>${bike.name}</h3><p>${bike.brand}</p><div class="bike-specs"><span>⚙️ ${bike.engine}</span><span>⚡ ${bike.power}</span></div><div class="card-bottom"><strong>${bike.price}</strong><a href="bike-details.html?id=${bike.id}" class="details-link">Details →</a></div></div></div>`;
}

function createBlogCard(blog){
return `<article class="blog-card"><img src="${blog.image}" alt="${blog.title}"><div class="blog-content"><span>${blog.category}</span><h3>${blog.title}</h3><p>${blog.text}</p><small>${blog.date}</small></div></article>`;
}
