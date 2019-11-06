define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./template/TableWidget.html",
	"dojo/dom-style",
	"dojo/_base/fx",
	"dojo/_base/lang",
	"dojo/on",
	"dojo/mouse",
	"require"
],function(declare, _WidgetBase, _TemplatedMixin, template, domStyle, baseFx, lang, on, mouse, require){
    return declare('TableWidget', [_WidgetBase, _TemplatedMixin], {
        templateString: template,
        // obj : {first:'Rahul', last:'Mahawar'},
        // constructor: function(params){
            
        // },
        // first : 'rahul',
        // last : 'mahawar'
        postCreate: function(){
            this.firstNode = "Rahul";
            this.lastNode = "Mahawar";
            this.inherited(arguments);
        },
        // name: "First Last",
        // _setFirstAttr: { node: "nameNode", type: "innerHTML" },
    });
});