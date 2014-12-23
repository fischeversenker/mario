/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define, requestAnimFrame */
define(['events/eventManager', 'events/input', 'worlds/world', 'renderer/renderer', 'entities/entityManager', 'physics/physics', 'worlds/layer', 'camera'],
	   function(EventManager, Input, World, Renderer, EntityManager, Physics, Layer, Camera) {

    "use strict";
    
    var Core = {
        running: false,
        lastTime: new Date().getTime(),
        DOM: {},
        World: {},
        mainLoopListeners: [],
        FRAME_TIME: 10,

        start: function(){
            Core.running = true;
            Core.lastTime = new Date().getTime();
			Renderer.setCamera(new Camera());
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
//            requestAnimFrame(function(){Core.mainloop();});
            requestAnimFrame(Core.mainloop.bind(this));

            if(Core.World !== null){
                if(time - Core.lastTime > Core.FRAME_TIME){
                    time = new Date().getTime();
					//render
                    Renderer.render();
					//update
					this.World.resetCursor();
					while (this.World.hasNext()) {
						var e = this.World.next();
						e.update(time - Core.lastTime);
					}
                    Core.lastTime = time;
					//Core.running = false;
                }
                // Core.World.update(time - Core.lastTime);
            }
        },

        createWorld: function(){
            var w = new World();
            Physics.setWorld(w);
            return w;
        },

        createLayer: function(){
            return new Layer();
        },

        setActiveWorld: function(world){
            this.World = world;
			Renderer.setEntityList(this.World);
//            Renderer.setWorld(this.World);
        },

        registerTicker: function(id, callback, ctx){
            this.mainLoopListeners.push(id);
            EventManager.on("tick", callback, ctx);
        },

        setDOM: function(dom){
            this.DOM = dom;
            Renderer.setDOM(dom);
        },


        getEntityManager: function(){
            return EntityManager;
        },

        getEventManager: function(){
            return EventManager;
        },

        getRenderer: function(){
            return Renderer;
        },

        getPhysics: function(){
            return Physics;
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
