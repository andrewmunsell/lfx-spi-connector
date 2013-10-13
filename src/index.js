var extend = require("extend");

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
}

/**
 * Render the byte buffer to the LED string.
 * @param  {Buffer} buffer Buffer of bytes containing data for the LED string
 */
Connector.prototype.render = function(buffer) {

}

module.exports = Connector;