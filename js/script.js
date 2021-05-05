var map;


map = new google.maps.Map(document.getElementById("map"), {
	center: {lat: 47.8783, lng: -90.6295}, 
	zoom: 10, 
});

const brownbag = new google.maps.Marker ({
	position: {lat:41.9435028, lng: -87.6717093},
	map,
	animation: google.maps.Animation.DROP,
	title: "Brown Bag",
});

const iit = new google.maps.Marker ({
	position: {lat: 41.83429528028157, lng: -87.62756505022413},
	map,
	animation: google.maps.Animation.DROP,
	title: "IIT", 
});

const: Noblestreet = new google.maps.Marker ({
	position: {lat: 41.9000524, lng: -87.6628151}, 
	map,
	animation: google.maps.Animation.DROP,
	title: "Noble Street College Prep"
});
} 

