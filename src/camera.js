/* jslint vars: true, esnext: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(function(require, exports, module){
	"use strict";
	var Vector2D	= require('physics/vector2');

	function Camera() {
		this.pos = new Vector2D(50, 50);
		$(document).on('keydown', function(e) {
			var LEFT = 37;
			var UP = 38;
			var RIGHT = 39;
			var DOWN = 40;
			switch (e.keyCode) {
				case UP:
					this.pos.y -= 3;
					break;
				case DOWN:
					this.pos.y += 3;
					break;
				case LEFT:
					this.pos.x -= 3;
					break;
				case RIGHT:
					this.pos.x += 3;
					break;
			}
			return false;
		}.bind(this));
	}

	Camera.prototype.setPos = function(x, y) {
		this.pos.x = x;
		this.pos.y = y;
	};

	module.exports = Camera;
});
