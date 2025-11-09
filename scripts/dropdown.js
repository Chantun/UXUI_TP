const dropdowns = document.querySelectorAll('.dropdown');
const selections = document.querySelectorAll('.dropdown__element--selection');

function openDropdown(dropdown) {
	const list = dropdown.querySelector('.dropdown__items');
	dropdown.classList += ' dropdown--open';
	list.style.display = 'block';
}

function closeDropdown(dropdown) {
	const list = dropdown.querySelector('.dropdown__items');
	dropdown.classList.remove('dropdown--open');
	list.style.display = 'none';
}

dropdowns.forEach((drop) => {
	drop.addEventListener('click', () => {
		drop.classList.contains('dropdown--open')
			? closeDropdown(drop)
			: openDropdown(drop);
	});
});

selections.forEach((selection) => {
	selection.addEventListener('click', () => {
		const input = selection.parentElement.parentElement.previousElementSibling;
		input.setAttribute('value', selection.textContent);
	});
});
