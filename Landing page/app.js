// ScrollTop
const scrollTop = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTop.classList.remove('hidden');
	} else {
		scrollTop.classList.add('hidden');
	}
});

scrollTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
	});
});

// Nav active
const links = document.querySelectorAll('nav a');
const getActiveLink = localStorage.getItem('link') || 'Home';

function activeLink(linkName) {
	links.forEach((link) => {
		if (linkName !== link.textContent) {
			link.classList.remove('active');
		} else {
			link.classList.add('active');
		}
	});
}

links.forEach((link) => {
	link.addEventListener('click', (e) => {
		localStorage.setItem('link', e.target.textContent);
		activeLink(e.target.textContent);
	});
});

activeLink(getActiveLink);

window.addEventListener('scroll', () => {
	if (window.scrollY < 472) {
		activeLink('Home');
		localStorage.setItem('link', 'Home');
	} else if (window.scrollY < 1672) {
		activeLink('About');
		localStorage.setItem('link', 'About');
	} else if (window.scrollY < 5588) {
		activeLink('Pages');
		localStorage.setItem('link', 'Pages');
	} else {
		activeLink('Contact Us');
		localStorage.setItem('link', 'Contact Us');
	}
});
