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
define(["require","exports","wijmo/wijmo","wijmo/wijmo.vue2.core","vue","vue"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.core=r;t.Vue=u.default||f;t.WjInclude=t.Vue.component('wj-include',{template:'<div/>',props:['src'],mounted:function(){var n=this;i.httpRequest(this.src,{success:function(t){n.$el.innerHTML=t.response}})}});t.WjFormat=t.Vue.filter('wj-format',function(n,t){return i.Globalize.format(n,t)})})