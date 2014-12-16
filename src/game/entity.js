/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function () {

    "use strict";

    var Vector2 = require('vector2');

    function Entity(x, y, z, width, height, r) {
        this.pos = new Vector2(x || 0, y || 0);
        this.z = z;
        this.velocity = new Vector2(0, 0);
        this.width = width || 100;
        this.height = height || 100;
        this.radius = r || 50;
    }

    Entity.prototype.update = function(time) {

    };

    Entity.prototype.render = function(ctx) {

    };

    Entity.prototype.getCenter = function (){
        return new Vector2(this.width / 2, this.height / 2);

    };

    return Entity;
});
