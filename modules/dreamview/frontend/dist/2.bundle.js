(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{483:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(3)),l=m(a(1)),i=m(a(2)),o=m(a(4)),r=m(a(5)),d=m(a(0)),u=m(a(109)),c=m(a(20)),f=a(179),s=m(a(484)),p=m(a(485));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){(0,l.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));if(a.scriptOnLoadHandler=a.scriptOnLoadHandler.bind(a),!u.default.mapAPILoaded){var i=function(){console.log("Map API script loaded.")};"BaiduMap"===PARAMETERS.navigation.map?window.initMap=a.scriptOnLoadHandler:"GoogleMap"===PARAMETERS.navigation.map&&(i=a.scriptOnLoadHandler),(0,s.default)({url:PARAMETERS.navigation.mapAPiUrl,onLoad:i,onError:function(){console.log("Failed to load map api")}})}return a}return(0,r.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){u.default.mapAPILoaded&&this.scriptOnLoadHandler()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.hasRoutingControls,a=e.size;t&&a===f.MAP_SIZE.FULL?u.default.enableControls():u.default.disableControls()}},{key:"scriptOnLoadHandler",value:function(){a(486)("./"+PARAMETERS.navigation.map+"Adapter").then((function(e){var t=new(0,e.default);u.default.mapAPILoaded=!0,u.default.initialize(c.default,t),u.default.disableControls()}))}},{key:"componentWillUnmount",value:function(){u.default.reset()}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.size,l=e.onResize;return["GoogleMap","BaiduMap"].includes(PARAMETERS.navigation.map)?d.default.createElement("div",{displayname:"navigation",className:"navigation-view",style:{width:t,height:a}},d.default.createElement("div",{id:"map_canvas"}),d.default.createElement(p.default,{type:n,onClick:l})):(console.error("Map API "+PARAMETERS.navigation.map+" is not supported."),null)}}]),t}(d.default.Component);t.default=v},484:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.url,a=e.onLoad,n=e.onError,l=document.createElement("script");l.src=t,l.type="text/javascript",l.async=!0,l.onload=a,l.onerror=n,document.body.appendChild(l)}},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(3)),l=c(a(1)),i=c(a(2)),o=c(a(4)),r=c(a(5)),d=c(a(0)),u=a(179);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,i.default)(t,[{key:"getMinimizingIcon",value:function(){return d.default.createElement("svg",{viewBox:"0 0 20 20"},d.default.createElement("defs",null,d.default.createElement("path",{d:"M20 0L0 20h20V0z",id:"a"}),d.default.createElement("path",{d:"M11.53 18.5l-.03-7h7",id:"b"}),d.default.createElement("path",{d:"M12 12l7 7",id:"c"})),d.default.createElement("use",{xlinkHref:"#a",opacity:".8",fill:"#84b7FF"}),d.default.createElement("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}),d.default.createElement("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}))}},{key:"getMaximizingIcon",value:function(){return d.default.createElement("svg",{viewBox:"0 0 20 20"},d.default.createElement("defs",null,d.default.createElement("path",{d:"M20 0L0 20h20V0z",id:"a"}),d.default.createElement("path",{d:"M18.47 11.5l.03 7h-7",id:"b"}),d.default.createElement("path",{d:"M11 11l7 7",id:"c"})),d.default.createElement("use",{xlinkHref:"#a",opacity:".8",fill:"#84b7FF"}),d.default.createElement("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}),d.default.createElement("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}))}},{key:"render",value:function(){var e=this.props,t=e.type,a=e.onClick,n=null;switch(t){case u.MAP_SIZE.FULL:n=this.getMinimizingIcon();break;case u.MAP_SIZE.DEFAULT:n=this.getMaximizingIcon();break;default:console.error("Unknown window size found:",t)}return d.default.createElement("div",{className:"window-resize-control",onClick:a},n)}}]),t}(d.default.PureComponent);t.default=f},486:function(e,t,a){var n={"./BaiduMapAdapter":[487,3],"./GoogleMapAdapter":[488,4]};function l(e){var t=n[e];return t?a.e(t[1]).then((function(){var e=t[0];return a.t(e,7)})):Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}l.keys=function(){return Object.keys(n)},l.id=486,e.exports=l}}]);
//# sourceMappingURL=2.bundle.js.map