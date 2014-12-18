/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define, requestAnimFrame, require */
define(['events/eventManager', 'events/input', 'worlds/gameWorld', 'renderer/renderer'], function(EventManager, Input, GameWorld, Renderer){

    var Core = {
        running: false,
        lastTime: new Date().getTime(),
        DOM: {},
        World: {},
        mainLoopListeners: [],

        FRAME_TIME: 100,

        start: function(){
            Core.running = true;
            Core.lastTime = new Date().getTime();
            Core.mainloop();
        },

        stop: function(){
            Core.running = false;
            Renderer.renderPause();
        },

        mainloop: function() {
            var time = new Date().getTime();
            if(!Core.running) {
                return;
            }
            requestAnimFrame(function(){Core.mainloop();});

            if(Core.World !== null){
                if(time - Core.lastTime > Core.FRAME_TIME){
                    time = new Date().getTime();
                    Renderer.render();
                    Core.lastTime = time;
                }
//                Core.World.update(time - Core.lastTime);
//                Core.update(time - Core.lastTime);
            }

        },

        createWorld: function(){
            return new GameWorld();
        },

        setActiveWorld: function(world){
            this.World = world;
        },

        registerTicker: function(id, callback){
            this.mainLoopListeners.push({id: id, callback: callback});
        },

        setDOM: function(dom){
            this.DOM = dom;
            Renderer.setDOM(dom);
        },


        init: function() {
            Renderer.init(Core);
            EventManager.on('pp', function(){
                if(Core.running){
                    Core.stop();
                }else{
                    Core.start();
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
        },

    };

    return Core;

});
