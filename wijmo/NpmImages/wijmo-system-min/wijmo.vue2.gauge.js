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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.gauge","wijmo/wijmo.vue2.gauge","vue"],function(n,t){"use strict";function f(n,t){n.$children.forEach(function(u){switch(u.$options.name){case'wj-range':var f=i._initialize(u,new r.Range);u.wjProperty?t[u.wjProperty]=f:t.ranges.push(f)}n.$el.removeChild(u.$el)})}var v=t&&t.id,i,r,e,o,s,u,h,c,l,a;return{setters:[function(n){i=n},function(n){r=n},function(n){e=n},function(n){o=n;s=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.gauge=e;n("Vue",u=o.default||s);n("WjLinearGauge",h=u.component('wj-linear-gauge',{template:'<div><slot/></div>',props:i._getProps('wijmo.gauge.LinearGauge'),mounted:function(){var n=new r.LinearGauge(this.$el);f(this,n);i._initialize(this,n)}}));n("WjBulletGraph",c=u.component('wj-bullet-graph',{template:'<div><slot/></div>',props:i._getProps('wijmo.gauge.BulletGraph'),mounted:function(){var n=new r.BulletGraph(this.$el);f(this,n);i._initialize(this,n)}}));n("WjRadialGauge",l=u.component('wj-radial-gauge',{template:'<div><slot/></div>',props:i._getProps('wijmo.gauge.RadialGauge'),mounted:function(){var n=new r.RadialGauge(this.$el);f(this,n);i._initialize(this,n)}}));n("WjRange",a=u.component('wj-range',{template:'<div/>',props:i._getProps('wijmo.gauge.Range',['wjProperty'])}))}}})