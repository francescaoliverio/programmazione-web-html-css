/* ===== script.js =====
 *
 * When the "transform" button is clicked, it transforms each element of the list into a <div>  containing:
 * - The title of the video
 * - The ID of the video
 * - The url of the video (clickable)
 * - An image of the video (also clickable)
 * - When hovering the image should display a play button and a play icon
 * - Clicking the button again returns the list to the original form
 */

// ===== Youtube library =====
var youtube = {
  // *** ID ***
  getIdFromUrl: function (videoIdOrUrl) {
    if (videoIdOrUrl.indexOf("http") === 0) {
      // video id after "v="
      var id = videoIdOrUrl.split("v=")[1];
      // manage URLs containing "&list=" after the video id
      var ampersandPosition = id.indexOf("&");
      if (ampersandPosition !== -1) {
        return id.substring(0, ampersandPosition);
      }
      return id;
    } else {
      return videoIdOrUrl;
    }
  },
  // *** THUMBNAIL ***
  generateThumbnailUrl: function (videoIdOrUrl) {
    return "https://i3.ytimg.com/vi/" + youtube.getIdFromUrl(videoIdOrUrl) + "/default.jpg";
  },
  // *** WATCH URL ***
  generateWatchUrl: function (videoIdOrUrl) {
    return "https://www.youtube.com/watch?v=" + youtube.getIdFromUrl(videoIdOrUrl);
  },
  // *** EMBED URL ***
  generateEmbedUrl: function (videoIdOrUrl) {
    return "https://www.youtube.com/embed/" + youtube.getIdFromUrl(videoIdOrUrl);
  },
};

// ===== jQuery transformation: activates when page is ready =====
$(document).ready(function () {
  const $main = $("main");
  const $ul = $("ul");
  const $btn = $("#transform-btn");
  let isTransformed = false;
  let originalHtml = "";
  // onclick on button → toggle transformation
  $btn.on("click", function () {
    if (!isTransformed) {
      // save original state
      originalHtml = $ul.html();
      // create a new container for divs
      const $container = $('<div id="video-container"></div>');
      // for each url, create a div (id, title, link, thumbnail), append to .video-container
      $ul.find("li a").each(function () {
        // get url from href and title from anchor text
        const rawUrl = $(this).attr("href");
        const videoTitle = $(this).text().trim();
        // use library: get id, watch url, thumbnail url (for image)
        const videoId = youtube.getIdFromUrl(rawUrl);
        const watchUrl = youtube.generateWatchUrl(rawUrl);
        const thumbUrl = youtube.generateThumbnailUrl(rawUrl);
        // build the div
        const $videoDiv = $(`
                    <div class="video-card">
                        <small>ID: ${videoId}</small>
                        <h3>${videoTitle}</h3>
                        <p><a href="${watchUrl}" target="_blank">${watchUrl}</a></p>
                        <div class="img-wrapper">
                            <a href="${watchUrl}" target="_blank">
                                <img src="${thumbUrl}" alt="Thumbnail">
                                <div class="play-overlay">
                                    <span>▶</span>
                                </div>
                            </a>
                        </div>
                    </div>
                `);
        // append to the container
        $container.append($videoDiv);
      });
      // hide <ul>, add container
      $ul.hide();
      $ul.after($container);
    } else {
      // remove container, show <ul>,
      $("#video-container").remove();
      $ul.show();
    }
    // toggle state
    isTransformed = !isTransformed;
  });
});