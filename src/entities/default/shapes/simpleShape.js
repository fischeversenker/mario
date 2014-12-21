/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['core', 'entities/default/entity', 'require'], function (Core, Entity, require) {

    "use strict";

    console.log("test");

    function SimpleShape(args) {
        Entity.apply(this, args);
        this._parent = Entity.prototype;
    }

	SimpleShape.prototype = Object.create(Entity.prototype, SimpleShape.prototype);

	SimpleShape.prototype.constructor = SimpleShape;

    SimpleShape.prototype.update = function (timeSpan) {

        // Positionsberechnung
        
        //

    };

    return SimpleShape;

});
