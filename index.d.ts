interface coordinate {
	x: number;
	y: number;
}

interface Reader {
	/**
		* Get whether a key is down.
		* @param {string} key - The key or button to check.
		* @returns {boolean}
	*/
	down: function down(key: string): boolean;
	/**
		* Get whether a key has been released this timestep.
		* @param {string} key - The key or button to check.
		* @returns {boolean}
	*/
	up: function up(key: string): boolean;
	/**
		* Steps forward and updates stuff.
		* @returns {none}
	*/
	step: function step(): none;
	/**
		* Gets the position of the mouse.
		* @param {string} which Whether to return the x, y, or both coordinates.
		* @return {number | coordinate}
	*/
	mouse: function mouse(which?: string): number | coordinate | none;
}
/**
	* Create a new Reader
	* @param {HTMLElement} element The HTML element to get input from, defaults to window.
	* @constructor
	* @returns {Reader}
*/
export default function InputReader(element?: HTMLElement): Reader;