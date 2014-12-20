/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Entity = require('entities/default/entity');

    function SimpleShape(args) {
        Entity.call(this, args.x, args.y, args.z, args.width, args.height, (args.width > args.height ? args.height : args.width));
        this.color = args.color;
    }

    SimpleShape.prototype = Object.create(Entity.prototype, SimpleShape.prototype); // SimpleShape erbt von Entity

    SimpleShape.prototype.constructor = SimpleShape;

    SimpleShape.prototype.update = function (time) {

        // Positionsberechnung
        
        //
    };

    return SimpleShape;

});
