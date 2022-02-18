/** Just used for mouse coordinates, sorta unnecessary but ¯\_(ツ)_/¯ */
export interface coordinate {
	x: number;
	y: number;
}
/** Not really necessary but do I care? ¯\_(ツ)_/¯ */
export interface Reader {
	/**
		* Get whether a key is down.
		* @param {string} key - The key or button to check.
		* @returns {boolean}
	*/
	down: function(key: string): boolean;
	/**
		* Get whether a key has been released this timestep.
		* @param {string} key - The key or button to check.
		* @returns {boolean}
	*/
	up: function(key: string): boolean;
	/**
		* Steps forward and updates stuff.
		* @returns {none}
	*/
	step: function(): none;
	/**
		* Gets the position of the mouse.
		* @param {string} which Whether to return the x, y, or both coordinates.
		* @return {number | coordinate}
	*/
	mouse: function(which?: string): number | coordinate | none;
}
/**
	* Create a new Reader
	* @param {HTMLElement} element The HTML element to get input from, defaults to window.
	* @returns {Reader}
*/
export default function InputReader(element?: HTMLElement): Reader;