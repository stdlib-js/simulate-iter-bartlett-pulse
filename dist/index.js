/** @license Apache-2.0 */

'use strict';

/**
* Create an iterator which generates a Bartlett pulse waveform.
*
* @module @stdlib/simulate-iter-bartlett-pulse
*
* @example
* var iterBartlettPulse = require( '@stdlib/simulate-iter-bartlett-pulse' );
*
* var opts = {
*     'period': 10
* };
*
* var iter = iterBartlettPulse( opts );
*
* var v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
