/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['worlds/layer', 'lists/layerList'], function (Layer, LayerList) {

    "use strict";

    function World() {
        this.layerLists = [];
        this.currentLayer = 0;
    }

    World.prototype.update = function(timeSpan){
        if(this.layerLists[this.currentLayer] !== null){
            this.layerLists[this.currentLayer].update(timeSpan);
        }
    };

    World.prototype.render = function (ctx) {
        if(this.layerLists[this.currentLayer] !== null){
            this.layerLists[this.currentLayer].render(ctx);
        }
    };

    World.prototype.createAndAddLayerList = function () {
        var LL = new LayerList();
        this.layerLists.push(LL);
        return LL;
    };

    World.prototype.addLayerList = function (layerList) {
        if(this.layerLists.push(layerList)) {
            return this.layerLists.length - 1;
        }
        return false;
    };

    return World;
});
