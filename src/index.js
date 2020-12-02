console.log('%c HI', 'color: firebrick')

window.onload = function(){
    fetchImages();
    fetchBreed();
}

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        let dogUrls = json["message"]
        for(let dogUrl of dogUrls){
            let div = document.getElementById('dog-image-container')
            let imgElement = document.createElement('img')
            imgElement.src = dogUrl
            imgElement.style.width = '200px'
            imgElement.style.height = 'auto'
            dogDiv.append(imgElement)
        }
    })
}

fuction fetchBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.body)
    .then(json => {
        let ul = document.getElementById("dog-breeds")
        let li = document.createElement("li")
        
    })
}