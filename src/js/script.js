import {
  test
} from './modules/test.js'
import '../../public/css/style.scss'

// document.querySelector('h1').textContent = test(`How's it going `)

document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('button')
    const pName = document.getElementsByClassName('name')[0]
    const pDescr = document.getElementsByClassName('descr')[0]
    const pImg = document.getElementsByClassName('img')[0]

    const getData = () => {
      fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const name = data[0].name
            const tag = data[0].tagline
            const img = data[0].image_url
            console.log(name)
            console.log(tag)
            console.log(img)

            pName.innerHTML = name
            pDescr.innerHTML = tag
            pImg.setAttribute('src', img)
        })  
    }

    btn.addEventListener('click', getData)
        
})


    

// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify({
//         name : 'Fanny'
//     })
// }).then(res => {
//        return res.json()
//     })

//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))

// let p = new Promise((resolve, reject) => {
//     let a = 1+1
//     if (a == 2) {
//         resolve('Success')
//     }else{
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('this is then ' + message)
// }).catch((message) => {
//     console.log('this is catch ' + message)
// })

// let userLeft = false
// let userCatMeme = false

// let watchTutoCallback = (callback, errorCallBack) => {
//   if (userLeft) {
//     errorCallBack({
//       name: 'User left',
//       message: ':c'
//     })
//   } else if (userCatMeme) {
//     errorCallBack({
//       name: "User is watching cat meme",
//       message: "What a man of culture"
//     })
//   } else {
//     callback('Yaaay')
//   }
// }

// watchTutoCallback((message) => {
//   console.log('Success : ' + message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })

// let watchTutoPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User left',
//         message: ':c'
//       })
//     } else if (userCatMeme) {
//       reject({
//         name: "User is watching cat meme",
//         message: "What a man of culture"
//       })
//     } else {
//       resolve('Yaaay')
//     }
//   })

// }

// watchTutoPromise().then((message) => {
//     console.log('Success : ' + message)
//   }).catch((error) => {
//     console.log(error.name + ' ' + error.message)
//   })