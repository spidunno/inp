
# Inp
## State based input library for the browser.
---
### Installation:
Install either install with npm or use a CDN such as unpkg (eg. `https://unpkg.com/inp/index.js`).
### Usage:
```js
import InputReader from 'path/to/inp.js';

let input = InputReader();
const frameRate = 1000/60;
function main() {
	/* input.down tells you if that button is down in the current frame / step. */
	if(input.down('a')) console.log('Key "A" pressed!');
	/* input.up does much the same as input.down but instead tells you if the button was released this frame */
	if(input.up('MouseLeft')) console.log('Left Mouse Button was released this timestep.');
	/* use input.mouse to get the position of the mouse this frame */
	console.log(input.mouse('x'), input.mouse('y'));
	console.log(input.mouse().x, input.mouse('both').y);
	/* and input.step at the end of you main loop to step forward. Nothing will work unless you do this. */
	input.step();
	setTimeout(main, frameRate);
}
main();
```
### API:
#### `InputReader.down(key: string): boolean`
Takes in a string that is either a valid `event.key`, `"MouseLeft"`, `"MouseRight"`, `"MouseMiddle"`, `"MouseBack"`, or `"MouseForward"`. Returns a boolean of whether it's  down.
___
#### `InputReader.up(key: string): boolean`
Similar `InputReader.down`, tells you if a key has been released this timestep, takes the same arguments as `InputReader.down`.
___
#### `InputReader.mouse(which?: string): number | Object`
Takes in a string that is either `"x"`, `"y"`,  or `"both"`, returns the X position of the mouse, the Y position of the mouse, or `{x: <number>, y: <number>}`, respectively. If no argument is given it defaults to `"both"`.
___
#### `InputReader.step(): void`
Steps forward once and updates everything. Required to be called before any inputs can be read correctly.
___
(: