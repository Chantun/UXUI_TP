const appointment = document.getElementById('appointment-form');
const search = document.getElementById('search-form');
const contact = document.getElementById('contact-form');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('query');

searchButton.addEventListener('click', () => {
	searchInput.style.display == 'none'
		? (searchInput.style.display = 'block')
		: searchButton.setAttribute('type', 'submit');
});

appointment.addEventListener('submit', (e) => {
	e.preventDefault();
	const data = new FormData(appointment);
	const values = {
		day: data.get('day'),
		time: data.get('time'),
		name: data.get('name'),
		email: data.get('email'),
		phone: data.get('phone'),
		service: data.get('service'),
	};

	if (values.day == '') {
		document.getElementById('calendar-error').textContent =
			'Debe seleccionar una fecha valida.';
		console.error('Debe seleccionar una fecha valida.');
		return;
	}

	if (values.time == null) {
		document.getElementById('radio-error').textContent =
			'Debe seleccionar un horario.';
		console.error('Debe seleccionar un horario.');
		return;
	}

	console.log('Appointment FormData:');
	console.log(values);
	document.getElementById('radio-error').textContent = '';
	document.getElementById('calendar-error').textContent = '';
});

search.addEventListener('submit', (e) => {
	e.preventDefault();
	const value = search.query.value;
	console.log(`Buscando: ${value}`);
});

contact.addEventListener('submit', (e) => {
	e.preventDefault();
	const value = contact.email.value;
	console.log(`Contacto: ${value}`);
});
