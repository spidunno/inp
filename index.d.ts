interface coordinate {
	x: number,
	y: number
}
/**
	* Get whether a key is down.
	* @param {string} key - The key or button to check.
	* @returns {boolean}
*/
function down(key: string): boolean;
/**
	* Get whether a key has been released this timestep.
	* @param {string} key - The key or button to check.
	* @returns {boolean}
*/
function up(key: string): boolean;
/**
	* Steps forward and updates stuff.
	* @returns {none}
*/
function step(): none;
/**
	* Gets the position of the mouse.
	* @param {string} which Whether to return the x, y, or both coordinates.
	* @return {number | coordinate}
*/
function mouse(which?: string): number | coordinate | none;
interface Reader {
	down: down,
	up: up,
	step: step,
	mouse: mouse
}
/**
	* Create a new Reader
	* @param {HTMLElement} element The HTML element to get input from, defaults to window.
	* @constructor
	* @returns {Reader}
*/
export default function InputReader(element?: HTMLElement): Reader;