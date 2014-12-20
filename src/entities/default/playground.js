/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Entity = require('entities/default/entity');

    function Playground(args) {
        Entity.call(this, args.x || 0, args.y || 0, args.z || -1000, args.width || 2000, args.height || 2000, (args.width > args.height ? args.height : args.width) || 1500);
        this.color = args.color;
    }

    Playground.prototype = Object.create(Entity.prototype, Playground.prototype);

    Playground.prototype.constructor = Playground;

    Playground.prototype.update = function (time) {

        // Positionsberechnung
        
        //
    };
    
    return Playground;

});
