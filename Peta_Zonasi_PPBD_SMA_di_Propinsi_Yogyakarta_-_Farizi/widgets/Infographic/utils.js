// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on jimu/utils dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/Deferred esri/layers/FeatureLayer".split(" "),function(l,n,h,p,q,w,r){var m={stringFieldType:"esriFieldTypeString",oidFieldType:"esriFieldTypeOID",dateFieldType:"esriFieldTypeDate",numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],getClientFeaturesFromMap:function(a,b,c,d){return n.getClientFeaturesFromMap(a,b,c,d)},listenClientFeaturesFromMap:function(a,
b,c,d,f){var e=[];c&&(e.push(l(b,"selection-complete",h.hitch(this,function(){f(this.getClientFeaturesFromMap(a,b,c,d))}))),e.push(l(b,"selection-clear",h.hitch(this,function(){f(this.getClientFeaturesFromMap(a,b,c,d))}))));d&&e.push(l(a,"extent-change",h.hitch(this,function(){0<b.graphics.length&&f(this.getClientFeaturesFromMap(a,b,c,d))})));e.push(l(b,"update-end",h.hitch(this,function(){f(this.getClientFeaturesFromMap(a,b,c,d))})));f(this.getClientFeaturesFromMap(a,b,c,d));return{remove:function(){e&&
q.forEach(e,h.hitch(this,function(g){g.remove()}));e=null}}},getVaildIndicator:function(a,b,c){var d=[];b.map(h.hitch(this,function(f){(f=this._handleOperator(f,a,c))&&d.push(f)}));if(0<d.length)return d[d.length-1]},filterFeaturesByDataSourceSetting:function(a,b,c){if(0===a.length)return[];if(b.useSelection){var d=a[0].getLayer();if(d){var f=d.getSelectedFeatures();0<f.length&&(a=q.filter(a,function(e){return-1<f.indexOf(e)}))}}b.filterByExtent&&(a=n.filterFeaturesByExtent(c.extent,a));return a},
_handleOperator:function(a,b,c){function d(g){f={};g.valueColor&&(f.valueColor=g.valueColor);g.gaugeColor&&(f.gaugeColor=g.gaugeColor);g.iconInfo&&(f.iconInfo=g.iconInfo)}var f,e=a.value.map(h.hitch(this,function(g){return a.isRatio?g/100*c:g}));"greater"===a.operator&&b>e[0]?d(a):"smaller"===a.operator&&b<e[0]?d(a):"between"===a.operator&&b>e[0]&&b<e[1]?d(a):"equal"===a.operator&&b===e[0]?d(a):"notEqual"===a.operator&&b!==e[0]&&d(a);return f},isInteger:function(a){return"number"===typeof a&&0===
a%1},_getFieldNamesByFields:function(a){if(a&&a.length)return a.map(function(b){return this._getFieldNameByFieldInfo(b)}.bind(this))},_getFieldNameByFieldInfo:function(a){return a&&a.name},isBaseAxisChart:function(a){return"column"===a||"bar"===a||"line"===a},isEqual:function(a,b){return typeof a!==typeof b?!1:"object"!==typeof a?a===b:n.isEqual(a,b)},separationChartProperties:function(a,b){var c=["mode","type"],d=["backgroundColor","seriesStyle","legend","highLightColor"];"feature"===b?c=c.concat(["clusterField",
"valueFields"]):"category"===b?c=c.concat(["clusterField","dateConfig","valueFields","operation","nullValue"]):"count"===b?c=c.concat(["clusterField","dateConfig"]):"field"===b&&(c=c.concat(["valueFields","operation","nullValue"]));c=c.concat(["sortOrder","maxLabels"]);d="pie"===a?d.concat(["dataLabel","innerRadius"]):d.concat("displayRange xAxis yAxis stack area tooltip marks".split(" "));return{dataProperties:c,displayProperties:d}},isValidChartConfig:function(a){if(a&&(a=a.data)){var b=a.mode,
c=a.type;if(b&&c&&("count"===b||a.valueFields&&a.valueFields.length)&&("pie"!==c||""!==a.maxLabels))return!0}},getChartConfig:function(a){if(a){var b=this.separationChartProperties(a.type,a.mode),c=b.displayProperties,d={},f={};b.dataProperties.forEach(h.hitch(this,function(e){d[e]=a[e]}));c.forEach(h.hitch(this,function(e){f[e]=a[e]}));b={data:d,display:f};return this.isValidChartConfig(b)?b:!1}},specialChartConfig:function(a,b){var c=a&&a.data;if(c){var d=c.sortOrder;"feature"===c.mode&&d&&d.field===
c.clusterField&&(d.isLabelAxis=!0)}if(a=a&&a.display)c&&(a.mode=c.mode),a.theme||(a.theme=b)},_cloneAndFormatDS:function(a){a=h.clone(a);var b={};a.name&&(b.name=a.name);a.dataSourceType&&(b.dataSourceType=a.dataSourceType);a.layerId&&(b.layerId=a.layerId);a.frameWorkDsId&&(b.frameWorkDsId=a.frameWorkDsId);a=null;return b},isDSEqual:function(a,b){if(a&&b)return a=this._cloneAndFormatDS(a),b=this._cloneAndFormatDS(b),this.isEqual(a,b)},separationGradientColors:function(a,b){var c=[];2===a.length&&
(c=this._createGradientColors(a[0],a[a.length-1],b));return c},_createGradientColors:function(a,b,c){var d=[];a=new p(a);var f=new p(b);b=(f.r-a.r)/c;var e=(f.g-a.g)/c;f=(f.b-a.b)/c;for(var g=new p,t=0,u=0,v=0,k=0;k<c;k++)t=parseInt(a.r+b*k,10),u=parseInt(a.g+e*k,10),v=parseInt(a.b+f*k,10),g.setColor([t,u,v]),d.push(g.toHex());return d},mockLayerDefinitionForSTD:function(a){var b={type:"Table",fields:[]};b.fields=a.fields;b.fields.push({name:"STAT_COUNT",type:"esriFieldTypeInteger",alias:"STAT_COUNT"});
return b},getLoadedLayer:function(a){var b=new w,c=null;c="string"===typeof a?new r(a):"esri.layers.FeatureLayer"===a.declaredClass?a:new r({layerDefinition:h.clone(a),featureSet:null});if(c.loaded)b.resolve(c);else c.on("load",function(){b.resolve(c)});return b},parseDataSourceId:function(a){var b=a.split("~"),c={};if(2>b.length)return console.error("Bad data source id:",a),c;switch(b[0]){case "map":return b=a.lastIndexOf("~"),c={from:"map",layerId:a.substring(4,b)};case "widget":return c={from:"widget",
widgetId:b[1]};case "external":return c={from:"external"};default:console.error("Bad data source id:",a)}},getDsTypeInfoMeta:function(a,b){var c={dsTypeInfo:null,dsMeta:null};c.dsTypeInfo=this.parseDataSourceId(a);if(b=b.dataSource&&b.dataSource.dataSources)c.dsMeta=b[a];return c},getValueFromFeatures:function(a,b,c){if(!a||!b||!c)return!1;a=this.getSingleValueFromFeatures(a,b,c);a=this._getVaildValue(a);return"number"!==typeof a?!1:a},_getVaildValue:function(a){if(a||0===a)return Number(a)},cleanFeatures:function(a){if(a&&
a.length)return a.map(function(b){return{attributes:b.attributes}})},getFieldAliasByFieldInfo:function(a,b){var c="";if(!a)return c;var d=a.name;c=a.alias||d;b&&(c=this.getAliasFromPopupInfo(d,b));return c},getAliasFromPopupInfo:function(a,b){var c=a;if(!b)return c;(b=b.fieldInfos)&&0<b.length&&b.some(function(d){return d.fieldName===a?(c=d.label,!0):!1});return c},isFolatNumber:function(a){return"number"!==typeof a?!1:/^(-?\d+)(\.\d+)?$/.test(a)},addAliasForLayerDefinition:function(a,b){a&&a.fields&&
0<a.fields.length&&a.fields.forEach(h.hitch(this,function(c){var d=this.getFieldAliasByFieldInfo(c,b);d&&(c.alias=d)}))},mockDataSourceForGaugeRange:function(a,b){var c=this.getRangeSourceInfo(a);a=this.mockDataSourceByStatSourceID(c.range1,b);b=this.mockDataSourceByStatSourceID(c.range2,b);return[a,b]},mockDataSourceByStatSourceID:function(a,b){a=a||{};var c=a.id||b;a=a.id?a.label:b;var d;c&&(d={name:a,frameWorkDsId:c,dataSourceType:"DATA_SOURCE_FROM_FRAMEWORK"});return d},getStatisticForChart:function(a){var b=
a.mode;var c=a.valueFields;var d=a.operation,f=a.nullValue;"average"===d&&(d="avg");a=a.clusterField;if("count"!==b){var e=c;c=d}else c="count";if("category"===b||"count"===b)var g=[a];return{type:c,fields:e,groupByFields:g,nullValue:f}},getStatisticForGauge:function(a){var b={};a=a.statistics;if(!a||!a.length)return b;a.forEach(function(c){"value"===c.type&&(b.value=c.config.value);"range"===c.type&&"stat"===c.config.type&&(b[c.name]=c.config.value.statistic)});return b},getStatisticForNumber:function(a){if(a&&
a.statistics&&a.statistics.length)return a.statistics[0].config.value},getRangeDataSource:function(a){var b={};if(!a||!a.config)return b;a=a.config.statistics;if(!a||!a.length)return b;a.forEach(function(c){"range"===c.type&&"stat"===c.config.type&&(b[c.name]={name:c.config.value.sourceLabel||c.config.value.sourceID,frameWorkDsId:c.config.value.sourceID,dataSourceType:"DATA_SOURCE_FROM_FRAMEWORK"})});return b},getRangeFixedValue:function(a){var b={};a=a.config.statistics;if(!a||!a.length)return b;
a.forEach(function(c){"range"===c.type&&"fixed"===c.config.type&&(b[c.name]=c.config.value)});return b},checkDataSourceIsVaild:function(a,b,c,d,f){var e={code:0,fields:[]},g=null;a?"DATA_SOURCE_FROM_FRAMEWORK"===a.dataSourceType?(e.label=a.name||a.frameWorkDsId,d&&d.dataSource&&d.dataSource.dataSources?(a=d.dataSource.dataSources[a.frameWorkDsId])?(g=a.dataSchema&&a.dataSchema.fields,b=this._getNeededFieldsByMainDijitJson(b,f),e=this._isDataSourceContainNeededFields(g,b,e)):e.code=1:e.code=1):"DATA_SOURCE_FEATURE_LAYER_FROM_MAP"===
a.dataSourceType&&(g=a.layerId,e.label=a.name||a.layerId,g&&c?(a=c.getLayer(g))?(g=a.fields,b=this._getNeededFieldsByMainDijitJson(b,f),e=this._isDataSourceContainNeededFields(g,b,e)):e.code=1:e.code=1):e.code=1;return e},getCheckDataSourceResultCode:function(a){if(a&&a.length){a=h.clone(a);var b=a.shift();if(b.code)return b.code;var c=0;a.some(function(d){if(d&&1===d.code)return c=3,!0;if(d&&2===d.code)return c=2,!0});return c}},getRangeSourceInfo:function(a){var b={};if(!a||!a.length)return b;a.forEach(function(c){if("range"===
c.type&&"stat"===c.config.type){var d=c.name,f=c.config.value.sourceID;c=c.config.value.sourceLabel;d&&f&&(b[d]={id:f,label:c||f})}});return b},getGaugeNumberStatisticField:function(a){var b={};if(!a||!a.length)return b;a.forEach(function(c){if("range"===c.type&&"stat"===c.config.type){var d=c.name;c=c.config.value.statistic.field;d&&c&&(b[d]=c)}else"value"===c.type&&(c=c.config.value.field,b.value=c)});return b},_isDataSourceContainNeededFields:function(a,b,c){if(!a||!a.length)return c.code=1,c;
var d=this._getFieldNamesByFields(a);if(!b||!b.length)return c.code=0,c;b.forEach(function(f){0>d.indexOf(f)&&c.fields.push(f)});c.fields.length&&(c.code=2);return c},_getNeededFieldsByMainDijitJson:function(a,b){if(a)return this._getNeededFieldsByDijitConfig(a.type,a.config,b)},_getNeededFieldsByDijitConfig:function(a,b,c){var d=null;if(b){if("chart"===a){d=[];c=b.data;if(!c)return;c.clusterField&&d.push(c.clusterField);c.valueFields&&c.valueFields.length&&(d=d.concat(c.valueFields))}else if("gauge"===
a||"number"===a)d=[],(a=b.statistics)&&(c=this.getGaugeNumberStatisticField(a)[c])&&d.push(c);if(d&&d.length)return d}},formatterRangeNumber:function(a){"number"!==typeof a&&(a=Number(a));if(!a&&0!==a)return!1;this.isFolatNumber(a)&&(a=a.toFixed(2),a=Number(a));return a},upperCaseString:function(a){return a&&"string"===typeof a?a.toUpperCase():a},lowerCaseString:function(a){return a&&"string"===typeof a?a.toLowerCase():a},isStrictNaN:function(a){return"number"===typeof a&&isNaN(a)},isValidValue:function(a){return"undefined"!==
typeof a&&null!==a&&""!==a&&!this.isStrictNaN(a)},getLayerIdByDataSource:function(a){if(a){var b=a.layerId;a=a.frameWorkDsId;!b&&a&&(a=this.parseDataSourceId(a))&&"undefined"!==a.layerId&&(b=a.layerId);return b}},hasDigitSeparator:function(a,b){var c=!1;if(!a||!b)return c;(b=b.fieldInfos)&&0<b.length&&b.some(function(d){return d.fieldName===a?(c=!(!d.format||!d.format.digitSeparator),!0):!1});return c},getFieldInfo:function(a,b){var c=null;b=b.fields;for(var d=0;d<b.length;d++)b[d].name===a&&(c=b[d]);
return c},isNumberType:function(a,b,c){if(!a||!b)return!1;var d=h.clone(m.numberFieldTypes);c&&d.push(m.oidFieldType);a=m.getFieldInfo(a,b);return!a||a.domain?!1:-1<d.indexOf(a.type)},isAxisType:function(a){return-1<["column","bar","line"].indexOf(a)},isValueAxis:function(a,b){if(this.isAxisType(b))return"bar"===b?!a:a},_isValidChartConfig:function(a){if(!a)return!1;a=a.data;return!(!a||!a.mode)},_upgradeAxisFormat:function(a,b,c,d,f,e){if("undefined"!==typeof a.digitSeparator)return a;this.isValueAxis(b,
d)?a.digitSeparator=!0:this.isNumberType(c,f,!0)&&(b=this.hasDigitSeparator(c,e),a.digitSeparator=b);return a},upgradeChartAxisFormatConfig:function(a,b,c){if(!this._isValidChartConfig(a))return a;var d=a.data.type;if(!this.isAxisType(d)||!a.display)return a;a=h.clone(a);var f=a.data.clusterField,e=a.display.xAxis,g=a.display.yAxis;e.format||(e.format={});g.format||(g.format={});this._upgradeAxisFormat(e.format,!1,f,d,b,c);this._upgradeAxisFormat(g.format,!0,f,d,b,c);return a}};return m});