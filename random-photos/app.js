const imgContainer=document.querySelector(".img-container");
const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    addNewImage();
})

function addNewImage(){
   for (let index = 0; index < 10; index++) {
    const newImg=document.createElement("img");
     newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imgContainer.appendChild(newImg);
   }
}