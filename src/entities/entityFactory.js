/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['entities/default/simpleShape', 'entities/default/circleShape', 'entities/default/staticShape', 'entities/default/playground'], function (SimpleShape, CircleShape, StaticShape, Playground) {

    "use strict";

    var Entities = {
            SimpleShape: SimpleShape.prototype,
            CircleShape: CircleShape.prototype,
            StaticShape: StaticShape.prototype,
            Playground: Playground.prototype};

    var EntityFactory = {

        /*
         *  @param {string|object}+ arguments
         *  @return inherited Object with requested inheritChain
         */
        createEntity: function () {
            var i = 0;
            var inheritChain = [];
            for (; i < arguments.length; i++) {
                var currArg;
                if(typeof arguments[i] === "string"){
                    currArg = Entities[arguments[i]];
                } else {
                    currArg = arguments[i];
                }
                if(i !== 0) {
                    // currArg.super = inheritChain[i - 1];
                }
                inheritChain.push(currArg);
            }
            console.log(inheritChain);
            return Object.create(inheritChain[0], inheritChain[1]);
            return Object.create.apply(null, inheritChain);
        },
    };

    return EntityFactory;

});