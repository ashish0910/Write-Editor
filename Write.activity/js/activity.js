define([
	"sugar-web/activity/activity",
    "sugar-web/env",
    "sugar-web/graphics/icon",
    "webL10n",
    "sugar-web/graphics/presencepalette",
    "activity/palettes/edit-text-palette",
    "activity/palettes/paragraph-palette",
    "activity/palettes/list-palette",
    "sugar-web/graphics/colorpalette",
], function (activity, env, icon, webL10n, presencepalette, editpalette , parapalette , listpalette , colorpalette) {

	// Manipulate the DOM only when it is ready.
	requirejs(['domReady!'], function (doc) {

		// Initialize the activity.
		activity.setup();
		
		// Initiating edit-text-palette ( for cut/copy/undo/redo )

		var editButton = document.getElementById("edit-text");
        var options = [
            {"id": 1, "title": "copy" , "cmd":"copy"},
            {"id": 2, "title": "paste", "cmd":"paste"},
            {"id": 3, "title": "undo", "cmd":"undo"},
            {"id": 4, "title": "redo", "cmd":"redo"},
        ];
        editpalette = new editpalette.Editpalette(editButton, undefined);
        editpalette.setCategories(options);
        editpalette.addEventListener('edit', function () {
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

        // Initiating paragraph palette ( Alignment settings )
        
        var paraButton = document.getElementById("paragraph");
        var paraoptions = [
            {"id": 5, "title":"justify Left" , "cmd":"justifyLeft"},
            {"id": 6, "title":"justify Right" , "cmd":"justifyRight"},
            {"id": 7, "title":"justify Center" , "cmd":"justifyCenter"},
            {"id": 8, "title":"justify Full" , "cmd":"justifyFull"},
        ];
        parapalette = new parapalette.Parapalette(paraButton, undefined);
        parapalette.setCategories(paraoptions);
        parapalette.addEventListener('para', function () {
            parapalette.popDown();
        });

        document.getElementById("5").addEventListener("click",function(){
            richTextFeild.document.execCommand("justifyLeft",false,null);
        })
        document.getElementById("6").addEventListener("click",function(){
            richTextFeild.document.execCommand("justifyRight",false,null);
        });
        document.getElementById("7").addEventListener("click",function(){
            richTextFeild.document.execCommand("justifyCenter",false,null);
        });
        document.getElementById("8").addEventListener("click",function(){
            richTextFeild.document.execCommand("justifyFull",false,null);
        });

        // Initiating lists palette
        var listButton = document.getElementById("list");
        var listoptions = [
            {"id": 9, "title": "ordered list", "cmd":"insertorderedList"},
            {"id": 10, "title": "unordered list", "cmd":"insertUnorderedList"},
        ];
        listpalette = new listpalette.Listpalette(listButton, undefined);
        listpalette.setCategories(listoptions);
        listpalette.addEventListener('list', function () {
            listpalette.popDown();
        });

        document.getElementById("9").addEventListener("click",function(){
            richTextFeild.document.execCommand("insertorderedList",false,"A");
        });
        document.getElementById("10").addEventListener("click",function(){
            richTextFeild.document.execCommand("insertUnorderedList",false,null);
        });

        // Initiating colour palette
        var colorButton = document.getElementById("color-button");
        var changeColorPalette = new colorpalette.ColorPalette(colorButton);
        changeColorPalette.setColor('rgb(150, 0, 0)');
		changeColorPalette.addEventListener('colorChange', function(e) {
            console.log(e.detail.color);
		});


	});

});
