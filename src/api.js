/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['renderer/renderer', 'core', 'entities/entityFactory', 'events/eventManager', 'physics/physics'], function(Renderer, Core, EntityFactory, EventManager, Physics){

    "use strict";

    var API = {

        getEntityFactory: function(){
            return EntityFactory;
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

        getCore: function(){
            return Core;
        },

        start: function(){
            Core.start();
        },

        stop: function(){
            Core.stop();
        },

        init: function(){
            Core.init();
        },
    };

    return API;

});
