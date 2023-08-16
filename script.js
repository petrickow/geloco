var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


function oppdaterKoordinater() {
    navigator.geolocation.getCurrentPosition((position) => {
        var gps = JSON.stringify(cloneAsObject(position));
        console.log(gps);
        document.getElementById("koordinater").innerHTML = gps
    });
}
oppdaterKoordinater();

function cloneAsObject(obj) {
    if (obj === null || !(obj instanceof Object)) {
        return obj;
    }
    var temp = (obj instanceof Array) ? [] : {};
    for (var key in obj) {
        temp[key] = cloneAsObject(obj[key]);
    }
    return temp;
}