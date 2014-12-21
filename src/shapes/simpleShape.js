/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function () {

    "use strict";

    function SimpleShape(args) {
        this.color  = '#39c'; // args.color || "#39c";
        this.width  = 100; // args.width || 100;
        this.height = 100; // args.height ||100;
    }

    /* @override */
    SimpleShape.prototype.render = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.height);
    };

    return SimpleShape;

});
