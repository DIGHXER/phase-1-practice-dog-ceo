
    // To pass the tests, don't forget to return your fetch!
document.addEventListener('DOMContentLoaded', () =>{
    
    let allBreeds =[]

    const imgUrl =  "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    // attaching event listeners 

    const dogImgContainer = document.getElementById('dog-image-container')
    const dogBreedUl = document.getElementById('dog-breeds')
    const breedDropdown = document.getElementByI('breed-dropdown')


// listening to clicks on the li

dogBreedUl.addEventListener('click', function(event) {
event.target.style.color = 'yellow'
})

breedDropdown.addEventListener('change', (event) =>{
    const letter = event.target.value

// filter dog name whose names don't match the selected letter

const filteredBreeds = allBreeds.filter((breed)=> breed.startsWith(letter))
dogBreedUl.innerHTML=createDogList(filteredBreeds)

})

fetch(imgUrl, {method: 'GET'})
  .then((response)=>{
    console.log(response)

    if (response.ok) {
        return response.json()
    }
  })

  .then((dogImgData)=>{
    dogImgData.message.forEach(function(imgUrl) {
        dogImgContainer.innerHTML += `<img src='${imgUrl}'>`
    })

    const dogImgString= dogImgData.message.map((imgUrl)=>{
        return '<img src="${imgUrl}">'
    })
  })

  fetch(breedUrl, {method: 'GET'})
     .then(resp) => resp.json())
     .then(breedData)=>{
        allBreeds=Object.keys(breedData.message)
        console.log(allBreeds)
        dogBreedUl.innerHTML = createDogList(allBreeds)

     })
   function createDogList(dogBreedArray) {
    const dogLiStringArray = dogBreedArray.map(function(breed) {
        return `<li>${breed}</li>`
    })
    return dogLiStringArray.join('')

   }