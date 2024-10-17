const photoUrls = [
    'ky1.jpeg', 'kimani.jpeg', 'lulu_orange.jpeg',
    'quinuse.jpg', 'angel2.webp', 'lena2.png', 
    'loorange.jpeg','lucy.jpeg','kyblonde.jpeg',
    'xiana_blue.jpg','tennis.jpeg', 'multibuzz.jpeg',
    'noah.jpeg', 'xiana2.jpg','quinn.jpeg',
    'bluyel.jpeg','bloodred.jpeg','pinkspurps.jpg',
    'rat_headshot.jpeg', 'em_hands.png', 'sam.jpeg',
   'orange.jpeg','bloodred.jpeg','pinkspurps.jpg',
    'taylor1.jpeg', 'julian.jpeg', 'jade.jpeg',
    'red_ghost1.jpeg', 'wet2.jpeg', 'banhs.jpeg',
    'howard1.jpeg','joe.jpg','stan.jpeg',
    'lena1.png', 'greenshot.jpg','leoglass.jpeg',
    'dreammer.jpeg', 'dusty.jpeg', 'art.jpeg',
    'morgan4.jpg','mckenna.png', 'xiana.jpg', 
    'xy.jpeg', 'richie.jpeg','ky8.jpeg',
    'nour.jpeg','jazelle.jpg', 'lenacover.png',
   
    
    
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