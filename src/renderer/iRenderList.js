/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require, exports, module) {

    "use strict";

    function iRenderList() {}
	/*
	 *	Iterator hasNext
	 *	@return {boolean}
	 */
	iRenderList.prototype.hasNext = function() {};
	/*
	 *	Iterator next
	 *	@return {Entity}
	 */
	iRenderList.prototype.next = function() {};
	/*
	 *	Iterator resetCursor
	 */
	iRenderList.prototype.resetCursor = function() {};

    module.exports = iRenderList;
});
