/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['vector2'], function(Vector2){

    "use strict";
    var Camera = {
        pos: new Vector2(0, 0),
        width:  500,
        height: 500,
        border: 50,
        update: function (timeSpan) {

            var playerOutbox = {
                top: this.Game.Player.pos.y - this.Game.Player.radius,
                right: this.Game.Player.pos.x + this.Game.Player.radius,
                bottom: this.Game.Player.pos.y + this.Game.Player.radius,
                left: this.Game.Player.pos.x - this.Game.Player.radius};

            var cameraOutbox = {
                top: this.pos.y - (this.height / 2),
                right: this.pos.x + (this.width / 2),
                bottom: this.pos.y + (this.height / 2),
                left: this.pos.x - (this.width / 2)};

            if(playerOutbox.left < cameraOutbox.left + this.border){
                this.pos.x = playerOutbox.left + (this.width / 2) - this.border;
            }
            if(playerOutbox.right > cameraOutbox.right - this.border){
                this.pos.x = playerOutbox.right - (this.width / 2) + this.border;
            }
            if(playerOutbox.top < cameraOutbox.top + this.border){
                this.pos.y = playerOutbox.top + (this.height / 2) - this.border;
            }
            if(playerOutbox.bottom > cameraOutbox.bottom - this.border){
                this.pos.y = playerOutbox.bottom - (this.height / 2) + this.border;
            }

            if(this.pos.x - (this.width  / 2) < 0) this.pos.x = this.width / 2;
            if(this.pos.x + (this.width  / 2) > this.Game.World.size.x) this.pos.x = this.Game.World.size.x - this.width / 2;
            if(this.pos.y - (this.height / 2) < 0) this.pos.y = this.height / 2;
            if(this.pos.y + (this.height / 2) > this.Game.World.size.y) this.pos.y = this.Game.World.size.y - this.height / 2;

        },
        init: function (game){
            this.Game = game;
        },
    }

    return Camera;

});
