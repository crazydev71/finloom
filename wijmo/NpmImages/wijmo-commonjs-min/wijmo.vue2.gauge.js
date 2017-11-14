/*
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
"use strict";function _addRanges(n,t){n.$children.forEach(function(i){switch(i.$options.name){case'wj-range':var r=wjcVue2Base._initialize(i,new wjcGauge.Range);i.wjProperty?t[i.wjProperty]=r:t.ranges.push(r)}n.$el.removeChild(i.$el)})}var vue_1,VueModule;Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGauge=require("wijmo/wijmo.gauge"),wjcSelf=require("wijmo/wijmo.vue2.gauge");window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.gauge=wjcSelf;vue_1=require("vue");VueModule=require("vue");exports.Vue=vue_1.default||VueModule;exports.WjLinearGauge=exports.Vue.component('wj-linear-gauge',{template:'<div><slot/></div>',props:wjcVue2Base._getProps('wijmo.gauge.LinearGauge'),mounted:function(){var n=new wjcGauge.LinearGauge(this.$el);_addRanges(this,n);wjcVue2Base._initialize(this,n)}});exports.WjBulletGraph=exports.Vue.component('wj-bullet-graph',{template:'<div><slot/></div>',props:wjcVue2Base._getProps('wijmo.gauge.BulletGraph'),mounted:function(){var n=new wjcGauge.BulletGraph(this.$el);_addRanges(this,n);wjcVue2Base._initialize(this,n)}});exports.WjRadialGauge=exports.Vue.component('wj-radial-gauge',{template:'<div><slot/></div>',props:wjcVue2Base._getProps('wijmo.gauge.RadialGauge'),mounted:function(){var n=new wjcGauge.RadialGauge(this.$el);_addRanges(this,n);wjcVue2Base._initialize(this,n)}});exports.WjRange=exports.Vue.component('wj-range',{template:'<div/>',props:wjcVue2Base._getProps('wijmo.gauge.Range',['wjProperty'])})