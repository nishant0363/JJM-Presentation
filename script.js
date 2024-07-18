document.addEventListener('DOMContentLoaded', function() {
    const imagePaths = {
        Arsenic: [
            "images/Arsenic/image1.png",
            "images/Arsenic/image2.png",
            "images/Arsenic/image3.png",
            "images/Arsenic/image4.png",
            "images/Arsenic/image5.png",
            "images/Arsenic/image6.png",
            "images/Arsenic/image7.png",
            "images/Arsenic/image8.png",
            "images/Arsenic/image9.png",
            "images/Arsenic/image10.png",
            "images/Arsenic/image11.png",
            "images/Arsenic/image12.png",
            "images/Arsenic/image13.png"
        ],
        Lead: [
            "images/Lead/image1.jpg",
            "images/Lead/image2.jpg",
            // Add paths for Lead images
        ],
        Mercury: [
            "images/Mercury/image1.jpg",
            "images/Mercury/image2.jpg",
            // Add paths for Mercury images
        ],
        Nitrate: [
            "images/Nitrate/image1.jpg",
            "images/Nitrate/image2.jpg",
            // Add paths for Nitrate images
        ],
        Chromium: [
            "images/Chromium/image1.jpg",
            "images/Chromium/image2.jpg",
            // Add paths for Chromium images
        ],
        Fluoride: [
            "images/Fluoride/image1.jpg",
            "images/Fluoride/image2.jpg",
            // Add paths for Fluoride images
        ],
        Cyanide: [
            "images/Cyanide/image1.jpg",
            "images/Cyanide/image2.jpg",
            // Add paths for Cyanide images
        ],
        Pesticides: [
            "images/Pesticides/image1.jpg",
            "images/Pesticides/image2.jpg",
            // Add paths for Pesticides images
        ],
        Herbicides: [
            "images/Herbicides/image1.jpg",
            "images/Herbicides/image2.jpg",
            // Add paths for Herbicides images
        ],
        Petroleum: [
            "images/Petroleum/image1.jpg",
            "images/Petroleum/image2.jpg",
            // Add paths for Petroleum images
        ],
        Pharmaceuticals: [
            "images/Pharmaceuticals/image1.jpg",
            "images/Pharmaceuticals/image2.jpg",
            // Add paths for Pharmaceuticals images
        ]
    };
    
    let index = 0;
    let currentPollutant = 'Arsenic';
    const sliderImage = document.getElementById('slider-image');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const pollutantSelect = document.getElementById('pollutant-select');
    
    function updateImage() {
        const images = imagePaths[currentPollutant];
        sliderImage.src = images[index];
        sliderImage.alt = `Image ${index + 1}`;
    }
    
    nextButton.addEventListener('click', function() {
        const images = imagePaths[currentPollutant];
        index = (index + 1) % images.length;
        updateImage();
    });

    prevButton.addEventListener('click', function() {
        const images = imagePaths[currentPollutant];
        index = (index - 1 + images.length) % images.length; // Ensure index wraps around correctly
        updateImage();
    });
    
    pollutantSelect.addEventListener('change', function() {
        currentPollutant = pollutantSelect.value;
        index = 0;
        updateImage();
    });
    
    updateImage();
});
