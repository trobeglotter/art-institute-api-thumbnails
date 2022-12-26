// Store Art Institute of Chicago core API
export let url = 'https://api.artic.edu/api/v1/artworks';

// Loop into the API and separate each image post into html

let num;
export let getPosts = (num) => {
    let placeApiData = document.getElementById('api-data');

    let completeUrl = url + '?page=' + num;
    fetch(completeUrl)
        .then(res => res.json())
        .then(data => {
            let artInstChiApiJson = data.data;
            let thumbnailHtml = '';
            let hiddenDivHtml = '';
            artInstChiApiJson.forEach((post) => {
                let resultImgs = "https://www.artic.edu/iiif/2/" + post.image_id + "/full/843,/0/default.jpg";

                // THIS IS JUST THE THUMBNAIL
                thumbnailHtml +=
                    `
                <div id="api-image-wrapper"><img id="api-img-data" src="${resultImgs}" alt="${post.title} ${post.date_end} ${post.artist_titles}" name='${post.id}'>
                </div>
                `;
                placeApiData.innerHTML = thumbnailHtml;
                // THIS IS JUST THE THUMBNAIL


                // this div created in thumbnailHtml is the image and fillPopup runs when it is clicked
                let apiImageData = document.getElementById('api-img-data');
                // extracts the id from the clicked image
                let clickedName = apiImageData.getAttribute('name');

                let PopupDetailTiles = function (id, title, date, artistTitle) {
                    this.id = id;
                    this.title = title;
                    this.date = date;
                    this.artistTitle = artistTitle;
                }
                let PopupDetailTile = new PopupDetailTiles(post.id, post.title, post.date_end, post.artist_titles);
                console.log(PopupDetailTile);

                // TRY NESTING THIS HTML CONSTRUCTOR INSIDE THE POPUPDETAILSTILE CONSTRUCTOR
                // https://www.youtube.com/watch?v=SrhHszXkMRU&t=76s
                // HIDDEN TILE
                let detailTile = document.getElementById('detail-tile');
                hiddenDivHtml += `
                <div id="close-popup">X</div>
                <div><img id="api-image-clicked" src="${resultImgs}" name='get 2nd attribute name'></div>

                 `;
                detailTile.innerHTML = hiddenDivHtml;


                function fillPopup(e) {
                    onload = e.preventDefault();
                    console.log("PopupDetailTile clicked in fillPopup");
                    console.log(clickedName);

                    // FILLPOPUP SHOULD ONLY CHANGE THE VISIBILITY
                    detailTile.style.visibility = "visible";

                    let closePopup = document.getElementById('close-popup');
                    closePopup.addEventListener('click', function () {
                        detailTile.style.visibility = "hidden";
                        // clear out the div on close by resetting the html in detailTile
                        hiddenDivHtml = " ";
                    })
                }


                apiImageData.addEventListener('click', fillPopup);

            });
        })
}


