/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['renderer/renderer', 'core', 'entities/entityFactory', 'events/eventManager'], function(Renderer, Core, EntityFactory, EventManager){

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

        init: function(canvas){
            Core.init();
        },
    };

    return API;

});
