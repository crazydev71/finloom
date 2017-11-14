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
System.register(["wijmo/wijmo","wijmo/wijmo.vue2.core","vue"],function(n,t){"use strict";var h=t&&t.id,i,u,f,e,r,o,s;return{setters:[function(n){i=n},function(n){u=n},function(n){f=n;e=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.core=u;n("Vue",r=f.default||e);n("WjInclude",o=r.component('wj-include',{template:'<div/>',props:['src'],mounted:function(){var n=this;i.httpRequest(this.src,{success:function(t){n.$el.innerHTML=t.response}})}}));n("WjFormat",s=r.filter('wj-format',function(n,t){return i.Globalize.format(n,t)}))}}})