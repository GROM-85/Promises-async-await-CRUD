const cards = document.querySelectorAll(".card")
const cardsContainer = document.querySelector(".card-container");
// entries is an array of our targets we want to observe
const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting);
        // if(entry.isIntersecting) observer.unobserve(entry.target); // in case elem is loaded so we stoop observe it 
    })

},{
    threshold:0.5,
    // rootMargin:"-100px",
})
// threshold CAN NOT BE used with rootMargin due to some unpredictable behaviour!!!

cards.forEach(card => {
    observer.observe(card);
})


//INFINIT SCROLL

const lastCardObserver = new IntersectionObserver(entries =>{
    const lastCard = entries[0];
    if(!lastCard.isIntersecting) return;
    loadNewCards();
},{
    threshold:0.5
})

lastCardObserver.observe(document.querySelector(".card:last-child"));

function loadNewCards(){
    const cardsArr = []
    for(let i = 0; i < 20; i++){
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = "New card";
        observer.observe(card);
        cardsArr.push(card);
    }
    cardsContainer.append(...cardsArr);
}