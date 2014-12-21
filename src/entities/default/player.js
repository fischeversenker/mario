/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    var Entity = require('entities/default/entity');

    function Player(args) {
        Entity.apply(this, args);
        this._parent = Entity.prototype;
    }

    Player.prototype = Object.create(Entity.prototype, Player.prototype);

    Player.prototype.constructor = Player;

    Player.prototype.update = function (timeSpan) {

    };

    return Player;

});
