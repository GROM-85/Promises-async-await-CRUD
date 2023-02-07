export function createPetsCards(pets) {
    return pets.map(({ url, id }) => {
        return `<li class="card"">
        <img
          src="${url}"
          id="${id}"
          alt="pet cat"
        />
    </li>`
    }).join("")
}