/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['entity'], function (Entity) {

    "use strict";

    function StaticShape(x, y, z, w, h, color) {
        Entity.call(this, x, y, z, w, h, (w > h ? h : w));
        this.color = color;
    }

    StaticShape.prototype = Object.create(Entity.prototype, StaticShape.prototype);

    StaticShape.prototype.constructor = StaticShape;

    StaticShape.prototype.update = function (time) {
        //
    }

    /* @override */
    StaticShape.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.istAngle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.width, this.height);
        ctx.restore();
    };

    return StaticShape;

});
