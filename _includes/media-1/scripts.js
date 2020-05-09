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
        var bounds = new L.LatLngBounds(new L.LatLng(28, -24), new L.LatLng(55, 19.2));
        document.getElementById("map6").style.height = mapheight + "px";

        var osmap = L.map('map6', {
            scrollWheelZoom: false,
            maxBounds: bounds
        }).setView([40.1, -3], zoomvalue);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
            maxZoom: 7,
            minZoom: 3,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);

        // pos1
        var pos1 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/1.png',
            iconAnchor: [30, 55],
            popupAnchor: [5, -50]
        });

        // pos2
        var pos2 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/2.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

        // pos3
        var pos3 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/3.png',
            iconAnchor: [30, 55],
            popupAnchor: [5, -50]
        });

        // pos4
        var pos4 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/4.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

        // pos5
        var pos5 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/5.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

        // pos6
        var pos6 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/6.png',
            iconAnchor: [30, 55],
            popupAnchor: [5, -50]
        });

        // pos7
        var pos7 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/7.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

        // pos8
        var pos8 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/8.png',
            iconAnchor: [30, 55],
            popupAnchor: [5, -50]
        });

        // pos9
        var pos9 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/9.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

        // pos10
        var pos10 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/10.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

        // pos11
        var pos11 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/11.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

        // pos12
        var pos12 = L.icon({
            iconUrl: 'https://storage.googleapis.com/gpes-static/neopolitan-cities-map/12.png',
            iconAnchor: [30, 55],
            popupAnchor: [0, -45]
        });

// Heello
{% for city in site.data[page.lang_file].media-1.cities %}
        //{{ city.name }}
        L.marker([ {{ city.lat }}, {{ city.long }}], {
            icon: {{ city.icon }}
        }).addTo(osmap).bindPopup(`
        <h3>{{ city.name }} <span class="scoreCity {{ city.color }}">{{ city.score }}</span></h3>
        
        {{ city.text }}
    `, {
            maxWidth: 280
        });

{% endfor %}

    });
