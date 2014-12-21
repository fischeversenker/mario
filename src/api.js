/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['renderer/renderer', 'core', 'entities/entityManager', 'events/eventManager', 'physics/physics'], function(Renderer, Core, EntityManager, EventManager, Physics){

    "use strict";

    var API = {

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
