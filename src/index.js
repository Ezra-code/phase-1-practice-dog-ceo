console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(res => res.json())
.then((images)=>{console.log(images)
    for (const item of images.message) {
        let imgs = document.getElementById("dog-image-container")
        imgs.innerHTML += ` <img src="${item}" alt="">`
        console.log(item)
    }
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(res => res.json())
.then((breeds) => {
    console.log(breeds)
    
     for (const item in breeds.message) {
        let breed = document.getElementById("dog-breeds")
        const li = document.createElement("li")
        li.innerHTML = item
        breed.appendChild(li)
        console.log(item)
    } 
})