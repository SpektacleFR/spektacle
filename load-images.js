var folder = 'img/render/';

function isString(variable) { 
    return typeof (variable) === 'string'; 
}

function replaceLastOccurrenceInString(input, find, replaceWith) {
    if (!isString(input) || !isString(find) || !isString(replaceWith)) {
        // returns input on invalid arguments
        return input;
    }

    const lastIndex = input.lastIndexOf(find);
    if (lastIndex < 0) {
        return input;
    }

    return input.substr(0, lastIndex) + replaceWith + input.substr(lastIndex + find.length);
}

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) { 
                for (var i = 1; i <= 1; i++) {
                    $(`<a href="${val}" class="interactable image">
                    <div class="render" style="background-image: url(${replaceLastOccurrenceInString(val, '/', '/thumbnails/')}); background-position: 50%"></div>
                    </a>`).appendTo('#renders');
                    console.log(replaceLastOccurrenceInString(val, '/', '/thumbnails/'))
                }
            } 
        });
    }
});

/*<a href="img/render/deck.png" class="interactable image">
    <img src="img/render/deck.png" class="render" alt="render">
</a>
            */