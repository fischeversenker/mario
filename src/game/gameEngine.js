/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['renderer', 'game', 'sceneManager'], function(Renderer, Game, SceneManager){

    "use strict";

    var Engine = {

        changeScene: function(newScene){
            SceneManager.changeScene(newScene);
            Renderer.setScene(SceneManager.currScene);
        },

        start: function(){
            Game.start(Game);
        },
        stop: function(){
            Game.stop();
        },
        init: function(canvas, scene){
            Renderer.init(canvas);
            SceneManager.createScene(scene);
            Game.init(SceneManager);
        },
    };

    return Engine;

});
