import '../../public/css/style.scss'
import { wiggleAnim } from './modules/wiggle'
import { createModal } from './modules/createModal'

let col1 = document.querySelector(".col-1")
let col2 = document.querySelector(".col-2")
let beer_div;
let beer_info;
let see_more;

fetch('https://api.punkapi.com/v2/beers?page=2&per_page=60')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)

    data.forEach(element => {
      
      //create beer part 1
      let beer_name = document.createElement('h1')
      let beer_tag = document.createElement('p')
      let beer_brewed = document.createElement('p')
      let beer_img = document.createElement('img')
      let see_more = document.createElement('a')

      
      //sort the beers in 2 rows
      if (element.id % 2 == 1) {
        beer_div = document.createElement("div");
        col1.appendChild(beer_div)
        beer_info = document.createElement("div")
        beer_div.appendChild(beer_info)


      } else {
        beer_div = document.createElement("div");
        col2.appendChild(beer_div)
        beer_info = document.createElement("div")
        beer_div.appendChild(beer_info)
      }

      //create beer part 2
      beer_info.appendChild(beer_name)
      beer_info.appendChild(beer_tag)
      beer_info.appendChild(beer_brewed)
      beer_info.appendChild(see_more)
      beer_div.appendChild(beer_img)

      beer_name.innerHTML = element.name
      beer_tag.innerHTML = element.tagline
      beer_brewed.innerHTML = `First brewed on ${element.first_brewed}`
      beer_img.setAttribute("src", element.image_url);
      see_more.innerHTML = "See more..."
      see_more.setAttribute("class", "see-more-btn")
      see_more.setAttribute("href", "#beer-modal")

      //styling
      beer_div.style.width = "60%"
      beer_div.style.marginBottom = "100px"
      beer_div.style.display = "flex"
      beer_div.style.alignItems = "center"
      beer_div.style.justifyContent = "space-between"

      beer_img.style.heigth = "150px"
      beer_img.style.width = "150px"

      beer_info.style.width = "50%"
      beer_name.style.fontFamily = "'Anton', sans-serif"
      beer_tag.style.fontFamily = "'Roboto', sans-serif"
      beer_brewed.style.fontFamily = "'Open Sans', sans-serif"
      see_more.style.fontFamily = "'Roboto', sans-serif"
      see_more.style.backgroundColor = "black"
      see_more.style.color = "white"
      see_more.style.border = "none"
      see_more.style.width = "100%"
      see_more.style.fontSize = "20px"
      see_more.style.padding = "15px"
      see_more.style.textDecoration = "none"

      //beer wiggle
      see_more.addEventListener('mouseover', () => {
        wiggleAnim(beer_img)
      })
      see_more.addEventListener('mouseout', () => {
        beer_img.style.transform = "rotate(0deg)"
      })

      //modal
      see_more.addEventListener('click', () => {
        createModal(element)
      })

    });
  })