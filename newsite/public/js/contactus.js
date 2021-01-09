$(document).ready(function () {
  $("#navBar").load("/components/navbar");
  $("#footer").load("/components/footer");
 var map = L.map('mapid').setView([37.773972, -122.431297], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.773972, -122.431297]).addTo(map)
    .bindPopup('Our location')
    .openPopup();
});