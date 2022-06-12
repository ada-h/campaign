let gallery = [
    {id: 1, type: 'tags', src: "#OBIdent", language: "eng"},
    {id: 2, type: 'img', src: "https://moneycentral.com.ng/wp-content/uploads/2022/06/Peter-Obi-2023.jpg", language: "eng"},
    {id: 3, type: 'img', src: "https://www.theafricareport.com/media/2022/05/obi-e1651492034434-732x419.jpeg", language: "eng"},
    {id: 4, type: 'tags', src: "#PeterObi4President", language: "eng"},
    {id: 5, type: 'tags', src: "#TakeBackaija", language: "eng"},
    {id: 6, type: 'audio', src: "/media/cc0-audio/t-rex-roar.mp3", language: "eng"},
    {id: 6, type: 'video', src: "https://www.youtube.com/watch?v=Z9J6KA9prb0", language: "eng"},
]

let gallerylist  = document.getElementsByClassName("content-gallery")[0];

function displayGallery(list){
    for(let i=0; i < list.length; i++){
        let val = list[i]
        if(val.type === "img"){
            gallerylist.innerHTML += `<div class="gallery">
                <img class="img-gallery" src=${val.src} alt="img-gallery" />
                <div class="share-container">
                    <img  class="icon" src="./assets/download.png" alt="share" />
                    <div>
                        <img onclick=copyText("${val.src}")  class="icon" src="./assets/share.png" alt="share" />
                        <span> 
                            <img class="minicons" src="./assets/twitter.png" alt="twitter" />
                            <img class="minicons" src="./assets/facebook.png" alt="facebook" />
                            <img class="minicons" src="./assets/instagram.png" alt="instagram" />
                            <img class="minicons" src="./assets/whatsapp.png" alt="instagram" />
                        </span>
                    </div>
                </div>
            </div>`
        }else if(val.type === "video"){
            gallerylist.innerHTML += ` <div class="gallery">
            <video width="320" height="240" class="img-gallery" controls>
                <source src=${val.src} type="video/mp4">
                <source src=${val.src} type="video/ogg">
              Your browser does not support the video tag.
            </video>
            <div class="share-container">
            <img  class="icon" src="./assets/download.png" alt="share" />
            <div>
                <img onclick=copyText("${val.src}")  class="icon" src="./assets/share.png" alt="share" />
                <span> 
                    <img class="minicons" src="./assets/twitter.png" alt="twitter" />
                    <img class="minicons" src="./assets/facebook.png" alt="facebook" />
                    <img class="minicons" src="./assets/instagram.png" alt="instagram" />
                    <img class="minicons" src="./assets/whatsapp.png" alt="instagram" />
                </span>
            </div>
        </div>
        </div> `
        }else if(val.type === "audio"){
            gallerylist.innerHTML += ` <div class="audio-gallery">
            <audio
                controls
                src=${val.src}>
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            <div class="share-container">
                <img  class="icon" src="./assets/download.png" alt="share" />
                <div>
                    <img onclick=copyText("${val.src}")  class="icon" src="./assets/share.png" alt="share" />
                    <span> 
                        <img class="minicons" src="./assets/twitter.png" alt="twitter" />
                        <img class="minicons" src="./assets/facebook.png" alt="facebook" />
                        <img class="minicons" src="./assets/instagram.png" alt="instagram" />
                        <img class="minicons" src="./assets/whatsapp.png" alt="instagram" />
                    </span>
                </div>
            </div>
        </div> `
        }else{
            gallerylist.innerHTML += `<div class="audio-gallery">
            <p> ${val.src}</p> 
            <div class="share-container">
                <img onclick=copyText("${val.src}") class="icon" src="./assets/share.png" alt="share" />
                <div>    
                    <span> 
                        <img class="minicons" src="./assets/twitter.png" alt="twitter" />
                        <img class="minicons" src="./assets/facebook.png" alt="facebook" />
                        <img class="minicons" src="./assets/instagram.png" alt="instagram" />
                        <img class="minicons" src="./assets/whatsapp.png" alt="instagram" />
                    </span>
                </div>
            </div>
        </div>`
        }
    }
    return gallerylist;
}
displayGallery(gallery)

//share link
function copyText(val){
    const textField = document.createElement("textarea");
    textField.innerText = val;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
}

function filteroptions(type){
    gallerylist.innerHTML = "";
    let filtered = gallery.filter(all => all.type === type);
    displayGallery(filtered);
}