/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Entity = require('defaultEntities/entity');

    function StaticShape(args) {
        Entity.call(this, args.x, args.y, args.z, args.width, args.height, (args.width > args.height ? args.height : args.width));
        this.color = args.color;
    }

    StaticShape.prototype = Object.create(Entity.prototype, StaticShape.prototype);

    StaticShape.prototype.constructor = StaticShape;

    StaticShape.prototype.update = function (time) {
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
