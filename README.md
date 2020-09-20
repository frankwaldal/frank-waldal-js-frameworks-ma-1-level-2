# jQuery Image Gallery
### by Frank Waldal

## A lightweight jQuery image gallery with zoom and flip through images.

You will need to link jQuery to your HTML-file, you link this at the end of your body-tag. You can go here to find the newest version [CDN](https://cdnjs.com/libraries/jquery).

After that you need to link `styles/imgGallery.css` from this project in your head-tag, and `js/imgGallery.js` from this project at the end of your body-tag, it is important this is linked **after** jQuery.


You need to add your images to the HTML in this format:
```
<div class="imageContainer">
    <div class="imageWrapper">
        <img />
        <p class="imageText"></p>
    </div>
    <div class="imageWrapper">
        <img />
        <p class="imageText"></p>
    </div>
</div>
```

You wrap the gallery in a div with classname "imageContainer". Each image is wrapped in a div with classname "imageWrapper". You can also add information text to each image, that needs to be added in a p with classname "imageText". This needs to be **after** the image.
Use the `example.html` file in the project as reference.
