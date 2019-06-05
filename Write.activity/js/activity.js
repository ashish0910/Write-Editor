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
    "activity/palettes/format-text-palette",
    "activity/palettes/font-palette",
], function (activity, env, icon, webL10n, presencepalette, editpalette , parapalette , listpalette , colorpalette, formatpalette , fontPalette) {

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

        // Initiating colour palette for foreground and background
        var forecolorButton = document.getElementById("color-button-1");
        var changeForeColorPalette = new colorpalette.ColorPalette(forecolorButton);
        changeForeColorPalette.setColor('rgb(150, 0, 0)');
		changeForeColorPalette.addEventListener('colorChange', function(e) {
            var forergb = e.detail.color;
            var forehex = rgb2hex(forergb);
            richTextFeild.document.execCommand("foreColor",false,forehex);
        });
        
        var backcolorButton = document.getElementById("color-button-2");
        var changeBackColorPalette = new colorpalette.ColorPalette(backcolorButton);
        changeBackColorPalette.setColor('rgb(0, 0, 150)');
		changeBackColorPalette.addEventListener('colorChange', function(e) {
            var backrgb = e.detail.color;
            var backhex = rgb2hex(backrgb);
            richTextFeild.document.execCommand("hiliteColor",false,backhex);
        });
        // hack to convert rgb to hex
        function rgb2hex(rgb){
            rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return (rgb && rgb.length === 4) ? "#" +
             ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
             ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
             ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
           }

        // initiating the format text palette (for bold/italic/strikethrough/underline)
        var formatButton = document.getElementById("format-text");
        var formatoptions = [
            {"id": 11, "title": "bold", "cmd":"bold"},
            {"id": 12, "title": "italic", "cmd":"italic"},
            {"id": 13, "title": "underline", "cmd":"underline"},
            {"id": 14, "title": "strikethrough", "cmd":"strikeThrough"}
        ];
        formatpalette = new formatpalette.Formatpalette(formatButton, undefined);
        formatpalette.setCategories(formatoptions);
        formatpalette.addEventListener('format', function () {
            formatpalette.popDown();
        });

        document.getElementById("11").addEventListener("click",function(){
            richTextFeild.document.execCommand("bold",false,null);
        })
        document.getElementById("12").addEventListener("click",function(){
            richTextFeild.document.execCommand("italic",false,null);
        });
        document.getElementById("13").addEventListener("click",function(){
            richTextFeild.document.execCommand("underline",false,null);
        });
        document.getElementById("14").addEventListener("click",function(){
            richTextFeild.document.execCommand("strikeThrough",false,null);
        });

        // Initialise font palette
        var fontButton = document.getElementById("font-button");
        fontPalette = new fontPalette.Fontpalette(fontButton);
        // Set Arial as default font 
        richTextFeild.document.execCommand("fontName",false,"Arial");
        fontPalette.addEventListener('fontChange', function(e) {
			var newfont = e.detail.family;
            richTextFeild.document.execCommand("fontName",false,newfont);
        });
        
	});

});
