define([
	"sugar-web/activity/activity",
    "sugar-web/env",
    "sugar-web/graphics/icon",
    "webL10n",
    "sugar-web/graphics/presencepalette",
	"activity/palettes/format-text-palette",
	"activity/palettes/edit-text-palette"
], function (activity, env, icon, webL10n, presencepalette, toolpalette) {

	// Manipulate the DOM only when it is ready.
	requirejs(['domReady!'], function (doc) {

		// Initialize the activity.
		activity.setup();

	});

});
