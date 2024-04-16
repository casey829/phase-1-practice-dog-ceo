document.addEventListener("DOMContentLoaded", function(){
    console.log('%c HI', 'color: firebrick');


    //challenge 1: fetch images and render them to the DOM
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
            const img =document.createElement("img");
            img.src = imageUrl;
            document.getElementById("dog-image-container").appendChild(img);
        })
      })
      .catch(error => console.error("There was an error!!", error));


      //challenge 2:fetches all the dog breeds 

      const breedUrl = "https://dog.ceo/api/breeds/list/all";;
      fetch(breedUrl)
       .then(response => response.json())
       .then(data => {
          const breeds = Object.keys(data.message);
          const breedList = document.getElementById("dog-breeds");
          breeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            breedList.appendChild(li);
          });
       })
       .catch(error => console.log("There was an error fetching dog breeds", error));

       //challenge 3: change of color when clicked
       document.getElementById("dog-breeds").addEventListener("click", function(event){
           if(event.target.tagName === "LI") {
            event.target.style.color = "red"; //it changes the color
           }
       });
})

    
