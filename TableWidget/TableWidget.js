define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojox/dtl/_DomTemplated",
	"dojo/text!./template/TableWidget.html",
	"dojo/dom-style",
	"dojo/_base/fx",
	"dojo/_base/lang",
	"dojo/on",
    "dojo/mouse",
	"require"
],function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _DomTemplated, template, domStyle, baseFx, lang, on, mouse, require){
    return declare('TableWidget', [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _DomTemplated], {
        templateString: template,
        constructor: function(obj){
            this.obj = obj;
        }
    });
});