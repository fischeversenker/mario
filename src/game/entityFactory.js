/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['entities/simpleShape', 'entities/circleShape', 'entities/staticShape', 'entities/playground'], function (SimpleShape, CircleShape, StaticShape, Playground) {

    "use strict";


    var EntityFactory = {
        Entities: {
            SimpleShape: SimpleShape,
            CircleShape: CircleShape,
            StaticShape: StaticShape,
            Playground: Playground},
        currScene: null,

        createEntity: function (entity, args) {
            return new this.Entities[entity](args);
        },
    };

    return EntityFactory;

});
