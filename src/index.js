console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const dogBreeds = document.getElementById('dog-breeds');

    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageURL => {
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            imageContainer.appendChild(imageElement);
        })
    })
    .catch(error => {
        console.log('Error fetching images:', error);
    })


    // Challenge 2
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breeds = data.message;

        for(let breed in breeds) {
            const li = document.createElement('li');
            li.textContent = breed;

            li.addEventListener('click', () => {   // challenge 3
                li.classList.toggle('highlight');
            })

            dogBreeds.appendChild(li)
        }


        // Challenge 4
    const breedDropDown = document.getElementById('breed-dropdown');
    breedDropDown.addEventListener('change', () => {
        filterBreeds(breedDropDown.value);
    })
    })
    .catch(error => {
        console.log('Error fetching breeds:', error);
    })

    function filterBreeds(letter) {
        const breeds = dogBreeds.getElementsByTagName('li');
        for(let breed of breeds) {
            if(letter === 'all' || breed.textContent.startsWith(letter)) {
                breed.style.display = '';
            } else {
                breed.style.display = 'none';
            }
        }
    }
})
