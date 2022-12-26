
// enter page number from 2 - 9889
// regex to limit number span
pageNum > 1 || < 9897
// click submit
// get tiled page of art thumbnail 
// click on each tile to make a popup of the artwork image, name, artist, description
// function to render the tile
// 

font-family: 'Bitter', serif;
font-family: 'Maven Pro', sans-serif;


Main page loads with: 
 - first page of API data
 - 'next page' as the page number is too low to load 'prev page'
   - after clicking next page:
     - page count counts forward
     - 'prev page' button populates
      - click 'prev page':
        - page count counts backward
 - search form to skip to a specific page.

Each image tile--click:
 - A large tile opens with a large image and details over a white background
 - the tiles and regular site area blur together

SETPAGENUMBER write a function to make the page number of the api and load that function as  a param when running the post


GETPOSTS write a function that retrieves and stores the api data

GETNEXTPAGE count up SETPAGENUMBER then GETPOSTS

GETPREVPAGE count down SETPAGENUMBER then GETPOSTS

MASTERAPIDATA make one master function to store the api data in a variable
 - how to display it? in the current getPosts?

 Onload just getPosts with a page number of 0 or 1--they're the same page

 (Whenever the page number is 0 or 1 the prev button should be hidden.)

post.title
title of work
post.date_end
year completed
post.artist_titles
name of artist

post.artist_display
example "Attributed to Girolamo Fagiuolo (Italian, c. 1527–1574) after Domenico Giunti (Italian, 1505-1560)"

Photo by <a href="https://unsplash.com/@kriztheman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christopher Alvarenga</a> on <a href="https://unsplash.com/s/photos/chicago?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  

hidden div inner html to be pasted back inside once the new PopupDetailTile is working
                  <div><img id="api-image-clicked" src="${clickedName}" name='get 2nd attribute name'></div>


                <div><p class="popupImageCaption"><em>hi</em>,</p></div>
                <div><p></p></div>