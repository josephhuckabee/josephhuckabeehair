const photoUrls = [
    'howard1.jpeg','cat1.jpeg','heather_1.jpg',
    'joe.jpg','ky1.jpeg','loorange.jpeg',
    'lucy.jpeg','lulu_orange.jpeg','morgan.jpg',
    'pink1.jpeg','pinkspurps.jpg','sage1.jpeg',
    'sage1.jpeg','sage1.jpeg','sage1.jpeg',
    'sage1.jpeg','sage1.jpeg','sage1.jpeg',
];

// Function to display the photos
function displayPhotos() {
    const gallery = document.getElementById('photo-gallery');  // Get the div
    gallery.innerHTML = '';  // Clear any previous content

    // Loop through each photo URL in the array
    photoUrls.forEach(url => {
        const img = document.createElement('img');  // Create an img element
        img.src = url;  // Set the image source to the current URL
        gallery.appendChild(img);  // Append the img element to the div
    });
}

// Call the function to display the photos
displayPhotos();