const date = new Date();
let month = date.getMonth();
const currentMonth = month;
let year = date.getFullYear();
const currentYear = year;

function verifyMonth() {
	if ((month == currentMonth) & (year == currentYear)) {
		previousButton.classList += ' disabled';
		previousButton.disabled = true;
	} else if ((month == 11) & (year > currentYear)) {
		nextButton.classList += ' disabled';
		nextButton.disabled = true;
	}
	if (month < 11) {
		nextButton.classList -= ' disabled';
		nextButton.disabled = false;
	} else if (month > currentMonth) {
		previousButton.classList -= ' disabled';
		previousButton.disabled = false;
	}
}

function createCalendar() {
	const head = document.getElementById('calendar-title');
	const date = new Date();
	const info = {
		currentDay: date.getDate(),
		firstDay: new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
		lastDay: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
		headerDay: `${date.toLocaleString('en-US', {
			month: 'long',
		})} ${String(date.getDate()).padStart(2, '0')}`,
	};

	document.getElementById('calendar-year').textContent = year;
	head.textContent = info.headerDay;

	const content = document.querySelector('.calendar__content');
	const days = [];

	for (let i = 0; i < info.firstDay; i++) {
		days.push('<span class="calendar__num"></span>');
	}
	for (let i = 1; i <= info.lastDay; i++) {
		days.push(
			i == info.currentDay
				? `<span class="calendar__num calendar__num--current">${i}</span>`
				: i < info.currentDay
				? `<span class="calendar__num">${i}</span>`
				: `<span class="calendar__num calendar__num--upcoming">${i}</span>`
		);
	}

	content.innerHTML = `<span class="calendar__day">SUN</span>
		<span class="calendar__day">MON</span>
		<span class="calendar__day">TUE</span>
		<span class="calendar__day">WED</span>
		<span class="calendar__day">THU</span>
		<span class="calendar__day">FRI</span>
		<span class="calendar__day">SAT</span>`;
	content.innerHTML += days.join('');
}

function changeMonth(month, year = new Date().getFullYear()) {
	if ((month == currentMonth) & (year == currentYear)) {
		createCalendar();
		return;
	}

	const head = document.getElementById('calendar-title');
	const content = document.querySelector('.calendar__content');
	const date = new Date(year, month);
	const info = {
		firstDay: new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
		lastDay: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
		monthDay: `${date.toLocaleString('en-US', {
			month: 'long',
		})}`,
	};

	document.getElementById('calendar-year').textContent = year;
	head.textContent = info.monthDay;
	const days = [];

	for (let i = 0; i < info.firstDay; i++) {
		days.push('<span class="calendar__num"></span>');
	}
	for (let i = 1; i <= info.lastDay; i++) {
		days.push(
			`<span class="calendar__num calendar__num--upcoming">${i}</span>`
		);
	}

	content.innerHTML = `<span class="calendar__day">SUN</span>
		<span class="calendar__day">MON</span>
		<span class="calendar__day">TUE</span>
		<span class="calendar__day">WED</span>
		<span class="calendar__day">THU</span>
		<span class="calendar__day">FRI</span>
		<span class="calendar__day">SAT</span>`;
	content.innerHTML += days.join('');
}

// Main

createCalendar();

const days = document.querySelectorAll('.calendar__num--upcoming');

days.forEach((day) => {
	day.addEventListener('click', () => {
		days.forEach((d) => d.classList.remove('calendar__num--selected'));
		day.classList += ' calendar__num--selected';
	});
});

const nextButton = document.getElementById('next');

nextButton.addEventListener('click', () => {
	if (month < 11) {
		month += 1;
	} else {
		month = 0;
		year += 1;
	}
	changeMonth(month, year);
	verifyMonth();

	const days = document.querySelectorAll('.calendar__num--upcoming');

	days.forEach((day) => {
		day.addEventListener('click', () => {
			days.forEach((d) => d.classList.remove('calendar__num--selected'));
			day.classList += ' calendar__num--selected';
		});
	});
});

const previousButton = document.getElementById('previous');

previousButton.addEventListener('click', () => {
	if (month == 0) {
		month = 11;
		year -= 1;
	} else if (month > currentMonth || year >= currentYear) {
		month -= 1;
	}
	changeMonth(month, year);
	verifyMonth();

	const days = document.querySelectorAll('.calendar__num--upcoming');

	days.forEach((day) => {
		day.addEventListener('click', () => {
			days.forEach((d) => d.classList.remove('calendar__num--selected'));
			day.classList += ' calendar__num--selected';
		});
	});
});
