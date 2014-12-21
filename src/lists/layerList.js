/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['lists/list', 'worlds/layer'], function (List, Layer) {

    "use strict";

    function LayerList() {
        List.call(this);
    }

    LayerList.prototype = Object.create(List.prototype, LayerList.prototype);
    LayerList.prototype.constructor = LayerList;

    LayerList.prototype.update = function (timeSpan) {
        while(this.next()){
            this.getCurrent().update(timeSpan);
        }
    };

    LayerList.prototype.render = function (ctx) {
        while(this.next()){
            this.getCurrent().render(ctx);
        }
    };

    LayerList.prototype.createAndAddLayer = function () {
        var layer = new Layer();
        this.add(layer);
        return layer;
    };

    LayerList.prototype.sort = function(){

    };

    return LayerList;

});
