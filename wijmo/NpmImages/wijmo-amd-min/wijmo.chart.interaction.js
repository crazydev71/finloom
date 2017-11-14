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
define(["require","exports","wijmo/wijmo","wijmo/wijmo.chart","wijmo/wijmo.chart.interaction"],function(n,t,i,r,u){"use strict";var e,o,c,s,f,h;Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.chart=window.wijmo.chart||{};window.wijmo.chart.interaction=u;e=function(){function n(n,t,r,u){this._isVisible=!0;this._buttonsVisible=!0;this._minScale=0;this._maxScale=1;this._seamless=!1;this._rsContainer=null;this._rsEle=null;this._decBtn=null;this._incBtn=null;this._rsContent=null;this._minHandler=null;this._rangeHandler=null;this._maxHandler=null;this._wrapperSliderMousedown=null;this._wrapperDocMouseMove=null;this._wrapperDocMouseup=null;this._wrapperBtnMousedown=null;this._wrapperRangeSpaceMousedown=null;this._wrapperRangeMouseleave=null;this._isTouch=!1;this._slidingInterval=null;this._rangeSliderRect=null;this._isHorizontal=!0;this._isBtnMousedown=!1;this._needSpaceClick=!1;this._hasButtons=!0;this._movingEle=null;this._movingOffset=null;this._range=null;this._startPt=null;this._minPos=0;this._maxPos=1;this.rangeChanged=new i.Event;this.rangeChanging=new i.Event;n||i.assert(!1,'The container cannot be null.');this._isTouch='ontouchstart'in window;this._needSpaceClick=t;this._hasButtons=r;i.copy(this,u);this._createSlider(n)}return Object.defineProperty(n.prototype,"buttonsVisible",{get:function(){return this._buttonsVisible},set:function(n){if(n!=this._buttonsVisible){if(this._buttonsVisible=i.asBoolean(n),!this._rsContainer||!this._hasButtons)return;this._refresh()}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isHorizontal",{get:function(){return this._isHorizontal},set:function(n){if(n!=this._isHorizontal){if(this._isHorizontal=i.asBoolean(n),!this._rsContainer)return;this._invalidate()}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isVisible",{get:function(){return this._isVisible},set:function(n){if(n!=this._isVisible){if(this._isVisible=i.asBoolean(n),!this._rsContainer)return;this._rsContainer.style.visibility=this._isVisible?'visible':'hidden'}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"minScale",{get:function(){return this._minScale},set:function(n){n>=0&&n!=this._minScale&&(this._minScale=i.asNumber(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxScale",{get:function(){return this._maxScale},set:function(n){n>=0&&n!=this._maxScale&&(this._maxScale=i.asNumber(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"seamless",{get:function(){return this._seamless},set:function(n){n!=this._seamless&&(this._seamless=i.asBoolean(n))},enumerable:!0,configurable:!0}),n.prototype.onRangeChanged=function(n){this.rangeChanged.raise(this,n)},n.prototype.onRangeChanging=function(n){this.rangeChanging.raise(this,n)},Object.defineProperty(n.prototype,"_isSliding",{get:function(){return this._startPt!==null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_handleWidth",{get:function(){return this._minHandler.offsetWidth},enumerable:!0,configurable:!0}),n.prototype._createSlider=function(t){var r=this._isHorizontal?n._HRANGESLIDER:n._VRANGESLIDER,u=this._isHorizontal?'wj-glyph-left':'wj-glyph-down',f=this._isHorizontal?'wj-glyph-right':'wj-glyph-up';this._rsContainer=t;this._rsContainer.style.visibility=this._isVisible?'visible':'hidden';this._rsEle=i.createElement('<div class="wj-chart-rangeslider '+r+'"></div>');this._rsContainer.appendChild(this._rsEle);this._hasButtons&&(this._decBtn=i.createElement('<button class="wj-rangeslider-decbtn wj-btn wj-btn-default" type="button" tabindex="-1"><span class="'+u+' '+n._RANGESLIDER_DECBTN+'"><\/span><\/button>'),this._rsEle.appendChild(this._decBtn),this._incBtn=i.createElement('<button class="wj-rangeslider-incbtn wj-btn wj-btn-default" type="button" tabindex="-1"><span class="'+f+' '+n._RANGESLIDER_INCBTN+'"><\/span><\/button>'),this._rsEle.appendChild(this._incBtn));this._rsContent=i.createElement('<div class="wj-rangeslider-content"><div class="wj-rangeslider-rangehandle"><\/div><div class="wj-rangeslider-minhandle"><\/div><div class="wj-rangeslider-maxhandle"><\/div>');this._rsEle.appendChild(this._rsContent);this._minHandler=this._rsContent.querySelector('.'+n._RANGESLIDER_MINHANDLE);this._rangeHandler=this._rsContent.querySelector('.'+n._RANGESLIDER_RANGEHANDLE);this._maxHandler=this._rsContent.querySelector('.'+n._RANGESLIDER_MAXHANDLE);this._wrapperSliderMousedown=this._onSliderMousedown.bind(this);this._wrapperDocMouseMove=this._onDocMouseMove.bind(this);this._wrapperDocMouseup=this._onDocMouseup.bind(this);this._wrapperRangeSpaceMousedown=this._onRangeSpaceMousedown.bind(this);this._wrapperRangeMouseleave=this._onRangeMouseleave.bind(this);this._wrapperBtnMousedown=this._onBtnMousedown.bind(this);this._switchEvent(!0)},n.prototype._switchEvent=function(n){var t=n?'addEventListener':'removeEventListener',i=n?'addHandler':'removeHandler';this._rsContainer&&(this._needSpaceClick&&this._rsEle[t]('mousedown',this._wrapperRangeSpaceMousedown),this._rsEle[t]('mouseleave',this._wrapperRangeMouseleave),this._rsContent[t]('mousedown',this._wrapperSliderMousedown),this._hasButtons&&(this._decBtn[t]('mousedown',this._wrapperBtnMousedown),this._incBtn[t]('mousedown',this._wrapperBtnMousedown)),document[t]('mousemove',this._wrapperDocMouseMove),document[t]('mouseup',this._wrapperDocMouseup),'ontouchstart'in window&&(this._needSpaceClick&&this._rsEle[t]('touchstart',this._wrapperRangeSpaceMousedown),this._rsContent[t]('touchstart',this._wrapperSliderMousedown),this._hasButtons&&(this._decBtn[t]('touchstart',this._wrapperBtnMousedown),this._incBtn[t]('touchstart',this._wrapperBtnMousedown)),document[t]('touchmove',this._wrapperDocMouseMove),document[t]('touchend',this._wrapperDocMouseup)))},n.prototype._onSliderMousedown=function(t){this._isVisible&&(this._movingEle=t.srcElement||t.target,this._startPt=t instanceof MouseEvent?new i.Point(t.pageX,t.pageY):new i.Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY),i.removeClass(this._minHandler,n._RANGESLIDER_HANDLE_ACTIVE),i.removeClass(this._maxHandler,n._RANGESLIDER_HANDLE_ACTIVE),this._movingOffset=i.getElementRect(this._movingEle),this._movingEle!=this._rangeHandler?(this._isHorizontal?this._movingOffset.left+=.5*this._movingEle.offsetWidth:this._movingOffset.top+=.5*this._movingEle.offsetHeight,i.addClass(this._movingEle,n._RANGESLIDER_HANDLE_ACTIVE)):this._range=this._maxPos-this._minPos,t.preventDefault())},n.prototype._onDocMouseMove=function(n){if(this._isVisible&&this._startPt){var t=n instanceof MouseEvent?new i.Point(n.pageX,n.pageY):new i.Point(n.changedTouches[0].pageX,n.changedTouches[0].pageY);this._onMove(t)}},n.prototype._onMove=function(t){var u=this,o=this._startPt,s=this._movingOffset,f=this._plotBox,e=this._range,h=this._movingEle,c=this._minHandler,y=this._rangeHandler,l=this._maxHandler,a,v,r;o&&s&&(this._isHorizontal?(a=s.left+t.x-o.x,r=(a-f.x)/f.width):(v=s.top+t.y-o.y,r=1-(v-f.y)/f.height),r<0?r=0:r>1&&(r=1),h===c?this._seamless&&this._minScale===0&&r>=this._maxPos?(u._minPos=u._maxPos,u._movingEle=l,i.removeClass(this._minHandler,n._RANGESLIDER_HANDLE_ACTIVE),i.addClass(this._maxHandler,n._RANGESLIDER_HANDLE_ACTIVE)):(r>this._maxPos-this._minScale&&(r=this._maxPos-this._minScale),r<this._maxPos-this._maxScale&&(r=this._maxPos-this._maxScale),this._minPos=r):h===l?this._seamless&&this._minScale===0&&r<=this._minPos?(u._maxPos=u._minPos,u._movingEle=c,i.removeClass(this._maxHandler,n._RANGESLIDER_HANDLE_ACTIVE),i.addClass(this._minHandler,n._RANGESLIDER_HANDLE_ACTIVE)):(r<this._minPos+this._minScale&&(r=this._minPos+this._minScale),r>this._minPos+this._maxScale&&(r=this._minPos+this._maxScale),this._maxPos=r):h===y&&(this._isHorizontal?(this._minPos=r,this._maxPos=this._minPos+e,this._maxPos>=1&&(this._maxPos=1,this._minPos=this._maxPos-e)):(this._maxPos=r,this._minPos=this._maxPos-e,this._minPos<=0&&(this._minPos=0,this._maxPos=this._minPos+e))),this._updateElesPosition(),this.onRangeChanging())},n.prototype._onDocMouseup=function(){this._isVisible&&(this._clearInterval(),this._isBtnMousedown=!1,this._startPt&&(this.onRangeChanged(),this._startPt=null,this._movingOffset=null),i.removeClass(this._minHandler,n._RANGESLIDER_HANDLE_ACTIVE),i.removeClass(this._maxHandler,n._RANGESLIDER_HANDLE_ACTIVE))},n.prototype._onRangeSpaceMousedown=function(n){var u=n instanceof MouseEvent?new i.Point(n.pageX,n.pageY):new i.Point(n.changedTouches[0].pageX,n.changedTouches[0].pageY),f=i.getElementRect(this._rsContent),r=i.getElementRect(this._rangeHandler),e=n.srcElement||n.target,t=0;(n.stopPropagation(),n.preventDefault(),e===this._rsContent||e===this._rsEle)&&(this._isHorizontal?(t=r.width/f.width,u.x<r.left?t=-1*t:u.x>r.left+r.width&&(t=1*t)):(t=r.height/f.height,u.y<r.top?t=1*t:u.y>r.top+r.height&&(t=-1*t)),t!==0&&this._doSliding(t,u))},n.prototype._onRangeMouseleave=function(n){(n.stopPropagation(),n.preventDefault(),this._isBtnMousedown)&&(this._clearInterval(),this.onRangeChanged())},n.prototype._onBtnMousedown=function(t){var u=t.srcElement||t.target,r=0;if(t.stopPropagation(),t.preventDefault(),i.hasClass(u,n._RANGESLIDER_DECBTN)){if(this._minPos===0)return;r=-.05}else if(i.hasClass(u,n._RANGESLIDER_INCBTN)){if(this._maxPos===1)return;r=.05}this._isBtnMousedown=!0;r!==0&&this._doSliding(r)},n.prototype._refresh=function(n){var r=0,t,f,u=i.getElementRect(this._rsContainer);(n&&(this._rangeSliderRect=n),this._rangeSliderRect)&&(this._hasButtons&&this._buttonsVisible?(this._decBtn.style.display='block',this._incBtn.style.display='block',r=this._isHorizontal?this._decBtn.offsetWidth+this._minHandler.offsetWidth/2:this._decBtn.offsetHeight+this._minHandler.offsetHeight/2):(this._hasButtons&&(this._decBtn.style.display='none',this._incBtn.style.display='none'),r=this._isHorizontal?this._minHandler.offsetWidth/2:this._minHandler.offsetHeight/2),t=this._getRsRect(),this._isHorizontal?(t.left-=this._minHandler.offsetWidth/2,t.width+=this._minHandler.offsetWidth,f={left:r,width:t.width-r*2}):(t.top-=this._minHandler.offsetHeight/2,t.height+=this._minHandler.offsetHeight,f={top:r,height:t.height-r*2}),i.setCss(this._rsEle,t),i.setCss(this._rsContent,f),u=i.getElementRect(this._rsContent),this._plotBox={x:u.left,y:u.top,width:u.width,height:u.height},this._updateElesPosition())},n.prototype._updateElesPosition=function(){var i=this._minHandler,o=this._rangeHandler,r=this._maxHandler,n=this._plotBox,u,f,e,t=this._isHorizontal;n&&(u=t?{left:this._minPos*n.width-.5*i.offsetWidth}:{top:(1-this._minPos)*n.height-.5*r.offsetHeight},f=t?{left:this._minPos*n.width,width:(this._maxPos-this._minPos)*n.width}:{top:(1-this._maxPos)*n.height,height:(this._maxPos-this._minPos)*n.height},e=t?{left:this._maxPos*n.width-.5*r.offsetWidth}:{top:(1-this._maxPos)*n.height-.5*i.offsetHeight},this._refreshSlider(u,f,e))},n.prototype._refreshSlider=function(n,t,r){i.setCss(this._minHandler,n);i.setCss(this._rangeHandler,t);i.setCss(this._maxHandler,r)},n.prototype._invalidate=function(){var t,r;this._rsContainer&&(t=this._isHorizontal?n._HRANGESLIDER:n._VRANGESLIDER,r=this._isHorizontal?n._VRANGESLIDER:n._HRANGESLIDER,i.removeClass(this._rsEle,r),i.addClass(this._rsEle,t),[this._rsEle,this._rsContent,this._minHandler,this._maxHandler,this._rangeHandler].forEach(function(n){n.removeAttribute("style")}),this._refresh())},n.prototype._changeRange=function(n){var t=this._maxPos-this._minPos;n<0&&this._minPos===0||n>0&&this._maxPos===1||(n<0?(this._minPos+=n,this._minPos=this._minPos<0?0:this._minPos,this._maxPos=this._minPos+t):(this._maxPos+=n,this._maxPos=this._maxPos>1?1:this._maxPos,this._minPos=this._maxPos-t),this._updateElesPosition())},n.prototype._doSliding=function(n,t){var r=i.getElementRect(this._rsContent),u=i.getElementRect(this._rangeHandler);this._clearInterval();this._startPt=new i.Point;this._changeRange(n);this.onRangeChanged();this._setSlidingInterval(n,t)},n.prototype._setSlidingInterval=function(n,t){var r=this,f,u;this._slidingInterval=window.setInterval(function(){if(t)if(f=i.getElementRect(r._rsContent),u=i.getElementRect(r._rangeHandler),r._isHorizontal){if(t.x>=u.left&&t.x<=u.left+u.width){r._clearInterval();return}}else if(t.y>=u.top&&t.y<=u.top+u.height){r._clearInterval();return}r._changeRange(n);r.onRangeChanged()},200)},n.prototype._clearInterval=function(){this._slidingInterval&&window.clearInterval(this._slidingInterval)},n.prototype._getRsRect=function(){var n=this._rangeSliderRect,t={};if(n)return['left','top','width','height'].forEach(function(i){n[i]&&(t[i]=n[i])}),t},n}();e._HRANGESLIDER='wj-chart-hrangeslider';e._VRANGESLIDER='wj-chart-vrangeslider';e._RANGESLIDER_DECBTN='wj-rangeslider-decbtn';e._RANGESLIDER_INCBTN='wj-rangeslider-incbtn';e._RANGESLIDER_RANGEHANDLE='wj-rangeslider-rangehandle';e._RANGESLIDER_MINHANDLE='wj-rangeslider-minhandle';e._RANGESLIDER_MAXHANDLE='wj-rangeslider-maxhandle';e._RANGESLIDER_HANDLE_ACTIVE='wj-rangeslider-handle-active';t._RangeSlider=e,function(n){n[n.X=0]="X";n[n.Y=1]="Y"}(o=t.Orientation||(t.Orientation={}));c=function(){function n(n,t){this._isVisible=!0;this._orientation=o.X;this._seamless=!1;this._minScale=0;this._maxScale=1;this.rangeChanged=new i.Event;this._chart=i.asType(n,r.FlexChartCore,!1);this._createRangeSelector();i.copy(this,t)}return Object.defineProperty(n.prototype,"isVisible",{get:function(){return this._isVisible},set:function(n){n!=this._isVisible&&(this._isVisible=i.asBoolean(n),this._rangeSlider&&(this._rangeSlider.isVisible=n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"min",{get:function(){return this._min},set:function(n){if(n=i.asNumber(n,!0,!1),n!=this._min){var t=!1;n==null||n===undefined||isNaN(n)||this._max==null?(this._min=n,t=!0):n<=this._max&&(this._min=n,t=!0);this._rangeSlider&&t&&this._changeRange()}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"max",{get:function(){return this._max},set:function(n){if(n=i.asNumber(n,!0,!1),n!=this._max){var t=!1;n==null||isNaN(n)?(this._max=n,t=!0):n>=this._min&&(this._max=n,t=!0);this._rangeSlider&&t&&this._changeRange()}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"orientation",{get:function(){return this._orientation},set:function(n){if(n=i.asEnum(n,o),n!==this._orientation){if(this._orientation=n,!this._rangeSlider)return;this._rangeSlider.isHorizontal=n==o.X}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"seamless",{get:function(){return this._seamless},set:function(n){n=i.asBoolean(n,!0);n!=this._seamless&&(this._seamless=n,this._rangeSlider&&(this._rangeSlider.seamless=n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"minScale",{get:function(){return this._minScale},set:function(n){n=i.asNumber(n);n<=1&&n>=0&&n!=this._minScale&&n<this._maxScale&&(this._minScale=n,this._rangeSlider&&(this._rangeSlider.minScale=i.asNumber(n),this._updateMinAndMaxWithScale(!0)))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxScale",{get:function(){return this._maxScale},set:function(n){n=i.asNumber(n);n<=1&&n>=0&&n!=this._maxScale&&n>this._minScale&&(this._maxScale=n,this._rangeSlider&&(this._rangeSlider.maxScale=i.asNumber(n),this._updateMinAndMaxWithScale(!0)))},enumerable:!0,configurable:!0}),n.prototype.remove=function(){this._rangeSelectorEle&&(this._chart.hostElement.removeChild(this._rangeSelectorEle),this._switchEvent(!1),this._rangeSelectorEle=null,this._rangeSlider=null)},n.prototype.onRangeChanged=function(n){this.rangeChanged.raise(this,n)},n.prototype._createRangeSelector=function(){var n=this._chart,t=n.hostElement,r=this._orientation===o.X;this._rangeSelectorEle=i.createElement('<div class="wj-chart-rangeselector-container"></div>');this._rangeSlider=new e(this._rangeSelectorEle,!1,!1,{isHorizontal:r,isVisible:this._isVisible,seamless:this._seamless});t.appendChild(this._rangeSelectorEle);this._switchEvent(!0)},n.prototype._switchEvent=function(n){var t=n?'addHandler':'removeHandler';this._chart.hostElement&&(this._rangeSlider.rangeChanged[t](this._updateRange,this),this._chart.rendered[t](this._refresh,this))},n.prototype._refresh=function(){var f=this._chart.hostElement,t,u,n,e=i.getElementRect(this._rangeSelectorEle);t=f.querySelector('.'+r.FlexChart._CSS_PLOT_AREA);u=i.getElementRect(t);n=t.getBBox();n&&n.width&&n.height&&(this._adjustMinAndMax(),this._rangeSlider._refresh({left:n.x,top:u.top-e.top,width:n.width,height:n.height}))},n.prototype._adjustMinAndMax=function(){var n=this,a=n._chart,e=n._rangeSlider,u=n._min,f=n._max,t=n._orientation===o.X?a.axisX:a.axisY,s=i.isDate(t.actualMin)?t.actualMin.valueOf():t.actualMin,h=i.isDate(t.actualMax)?t.actualMax.valueOf():t.actualMax,v=h-s,r,c,l;n._min=u===null||isNaN(u)||u===undefined||u<s||u>h?s:u;n._max=f===null||isNaN(f)||f===undefined||f<s||f>h?h:f;r=this._chart._plotRect;r&&(this._orientation===o.X?(c=(t.convert(n._min)-r.left)/r.width,l=(t.convert(n._max)-r.left)/r.width,e._minPos=c,e._maxPos=l):(c=(r.top-t.convert(n._min))/r.height+1,l=(r.top-t.convert(n._max))/r.height+1,e._minPos=c,e._maxPos=l),this._updateMinAndMaxWithScale(!1))},n.prototype._updateMinAndMaxWithScale=function(n){var t=this._rangeSlider,i,r=!1,u;this._minScale!==0&&t._minPos+this._minScale>t._maxPos&&(i=t._minPos+this._minScale,i>1?(t._maxPos=1,t._minPos=1-this._minScale):t._maxPos=i,r=!0);this._maxScale!==1&&t._minPos+this._maxScale<t._maxPos&&(i=t._minPos+this._maxScale,i>1?(t._maxPos=1,t._minPos=1-this._maxScale):t._maxPos=i,r=!0);r&&(u=this._getMinAndMax(),this._min=u.min,this._max=u.max,n&&this._rangeSelectorEle&&(this._rangeSlider._refresh(),this.onRangeChanged()))},n.prototype._changeRange=function(){this._adjustMinAndMax();this._rangeSelectorEle&&(this._rangeSlider._refresh(),this.onRangeChanged())},n.prototype._updateRange=function(){var r=this._rangeSlider,n,i,t;n=this._chart;i=this._orientation===o.X?n.axisX:n.axisY;t=this._getMinAndMax();this._min=t.min;this._max=t.max;this.onRangeChanged()},n.prototype._getMinAndMax=function(){var i=this._rangeSlider,t=this._chart,n=t._plotRect,r=null,u=null;return n&&(this._orientation===o.X?(r=t.axisX.convertBack(n.left+i._minPos*n.width),u=t.axisX.convertBack(n.left+i._maxPos*n.width)):(r=t.axisY.convertBack(n.top+(1-i._minPos)*n.height),u=t.axisY.convertBack(n.top+(1-i._maxPos)*n.height))),{min:r,max:u}},n}();t.RangeSelector=c,function(n){n[n.Zoom=0]="Zoom";n[n.Pan=1]="Pan"}(s=t.MouseAction||(t.MouseAction={})),function(n){n[n.X=0]="X";n[n.Y=1]="Y";n[n.XY=2]="XY"}(f=t.InteractiveAxes||(t.InteractiveAxes={}));h=function(){function n(n,t){this._chart=null;this._zoomEle=null;this._overlayEle=null;this._wrapperMousedown=null;this._wrapperMouseMove=null;this._wrapperMouseup=null;this._wrapperPointerdown=null;this._wrapperPointerMove=null;this._wrapperPointerup=null;this._wrapperTouchStart=null;this._wrapperTouchMove=null;this._wrapperTouchEnd=null;this._wrapperMouseWheel=null;this._startFirstPt=null;this._minX=null;this._maxX=null;this._minY=null;this._maxY=null;this._threadHold=20;this._clip={};this._selection={};this._startPointers=[];this._mvPointers=[];this._pinchStartEvents=[];this._minXRange=null;this._minYRange=null;this._innerUpdating=!1;this._lastMinX=null;this._lastMaxX=null;this._lastMinY=null;this._lastMaxY=null;this._mouseAction=s.Zoom;this._interactiveAxes=f.X;this._enable=!0;this._scaleX=1;this._scaleY=1;this._posX=0;this._posY=0;n||i.assert(!1,'The FlexChart cannot be null.');this._chart=n;i.copy(this,t);this._initialize()}return Object.defineProperty(n.prototype,"mouseAction",{get:function(){return this._mouseAction},set:function(n){n!==this._mouseAction&&(this._mouseAction=i.asEnum(n,s))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"interactiveAxes",{get:function(){return this._interactiveAxes},set:function(n){n!==this._interactiveAxes&&(this._interactiveAxes=i.asEnum(n,f))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"enable",{get:function(){return this._enable},set:function(n){n!==this._enable&&(this._enable=i.asBoolean(n,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleX",{get:function(){return this._scaleX},set:function(n){n!==this._scaleX&&(this._scaleX=n<0?0:n>1?1:i.asNumber(n),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!0))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleY",{get:function(){return this._scaleY},set:function(n){n!==this._scaleY&&(this._scaleY=n<0?0:n>1?1:i.asNumber(n),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!1))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"posX",{get:function(){return this._posX},set:function(n){n!==this._posX&&(this._posX=n<0?0:n>1?1:i.asNumber(n),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!0))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"posY",{get:function(){return this._posY},set:function(n){n!==this._posY&&(this._posY=n<0?0:n>1?1:i.asNumber(n),this._seriesGroup&&this._initAxisRangeWithPosAndScale(!1))},enumerable:!0,configurable:!0}),n.prototype.remove=function(){this._zoomEle&&(this._chart.hostElement.removeChild(this._zoomEle),this._zoomEle=null);i.removeClass(this._chart.hostElement,n._CSS_TOUCH_DISABLED);this._switchEvent(!1);this._wrapperMousedown=null;this._wrapperMouseMove=null;this._wrapperMouseup=null;this._wrapperPointerdown=null;this._wrapperPointerMove=null;this._wrapperPointerup=null;this._wrapperTouchStart=null;this._wrapperTouchMove=null;this._wrapperTouchEnd=null;this._wrapperMouseWheel=null},n.prototype.reset=function(){var n=this._chart,t=n.axisX,i=n.axisY;this._maxX&&(t.max=this._maxX);this._minX&&(t.min=this._minX);this._maxY&&(i.max=this._maxY);this._minY&&(i.min=this._minY);this._initAxisRangeWithPosAndScale(!0);this._initAxisRangeWithPosAndScale(!1)},n.prototype._refreshChart=function(){var n=this._chart,t=n.axisX,i=n.axisY;this._minX=this._getAxisMin(t);this._maxX=this._getAxisMax(t);this._minY=this._getAxisMin(i);this._maxY=this._getAxisMax(i);this._minXRange=(this._maxX-this._minX)*.005;this._minYRange=(this._maxY-this._minY)*.005;this._initAxisRangeWithPosAndScale(!0);this._initAxisRangeWithPosAndScale(!1)},n.prototype._initialize=function(){var r=this._chart,t=r.hostElement;this._zoomEle=i.createElement('<div class="'+n._CSS_ZOOM+'"><div class="'+n._CSS_ZOOM_OVERLAY+'"></div>');this._zoomEle.style.visibility='visible';t.appendChild(this._zoomEle);i.addClass(t,n._CSS_TOUCH_DISABLED);this._overlayEle=this._zoomEle.querySelector('.'+n._CSS_ZOOM_OVERLAY);this._wrapperMousedown=this._onMousedown.bind(this);this._wrapperMouseMove=this._onMouseMove.bind(this);this._wrapperMouseup=this._onMouseup.bind(this);this._wrapperPointerdown=this._onPointerdown.bind(this);this._wrapperPointerMove=this._onPointerMove.bind(this);this._wrapperPointerup=this._onPointerup.bind(this);this._wrapperMouseWheel=this._onMouseWheel.bind(this);this._wrapperTouchStart=this._onTouchStart.bind(this);this._wrapperTouchMove=this._onTouchMove.bind(this);this._wrapperTouchEnd=this._onTouchEnd.bind(this);this._switchEvent(!0)},n.prototype._switchEvent=function(n){var i=this._chart.hostElement,t=n?'addEventListener':'removeEventListener',r=n?'addHandler':'removeHandler';i&&(i[t]('mousedown',this._wrapperMousedown),i[t]('mousemove',this._wrapperMouseMove),document[t]('mouseup',this._wrapperMouseup),'onpointerdown'in window&&(i[t]('pointerdown',this._wrapperPointerdown),i[t]('pointermove',this._wrapperPointerMove),document[t]('pointerup',this._wrapperPointerup)),i[t]('wheel',this._wrapperMouseWheel),'ontouchstart'in window&&(i[t]('touchstart',this._wrapperTouchStart),i[t]('touchmove',this._wrapperTouchMove),document[t]('touchend',this._wrapperTouchEnd)),this._chart.rendered[r](this._refresh,this))},n.prototype._refresh=function(){var e=this._chart,n=e.axisX,t=e.axisY,s=e.hostElement,o,u,f;if(this._seriesGroup=s.querySelector('.wj-series-group'),o=s.querySelector('.'+r.FlexChart._CSS_PLOT_AREA),this._plotOffset=i.getElementRect(o),this._plotBox=o.getBBox(),this._zoomEleOffset=i.getElementRect(this._zoomEle),this._overlayEle&&this._overlayEle.removeAttribute('style'),this._innerUpdating){this._innerUpdating=!1;return}u=!1;f=!1;(this._minX===null||isNaN(this._minX)||this._minX===0||this._minX===-1||this._lastMinX!==this._getAxisMin(n))&&(this._minX=this._getAxisMin(n),this._minX===null||isNaN(this._minX)||this._minX===0||this._minX===-1||(u=!0));(this._maxX===null||isNaN(this._maxX)||this._maxX===0||this._maxX===-1||this._lastMaxX!==this._getAxisMax(n))&&(this._maxX=this._getAxisMax(n),this._maxX===null||isNaN(this._maxX)||this._maxX===0||this._maxX===-1||(u=!0));(this._minY===null||isNaN(this._minY)||this._lastMinY!==this._getAxisMin(t))&&(this._minY=this._getAxisMin(t),isNaN(this._minY)||(f=!0));(this._maxY===null||isNaN(this._maxY)||this._lastMaxY!==this._getAxisMax(t))&&(this._maxY=this._getAxisMax(t),isNaN(this._maxY)||(f=!0));this._minXRange=(this._maxX-this._minX)*.005;this._minYRange=(this._maxY-this._minY)*.005;u&&this._scaleX!==null&&this._scaleX!==undefined&&this._scaleX!==1&&this._posX!==null&&this._posX!==undefined&&this._posX!==0&&this._initAxisRangeWithPosAndScale(!0);f&&this._scaleY!==null&&this._scaleY!==undefined&&this._scaleY!==1&&this._posY!==null&&this._posY!==undefined&&this._posY!==0&&this._initAxisRangeWithPosAndScale(!1)},n.prototype._onMousedown=function(n){this._enable&&(this._disabledOthersInteraction(!0),this._mouseDown(n),n.preventDefault())},n.prototype._onMouseMove=function(n){this._enable&&(this._mouseMove(n),n.preventDefault())},n.prototype._onMouseup=function(n){this._enable&&(this._mouseup(n),this._disabledOthersInteraction(!1))},n.prototype._onMouseWheel=function(n){var i=-n.deltaY,t=i>0?.05:-.05;this._enable&&(this._scaling=!0,(this._interactiveAxes===f.X||this._interactiveAxes===f.XY)&&this._updateAxisByChg(!0,t,-t),(this._interactiveAxes===f.Y||this._interactiveAxes===f.XY)&&this._updateAxisByChg(!1,t,-t),this._scaling=!1,n.preventDefault())},n.prototype._mouseDown=function(t){this._startFirstPt=this._getPoint(t);this._updatePoint(this._startFirstPt);this._mouseAction===s.Zoom?this._initOverlay():(this._seriesGroup.setAttribute('clip-path','url(#'+this._chart._plotrectId+')'),i.toggleClass(this._chart.hostElement,n._CSS_PANABLE,this._mouseAction===s.Pan))},n.prototype._mouseMove=function(n){var t;this._startFirstPt&&(t=this._getPoint(n),this._updatePoint(t),this._endPoint=new i.Point(t.x,t.y),this._mouseAction===s.Zoom?this._updateOverLay(t):(this._panning=!0,this._panningChart(t.x-this._startFirstPt.x,t.y-this._startFirstPt.y)))},n.prototype._mouseup=function(){var t=this._endPoint,r=this._chart.axisX;if(!this._startFirstPt||!t){i.removeClass(this._chart.hostElement,n._CSS_PANABLE);this._reset();return}this._mouseAction===s.Zoom?(this._zoomedChart(t),this._reset()):(this._pannedChart(t.x-this._startFirstPt.x,t.y-this._startFirstPt.y),this._reset());i.removeClass(this._chart.hostElement,n._CSS_PANABLE)},n.prototype._onPointerdown=function(n){if(this._enable){this._disabledOthersInteraction(!0);switch(n.pointerType){case"touch":this._pointerDown(n);break;case"mouse":this._mouseDown(n)}n.preventDefault()}},n.prototype._onPointerMove=function(n){if(this._enable){switch(n.pointerType){case"touch":this._pointerMove(n);break;case"mouse":this._mouseMove(n)}n.preventDefault()}},n.prototype._onPointerup=function(n){if(this._enable){switch(n.pointerType){case"touch":this._pointerUp(n);break;case"mouse":this._mouseup(n)}this._disabledOthersInteraction(!1);n.preventDefault()}},n.prototype._pointerDown=function(n){n.preventManipulation&&n.preventManipulation();this._seriesGroup.setAttribute('clip-path','url(#'+this._chart._plotrectId+')');this._startPointers.push({id:n.pointerId,x:n.pageX,y:n.pageY});this._startPointers.length===1?(this._scaling=!1,this._panning=!0):this._startPointers.length===2&&(this._panning=!1,this._scaling=!0,this._startDistance={x:this._startPointers[0].x-this._startPointers[1].x,y:this._startPointers[0].y-this._startPointers[1].y})},n.prototype._pointerMove=function(n){var r,o,h=new i.Point(n.pageX,n.pageY),u,e,s={},t={};if(n.preventManipulation&&n.preventManipulation(),this._panning){if(!this._pointInPlotArea(h))return;this._endPoint=new i.Point(n.pageX,n.pageY);this._panningChart(this._endPoint.x-this._startPointers[0].x,this._endPoint.y-this._startPointers[0].y)}else this._scaling&&(r=this._startPointers[0].id+'',o=this._startPointers[1].id+'',this._mvPointers[n.pointerId+'']={x:n.pageX,y:n.pageY},this._mvPointers[r]&&this._mvPointers[o]&&(Math.abs(this._startDistance.x)>this._threadHold&&this._interactiveAxes!==f.Y&&(u=this._mvPointers[r].x-this._plotOffset.left,e=this._startPointers[0].x-this._plotOffset.left,t.x=Math.abs((this._mvPointers[r].x-this._mvPointers[o].x)/this._startDistance.x),s.x=u-t.x*e,this._clip.x=(this._plotBox.x-u)/t.x+e,this._selection.w=this._plotBox.width/t.x),Math.abs(this._startDistance.y)>this._threadHold&&this._interactiveAxes!==f.X&&(u=this._mvPointers[r].y-this._plotOffset.top,e=this._startPointers[0].y-this._plotOffset.top,t.y=Math.abs((this._mvPointers[r].y-this._mvPointers[o].y)/this._startDistance.y),s.y=u-t.y*e,this._clip.y=(this._plotBox.y-u)/t.y+e,this._selection.h=this._plotBox.height/t.y),this._scalingChart(t,s)))},n.prototype._pointerUp=function(n){n.preventManipulation&&n.preventManipulation();this._panning?(this._endPoint&&this._pannedChart(this._endPoint.x-this._startPointers[0].x,this._endPoint.y-this._startPointers[0].y),this._reset()):this._scaling&&(this._scaledChart(n),this._reset())},n.prototype._onTouchStart=function(n){if(this._enable)return this._disabledOthersInteraction(!0),n.touches.length==1?(this._scaling=!1,this._panning=!0,this._startFirstPt=this._getPoint(n)):n.touches.length==2&&(this._pinchStartEvents=this._getTouchPair(n),this._startDistance=this._touchDistance(n),this._panning=!1,this._scaling=!0),this._seriesGroup&&this._seriesGroup.setAttribute('clip-path','url(#'+this._chart._plotrectId+')'),this._chart._hideToolTip(),!0},n.prototype._onTouchMove=function(n){if(this._enable){var t={},o={},e=n.touches[0],l=new i.Point(e.pageX,e.pageY),r,u,s,h,c;if(n.preventDefault(),this._panning){if(this._startFirstPt){if(!this._pointInPlotArea(l))return;this._endPoint=new i.Point(e.pageX,e.pageY);this._panningChart(this._endPoint.x-this._startFirstPt.x,this._endPoint.y-this._startFirstPt.y)}}else this._scaling&&(s=this._touchDistance(n),h=this._getTouchPair(n)[0],c=this._pinchStartEvents[0],Math.abs(this._startDistance.x)>this._threadHold&&this._interactiveAxes!==f.Y&&(r=h.pageX-this._plotOffset.left,u=c.pageX-this._plotOffset.left,t.x=Math.abs(s.x/this._startDistance.x),o.x=r-t.x*u,this._clip.x=(this._plotBox.x-r)/t.x+u,this._selection.w=this._plotBox.width/t.x),Math.abs(this._startDistance.y)>this._threadHold&&this._interactiveAxes!==f.X&&(r=h.pageY-this._plotOffset.top,u=c.pageY-this._plotOffset.top,t.y=Math.abs(s.y/this._startDistance.y),o.y=r-t.y*u,this._clip.y=(this._plotBox.y-r)/t.y+u,this._selection.h=this._plotBox.height/t.y),this._scalingChart(t,o));return!0}},n.prototype._onTouchEnd=function(n){if(this._enable){var t=this._endPoint;if(this._panning){if(!this._startFirstPt||!t){this._reset();return}this._pannedChart(t.x-this._startFirstPt.x,t.y-this._startFirstPt.y)}else this._scaling&&this._scaledChart(n);return this._reset(),this._disabledOthersInteraction(!1),!0}},n.prototype._initOverlay=function(){this._zoomEle.style.visibility='visible';switch(this._interactiveAxes){case f.X:this._overlayEle.style.left=this._startFirstPt.x-this._zoomEleOffset.left+'px';this._overlayEle.style.top=this._plotOffset.top-this._zoomEleOffset.top+'px';break;case f.Y:this._overlayEle.style.left=this._plotBox.x+'px';this._overlayEle.style.top=this._startFirstPt.y-this._zoomEleOffset.top+'px';break;case f.XY:this._overlayEle.style.left=this._startFirstPt.x-this._zoomEleOffset.left+'px';this._overlayEle.style.top=this._startFirstPt.y-this._zoomEleOffset.top+'px'}},n.prototype._updateOverLay=function(n){var t=this._startFirstPt.x-n.x,r=this._startFirstPt.y-n.y,u={};switch(this._interactiveAxes){case f.X:if(Math.abs(t)<this._threadHold)return;u=t<=0?{width:Math.abs(t)+'px',height:this._plotBox.height+'px'}:{left:n.x-this._zoomEleOffset.left+'px',width:t+'px',height:this._plotBox.height+'px'};break;case f.Y:if(Math.abs(r)<this._threadHold)return;u=r<=0?{height:Math.abs(r)+'px',width:this._plotBox.width+'px'}:{top:n.y-this._zoomEleOffset.top+'px',height:r+'px',width:this._plotBox.width+'px'};break;case f.XY:Math.abs(t)>=this._threadHold&&(u.width=Math.abs(t)+'px',t>0&&(u.left=n.x-this._zoomEleOffset.left+'px'));Math.abs(r)>=this._threadHold&&(u.height=Math.abs(r)+'px',r>0&&(u.top=n.y-this._zoomEleOffset.top+'px'))}i.setCss(this._overlayEle,u)},n.prototype._updatePoint=function(n){var t=this._plotOffset;n.x<t.left&&(n.x=t.left);n.x>t.left+t.width&&(n.x=t.left+t.width);n.y<t.top&&(n.y=t.top);n.y>t.top+t.height&&(n.y=t.top+t.height)},n.prototype._pointInPlotArea=function(n){var t=this._plotOffset;return n.x>=t.left&&n.x<=t.left+t.width&&n.y>=t.top&&n.y<=t.top+t.height?!0:!1},n.prototype._zoomedChart=function(n){n&&((this._interactiveAxes===f.X||this._interactiveAxes===f.XY)&&this._zoomedAxis(n,!0),(this._interactiveAxes===f.Y||this._interactiveAxes===f.XY)&&this._zoomedAxis(n,!1),this._startFirstPt=null)},n.prototype._zoomedAxis=function(n,t){var r,u,f=t?this._chart.axisX:this._chart.axisY,i=t?'x':'y',e=t?'left':'top';n&&Math.abs(this._startFirstPt[i]-n[i])>this._threadHold&&(r=f.convertBack(this._startFirstPt[i]-this._plotOffset[e]+this._plotBox[i]),u=f.convertBack(n[i]-this._plotOffset[e]+this._plotBox[i]),u-r!=0&&this._updateAxisRange(f,Math.min(r,u),Math.max(r,u)))},n.prototype._panningChart=function(n,t){var r=this._chart.axisX,u=this._chart.axisY,e=this._getTransFormGroups(),i;for(n=Math.abs(n)<this._threadHold?0:n,t=Math.abs(t)<this._threadHold?0:t,this._interactiveAxes===f.X&&(t=0),this._interactiveAxes===f.Y&&(n=0),n>0&&r.actualMin.valueOf()===this._minX&&(n=0),n<0&&r.actualMax.valueOf()===this._maxX&&(n=0),t>0&&u.actualMax.valueOf()===this._maxY&&(t=0),t<0&&u.actualMin.valueOf()===this._minY&&(t=0),i=0;i<e.length;i++)e[i].setAttribute('transform','translate('+n+','+t+')')},n.prototype._pannedChart=function(n,t){(this._interactiveAxes===f.X||this._interactiveAxes===f.XY)&&this._updateAxisByDistance(!0,n);(this._interactiveAxes===f.Y||this._interactiveAxes===f.XY)&&this._updateAxisByDistance(!1,-t)},n.prototype._scalingChart=function(n,t){var u=this._chart.axisX,f=this._chart.axisY,r,e=t.x!==undefined?t.x:0,o=t.y!==undefined?t.y:0,s,h,i;if(n)for(r=this._getTransFormGroups(),n.x!==undefined&&n.x<1&&u.actualMin.valueOf()===this._minX&&u.actualMax.valueOf()===this._maxX&&(n.x=1,e=0),n.y!==undefined&&n.y<1&&f.actualMin.valueOf()===this._minY&&f.actualMax.valueOf()===this._maxY&&(n.y=1,o=0),s=n.x!==undefined?n.x:1,h=n.y!==undefined?n.y:1,i=0;i<r.length;i++)r[i].setAttribute('transform','translate('+e+', '+o+") scale("+s+', '+h+')')},n.prototype._scaledChart=function(){var n,t,u=this._chart,i=u.axisX,r=u.axisY;this._clip&&(this._interactiveAxes!==f.Y&&this._clip.x!==undefined&&(n=Math.max(this._minX,i.convertBack(this._clip.x)),t=Math.min(this._maxX,i.convertBack(this._clip.x+this._selection.w)),n-t!=0&&this._updateAxisRange(i,n,t)),this._interactiveAxes!==f.X&&this._clip.y!==undefined&&(t=Math.min(this._maxY,r.convertBack(this._clip.y)),n=Math.max(this._minY,r.convertBack(this._clip.y+this._selection.h)),n-t!=0&&this._updateAxisRange(r,n,t)))},n.prototype._updateAxisByDistance=function(n,t){var r=n?this._chart.axisX:this._chart.axisY,u=n?this._minX:this._minY,f=n?this._maxX:this._maxY,e=r.actualMin.valueOf(),o=r.actualMax.valueOf(),i;if(t!==0){if(t>0&&u===e||t<0&&f===o){this._innerUpdating=!0;this._chart.invalidate();return}i=t/(n?this._plotBox.width:this._plotBox.height);this._updateAxisByChg(n,-i,-i)}},n.prototype._updateAxisByChg=function(n,t,i){var r=n?this._chart.axisX:this._chart.axisY,s=n?this._minX:this._minY,h=n?this._maxX:this._maxY,a=r.actualMin.valueOf(),v=r.actualMax.valueOf(),y=v-a,c=this._chart._plotRect,o=n?c.left:c.top,u=n?c.width:c.height,l=n?this._minXRange:this._minYRange,f,e;isNaN(t)||isNaN(i)||(this._panning?t<0?(f=n?r.convertBack(o+t*u):r.convertBack(o+u-t*u),f<s?(f=s,e=n?r.convertBack(r.convert(f)+u):r.convertBack(r.convert(f)-u)):e=n?r.convertBack(o+u+i*u):r.convertBack(o-i*u)):(e=n?r.convertBack(o+u+i*u):r.convertBack(o-i*u),e>h?(e=h,f=n?r.convertBack(r.convert(e)-u):r.convertBack(r.convert(e)+u)):f=n?r.convertBack(o+t*u):r.convertBack(o+u-t*u)):this._scaling&&(f=n?r.convertBack(o+t*u):r.convertBack(o+u-t*u),e=n?r.convertBack(o+u+i*u):r.convertBack(o-i*u),f<s&&(f=s),e>h&&(e=h),e-f<l&&(f=e-l)),this._updateAxisRange(r,f,e))},n.prototype._initAxisRangeWithPosAndScale=function(n){var i,r,t,u;n?(i=this._maxX-this._minX,r=i*this._scaleX,t=this._minX+this._posX*(i-r),u=t+r,this._innerUpdating=!0,this._chart.axisX.min=t,this._chart.axisX.max=u,this._lastMinX=t,this._lastMaxX=u):(i=this._maxY-this._minY,r=i*this._scaleY,t=this._minY+this._posY*(i-r),u=t+r,this._innerUpdating=!0,this._chart.axisY.min=t,this._chart.axisY.max=u,this._lastMinY=t,this._lastMaxY=u)},n.prototype._updateAxisRange=function(n,t,i){this._chart.beginUpdate();n.min=t;n.max=i;n===this._chart.axisX?(this._lastMinX=t,this._lastMaxX=i):(this._lastMinY=t,this._lastMaxY=i);this._innerUpdating=!0;this._chart.endUpdate()},n.prototype._reset=function(){this._scaling=!1;this._panning=!1;this._startDistance=0;this._startFirstPt=null;this._pinchStartEvents=[];this._startPointers=[];this._mvPointers=[];this._endPoint=null;this._clip={};this._selection={}},n.prototype._getAxisMin=function(n){return i.isDate(n.actualMin)?n.actualMin.valueOf():n.actualMin},n.prototype._getAxisMax=function(n){return i.isDate(n.actualMax)?n.actualMax.valueOf():n.actualMax},n.prototype._getTransFormGroups=function(){var n=this._seriesGroup.querySelectorAll('g[clip-path]');return n.length===0&&(n=this._seriesGroup.querySelectorAll('g')),n},n.prototype._disabledOthersInteraction=function(t){var f=this._chart.hostElement,u,r;if(f!==null&&f!==undefined)for(u=f.querySelectorAll('.wj-chart-linemarker-container'),r=0;r<u.length;r++)t?i.addClass(u[r],n._CSS_BLOCK_INTERACTION):i.removeClass(u[r],n._CSS_BLOCK_INTERACTION)},n.prototype._getPoint=function(n){return n instanceof MouseEvent?new i.Point(n.pageX,n.pageY):new i.Point(n.changedTouches[0].pageX,n.changedTouches[0].pageY)},n.prototype._getTouchPair=function(n){var t=[];return i.isArray(n)?(t[0]=n[0],t[1]=n[1]):n.type==='touchend'?n.touches.length===1?(t[0]=n.touches[0],t[1]=n.changedTouches[0]):n.touches.length===0&&(t[0]=n.changedTouches[0],t[1]=n.changedTouches[1]):(t[0]=n.touches[0],t[1]=n.touches[1]),t},n.prototype._touchDistance=function(n){var t=this._getTouchPair(n),i=0,r=0;return t[0]&&t[0].pageX!==undefined&&t[1]&&t[1].pageX!==undefined&&(i=t[0].pageX-t[1].pageX),t[0]&&t[0].pageY!==undefined&&t[1]&&t[1].pageY!==undefined&&(r=t[0].pageY-t[1].pageY),{x:i,y:r}},n}();h._CSS_ZOOM='wj-zoom';h._CSS_ZOOM_OVERLAY='wj-zoom-overlay';h._CSS_PANABLE='wj-panable';h._CSS_TOUCH_DISABLED='wj-flexchart-touch-disabled';h._CSS_BLOCK_INTERACTION='wj-block-other-interaction';t.ChartGestures=h})