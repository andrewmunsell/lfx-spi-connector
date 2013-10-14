/**
 * @author Andrew Munsell <andrew@wizardapps.net>
 * @copyright 2013 Andrew Munsell
 * @license http://www.gnu.org/licenses/ GNU GPLv3
 */

var SPI		= require("spi"),
	extend 	= require("extend");

/**
 * Default options for the SPI connector
 * @type {Object}
 */
var defaults = {
	"device": "/dev/spidev0.0"
}

/**
 * SPI Connector for LFX. Sends data to LEDs via a Unix SPI device.
 * @param {object} config Configuration options
 */
function Connector(config) {
	this.config = extend(true, defaults, config);

	this._spi = new SPI.Spi(this.config.device, {
		"mode": SPI.MODE['MODE_0']
	}, function(s){ s.open() });
}

/**
 * Render the byte buffer to the LED string.
 * @param  {Buffer} buffer Buffer of bytes containing data for the LED string
 */
Connector.prototype.render = function(buffer) {
	var rxBuffer = new Buffer(buffer.length);

	this._spi.transfer(buffer, rxBuffer);
}

module.exports = Connector;