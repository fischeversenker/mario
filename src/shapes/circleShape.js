/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define, require */
define(function () {

    "use strict";


    function CircleShape(args) {
        Entity.apply(this, args);
        this._parent = Entity.prototype;
    }

    CircleShape.prototype = Object.create(Entity.prototype, CircleShape.prototype);
    CircleShape.prototype.constructor = CircleShape;

    CircleShape.prototype.update = function (timeSpan) {

        // Positionsberechnung

        //
    };

    /* @override */
    CircleShape.prototype.render = function(ctx) {
        // var sector = Math.floor(((this.angle * 360) / (2 * Math.PI) + 180 + 45) / 90); // Gibt Sektor der Richtung: 2 ist 45 bis -45 ist Rechts bspw.
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.istAngle);
        ctx.scale(this.radius/this.height, this.radius/this.width);
        ctx.arc(0, 0, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    };

    return CircleShape;

});
