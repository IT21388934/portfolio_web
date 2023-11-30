// Function to update the progress bar width
// function updateProgressBar() {
//   const winScroll =
//     document.documentElement.scrollTop || document.body.scrollTop;
//   const height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   const scrolled = (winScroll / height) * 100;

//   document.getElementById("progress-bar").style.width = `${scrolled}%`;
// }

// // Event listener to update the progress bar on scroll
// window.addEventListener("scroll", updateProgressBar);

// -----------scrolling to section---------

function smoothScrollTo(target, event) {
  event.preventDefault(); // Prevent the default anchor behavior

  const section = document.getElementById(target);
  const sectionOffset = section.offsetTop;

  window.scrollTo({
    top: sectionOffset,
    behavior: "smooth",
  });
}

// -----------------------map--------------------------
// // Initialize and add the map
// function initMap() {
//   // Create a map object
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 7.3434, lng: -12.345 }, // Replace with desired latitude and longitude
//     zoom: 10, // Adjust the zoom level as needed
//   });
// }

// // Load the Google Maps JavaScript API
// function loadScript() {
//   const script = document.createElement("script");
//   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
//   script.defer = true;
//   script.async = true;
//   document.head.appendChild(script);
// }

// // Call the loadScript function to load the Google Maps API
// loadScript();
