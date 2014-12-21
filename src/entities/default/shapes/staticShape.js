/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['core', 'entities/default/entity'], function (Core, Entity) {

    "use strict";

    function StaticShape(args) {
        Entity.apply(this, args);
        this._parent = Entity.prototype;
    }

	StaticShape.prototype = Object.create(Entity.prototype, StaticShape.prototype);
	StaticShape.prototype.constructor = StaticShape;

    StaticShape.prototype.update = function (timeSpan) {
        //
    };

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
