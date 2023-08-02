var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();
client.get('https://api.github.com/repos/SpektacleFR/spektacle/contents/img/render', function(response) {
    const object = JSON.parse(response);
    console.log(object);
    for (var i of object) {
        console.log(i.download_url)
        document.getElementById('renders').innerHTML += `<a href="${i.download_url}" class="interactable image">
            <img src="${i.download_url}" class="render" alt="render">
            </a>`
    }
});

/*<a href="img/render/deck.png" class="interactable image">
    <img src="img/render/deck.png" class="render" alt="render">
</a>
            */