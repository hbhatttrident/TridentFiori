sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zsdtr2.zsdtr2',
            componentId: 'trtwoList',
            contextPath: '/trtwo'
        },
        CustomPageDefinitions
    );
});