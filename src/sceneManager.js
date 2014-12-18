/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['scenes/playScene', 'scenes/menuScene'], function(PlayScene, MenuScene){

    "use strict";

    var SceneManager = {
        Scenes: {PlayScene: PlayScene,
                MenuScene: MenuScene},
        currScene: null,

        update: function () {
            this.currScene.update();
        },

        render: function () {
            this.currScene.render();
        },

        changeScene: function (newScene){
//            if (currScene != null) currScene.unload();
//            newScene.load();
            this.currScene = new this.Scenes[newScene]();
        },

        createScene: function (scene) {
            this.currScene = new this.Scenes[scene]();
            return this.currScene;
        },
    };

    return SceneManager;

});
