import '../../public/css/style.scss'

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
      let beer_name = document.createElement('h1')
      let beer_tag = document.createElement('p')
      let beer_brewed = document.createElement('p')
      let beer_img = document.createElement('img')
      let see_more = document.createElement('button')

      if (element.id % 2 == 1) {
        beer_div = document.createElement("div");
        beer_div.setAttribute('class', 'beer_div')
        col1.appendChild(beer_div)
        beer_info = document.createElement("div")
        beer_info.setAttribute('class', 'odd-info')
        beer_div.appendChild(beer_info)


      } else {

        beer_div = document.createElement("div");
        beer_div.classList.add('beer_div')
        col2.appendChild(beer_div)
        beer_info = document.createElement("div")
        beer_info.classList.add('odd-info')
        beer_div.appendChild(beer_info)



      }
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
    });
  })
