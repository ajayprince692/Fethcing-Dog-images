function randomDogimage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>res.json())
    .then((data)=>{
        let imagecontainer=document.getElementById("dogImageContainer");
        let imageElement=document.createElement("img");
        imageElement.src=data.message;
        imageElement.alt="loading"
        imagecontainer.innerHTML=""  //! To refresh new image
        imagecontainer.appendChild(imageElement)
    })
    .catch(error=>console.log(error));

}
randomDogimage()