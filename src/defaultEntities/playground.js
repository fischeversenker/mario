/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Entity = require('defaultEntities/entity');

    function Playground(args) {
        Entity.call(this, 0, 0, -1000, args.width, args.height);
        this.color = args.color;
    }

    Playground.prototype = Object.create(Entity.prototype, Playground.prototype);

    Playground.prototype.constructor = Playground;

    /* @override */
    Playground.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    };

    return Playground;

});
