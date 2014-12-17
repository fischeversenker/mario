/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['eventManager', 'renderer', 'sceneManager', 'input'], function(EventManager, Renderer, SceneManager, Input){

    var Game = {
        running: false,
        lastTime: new Date().getTime(),

        start: function(ctx){
            this.running = true;
            this.lastTime = new Date().getTime();
            if(ctx !== null) this.mainloop(ctx);
        },

        stop: function(){
            this.running = false;
            Renderer.renderPause();
        },

        mainloop: function(ctx) {
            if(!ctx.running) return;
            requestAnimFrame(function(){ctx.mainloop(ctx);});

            if(ctx.scene !== null){
                var time = new Date().getTime();

                Renderer.render();

                ctx.scene.update(time - ctx.lastTime);
            }

            ctx.lastTime = time;
        },

        changeScene: function(scene){
            SceneManager.changeScene(scene);
            this.scene = SceneManager.currScene;
            Renderer.setScene(this.scene);
        },

        init: function() {

            EventManager.on('pp', function(ctx){
                if(ctx.running){
                    ctx.stop();
                }else{
                    ctx.start(ctx);
                }
            }, this);

//            EventManager.on('m', function(ctx){
//                if(ctx.scene.type !== 'MenuScene'){
//                    ctx.previousScene = ctx.scene.type;
//                    SceneManager.changeScene('MenuScene');
//                }else{
//                    ctx.changeScene(ctx.previousScene);
//                }
//            }, this);

            SceneManager.currScene.init();
            this.scene = SceneManager.currScene;

            Renderer.setScene(SceneManager.currScene);

            this.start(this);
        },

    };

    return Game;

});
