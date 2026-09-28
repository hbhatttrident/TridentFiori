sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zsdtr2/zsdtr2/test/integration/pages/trtwoList",
	"zsdtr2/zsdtr2/test/integration/pages/trtwoObjectPage"
], function (JourneyRunner, trtwoList, trtwoObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zsdtr2/zsdtr2') + '/test/flp.html#app-preview',
        pages: {
			onThetrtwoList: trtwoList,
			onThetrtwoObjectPage: trtwoObjectPage
        },
        async: true
    });

    return runner;
});

