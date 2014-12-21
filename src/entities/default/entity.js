/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Vector2 = require('physics/vector2');

    function Entity(args) {
        if(arguments.length === 0) return false;
        this.pos = new Vector2(args.x || 0, args.z || 0);
        this.velocity = new Vector2(0, 0);
        this.radius = (args.width > args.height ? args.height : args.width) || 50;
    }

    Entity.prototype.update = function(time) {

    };

    Entity.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.width, this.height);
        ctx.restore();
    };

    return Entity;
});
