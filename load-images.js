var folder = "img/render/";
    
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) { 
                for (var i = 1; i <= 1; i++) {
                    $(`<a href="${val}" class="interactable image">
                    <img src="${val}" class="render" alt="render">
                    </a>`).appendTo('#renders');
                    console.log(val);
                }
            } 
        });
    }
});


/*<a href="img/render/deck.png" class="interactable image">
    <img src="img/render/deck.png" class="render" alt="render">
</a>
            */