function initMap() {
	L.mapquest.key = 'WXBfAdOBUf1vIAehdxj2ltt3e5r8TZ6B';

	var map = L.mapquest.map('map', {
		center: [32.879353, -117.2311],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}