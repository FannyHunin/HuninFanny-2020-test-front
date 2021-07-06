let createModal = (element) => {



  
  let modal = document.querySelector('#beer-modal')
  let close = document.querySelector('#beer-modal>button')
  let beer_imgModal = document.querySelector('.beer-modal-img>img')
  
  let beer_titleModal2 = document.querySelector("#beer-modal>div>.beer-modal-info>h3")
  let beer_subtitle = document.querySelector("#beer-modal>div>.beer-modal-info>h5")
  let beer_description = document.querySelector("#beer-modal>div>.beer-modal-info>p")
  
  modal.classList.add("beer-modal")
  modal.classList.remove("beer-none")
  let beer_spec1 = document.querySelector("#spe1")
  let beer_spec2 = document.querySelector("#spe2")
  let beer_spec3 = document.querySelector("#spe3")
  let beer_spec4 = document.querySelector("#spe4")
  let beer_spec5 = document.querySelector("#spe5")
  let beer_spec6 = document.querySelector("#spe6")
  
  beer_imgModal.setAttribute("src", element.image_url)
  
  beer_titleModal2.innerHTML = element.name
  beer_subtitle.innerHTML = element.tagline
  beer_description.innerHTML = element.description
  beer_spec1.innerHTML = element.first_brewed
  beer_spec2.innerHTML = element.abv
  beer_spec3.innerHTML = element.ibu
  beer_spec4.innerHTML = element.ebc

  let beer_spec5Arr = element.ingredients.malt
  beer_spec5Arr.forEach(elem => {
    let pIngr = document.createElement("p")
    pIngr.innerHTML = elem.name
    pIngr.style.textAlign = "right"
    beer_spec5.appendChild(pIngr)
  });
  
  beer_spec6.innerHTML = element.ingredients.yeast

  console.log(modal.classList)

  close.addEventListener("click", () => {
    modal.classList.remove("beer-modal")
    modal.classList.add("beer-none")

    console.log(modal.classList)
  })
}

export { createModal }