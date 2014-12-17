/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['playWorld', 'camera', 'input'], function(PlayWorld, Camera, Input){

    "use strict";

    function PlayScene () {

        this.type = 'PlayScene';

        this.World = PlayWorld;
        this.World.init(2000, 2000);
        this.Camera = Camera;
        this.Camera.init(this.World);
        Input.init();
    }

    PlayScene.prototype.init = function(){
//        this.World.setPlayground(new Playground(1000, 1000, "#8b8b8b"));
    };

    PlayScene.prototype.render = function(ctx){
        this.World.Playground.render(ctx);
        while (this.World.next()) {
            // World.offset = new Vector2(Camera.pos.x - Camera.width / 2,Camera.pos.y - Camera.height / 2);
            this.World.getCurrent().render(ctx);
        }
    };

    PlayScene.prototype.update = function(timeSpan){
        this.World.update(timeSpan);
        this.Camera.update(timeSpan);
    };

    return PlayScene;
});
