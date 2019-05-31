define([
	"sugar-web/activity/activity",
    "sugar-web/env",
    "sugar-web/graphics/icon",
    "webL10n",
    "sugar-web/graphics/presencepalette",
	"activity/palettes/edit-text-palette",
], function (activity, env, icon, webL10n, presencepalette, editpalette) {

	// Manipulate the DOM only when it is ready.
	requirejs(['domReady!'], function (doc) {

		// Initialize the activity.
		activity.setup();
		
		// Initiating edit-text-palette ( for cut/copy/undo/redo )

		var levelButton = document.getElementById("edit-text");
        var levels = [
            {"id": 1, "title": "copy" , "cmd":"copy"},
            {"id": 2, "title": "paste", "cmd":"paste"},
            {"id": 3, "title": "undo", "cmd":"undo"},
            {"id": 4, "title": "redo", "cmd":"redo"},
        ];
        editpalette = new editpalette.Editpalette(levelButton, undefined);
        editpalette.setCategories(levels);
        editpalette.addEventListener('filter', function () {
            editpalette.popDown();
        });
        document.getElementById("1").addEventListener("click",function(){
            richTextFeild.document.execCommand("copy",false,null);
        })
        document.getElementById("2").addEventListener("click",function(){
            richTextFeild.document.execCommand("paste",false,null);
        });
        document.getElementById("3").addEventListener("click",function(){
            richTextFeild.document.execCommand("undo",false,null);
        });
        document.getElementById("4").addEventListener("click",function(){
            richTextFeild.document.execCommand("redo",false,null);
        });
	});

});
