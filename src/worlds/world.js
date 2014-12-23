/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['worlds/layer', 'renderer/iRenderList'], function (Layer, iRenderList) {

    "use strict";

    function World() {
		this.layers = [];
		this._layerCursor = 0;
		this._entityCursor = -1;
    }

    World.prototype = Object.create(iRenderList.prototype, World.prototype);

    World.prototype.constructor = World;

	/*
	 *	@param {Layer} layer musst extends Layer
	 */
	World.prototype.addLayer = function(layer) {
		if (layer instanceof Layer) {
			this.layers.push(layer);
		} else {
			console.error('not a Layer instance');
		}
	};
	/*
	 *	@param {Layer} layer musst extends Layer
	 */
	World.prototype.removeLayer = function(layer) {
		var index = this.layers.indexOf(layer);
		if (index > -1) {
			this.layers.splice(index, 1);
		}
	};
	//@overwrite
	World.prototype.hasNext = function() {
		//pointed layer exists and has min 1 entity ??
		if (this.layers[this._layerCursor] instanceof Layer) {
//			console.log('kann sein das es noch eins giebt',this.layers[this._layerCursor].EntityList.length)
			if ((this._entityCursor + 1) < this.layers[this._layerCursor].EntityList.length) {
//				console.log('da is noch eins im aktuellen layer');
				return true;
			} else if (this.layers[this._layerCursor + 1] instanceof Layer &&
					   this.layers[this._layerCursor + 1].EntityList.length > 0) {
//				console.log('im nächsten layer is eins')
				return true;
			}
		}
		return false;
	};
	//@overwrite
	World.prototype.next = function() {
		if (this.layers.length === 0) {
			return;
		}

		return this.layers[this._layerCursor].EntityList[++this._entityCursor];
		//set cursors to next entity [and layer] and return entity
	};
	//@overwrite
	World.prototype.resetCursor = function() {
		this._layerCursor = 0;
		this._entityCursor = -1;
	};

    return World;
});
