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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.viewer","wijmo/wijmo.vue2.viewer","vue"],function(n,t){"use strict";var c=t&&t.id,i,r,f,e,o,u,s,h;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n},function(n){e=n;o=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.viewer=f;n("Vue",u=e.default||o);n("WjReportViewer",s=u.component('wj-report-viewer',{template:'<div/>',props:i._getProps('wijmo.viewer.ReportViewer'),mounted:function(){i._initialize(this,new r.ReportViewer(this.$el))}}));n("WjPdfViewer",h=u.component('wj-pdf-viewer',{template:'<div/>',props:i._getProps('wijmo.viewer.PdfViewer'),mounted:function(){i._initialize(this,new r.PdfViewer(this.$el))}}))}}})