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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.nav","wijmo/wijmo.react.nav"],function(n,t){"use strict";var e=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),s=t&&t.id,i,r,u,f,o;return{setters:[function(n){i=n},function(n){r=n},function(n){u=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.nav=u;f=function(n){function t(t){return n.call(this,t,r.TreeView,{objectProps:['childItemsPath','displayMemberPath','imageMemberPath','itemsSource','selectedItem','selectedNode','checkedItems']})||this}return e(t,n),t}(i.ComponentBase);n("TreeView",f);o=i}}})