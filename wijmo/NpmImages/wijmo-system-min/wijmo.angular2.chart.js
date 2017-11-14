﻿/*
    *
    * Wijmo Library 5.20172.359
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
System.register(["wijmo/wijmo.chart","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(n,t){"use strict";var o=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),lt=t&&t.id,e,f,i,r,ct,st,u,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt,ut,ft,et,ht,ot;return{setters:[function(n){e=n},function(n){f=n;i=n;r=n},function(n){ct=n},function(n){st=n},function(n){u=n}],execute:function(){n("wjFlexChartMeta",s={selector:'wj-flex-chart',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingX','interpolateNulls','legendToggle','symbolSize','options','selection','itemFormatter','labelContent','chartType','rotated','stacking',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged','selectionChangePC: selectionChange','seriesVisibilityChangedNg: seriesVisibilityChanged',],providers:[{provide:st.NG_VALUE_ACCESSOR,useFactory:u.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]});h=function(n){function t(t,i,r){var f=n.call(this,u.WjDirectiveBehavior.getHostElement(t,i))||this,e;return f.isInitialized=!1,e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,f){var s=this,e,o;f===void 0&&(f=!1);e=u.WjDirectiveBehavior;o=e.ngZone;o&&e.outsideZoneEvents[i]?o.runOutsideAngular(function(){n.prototype.addEventListener.call(s,t,i,r,f)}):n.prototype.addEventListener.call(this,t,i,r,f)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(e.FlexChart);h.meta={outputs:s.outputs,changeEvents:{selectionChanged:['selection']}};h.decorators=[{type:f.Component,args:[{selector:s.selector,template:s.template,inputs:s.inputs,outputs:s.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return h})}].concat(s.providers)},]},];h.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChart",h);n("wjFlexPieMeta",c={selector:'wj-flex-pie',template:"<div><ng-content></ng-content></div>",inputs:['wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingName','innerRadius','isAnimated','offset','reversed','startAngle','selectedItemPosition','selectedItemOffset','itemFormatter','labelContent',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged',],providers:[{provide:st.NG_VALUE_ACCESSOR,useFactory:u.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]});l=function(n){function t(t,i,r){var f=n.call(this,u.WjDirectiveBehavior.getHostElement(t,i))||this,e;return f.isInitialized=!1,e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,f){var s=this,e,o;f===void 0&&(f=!1);e=u.WjDirectiveBehavior;o=e.ngZone;o&&e.outsideZoneEvents[i]?o.runOutsideAngular(function(){n.prototype.addEventListener.call(s,t,i,r,f)}):n.prototype.addEventListener.call(this,t,i,r,f)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(e.FlexPie);l.meta={outputs:c.outputs};l.decorators=[{type:f.Component,args:[{selector:c.selector,template:c.template,inputs:c.inputs,outputs:c.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return l})}].concat(c.providers)},]},];l.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexPie",l);n("wjFlexChartAxisMeta",a={selector:'wj-flex-chart-axis',template:"",inputs:['wjProperty','axisLine','format','labels','majorGrid','majorTickMarks','majorUnit','max','min','position','reversed','title','labelAngle','minorGrid','minorTickMarks','minorUnit','origin','logBase','plotArea','labelAlign','name','overlappingLabels','labelPadding','itemFormatter','itemsSource','binding',],outputs:['initialized','rangeChangedNg: rangeChanged',],providers:[]});v=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='axes',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.Axis);v.meta={outputs:a.outputs};v.decorators=[{type:f.Component,args:[{selector:a.selector,template:a.template,inputs:a.inputs,outputs:a.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return v})}].concat(a.providers)},]},];v.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartAxis",v);n("wjFlexChartLegendMeta",y={selector:'wj-flex-chart-legend',template:"",inputs:['wjProperty','position',],outputs:['initialized',],providers:[]});p=function(n){function t(t,i,r){var f=n.call(this,r)||this,e;return f.isInitialized=!1,f.wjProperty='legend',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.Legend);p.meta={outputs:y.outputs};p.decorators=[{type:f.Component,args:[{selector:y.selector,template:y.template,inputs:y.inputs,outputs:y.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return p})}].concat(y.providers)},]},];p.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartLegend",p);n("wjFlexChartDataLabelMeta",w={selector:'wj-flex-chart-data-label',template:"",inputs:['wjProperty','content','border','offset','connectingLine','position',],outputs:['initialized','renderingNg: rendering',],providers:[]});b=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='dataLabel',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.DataLabel);b.meta={outputs:w.outputs};b.decorators=[{type:f.Component,args:[{selector:w.selector,template:w.template,inputs:w.inputs,outputs:w.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return b})}].concat(w.providers)},]},];b.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartDataLabel",b);n("wjFlexPieDataLabelMeta",k={selector:'wj-flex-pie-data-label',template:"",inputs:['wjProperty','content','border','offset','connectingLine','position',],outputs:['initialized','renderingNg: rendering',],providers:[]});d=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='dataLabel',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.PieDataLabel);d.meta={outputs:k.outputs};d.decorators=[{type:f.Component,args:[{selector:k.selector,template:k.template,inputs:k.inputs,outputs:k.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return d})}].concat(k.providers)},]},];d.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexPieDataLabel",d);n("wjFlexChartSeriesMeta",g={selector:'wj-flex-chart-series',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','chartType',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]});nt=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='series',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.Series);nt.meta={outputs:g.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};nt.decorators=[{type:f.Component,args:[{selector:g.selector,template:g.template,inputs:g.inputs,outputs:g.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return nt})}].concat(g.providers)},]},];nt.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartSeries",nt);n("wjFlexChartLineMarkerMeta",tt={selector:'wj-flex-line-marker',template:"",inputs:['wjProperty','isVisible','seriesIndex','horizontalPosition','content','verticalPosition','alignment','lines','interaction','dragLines','dragThreshold','dragContent',],outputs:['initialized','positionChangedNg: positionChanged',],providers:[]});it=function(n){function t(t,i,r){var f=n.call(this,r)||this,e;return f.isInitialized=!1,e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.LineMarker);it.meta={outputs:tt.outputs};it.decorators=[{type:f.Component,args:[{selector:tt.selector,template:tt.template,inputs:tt.inputs,outputs:tt.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return it})}].concat(tt.providers)},]},];it.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartLineMarker",it);n("wjFlexChartDataPointMeta",rt={selector:'wj-flex-chart-data-point',template:"",inputs:['wjProperty','x','y',],outputs:['initialized',],providers:[]});ut=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.DataPoint);ut.meta={outputs:rt.outputs};ut.decorators=[{type:f.Component,args:[{selector:rt.selector,template:rt.template,inputs:rt.inputs,outputs:rt.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return ut})}].concat(rt.providers)},]},];ut.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartDataPoint",ut);n("wjFlexChartPlotAreaMeta",ft={selector:'wj-flex-chart-plot-area',template:"",inputs:['wjProperty','column','height','name','row','style','width',],outputs:['initialized',],providers:[]});et=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='plotAreas',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return o(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(e.PlotArea);et.meta={outputs:ft.outputs};et.decorators=[{type:f.Component,args:[{selector:ft.selector,template:ft.template,inputs:ft.inputs,outputs:ft.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return et})}].concat(ft.providers)},]},];et.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartPlotArea",et);ht=[h,l,v,p,b,d,nt,it,ut,et];ot=function(){function n(){}return n}();ot.decorators=[{type:f.NgModule,args:[{imports:[u.WjDirectiveBaseModule,ct.CommonModule],declarations:ht.slice(),exports:ht.slice()},]},];ot.ctorParameters=function(){return[]};n("WjChartModule",ot)}}})