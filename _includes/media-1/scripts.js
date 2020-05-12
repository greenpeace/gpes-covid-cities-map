    document.addEventListener("DOMContentLoaded", function(event) {
        /* global L, document */

        /*
         * ATENCIÓN: Este mapa usa funcionalidades de ECMAScript 6
         * Debes convertir a ES2015 en https://babeljs.io/en/repl
         * O no funcionará en Internet Explorer
         */


        var containerEl = document.getElementById("map6");
        var elwidth = containerEl.offsetWidth;
        var mapheight = elwidth >= 550 ? 550 : 400;
        var zoomvalue = elwidth >= 550 ? 6 : 5;
        var bounds = new L.LatLngBounds(new L.LatLng(22, -24), new L.LatLng(55, 19.2));
        document.getElementById("map6").style.height = mapheight + "px";

        var osmap = L.map('map6', {
            scrollWheelZoom: false,
            maxBounds: bounds
        }).setView([39.85, -3], zoomvalue);

//        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
//            maxZoom: 8,
//            minZoom: 3,
//            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
//            id: 'mapbox.light'
//        }).addTo(osmap);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 7,
            minZoom: 3,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(osmap);
        
//        L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
//            maxZoom: 8,
//            minZoom: 3,
//            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
//        }).addTo(osmap);

        // punto
        var punto = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/ciudades-covid/punto.png?v=1',
            iconAnchor: [15, 27],
            popupAnchor: [5, -15]
        });
        
        // estrella
        var estrella = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/ciudades-covid/estrella.png',
            iconAnchor: [15, 15],
            popupAnchor: [5, -15]
        });

// Heello
{% for city in site.data[page.lang_file].media-1.cities %}
        //{{ city.name }}
        L.marker([ {{ city.lat }}, {{ city.long }}], {
            icon: {{ city.icon }}
        }).addTo(osmap).bindPopup(`
        <h3>{{ city.name }}</h3>
        
        {{ city.text }}
        <p><a target="_blank" href="{{ city.link }}">Enlace</a></p>
    `, {
            maxWidth: 280
        });

{% endfor %}

    });
