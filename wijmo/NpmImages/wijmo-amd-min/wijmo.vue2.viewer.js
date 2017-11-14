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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.viewer","wijmo/wijmo.vue2.viewer","vue","vue"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.viewer=u;t.Vue=f.default||e;t.WjReportViewer=t.Vue.component('wj-report-viewer',{template:'<div/>',props:i._getProps('wijmo.viewer.ReportViewer'),mounted:function(){i._initialize(this,new r.ReportViewer(this.$el))}});t.WjPdfViewer=t.Vue.component('wj-pdf-viewer',{template:'<div/>',props:i._getProps('wijmo.viewer.PdfViewer'),mounted:function(){i._initialize(this,new r.PdfViewer(this.$el))}})})