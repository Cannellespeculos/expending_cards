const cards = document.getElementsByClassName("cards")
const list = document.getElementById("list")
const card1 = document.getElementById("card1")

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("click", (ev) => {
        list.value = ev.currentTarget.value;
        for (let i = 0; i < cards.length; i++) {
            const c = cards[i];
            c.classList.remove("active")

        }
        ev.currentTarget.classList.add("active")
    })

}

