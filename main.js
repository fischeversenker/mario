define(function(require, exports, module) {
	
    window.requestAnimFrame = (function(){
        return window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame    ||
               function( callback ){ window.setTimeout(callback, 1000 / 60);};
    })();
	
	var EngineReady = false,
		readyListener = [],
		API = {},
		baseUrl = module.uri.replace('main.js', 'src');
	
	var req = requirejs.config({
		context: 'mario',
        baseUrl: baseUrl,
        paths: {
            jquery: '../lib/jquery',
        }
    });
    req(['jquery', 'api'], function($, api){
		// TO MOVE
        // GameEngine.init($('#myCanvas')[0], 'PlayScene');
        // GameEngine.start();
		for (var key in api) {
			API[key] = api[key];
		}
		triggerReady();
    });

	function triggerReady () {
		var i = 0;
		
		EngineReady = true;
		for (;i<readyListener.length;i++) {
			readyListener[i]();
		}
	}
	function onReady (callBack) {
		if (EngineReady) {
			callBack();
		} else {
			readyListener.push(callBack);
		}
	};

	API.onReady = onReady;
	module.exports = API;
});