const images=['assets/img1.jpg','assets/img2.jpg','assets/img3.jpg']
let currentIndex=0;
function updateImage(){
    document.getElementById('slider').src=images[currentIndex];
    }
    function nextImage() {
        currentIndex =(currentIndex +1) % images.length;
        updateImage();
    }
    function prevImage(){
        currentIndex =(currentIndex-1 +images.length) % images.length;
        updateImage();
    }