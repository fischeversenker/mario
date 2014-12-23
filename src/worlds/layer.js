/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require, exports, module) {

    "use strict";

    function Layer() {
        this.EntityList = [];
    }

    Layer.prototype.update = function () {

    };
    Layer.prototype.add = function (entity) {
		this.EntityList.push(entity);
    };
    module.exports = Layer;

});
