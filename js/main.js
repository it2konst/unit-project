// Выбираем элементы по селекторам
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const body = document.body;

// Добавляем прослушку клика на иконку мобильной навигации
navIcon.addEventListener('click', () => {
	// Переключаем активные классы для иконки, блока навигации и тела страницы
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
	body.classList.toggle('lock');
});

// Добавляем прослушку клика на блок навигации
nav.addEventListener('click', e => {
	// Если кликнули по самому блоку навигации, убираем активные классы
	if (e.target === nav) {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
		body.classList.remove('lock');
	}
});

// Находим все ссылки внутри блока мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обрабатываем каждую ссылку
navLinks.forEach(link => {
	// Добавляем прослушку клика на каждую ссылку
	link.addEventListener('click', () => {
		// Убираем активные классы при клике на ссылку
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
		body.classList.remove('lock');
	});
});

// Находим все ссылки с атрибутом href, содержащим "#"
const anchors = document.querySelectorAll('a[href*="#"]');

// Обрабатываем каждую такую ссылку
anchors.forEach(anchor => {
	// Добавляем прослушку клика на ссылку
	anchor.addEventListener('click', event => {
		// Предотвращаем стандартное поведение ссылки (переключение на якорь)
		event.preventDefault();

		// Получаем идентификатор блока из атрибута href ссылки
		const blockID = anchor.getAttribute('href').substring(1);

		// Прокручиваем к блоку с указанным идентификатором плавно
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
});

const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function (e) {
	if (!searchForm.classList.contains('search--visible')) {
		e.preventDefault();
		searchForm.classList.toggle('search--visible');
	}
})