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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.gauge","wijmo/wijmo.vue2.gauge","vue","vue"],function(n,t,i,r,u,f,e){"use strict";function o(n,t){n.$children.forEach(function(u){switch(u.$options.name){case'wj-range':var f=i._initialize(u,new r.Range);u.wjProperty?t[u.wjProperty]=f:t.ranges.push(f)}n.$el.removeChild(u.$el)})}Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.gauge=u;t.Vue=f.default||e;t.WjLinearGauge=t.Vue.component('wj-linear-gauge',{template:'<div><slot/></div>',props:i._getProps('wijmo.gauge.LinearGauge'),mounted:function(){var n=new r.LinearGauge(this.$el);o(this,n);i._initialize(this,n)}});t.WjBulletGraph=t.Vue.component('wj-bullet-graph',{template:'<div><slot/></div>',props:i._getProps('wijmo.gauge.BulletGraph'),mounted:function(){var n=new r.BulletGraph(this.$el);o(this,n);i._initialize(this,n)}});t.WjRadialGauge=t.Vue.component('wj-radial-gauge',{template:'<div><slot/></div>',props:i._getProps('wijmo.gauge.RadialGauge'),mounted:function(){var n=new r.RadialGauge(this.$el);o(this,n);i._initialize(this,n)}});t.WjRange=t.Vue.component('wj-range',{template:'<div/>',props:i._getProps('wijmo.gauge.Range',['wjProperty'])})})