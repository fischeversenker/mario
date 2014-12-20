/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Entity = require('entities/default/entity');
    var Vector2 = require('physics/vector2');

    function Player(args) {
        Entity.call(this, args.x, args.y, args.z, args.width, args.height, (args.width > args.height ? args.height : args.width));

        this.MAX_SPEED = 1;
        this.color = args.color;
        this.sollVelocity = new Vector2(0, 0);
        this.istVelocity = new Vector2(0, 0);
        this.VELOCITY_DAMP = 5; // Je größer umso langsamer fällt vel ab
        this.sollAngle = 0;
        this.istAngle = 0;
        this.ANGULAR_DAMP = 10; // Je größer umso langsamer fällt angle  ab
    }

    Player.prototype = Object.create(Entity.prototype, Player.prototype);

    Player.prototype.constructor = Player;

    Player.prototype.update = function (time) {

    };

    return Player;

});
