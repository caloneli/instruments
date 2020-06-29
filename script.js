function onPageChange(link){
    window.location.href=link;
}

function onImageClick(type) {
    switch(type) {
        case 'bubanj':
            window.open("https://sr.wikipedia.org/wiki/%D0%91%D1%83%D0%B1%D0%B0%D1%9A");
        break;
        case 'gitara':
            window.open("https://sr.wikipedia.org/wiki/%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0");
        break;
        case 'harmonika':
            window.open("https://sr.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D0%BC%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0");
        break;
        case 'klavir':
            window.open("https://sr.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D0%B2%D0%B8%D1%80");
        break;
        case 'truba':
            window.open("https://sr.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B1%D0%B0");
        break;
        case 'violina':
            window.open("https://sr.wikipedia.org/wiki/%D0%92%D0%B8%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0");
        break;
    }
}

function onSpeakerHover(type){
    var audio = new Audio("zvuk/"+type+".mp3");
    audio.play();
}