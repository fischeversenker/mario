/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['scenes/menuScene', 'camera', 'input'], function(MenuScene, Camera, Input){

    "use strict";

    function MenuScene () {

        this.type = 'MenuScene';

//        this.World = MenuWorld;
//        this.World.init(2000, 2000);
        this.Camera = Camera;
//        this.Camera.init(this.World);
        Input.init();
    }

    MenuScene.prototype.init = function(){
//        this.World.setPlayground(new Playground(1000, 1000, "#8b8b8b"));
    };

    MenuScene.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(0, 0);
        ctx.fillStyle = "#f0f";
        ctx.fillRect(0, 0, this.Camera.width, this.Camera.height);
        ctx.restore();
    };

    MenuScene.prototype.update = function(timeSpan){

    };

    return MenuScene;
});
