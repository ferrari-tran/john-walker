'use strick';

new WOW().init();
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	offset: 50
});

function submitForm(form) {
	alert('Bạn đã đăng ký thành công!');
}

(function () {
	var hamburger = document.getElementsByClassName('menu-wrapper');
	hamburger[0].onclick = function(e) {
		var button = this.getElementsByClassName('hamburger-menu')[0];
		button.classList.toggle('animate');
	};
})();
