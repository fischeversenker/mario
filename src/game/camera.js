/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['vector2'], function(Vector2){

    "use strict";
    var Camera = {
        pos: new Vector2(0, 0),
        width:  1000,
        height: 500,
        border: 100,
        update: function (timeSpan) {

            var playerOutbox = {
                top: this.World.Player.pos.y - this.World.Player.radius,
                right: this.World.Player.pos.x + this.World.Player.radius,
                bottom: this.World.Player.pos.y + this.World.Player.radius,
                left: this.World.Player.pos.x - this.World.Player.radius};

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
            if(this.pos.x + (this.width  / 2) > this.World.width) this.pos.x = this.World.width - this.width / 2;
            if(this.pos.y - (this.height / 2) < 0) this.pos.y = this.height / 2;
            if(this.pos.y + (this.height / 2) > this.World.height) this.pos.y = this.World.height - this.height / 2;

        },
        init: function (world){
            this.World = world;
            this.pos.x = this.World.Player.pos.x;
            this.pos.y = this.World.Player.pos.y;
        },
    }

    return Camera;

});
