// Initialize and add the map
function initMap() {
    const company = { lat: 50.073658, lng: 14.418540 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: company,
    });
    const marker = new google.maps.Marker({
      position: company,
      map: map,
    });
  }
  
  window.initMap = initMap;