define(["sugar-web/graphics/palette"], function (palette) {

    'use strict';

    var imagepalette = {};

    imagepalette.Imagepalette = function (invoker, primaryText, menuData) {
        palette.Palette.call(this, invoker, primaryText);

        this.imageEvent = document.createEvent("CustomEvent");
        this.imageEvent.initCustomEvent('image', true, true, {});
        this.remoteEvent = document.createEvent("CustomEvent");
        this.remoteEvent.initCustomEvent('remote', true, true, {});

        var that = this;
        that.categories = [];
        that.buttons = [];

        this.setCategories = function( newcategories) {
            this.categories = newcategories;

            this.buttons = [];
            var div = document.createElement('div');

            for (var i = 0 ; i < newcategories.length ; i++) {
                var newbutton = document.createElement('button');
                newbutton.className = 'toolbutton palette-button palette-button-notselected';
                newbutton.setAttribute('id', newcategories[i].id);
                newbutton.setAttribute('title', newcategories[i].title);
                var url = "url(icons/"+newcategories[i].cmd+".svg)";
                newbutton.style.backgroundImage = url;
                var newid = newcategories[i].id;
                newbutton.onclick = function() {
                    that.setImage(this.id);
                }
                this.buttons.push(newbutton);
                div.appendChild(newbutton);
            }
            this.setContent([div]);
        }

        this.setImage = function(id) {            
            that.getPalette().dispatchEvent(that.imageEvent);
        }
    };

    var addEventListener = function (type, listener, useCapture) {
        return this.getPalette().addEventListener(type, listener, useCapture);
    };

    imagepalette.Imagepalette.prototype =
        Object.create(palette.Palette.prototype, {
            addEventListener: {
                value: addEventListener,
                enumerable: true,
                configurable: true,
                writable: true
            }
        });
    imagepalette.Imagepalette.prototype.setCategories = function(newcategories) {
        this.setCategories(newcategories);
    }
    imagepalette.Imagepalette.prototype.setImage = function(newimage) {
        this.setImage(newimage);
    }    
    return imagepalette;
});
