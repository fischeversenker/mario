define(function(require, exports, module) {
	
    window.requestAnimFrame = (function(){
        return window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame    ||
               function( callback ){ window.setTimeout(callback, 1000 / 60);};
    })();
    var baseUrl = module.uri.replace('bootGameEngine.js', 'src/game');
	var req = requirejs.config({
		context: 'test2',
        baseUrl: baseUrl,
        paths: {
            jquery: '../../lib/jquery',
        }
    });
	
    req(["require", 'jquery', 'gameEngine'], function(require, $, GameEngine){
        GameEngine.init($('#myCanvas')[0], 'PlayScene');
        GameEngine.start();
    });
	return {
		game:'',
		answer: 42
	}
});