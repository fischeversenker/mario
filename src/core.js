/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define, requestAnimFrame */
define(['events/eventManager', 'events/input', 'worlds/gameWorld', 'renderer/renderer', 'entities/EntityFactory', 'physics/physics'], function(EventManager, Input, GameWorld, Renderer, EntityFactory, Physics) {
    
    var Core = {
        running: false,
        lastTime: new Date().getTime(),
        DOM: {},
        World: {},
        mainLoopListeners: [],

        FRAME_TIME: 500,

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
            EventManager.trigger("tick");
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
                Core.World.update(time - Core.lastTime);
            }
        },

        createWorld: function(){
            var w = new GameWorld(EntityFactory.createEntity('Playground', {color: '#53f'}));
            Physics.setWorld(w);
            return w;
        },

        setActiveWorld: function(world){
            this.World = world;
            Renderer.setWorld(this.World);
        },

        registerTicker: function(id, callback, ctx){
            this.mainLoopListeners.push(id);
            EventManager.on("tick", callback, ctx);
        },

        setDOM: function(dom){
            this.DOM = dom;
            Renderer.setDOM(dom);
        },


        init: function() {
            Input.init();
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
