export default function InputReader(element=window) {
		const difference = (a1, a2) => a1.filter(x => !a2.includes(x));
	window.__internal = {
		down: [],
		currentUp: [],
		currentDown: [],
		currentMouse: {x: 0, y: 0},
		mouse: {x: 0, y: 0}
	};
	element.addEventListener('keydown', e => {
		if (e.repeat) {
			return;
		}
		if (!__internal.down.includes(e.key)) {
		__internal.down.push(e.key);
		}
	});
	element.addEventListener('keyup', e => {
		if (e.repeat) {
			return;
		}
		if (__internal.down.includes(e.key)) {
		__internal.down = __internal.down.filter(value => value !== e.key);
		}
	});
	element.addEventListener('mousedown', e => {
		let mb;
		switch(e.button) {
			case 0:
				mb = 'MouseLeft';
				break;
			case 1:
				mb = 'MouseMiddle';
				break;
			case 2:
				mb = 'MouseRight';
				break;
			case 3:
				mb = 'MouseBack';
				break;
			case 4:
				mb = 'MouseForward';
				break;
		}
		if(!__internal.down.includes(mb)) __internal.down.push(mb);
	});
	element.addEventListener('mouseup', e => {
		let mb;
		switch(e.button) {
			case 0:
				mb = 'MouseLeft';
				break;
			case 1:
				mb = 'MouseMiddle';
				break;
			case 2:
				mb = 'MouseRight';
				break;
			case 3:
				mb = 'MouseBack';
				break;
			case 4:
				mb = 'MouseForward';
				break;
		}
		__internal.down = __internal.down.filter(value => value !== mb);
	});
	element.addEventListener('mousemove', e => {
		__internal.mouse.x = e.offsetX;
		__internal.mouse.y = e.offsetY;
	});
	return {
		down: function(key) {
			return __internal.currentDown.includes(key);
		},
		up: function(key) {
			return __internal.currentUp.includes(key);
		},
		step: function() {
			__internal.currentUp = difference(__internal.currentDown, __internal.down);
			__internal.currentDown = __internal.down;
			__internal.currentMouse = __internal.mouse;
		},
		mouse: function(which='both') {
			switch(which) {
				case 'both':
					return __internal.currentMouse;
				case 'x':
					return __internal.currentMouse.x;
				case 'y':
					return __internal.currentMouse.y;
				default:
					throw `Argument "which" requires one of "x", "y", "both", or none at all, instead recieved "${which}"`;
					break;
			}
		}
	};
}