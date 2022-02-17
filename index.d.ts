interface coordinate {
	x: number,
	y: number
}
interface Reader {
	down: function(key: string): boolean,
	up: function(key: string): boolean,
	step: function(): none,
	mouse: function(which?: string): number | coordinate | none
}
export default function InputReader(element?: HTMLElement): Reader;