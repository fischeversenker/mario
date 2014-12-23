/* jslint vars: true, esnext: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(function(require, exports, module){
    "use strict";

	var iRenderList = require('renderer/iRenderList'),
		Camera		= require('camera'),
		//Matrix = require('physics/matrix'),
		_canvas = null,
		_ctx = null,
		_renderEntitys,
		_camera;

    var Renderer = {
        render: function() {
			_renderEntitys.resetCursor();
			var count  = 0;
			while (_renderEntitys.hasNext()) {
				count++;
				var e = _renderEntitys.next();
				//set transform matrix's
				 var a = e.angle * (Math.PI / 180);
				_ctx.setTransform(1, 0, 0, 1, 0, 0); //default matrix
				if (_camera instanceof Camera) {
					_ctx.transform(1, 0, 0, 1, _camera.pos.x, _camera.pos.y); //camera matrix -camera.pos.x/y
				}
				_ctx.transform(1, 0, 0, 1, e.pos[0], e.pos[1]); //entity pos matrix
				_ctx.transform(Math.cos(a), -Math.sin(a), Math.sin(a), Math.cos(a), 0, 0);//entity

				e.render.call(null, _ctx);
			}
//			console.log('render tick with %i Entities', count)
        },

        renderPause: function() {
            
        },

        setDOM: function (canvas) {
            _canvas = canvas[0];
            _ctx = canvas[0].getContext("2d");
        },
		/*
		 *	@param {iEntityList} entityList
		 */
		setEntityList: function(entityList) {
			if (!(entityList instanceof iRenderList)) {
				//@todo error
			}
			_renderEntitys = entityList;
		},
		/*
		 *	@param {iEntityList} entityList
		 */
		setCamera: function(cam) {
			if (!(cam instanceof Camera)) {
				//@todo error
			}
			_camera = cam;
		},
        init: function() {
            
        },
    };

    module.exports = Renderer;
});
