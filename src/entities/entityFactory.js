/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['entities/default/entity', 'entities/default/simpleShape', 'entities/default/circleShape', 'entities/default/staticShape', 'entities/default/playground'], function (Entity, SimpleShape, CircleShape, StaticShape, Playground) {

    "use strict";

    var Entities = {
            Entity: Entity,
            SimpleShape: SimpleShape,
            CircleShape: CircleShape,
            StaticShape: StaticShape,
            Playground: Playground };

    var EntityFactory = {
        /*  muss nich unbedingt in die api ... man soll ja lieber createEntity benutzten
         *  ist aber ein helper --- kanst ja noch umbauen
         *  @param {string} name from the entity class
         *  @return entity class pointer
         */
        getEntityClass: function(name) {
            return SimpleShape;
        },
        /*
         *  @param {string|object}+ arguments
         *  @return inherited Object with requested inheritChain
         */
        createEntity: function () {
            var i = 0,
                inheritChain = [],
                newClass;

            for (; i < arguments.length; i++) {
                var currArg;
                if(typeof arguments[i] === "string"){
                    var clas = this.getEntityClass(Entities[arguments[i]]);
                    currArg = clas.prototype;
                } else {
                    currArg = arguments[i];
                }
                if(i > 0) {
                    clas.prototype._parent = inheritChain[i - 1];
                }
                inheritChain.push(currArg);
            }
            newClass = Object.create.apply(null, inheritChain);
            newClass._parent = inheritChain[inheritChain.length - 1]
            return newClass;
        },
    };

    return EntityFactory;

});