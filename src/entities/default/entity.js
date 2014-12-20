/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Vector2 = require('physics/vector2');

    function Entity(x, y, z, width, height, radius) {
        if(arguments.length === 0) return false;
        
        this.pos = new Vector2(x || 0, y || 0);
        this.z = z;
        this.velocity = new Vector2(0, 0);
        this.width = width || 100;
        this.height = height || 100;
        this.radius = radius || 50;
        this.color = "#000000";
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

    Entity.prototype.getCenter = function (){
        return new Vector2(this.width / 2, this.height / 2);

    };

    return Entity;
});
