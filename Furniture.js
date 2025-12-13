let doc = document.body;
let bedroom = doc.querySelector('.Bedroom.auction-grid')
let kitchen = doc.querySelector('.Kitchen.auction-grid')
let living = doc.querySelector('.Liv.auction-grid')
filterBedroom = ()=>{
    bedroom.style.display = 'grid';
    kitchen.style.display = 'none';
    living.style.display = 'none';
}
filterKitchen = ()=>{
    bedroom.style.display = 'none';
    kitchen.style.display = 'grid';
    living.style.display = 'none';
}
filterLiving = ()=>{
    bedroom.style.display = 'none';
    kitchen.style.display = 'none';
    living.style.display = 'grid';
}