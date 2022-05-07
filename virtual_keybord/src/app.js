const header = document.createElement('h1');
const textarea = document.createElement('textarea');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const kbd = document.createElement('section');

header.innerHTML = 'Virtual Keybord';
header.classList.add('header');

textarea.classList.add('text');

p1.classList.add('p');
p1.innerHTML = 'Change language: left SHIFT + ALT';

p2.classList.add('p');
p2.innerHTML = 'Made for: OS Windows';

p3.classList.add('p');
p3.innerHTML = 'Click textarea to open keyboard';

document.querySelector('body').append(header);
document.querySelector('body').append(textarea);
document.querySelector('body').append(p1);
document.querySelector('body').append(p2);
document.querySelector('body').append(p3);

p3.style.fontSize = '52px';
p3.style.fontWeight = 'bold';
p3.style.fontStyle = 'italic';

const keybord = {
	elements: {
		main: null,
		keysContainer: null,
		keys: [],
	},

	eventHendlers: {
		oninput: null,
		onclose: null,
	},

	properties: {
		value: '',
		capslock: false,
		shiftPres: false,
	},

	init() {
		this.elements.main = document.createElement('div');
		this.elements.keysContainer = document.createElement('div');

		this.elements.main.classList.add('kbd');
		this.elements.keysContainer.classList.add('kbd-keys');
		this.elements.keysContainer.appendChild(this.createKeys());

		this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');

		this.elements.main.appendChild(this.elements.keysContainer);
		document.body.appendChild(this.elements.main);

		const text = document.querySelector('textarea');

		this.show(text.value, (currentValue) => {
			text.value = currentValue;
		});
	},

	keysLayout: [
		'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
		'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
		'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
		'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright', 'up',
		'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
	],

	createKeys() {
		const fragment = document.createDocumentFragment();

		const createIcon = (iconName) => `<i class="material-icons">${iconName}</i>`;

		this.keysLayout.forEach((key, i) => {
			const keyElem = document.createElement('button');
			const insertBR = ['backspace', '\\', 'enter', 'up'].indexOf(key) !== -1;

			keyElem.setAttribute('tupe', 'button');
			keyElem.setAttribute('keyname', key);
			keyElem.setAttribute('lowerCaseName', key.toUpperCase());
			keyElem.classList.add('key');
			// console.log(keyElem);
			switch (key) {
			case 'backspace':
				keyElem.classList.add('middle', 'backspase');
				keyElem.innerHTML = createIcon('backspace');

				keyElem.addEventListener('click', () => {
					this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
					this.triggerEvent('oninput');
				});

				document.addEventListener('keydown', (e) => {
					if(e.code === 'Backspace') {
						document.querySelector('.backspase').classList.add('active');
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
						this.triggerEvent('oninput');
					}
				});

				document.addEventListener('keyup', (e) => {
					if(e.code === 'Backspace') {
						document.querySelector('.backspase').classList.remove('active');
					}
				});

				break;

			case 'capslock':
				keyElem.classList.add('middle', 'light', 'capslock');
				keyElem.innerHTML = '<i>CapsLock</i>';

				keyElem.addEventListener('click', () => {
					this.toogleCapsLock();
					keyElem.classList.toggle('_active', this.properties.capslock);
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'CapsLock') {
						// document.querySelector('.capslock').classList.toggle('active');
						this.toogleCapsLock();
						keyElem.classList.toggle('_active', this.properties.capslock);
					}
				});

				break;

			case 'enter':
				keyElem.classList.add('middle', 'enter');
				keyElem.innerHTML = createIcon('keyboard_return');

				keyElem.addEventListener('click', () => {
					this.properties.value += '\n';
					this.triggerEvent('oninput');
				});

				document.addEventListener('keydown', (e) => {
					if(e.code === 'Enter') {
						document.querySelector('.enter').classList.add('active');
						this.properties.value += '\n';
						this.triggerEvent('oninput');
					}
				});

				document.addEventListener('keyup', (e) => {
					if(e.code === 'Enter') {
						document.querySelector('.enter').classList.remove('active');
					}
				});

				break;

			case ' ':
				keyElem.classList.add('big', 'space');
				keyElem.innerHTML = createIcon('space_bar');
				keyElem.setAttribute('keyname', 'Space');

				keyElem.addEventListener('click', () => {
					this.properties.value += ' ';
					this.triggerEvent('oninput');
				});

				document.addEventListener('keydown', (e) => {
					if(e.code === 'Space') {
						document.querySelector('.space').classList.add('active');
						this.properties.value += ' ';
						this.triggerEvent('oninput');
					}
				});

				document.addEventListener('keyup', (e) => {
					if(e.code === 'Space') {
						document.querySelector('.space').classList.remove('active');
					}
				});

				break;

			case 'left':
				keyElem.classList.add('key', 'left');
				keyElem.innerHTML = createIcon('arrow_left');
				keyElem.style.width = '60px';

				keyElem.addEventListener('click', () => {
					this.properties.value += '◄';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowLeft') {
						document.querySelector('.left').classList.add('active');
						this.properties.value += '◄';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowLeft') {
						document.querySelector('.left').classList.remove('active');
					}
				});

				break;

			case 'right':
				keyElem.classList.add('key', 'right');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.width = '60px';

				keyElem.addEventListener('click', () => {
					this.properties.value += '►';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowRight') {
						document.querySelector('.right').classList.add('active');
						this.properties.value += '►';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowRight') {
						document.querySelector('.right').classList.remove('active');
					}
				});

				break;

			case 'up':
				keyElem.classList.add('key', 'up');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.transform = 'rotate(-90deg)';
				keyElem.style.width = '60px';

				keyElem.addEventListener('click', () => {
					this.properties.value += '▲';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowUp') {
						document.querySelector('.up').classList.add('active');
						this.properties.value += '▲';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowUp') {
						document.querySelector('.up').classList.remove('active');
					}
				});

				break;

			case 'down':
				keyElem.classList.add('key', 'down');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.transform = 'rotate(90deg)';
				keyElem.style.width = '60px';

				keyElem.addEventListener('click', () => {
					this.properties.value += '▼';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowDown') {
						document.querySelector('.down').classList.add('active');
						this.properties.value += '▼';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowDown') {
						document.querySelector('.down').classList.remove('active');
					}
				});

				break;

			case 'shiftleft':
				keyElem.classList.add('middle', 'shift');
				keyElem.innerHTML = '<i>Shift</i>';

				let count = 0;
				keyElem.addEventListener('click', () => {
					count++;
					keyElem.classList.add('active');
					this.toogleCapsLock();
					this.triggerEvent('oninput');
					if(count % 2 === 0) {
						keyElem.classList.remove('active');
					}
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ShiftLeft') {
						this.shiftPres = true;
						if(e.repeat) {
							e.stopPropagation();
    						e.preventDefault();
						} else {
							document.querySelectorAll('.shift')[0].classList.add('active');
							this.toogleCapsLock();
							this.triggerEvent('oninput');
						}
					}
					if(e.key === keyElem.getAttribute('keyname') || e.key === keyElem.getAttribute('lowerCaseName') && this.shiftPres) {
						this.shiftPres = false;
						keyElem.classList.add('active');
						this.properties.value += this.properties.capslock ? key.toUpperCase() : key;
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ShiftLeft') {
						document.querySelectorAll('.shift')[0].classList.remove('active');
						this.toogleCapsLock();
						this.triggerEvent('oninput');
					}
				});

				break;

			case 'shiftright':
				keyElem.classList.add('middle', 'shift');
				keyElem.innerHTML = '<i>Shift</i>';
				// let count = 0;
				keyElem.addEventListener('click', () => {
					// count++;
					keyElem.classList.add('active');
					this.toogleCapsLock();
					this.triggerEvent('oninput');
					if(count % 2 === 0) {
						keyElem.classList.remove('active');
					}
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ShiftRight') {
						this.shiftPres = true;
						if(e.repeat) {
							e.stopPropagation();
    						e.preventDefault();
						} else {
							document.querySelectorAll('.shift')[1].classList.add('active');
							this.toogleCapsLock();
							this.triggerEvent('oninput');
						}
					}
					if(e.key === keyElem.getAttribute('keyname') && this.shiftPres) {
						this.shiftPres = false;
						keyElem.classList.add('active');
						this.properties.value += this.properties.capslock ? key.toUpperCase() : key;
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ShiftRight') {
						document.querySelectorAll('.shift')[1].classList.remove('active');
						this.toogleCapsLock();
						this.triggerEvent('oninput');
					}
				});

				break;

			case 'alt':
				keyElem.classList.add('key');
				keyElem.innerHTML = '<i>Alt</i>';

				keyElem.addEventListener('click', () => {

				});

				break;

			case 'ctrl':
				keyElem.classList.add('key');
				keyElem.innerHTML = '<i>Ctrl</i>';

				keyElem.addEventListener('click', () => {

				});

				break;

			case 'tab':
				keyElem.classList.add('middle', 'tab');
				keyElem.innerHTML = '<i>Tab</i>';

				keyElem.addEventListener('click', () => {
					this.properties.value += ' ' + ' ';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'Tab') {
						document.querySelector('.tab').classList.add('active');
						this.properties.value += ' ' + ' ';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'Tab') {
						document.querySelector('.tab').classList.remove('active');
					}
				});

				break;

			default:
				keyElem.textContent = key.toLowerCase();

				keyElem.addEventListener('click', () => {
					this.properties.value += this.properties.capslock ? key.toUpperCase() : key;
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.key === keyElem.getAttribute('keyname') || e.key === keyElem.getAttribute('lowerCaseName')) {
						keyElem.classList.add('active');
						this.properties.value += this.properties.capslock ? key.toUpperCase() : key;
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.key === keyElem.getAttribute('keyname') || e.key === keyElem.getAttribute('lowerCaseName')) {
						keyElem.classList.remove('active');
					}
				});

				break;
			}

			fragment.appendChild(keyElem);

			if(insertBR) {
				fragment.appendChild(document.createElement('br'));
			}
		});

		return fragment;
	},

	triggerEvent(handlerName) {
		if(typeof this.eventHendlers[handlerName] === 'function') {
			this.eventHendlers[handlerName](this.properties.value);
		}
	},

	toogleCapsLock() {
		this.properties.capslock = !this.properties.capslock;

		for (const key of this.elements.keys) {
			if(key.childElementCount === 0) {
				key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
			}
		}
	},

	show(initialValue, oninput, onclose) {
		this.properties.value = initialValue || '';
		this.eventHendlers.oninput = oninput;
		this.eventHendlers.onclose = onclose;
		this.elements.main.classList.remove('_hide');
		p3.style.display = 'none';
	},

	hide() {
		this.properties.value = '';
		this.eventHendlers.oninput = oninput;
		this.eventHendlers.onclose = onclose;
		this.elements.main.classList.add('_hide');
	},
};

window.addEventListener('DOMContentLoaded', () => {
	keybord.init();
});
