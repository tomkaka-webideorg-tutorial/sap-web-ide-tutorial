/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"git_demo/zgit_demo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});