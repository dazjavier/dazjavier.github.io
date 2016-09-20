window.onload = function() {
	var options = {};
	var innerWidth = window.innerWidth;
	if (innerWidth <= 320) { options = setMobileOptions(); }
	if (innerWidth >= 480) { options = setNormalOptions(); }
	console.log(innerWidth);
	Particles.init(options);
  
};
$('a').css({'z-index': '5', 'color': 'red'});

function setMobileOptions() {
	var o = {
		selector: '#myCanvas',
    color: '#3a9148',
    connectParticles: true,
    minDistance: 50,
    maxParticles: 50
	};

	return o;
}

function setNormalOptions() {
	var o = {
		selector: '#myCanvas',
	  color: '#3a9148',
	  connectParticles: true,
	  minDistance: 150,
	  maxParticles: 100
	};

	return o;
}