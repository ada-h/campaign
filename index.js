let gallery = [
    
    {id: 10, type: 'img', src: "./assets/campaign-images/4.jpeg", language: "eng"},
    {id: 11, type: 'img', src: "./assets/campaign-images/2.jpeg", language: "hausa"},
    {id: 8, type: 'img', src: "./assets/campaign-images/3.jpeg", language: "eng"},
    {id: 1, type: 'tags', src: "OBIdent", language: "eng"},
    {id: 2, type: 'img', src: "./assets/campaign-images/5.jpeg", language: "eng"},
    {id: 12, type: 'tags', src: "#PeterObi4President2023", language: "eng"},
    {id: 9, type: 'img', src: "./assets/campaign-images/1.jpeg", language: "eng"},
    {id: 4, type: 'tags', src: "PeterObi4President", language: "eng"},
     {id: 5, type: 'tags', src: "TakeBackNaija", language: "eng"},
    // {id: 6, type: 'audio', src: "/media/cc0-audio/t-rex-roar.mp3", language: "eng"},
    // {id: 7, type: 'video', src: "https://twitter.com/i/status/1532629465070706688", language: "eng"},
    {id: 13, type: 'img', src: "./assets/campaign-images/6.jpeg", language: "eng"},
]

let gallerylist  = document.getElementsByClassName("content-gallery")[0];

function displayGallery(list){
    for(let i=0; i < list.length; i++){
        let val = list[i]
        if(val.type === "img"){
            gallerylist.innerHTML += 
            `<div class="gallery">
                <img class="img-gallery" src=${val.src} alt="img-gallery" />
                <div class="share-container">
                <div>
                       
                    </div>
                <a download=${`peterobi4president` + val.id} href=${val.src}>
                    <img  class="icon" src="./assets/download.png" alt="share" />
                </a>
                    
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
                </div>
            </div>
        </div> `
        }else{
            gallerylist.innerHTML +=
            `<div class="audio-gallery">
                <p> ${"#" + val.src}</p> 
                <div class="share-container">
                    <img onclick=copyText("${val.src}") class="icon" src="./assets/share.png" alt="share" />
                    <div>    
                        <span> 
                            <a target="_blank" class="twitter-share-button"
                                href="https://twitter.com/intent/tweet?hashtags=${val.src}">
                                <img class="minicons" src="./assets/twitter.png" alt="twitter" />
                            </a>
                            <a target="_blank" href="https://api.whatsapp.com/send?text=${val.src}" data-action="share/whatsapp/share"> 
                                 <img class="minicons" src="./assets/whatsapp.png" alt="whatsapp" />
                            </a>
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
    if(type === ""){
        return displayGallery(gallery);
    }
    let filtered = gallery.filter(all => all.type === type);
    displayGallery(filtered);
    
}



//todo list
//share functionalities
//give people credit to encourage people to contribute
//add option to contribute
//filter by language
//share on facebook 
//share on instagram