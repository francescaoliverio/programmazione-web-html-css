/* script.js
*
* When the "transform" button is clicked, it transforms each element of the list into a <div>  containing:
* - The title of the video
* - The ID of the video
* - The url of the video (clickable)
* - An image of the video (also clickable)
* - When hovering the image should display a play button and a play icon
* - Clicking the button again returns the list to the original form
*/

// La tua libreria fornita
var youtube = {
    getIdFromUrl: function(videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('http') === 0) {
            // Nota: questo split funziona bene se l'ID è l'ultimo parametro
            // Per gestire link con &list=, prendiamo solo la parte prima di eventuali altri parametri
            var id = videoIdOrUrl.split('v=')[1];
            var ampersandPosition = id.indexOf('&');
            if (ampersandPosition !== -1) {
                return id.substring(0, ampersandPosition);
            }
            return id;
        } else {
            return videoIdOrUrl;
        }
    },
    generateThumbnailUrl: function(videoIdOrUrl) {
        return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
    },
    generateWatchUrl: function(videoIdOrUrl) {
        return 'https://www.youtube.com/watch?v=' + youtube.getIdFromUrl(videoIdOrUrl);
    },
    generateEmbedUrl: function(videoIdOrUrl) {
        return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdOrUrl);
    }
};

// Logica di trasformazione con jQuery
$(document).ready(function() {
    const $main = $('main');
    const $ul = $('ul');
    const $btn = $('#transform-btn');
    let isTransformed = false;
    let originalHtml = '';

    $btn.on('click', function() {
        if (!isTransformed) {
            // Salviamo lo stato originale
            originalHtml = $ul.html();
            
            // Creiamo un nuovo contenitore per i div
            const $container = $('<div id="video-container"></div>');

            $ul.find('li a').each(function() {
                const rawUrl = $(this).attr('href');
                const videoTitle = $(this).text().trim();
                
                // Usiamo i metodi della tua libreria
                const videoId = youtube.getIdFromUrl(rawUrl);
                const thumbUrl = youtube.generateThumbnailUrl(rawUrl);
                const watchUrl = youtube.generateWatchUrl(rawUrl);

                // Costruiamo il div
                const $videoDiv = $(`
                    <div class="video-card">
                        <h3>${videoTitle}</h3>
                        <p>ID: ${videoId}</p>
                        <p><a href="${watchUrl}" target="_blank">${watchUrl}</a></p>
                        <div class="img-wrapper">
                            <a href="${watchUrl}" target="_blank">
                                <img src="${thumbUrl}" alt="Thumbnail">
                                <div class="play-overlay">
                                    <span>▶ PLAY</span>
                                </div>
                            </a>
                        </div>
                    </div>
                `);

                $container.append($videoDiv);
            });

            // Sostituzione visuale
            $ul.hide();
            $ul.after($container);
            $btn.text('Restore List');

            // Effetto hover per mostrare il tasto play (gestito via JS come richiesto)
            $('.img-wrapper').hover(
                function() { $(this).find('.play-overlay').css('display', 'flex'); },
                function() { $(this).find('.play-overlay').css('display', 'none'); }
            );

        } else {
            // Ripristino
            $('#video-container').remove();
            $ul.show();
            $btn.text('Transform');
        }

        isTransformed = !isTransformed;
    });
});