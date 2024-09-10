const medicinelist = document.getElementById("medicinelist");
const cartcontents = document.getElementById("cartcontent");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");

let products = [
    {
        id: 1,
        name: "Aspirin",
        images: "./images/png/medicine1.png",
        text: "Aspirin is an everyday painkiller for aches and pains such as headache, toothache, colds and flu-like symptoms, and to bring down a high temperature.",
        price: 2
    },
    {
        id: 2,
        name: "Paracetamol",
        images: "./images/png/medicine2.png",
        text: "Uused to relieve pain and reduce fever. It is often used for headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers.",
        price: 2 
    },
    {
        id: 3,
        name: "Amoxicillin",
        images: "./images/png/medicine3.png",
        text: "A broad-spectrum antibiotic used to treat a variety of bacterial infections, including those of the ear, nose, throat, skin, and urinary tract.",
        price: 10
    },
    {
        id: 4,
        name: "Simvastatin",
        images: "./images/png/medicine4.png", 
        text: "A statin used to lower cholesterol levels in the blood, which helps reduce the risk of heart disease and stroke.",
        price: 15
    },
    {
        id: 5,
        name: "Metformin",
        images: "./images/png/medicine5.png",
        text: " A medication used to manage type 2 diabetes by helping control blood sugar levels. It works by improving the body's sensitivity to insulin.",
        price: 13
    },
    {
        id: 6,
        name: "Lisinopril",
        images: "./images/png/medicine6.png",
        text: " An angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure (hypertension) and heart failure. It helps relax blood vessels to improve blood flow.",
        price: 12
    },
    {
        id: 7,
        name: "Ibuprofen",
        images: "./images/png/medicine7.png",
        text: "A nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever, pain, inflammation, conditions like arthritis, menstrual cramps, and minor injuries.",
        price: 4
    },
    {
        id: 8,
        name: "Losartan",
        images: "./images/png/medicine8.png",
        text: "For high blood pressure and to decrease the risk of strokes in patients with high blood pressure.",
        price: 15
    },
]

let cartcontent = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
           <div class="itemheading"> <img src="${value.images}" alt="${value.name}"> <h3> ${value.name} </h3> </div>
           <p class="itempara"> ${value.text} </p>
           <div id="priceandbutton"> <span>£${value.price}</span> <button onclick="addToCard(${key})">Buy</button> </div>
        `
        medicinelist.appendChild(newDiv)
    })
}

initApp()
/*
const addToCard = (key) => {
    if ( cartcontent[key] == null) (
        cartcontent[key] = JSON.parse(JSON.stringify(products[key]));
        cartcontent[key].quantity = 1
    )
    reloadCards();
}

const reloadCards = () => (
    cartcontent.innerHTML = "" ;
    let count = 0;
    let totalprice = 0

    cartcontent.forEach((value, key) => (
        totalprice = totalprice + value.price;
        count = count + value.quantity

        if(value != null)(
            let newDiv = document.createElement("li");
        )
    ))
)
*/