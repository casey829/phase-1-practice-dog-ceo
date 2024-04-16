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
})

