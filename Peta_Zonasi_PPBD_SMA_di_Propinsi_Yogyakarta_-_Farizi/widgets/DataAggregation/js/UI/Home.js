// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DataAggregation/js/UI/templates/Home.html":'\x3cdiv style\x3d"height: 100%;" class\x3d"no-select"\x3e\r\n  \x3c!-- aria-label added at runtime--\x3e\r\n  \x3cdiv class\x3d"bottom-border-mid esriCTSchemaMapInstructions" data-dojo-attach-point\x3d"schemaMapInstructions" tabindex\x3d"0" role\x3d"region"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"pageInstruction" class\x3d"main-instruction"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"upload-tab-node" data-dojo-attach-point\x3d"uploadTabNode"\x3e\r\n    \x3cdiv class\x3d"schema-map-instructions"\x3e\r\n      \x3cdiv class\x3d"usage-instruction"\x3e\r\n        ${nls.startPage.dragDrop}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"drop-or-browse"\x3e\r\n        ${nls.startPage.or}\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"browseContainer"\x3e\r\n        \x3cform class\x3d"file-form" enctype\x3d"multipart/form-data" method\x3d"post" data-dojo-attach-point\x3d"fileForm"\x3e\r\n          \x3clabel for\x3d"${id}_file" class\x3d"jimu-btn" data-dojo-attach-point\x3d"uploadLabel" \r\n          tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.startPage.browse}" \x3e${nls.startPage.browse}\x3c/label\x3e\r\n          \x3cinput id\x3d"${id}_file" name\x3d"file" type\x3d"file" class\x3d"upload-input" data-dojo-attach-point\x3d"fileNode"/\x3e\r\n        \x3c/form\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"warning-instruction" data-dojo-attach-point\x3d"loadWarning"\x3e\r\n      \x3cspan\x3e${nls.warningsAndErrors.loadWarning}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"credit-warning-container" data-dojo-attach-point\x3d"creditsLink" tabindex\x3d"0" role\x3d"link" aria-label\x3d"${nls.warningsAndErrors.consumesCredits}"\x3e\r\n    \x3ca  data-dojo-attach-point\x3d"creditsLinkTag" class\x3d"credit-warning" target\x3d"_blank" \r\n      href\x3d"http://www.esri.com/software/arcgis/arcgisonline/credits"\x3e${nls.warningsAndErrors.consumesCredits}\x3c/a\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/keys dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./templates/Home.html dojo/on dojo/dom-construct dojo/dom-class dojo/dom-attr ../csvStore ./Addresses ./Coordinates ./FieldMapping esri/lang jimu/dijit/Popup jimu/utils".split(" "),function(p,c,q,k,l,r,t,u,v,w,f,m,x,n,y,z,A,B,E,C,D){return p([r,t,u,v],{baseClass:"cf-home",declaredClass:"CriticalFacilities.Home",templateString:w,
_started:null,label:"Home",parent:null,nls:null,map:null,appConfig:null,config:null,theme:"",styleColor:"",_geocodeSources:null,_fsFields:[],_singleFields:[],_multiFields:[],_childViews:[],singleEnabled:!1,multiEnabled:!1,xyEnabled:!1,disabled:!1,userName:"",fieldMappingView:null,constructor:function(a){c.mixin(this,a);this._initBaseArgs()},_initBaseArgs:function(){this._baseArgs={nls:this.nls,map:this.map,parent:this.parent,config:this.config,appConfig:this.appConfig,theme:this.theme}},postCreate:function(){this.inherited(arguments);
this.pageInstructionText&&(this.pageInstruction.innerHTML=this.pageInstructionText);n.set(this.schemaMapInstructions,"aria-label",D.stripHTML(this.pageInstruction.innerHTML));this.own(f(this.uploadLabel,"keydown",c.hitch(this,function(a){a.keyCode!==l.ENTER&&a.keyCode!==l.SPACE||this.fileNode.click()})));this.own(f(this.creditsLink,"keydown",c.hitch(this,function(a){a.keyCode!==l.ENTER&&a.keyCode!==l.SPACE||this.creditsLinkTag.click()})));this.firstFocusNode=this.schemaMapInstructions;this.lastFocusNode=
this.creditsLink},startup:function(){this._started=!0;this.inDrop=!1;if(this.fileNode.disabled=this.disabled)x.add(this.uploadLabel,"disabled"),n.set(this.uploadLabel,"tabindex","-1");this.parent.domNode&&(this.own(f(this.parent.domNode,"dragenter",this.onDragEnter)),this.own(f(this.parent.domNode,"dragover",this.onDragOver)),this.own(f(this.parent.domNode,"drop",c.hitch(this,this.onDrop))));this.own(f(this.map.container,"dragenter",this.onDragEnter));this.own(f(this.map.container,"dragover",this.onDragOver));
this.own(f(this.map.container,"drop",c.hitch(this,this.onDrop)));this.own(f(this.fileNode,"change",c.hitch(this,this.onDrop)))},onShown:function(){},_clearResults:function(a){a||(this.map.infoWindow.hide(),this.inDrop=!1)},setStyleColor:function(a){this.styleColor=a},updateImageNodes:function(){},validate:function(a,b){var d=new k;"next-view"===a?d.resolve(this._nextView(b)):"back-view"===a?this._backView(b).then(function(e){d.resolve(e)}):this._homeView(b).then(function(e){d.resolve(e)});return d},
_nextView:function(a){a.navView.label===this.pageContainer.views[1].label&&this.pageContainer.toggleController(!1);return!0},_backView:function(a){var b=new k;a.navView.label===this.label&&(this.pageContainer.toggleController(!0),b.resolve(!0));return b},_homeView:function(a){var b=new k;a.navView.label===this.label&&(this.pageContainer.toggleController(!0),b.resolve(!0));return b},_clearMapping:function(){this.parent._locationMappingComplete=!1;this.parent._fieldMappingComplete=!1},onDragEnter:function(a){a.preventDefault()},
onDragOver:function(a){a.preventDefault()},onDrop:function(a){if(this.disabled)this.parent._userCanEdit?(a=this.parent._getMessages(),this.parent._showPopup(a)):this.parent.showEditMessage();else if(!this.inDrop){this.inDrop=!0;this.csvStore&&this.csvStore.clear();if(a.dataTransfer){a.preventDefault();var b=a.dataTransfer.files}else a.currentTarget&&(b=a.currentTarget.files);b&&0<b.length?(a=b[0],-1!==a.name.indexOf(".csv")?(this.csvStore=new y({file:a,fsFields:this._fsFields,map:this.map,geocodeSources:this._geocodeSources,
nls:this.nls,appConfig:this.appConfig,editLayer:this.parent.editLayer,symbol:this.parent._symbol,parent:this.parent}),this.csvStore.handleCsv().then(c.hitch(this,function(d){this._updatePageContainer(d);this.inDrop=!1}),c.hitch(this,function(){this.parent.erroInCSV();this.inDrop=!1}))):this.inDrop=!1):this.inDrop=!1}},targetLayerUpdated:function(){this.fieldMappingView&&this.csvStore&&(this.csvStore.editLayer=this.parent.editLayer,this.csvStore.symbol=this.parent._symbol,this.csvStore.fsFields=c.clone(this._fsFields),
this.csvStore._getDuplicateFields(this.csvStore.fsFields),this.csvStore.handleCsv().then(c.hitch(this,function(a){var b=a.fsFields;a=this._getFields(a,!1);this.fieldMappingView.targetLayerUpdate(b,a)})))},_initCoordinatesView:function(a){return new A(c.mixin({fields:this._getFields(a,!0),xField:"X"===this.config.xyFields[0].fieldName?this.config.xyFields[0]:this.config.xyFields[1],yField:"Y"===this.config.xyFields[0].fieldName?this.config.xyFields[0]:this.config.xyFields[1],firstField:this.config.xyFields[0].fieldName},
this._baseArgs))},_initAddressView:function(a){return new z(c.mixin({singleFields:this._singleFields,multiFields:this._multiFields,fields:this._getFields(a,!1),multiEnabled:this.multiEnabled,singleEnabled:this.singleEnabled},this._baseArgs))},_initFieldMappingView:function(a){return new B(c.mixin({targetFields:a.fsFields,sourceFields:this._getFields(a,!1)},this._baseArgs))},_getFields:function(a,b){var d=[];q.forEach(a.fields,function(e){var g=a.fieldTypes[e];(b&&g&&(g.supportsInt||g.supportsFloat)||
!b)&&d.push({label:e,value:e,type:g})});return d},_updatePageContainer:function(a){this.pageContainer.getViewByTitle("StartPage").csvStore=this.csvStore;if(this.xyEnabled){var b=this._initCoordinatesView(a);this.pageContainer.addView(b)}if(this.singleEnabled||this.multiEnabled)b=this._initAddressView(a),this.pageContainer.addView(b);this.fieldMappingView=this._initFieldMappingView(a);this.pageContainer.addView(this.fieldMappingView);this.pageContainer._nextView()},verifyClearSettings:function(a){var b=
new k;if(a.navView.label===this.label){if(this.parent._locationMappingComplete||this.parent._fieldMappingComplete||this.parent._tempResultsAdded)var d=this.nls.warningsAndErrors.settingsCleared;if(d){var e=m.create("div");m.create("div",{className:"cf-warning-icon",style:"float: "+(window.isRTL?"right; margin-left":"left; margin-right")+": 10px;"},e);var g="padding-"+(window.isRTL?"right":"left")+": 50px;";m.create("div",{innerHTML:d,style:g},e);m.create("div",{innerHTML:this.nls.warningsAndErrors.proceed,
style:"padding-top:10px; "+g},e);var h=new C({width:325,autoHeight:!0,content:e,buttons:[{label:this.nls.yes,onClick:c.hitch(this,function(){this._clearMapping();this._clearStore(!0);this.pageContainer.toggleController(!0);h.close();h=null;b.resolve(!0)})},{label:this.nls.no,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,function(){this.pageContainer.selectView(a.currentView.index);h.close();h=null;b.resolve(!1)})}],onClose:function(){h=null}})}else this.pageContainer.toggleController(!0),
this._clearStore(!0),b.resolve(!0)}else b.resolve(!0);return b},_clearStore:function(a){this.csvStore&&this.csvStore.clear();this.map.infoWindow&&this.map.infoWindow.clearFeatures&&this.map.infoWindow.clearFeatures();this.fileForm.reset();a&&(this.parent._initPageContainer(!0),this.inDrop=!1)}})});