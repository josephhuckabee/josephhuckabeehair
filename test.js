const photoUrls = [
    'ky1.jpeg', 'kimani.jpeg', 'lulu_orange.jpeg',
    'quinuse.jpg', 'angel2.webp', 'lena2.png', 
    'xiana_blue.jpg','tennis.jpeg', 'multibuzz.jpeg',
    'loorange.jpeg','lucy.jpeg','kyblonde.jpeg',
    'bluyel.jpeg','bloodred.jpeg','pinkspurps.jpg',
    'noah.jpeg', 'xiana2.jpg','quinn.jpeg',
    'orange.jpeg','whisp.jpg','yuck.jpeg',
    'rat_headshot.jpeg', 'em_hands.png', 'sam.jpeg',
'red_ghost1.jpeg', 'wet2.jpeg', 'banhs.jpeg',
    'taylor1.jpeg', 'julian.jpeg', 'jade.jpeg',
  'purpbre.jpeg','ruts.jpg','blugreen.jpg',
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