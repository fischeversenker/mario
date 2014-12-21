/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['lists/entityList'], function (EntityList) {

    "use strict";

    function Layer() {
        this.EntityList = {};
    }

    Layer.prototype.update = function (timeSpan) {
        this.EntityList.update(timeSpan);
    };

    Layer.prototype.render = function (ctx) {
        this.EntityList.render(ctx);
    };

    Layer.prototype.createAndSetEntityList = function () {
        var el = new EntityList();
        this.EntityList = el;
        return el;
    };

    Layer.prototype.setEntityList = function (entityList) {
        this.EntityList = entityList;
    };

    return Layer;

});
