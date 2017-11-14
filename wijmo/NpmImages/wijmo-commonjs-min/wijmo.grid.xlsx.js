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
"use strict";function tryGetModuleWijmoGridDetail(){var n,t;return(n=window.wijmo)&&(t=n.grid)&&t.detail}function tryGetModuleWijmoGridMultirow(){var n,t;return(n=window.wijmo)&&(t=n.grid)&&t.multirow}var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),wjcSelf,FlexGridXlsxConverter,XlsxFormatItemEventArgs;Object.defineProperty(exports,"__esModule",{value:!0});var wjcGrid=require("wijmo/wijmo.grid"),wjcXlsx=require("wijmo/wijmo.xlsx"),wjcCore=require("wijmo/wijmo");wjcSelf=require("wijmo/wijmo.grid.xlsx");window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.xlsx=wjcSelf;FlexGridXlsxConverter=function(){function n(){}return n.save=function(n,t,i){var r=this._saveFlexGridToWorkbook(n,t);return i&&r.save(i),r},n.saveAsync=function(n,t,i,r,u){var f=this._saveFlexGridToWorkbook(n,t);return f.saveAsync(i,r,u),f},n.load=function(n,t,i){var f=this,r,u;if(t instanceof Blob)r=new FileReader,r.onload=function(){var u=wjcXlsx.Workbook._base64EncArr(new Uint8Array(r.result)),t=new wjcXlsx.Workbook;t.load(u);u=null;n.deferUpdate(function(){f._loadToFlexGrid(n,t,i);t=null})},r.readAsArrayBuffer(t);else if(t instanceof wjcXlsx.Workbook)n.deferUpdate(function(){f._loadToFlexGrid(n,t,i);t=null});else{if(t instanceof ArrayBuffer)t=wjcXlsx.Workbook._base64EncArr(new Uint8Array(t));else if(!wjcCore.isString(t))throw'Invalid workbook.';u=new wjcXlsx.Workbook;u.load(t);t=null;n.deferUpdate(function(){f._loadToFlexGrid(n,u,i);u=null})}},n.loadAsync=function(n,t,i,r,u){var e=this,f,o;if(t instanceof Blob)f=new FileReader,f.onload=function(){var t=wjcXlsx.Workbook._base64EncArr(new Uint8Array(f.result)),o=new wjcXlsx.Workbook;o.loadAsync(t,function(u){t=null;o=null;n.deferUpdate(function(){e._loadToFlexGrid(n,u,i);r&&r(u);u=null})},u)},f.readAsArrayBuffer(t);else if(t instanceof wjcXlsx.Workbook)n.deferUpdate(function(){e._loadToFlexGrid(n,t,i);r&&r(t);t=null});else{if(t instanceof ArrayBuffer)t=wjcXlsx.Workbook._base64EncArr(new Uint8Array(t));else if(!wjcCore.isString(t))throw'Invalid workbook.';o=new wjcXlsx.Workbook;o.loadAsync(t,function(u){t=null;n.deferUpdate(function(){e._loadToFlexGrid(n,u,i);r&&r(u);u=null})},u)}},n._saveFlexGridToWorkbook=function(n,t){var tt=new wjcXlsx.Workbook,s=new wjcXlsx.WorkSheet,ut=new wjcXlsx.WorkbookStyle,it=new wjcXlsx.WorkbookFrozenPane,ft=t&&t.includeColumnHeaders!=null?t.includeColumnHeaders:!0,d=t&&t.includeRowHeaders!=null?t.includeRowHeaders:!1,y=t&&t.includeCellStyles!=null?t.includeCellStyles:!0,ht=t?t.activeWorksheet:null,c=t?t.includeColumns:null,p=t?t.formatItem:null,u,l,w,a,v,f,et,i,e,r,rt,h,k,ot,b,g=0,nt=0,st=0,o=0;if(rt=n.wj_sheetInfo,s.name=t?t.sheetName:'',s.visible=t?t.sheetVisible!==!1:!0,et={borders:{top:{style:wjcXlsx.BorderStyle.Thin,color:'#C6C6C6'},left:{style:wjcXlsx.BorderStyle.Thin,color:'#C6C6C6'},bottom:{style:wjcXlsx.BorderStyle.Thin,color:'#C6C6C6'},right:{style:wjcXlsx.BorderStyle.Thin,color:'#C6C6C6'}}},ut._deserialize(et),s.style=ut,f=[],!rt&&(y||p)&&(h=document.createElement('div'),h.style.visibility='hidden',h.setAttribute(wjcGrid.FlexGrid._WJS_MEASURE,'true'),n.hostElement.appendChild(h)),d){for(e=0,i=0;i<n.rowHeaders.rows.length;i++)if(!(n.rowHeaders.rows[i].renderSize<=0)){for(f[e]=[],r=0;r<n.rowHeaders.columns.length;r++)w=n._getBindingColumn(n.rowHeaders,i,n.rowHeaders.columns[r]),a=this._getColumnSetting(w,n.columnHeaders.columns.defaultSize),f[e][r]=a,e===0&&(v=new wjcXlsx.WorkbookColumn,v._deserialize(a),s._addWorkbookColumn(v,r));e++}o=r}if(ft&&n.columnHeaders.rows.length>0){for(e=0,i=0;i<n.columnHeaders.rows.length;i++)if(!(n.columnHeaders.rows[i].renderSize<=0)){for(f[e]||(f[e]=[]),r=0;r<n.columnHeaders.columns.length;r++)w=n._getBindingColumn(n.columnHeaders,i,n.columnHeaders.columns[r]),a=this._getColumnSetting(w,n.columnHeaders.columns.defaultSize),f[e][o+r]=a,e===0&&(!c||c(w))&&(v=new wjcXlsx.WorkbookColumn,v._deserialize(a),s._addWorkbookColumn(v));o=0;u={};l=new wjcXlsx.WorkbookRow;d&&(o=this._parseFlexGridRowToSheetRow(n.topLeftCells,u,i,0,f,y,h,!1,0,c,p));this._parseFlexGridRowToSheetRow(n.columnHeaders,u,i,o,f,y,h,!1,0,c,p);u.cells.length>0&&(l._deserialize(u),s._addWorkbookRow(l,e));e++}nt=e}else for(f[0]||(f[0]=[]),r=0;r<n.columnHeaders.columns.length;r++)w=n._getBindingColumn(n.columnHeaders,0,n.columnHeaders.columns[r]),a=this._getColumnSetting(w,n.columnHeaders.columns.defaultSize),f[0][o+r]=a,(!c||c(w))&&(v=new wjcXlsx.WorkbookColumn,v._deserialize(a),s._addWorkbookColumn(v));for(i=0;i<n.cells.rows.length;i++)(o=0,u={},l=new wjcXlsx.WorkbookRow,k=n.rows[i],k instanceof wjcGrid._NewRowTemplate)||(b=k instanceof wjcGrid.GroupRow,b?(ot=wjcCore.tryCast(k,wjcGrid.GroupRow),g=ot.level):n.rows.maxGroupLevel>-1&&(g=n.rows.maxGroupLevel+1),d&&(o=this._parseFlexGridRowToSheetRow(n.rowHeaders,u,i,0,f,y,h,b,g,c,p)),this._parseFlexGridRowToSheetRow(n.cells,u,i,o,f,y,h,b,g,c,p),u.cells.length>0&&(l._deserialize(u),s._addWorkbookRow(l,nt+i)));for(st=n.cells.rows.length,i=0;i<n.columnFooters.rows.length;i++)o=0,u={},l=new wjcXlsx.WorkbookRow,k=n.columnFooters.rows[i],b=k instanceof wjcGrid.GroupRow,d&&(o=this._parseFlexGridRowToSheetRow(n.rowHeaders,u,i,0,f,y,h,b,0,c,p)),this._parseFlexGridRowToSheetRow(n.columnFooters,u,i,o,f,y,h,b,0,c,p),u.cells.length>0&&(l._deserialize(u),s._addWorkbookRow(l,nt+st+i));return it.rows=ft?n.frozenRows+nt:n.frozenRows,it.columns=d?n.frozenColumns+o:n.frozenColumns,s.frozenPane=it,tt._addWorkSheet(s),!rt&&(y||p)&&n.hostElement.removeChild(h),tt.activeWorksheet=ht,tt},n._loadToFlexGrid=function(n,t,i){var ii=i&&i.includeColumnHeaders!=null?i.includeColumnHeaders:!0,y=i&&i.includeColumnHeaders!=null?i.includeColumnHeaders:!0,vt=i&&i.sheetIndex!=null&&!isNaN(i.sheetIndex)?i.sheetIndex:0,bt=i?i.sheetName:null,ri=i?i.sheetVisible:!0,kt=n.wj_sheetInfo!=null,u=0,e=0,v,it,a,rt,w,p,ut,yt,g,dt,f,s,gt,k,ft,o,et,ot,ni,pt,c,st,d,b,h,r,l,wt,ht,ct,ti,nt,lt=!1,at={},tt;if(n.itemsSource=null,n.columns.clear(),n.rows.clear(),n.frozenColumns=0,n.frozenRows=0,l={},wt={},e=0,rt=[],ht=[],vt<0||vt>=t.sheets.length)throw'The sheet index option is out of the sheet range of current workbook.';if(bt!=null)for(v=0;v<t.sheets.length;v++)if(bt===t.sheets[v].name){s=t.sheets[v];break}if(s=s||t.sheets[vt],s.rows!=null){for(ii&&(e=1,s.rows.length<=1&&(y=!1,e=0),yt=s.rows[0]),k=this._getColumnCount(s.rows),gt=this._getRowCount(s.rows,k),ni=s.summaryBelow,a=s.columns,u=0;u<k;u++)n.columns.push(new wjcGrid.Column),!a[u]||(isNaN(+a[u].width)||(n.columns[u].width=+a[u].width),a[u].visible||a[u].visible==undefined||(n.columns[u].visible=!!a[u].visible),a[u].style&&!!a[u].style.wordWrap&&(n.columns[u].wordWrap=a[u].style.wordWrap));for(;e<gt;e++){if(ft=!1,tt=null,f=s.rows[e],f)for(et=e+1;et<s.rows.length;)if(ot=s.rows[et],ot){(isNaN(f.groupLevel)&&!isNaN(ot.groupLevel)||!isNaN(f.groupLevel)&&f.groupLevel<ot.groupLevel)&&(ft=!0);break}else et++;for(ft&&!ni?(c&&(c.isCollapsed=lt),c=new wjcGrid.GroupRow,c.isReadOnly=!1,lt=f.collapsed==null?!1:f.collapsed,c.level=isNaN(f.groupLevel)?0:f.groupLevel,at[c.level]=lt,this._checkParentCollapsed(at,c.level)&&c._setFlag(wjcGrid.RowColFlags.ParentCollapsed,!0),n.rows.push(c)):(pt=new wjcGrid.Row,f&&this._checkParentCollapsed(at,f.groupLevel)&&pt._setFlag(wjcGrid.RowColFlags.ParentCollapsed,!0),n.rows.push(pt)),!f||!f.height||isNaN(f.height)||(n.rows[y?e-1:e].height=f.height),u=0;u<k;u++)if(f){if(o=f.cells[u],b=o?o.formula:undefined,b&&b[0]!=='='&&(b='='+b),n.setCellData(y?e-1:e,u,b&&kt?b:this._getItemValue(o)),ft||this._setColumn(rt,u,o),h=e*k+u,r=o?o.style:undefined,ct=wjcXlsx.Workbook._parseExcelFormat(o),r){if(tt=tt==null?!!r.wordWrap:tt&&!!r.wordWrap,ti=this._getItemType(o),r.hAlign)nt=wjcXlsx.Workbook._parseHAlignToString(wjcCore.asEnum(r.hAlign,wjcXlsx.HAlign));else switch(ti){case wjcCore.DataType.Number:nt='right';break;case wjcCore.DataType.Boolean:nt='center';break;default:nt=ct&&ct.search(/[n,c,p]/i)===0?'right':'left'}l[h]={fontWeight:r.font&&r.font.bold?'bold':'none',fontStyle:r.font&&r.font.italic?'italic':'none',textDecoration:r.font&&r.font.underline?'underline':'none',textAlign:nt,fontFamily:r.font&&r.font.family?r.font.family:'',fontSize:r.font&&r.font.size?r.font.size+'px':'',color:r.font&&r.font.color?r.font.color:'',backgroundColor:r.fill&&r.fill.color?r.fill.color:'',whiteSpace:r.wordWrap?'pre-wrap':'normal',format:ct};r.borders&&(r.borders.left&&(this._parseBorderStyle(r.borders.left.style,'Left',l[h]),l[h].borderLeftColor=r.borders.left.color),r.borders.right&&(this._parseBorderStyle(r.borders.right.style,'Right',l[h]),l[h].borderRightColor=r.borders.right.color),r.borders.top&&(this._parseBorderStyle(r.borders.top.style,'Top',l[h]),l[h].borderTopColor=r.borders.top.color),r.borders.bottom&&(this._parseBorderStyle(r.borders.bottom.style,'Bottom',l[h]),l[h].borderBottomColor=r.borders.bottom.color));r.font&&ht.indexOf(r.font.family)===-1&&ht.push(r.font.family)}if(o&&wjcCore.isNumber(o.rowSpan)&&o.rowSpan>0&&wjcCore.isNumber(o.colSpan)&&o.colSpan>0&&(o.rowSpan>1||o.colSpan>1))for(v=e;v<e+o.rowSpan;v++)for(it=u;it<u+o.colSpan;it++)h=v*k+it,wt[h]=new wjcGrid.CellRange(e,u,e+o.rowSpan-1,u+o.colSpan-1)}else n.setCellData(y?e-1:e,u,''),this._setColumn(rt,u,undefined);f&&(this._checkParentCollapsed(at,f.groupLevel)||f.visible||f.visible==undefined||(n.rows[y?e-1:e].visible=f.visible),n.rows[y?e-1:e].wordWrap=!!f.style&&!!f.style.wordWrap||!!tt)}for(c&&(c.isCollapsed=lt),s.frozenPane&&(st=s.frozenPane.columns,wjcCore.isNumber(st)&&!isNaN(st)&&(n.frozenColumns=st),d=s.frozenPane.rows,wjcCore.isNumber(d)&&!isNaN(d)&&(n.frozenRows=y&&d>0?d-1:d)),u=0;u<n.columnHeaders.columns.length;u++)w=rt[u],p=n.columns[u],p.isRequired=!1,y?(g=yt?yt.cells[u]:undefined,g&&g.value?(dt=wjcXlsx.Workbook._parseExcelFormat(g),ut=wjcCore.Globalize.format(g.value,dt)):ut=this._numAlpha(u)):ut=this._numAlpha(u),p.header=ut,w&&(w.dataType===wjcCore.DataType.Boolean&&(p.dataType=w.dataType),p.format=w.format,p.align=w.hAlign,p.wordWrap=p.wordWrap||!!w.wordWrap);kt&&(n.wj_sheetInfo.name=s.name,n.wj_sheetInfo.visible=ri===!0?!0:s.visible!==!1,n.wj_sheetInfo.styledCells=l,n.wj_sheetInfo.mergedRanges=wt,n.wj_sheetInfo.fonts=ht)}},n._parseFlexGridRowToSheetRow=function(n,t,i,r,u,f,e,o,s,h,c){var v,p,nt,l,it,y,a,k,g,ft,ot,yt,tt,w,st,ct,et,b,wt=!1,lt,rt,bt,at,pt,d,ut,vt,ht;for(v=n.grid,et=v.wj_sheetInfo,p=n.rows[i],bt=p.recordIndex!=null?p.recordIndex:0,t.cells||(t.cells=[]),t.visible=p.isVisible,t.height=p.renderHeight||n.rows.defaultSize,t.groupLevel=s,o&&(t.collapsed=p.isCollapsed),p.wordWrap&&(t.style={wordWrap:p.wordWrap}),(p.constructor===wjcGrid.Row||p.constructor===wjcGrid._NewRowTemplate||tryGetModuleWijmoGridDetail()&&p.constructor===tryGetModuleWijmoGridDetail().DetailRow||tryGetModuleWijmoGridMultirow()&&p.constructor===tryGetModuleWijmoGridMultirow()._MultiRow)&&(wt=!0),l=0;l<n.columns.length;l++)if(it=null,ct=1,st=1,ht=0,rt=!1,tt=null,ut=null,lt=v._getBindingColumn(n,i,n.columns[l]),w=null,et&&n===v.cells?(yt=i*n.columns.length+l,et.mergedRanges&&(w=et.mergedRanges[yt]),et.styledCells&&(tt=et.styledCells[yt])):f&&(d=e.cloneNode(),n.hostElement.children.length>0?n.hostElement.children[0].appendChild(d):n.hostElement.appendChild(d),w=v.getMergedRange(n,i,l,!1),tt=w?this._getCellStyle(n,d,w.bottomRow,w.rightCol)||{}:this._getCellStyle(n,d,i,l)||{}),w||(w=v.getMergedRange(n,i,l,!1)),w?i===w.topRow&&l===w.leftCol&&(st=w.bottomRow-w.topRow+1,ct=this._getColSpan(n,w,h),rt=!0):rt=!0,!h||h(lt)){if(nt=u[bt][l+r],wt||o?(a=rt?n.getCellData(i,l,!0):null,k=rt?n.getCellData(i,l,!1):null,ft=!1,a&&wjcCore.isString(a)&&a.length>1&&a[0]==='='&&(ft=!0),b=wjcCore.isDate(k),tt&&tt.format?(it=tt.format,y=wjcXlsx.Workbook._parseCellFormat(tt.format,b)):nt&&nt.style&&nt.style.format?(it=lt.format,y=nt.style.format):y=null,y||(b?y='m/d/yyyy':wjcCore.isNumber(k)&&!lt.dataMap?y=wjcCore.isInt(k)?'#,##0':'#,##0.00':ft?(ot=a.toLowerCase(),ot.indexOf('now()')>-1?(y='m/d/yyyy h:mm',b=!0):ot.indexOf('today()')>-1||ot.indexOf('date(')>-1?(y='m/d/yyyy',b=!0):ot.indexOf('time(')>-1&&(y='h:mm AM/PM',b=!0)):y='General')):(a=rt?v.columnHeaders.getCellData(0,l,!0):null,y='General'),ut=this._parseCellStyle(tt)||{},n===v.cells&&o&&p.hasChildren&&l===v.columns.firstVisibleIndex){if(a?g=a:rt&&(g=p.getGroupHeader().replace(/<\/?\w+>/g,'')),g==null&&!tt)continue;b=wjcCore.isDate(g);!b&&it&&it.toLowerCase()==='d'&&wjcCore.isInt(g)&&(y='0');g=typeof g=='string'?wjcXlsx.Workbook._unescapeXML(g):g;l===v.columns.firstVisibleIndex&&v.treeIndent&&(ht=s);at={value:g,isDate:b,formula:ft?this._parseToExcelFormula(a,b):null,colSpan:ct,rowSpan:st,style:this._extend(ut,{format:y,font:{bold:!0},hAlign:wjcXlsx.HAlign.Left,indent:ht})}}else a=typeof a=='string'?wjcXlsx.Workbook._unescapeXML(a):a,k=typeof k=='string'?wjcXlsx.Workbook._unescapeXML(k):k,!b&&it&&it.toLowerCase()==='d'&&wjcCore.isInt(k)&&(y='0'),vt=ut&&ut.hAlign?ut.hAlign:nt&&nt.style&&nt.style.hAlign!=null?wjcCore.asEnum(nt.style.hAlign,wjcXlsx.HAlign,!0):wjcCore.isDate(k)?wjcXlsx.HAlign.Left:wjcXlsx.HAlign.General,l===v.columns.firstVisibleIndex&&v.treeIndent&&(vt===wjcXlsx.HAlign.Left||vt===wjcXlsx.HAlign.General)&&(ht=s),at={value:ft?null:y==='General'?wjcCore.isString(a)?a.replace(/^(\')(\s*=)/,'$2'):a:k,isDate:b,formula:ft?this._parseToExcelFormula(a,b):null,colSpan:l<v.columns.firstVisibleIndex?1:ct,rowSpan:st,style:this._extend(ut,{format:y,hAlign:vt,vAlign:st>1?n===v.cells||v.centerHeadersVertically===!1?wjcXlsx.VAlign.Top:wjcXlsx.VAlign.Center:null,indent:ht})};c&&(pt=new XlsxFormatItemEventArgs(n,new wjcGrid.CellRange(i,l),d,e,at),c(pt),d=pt.cell);d&&(d.parentElement.removeChild(d),d=null);t.cells.push(at)}return r+l},n._parseCellStyle=function(n){var t,r,f,i,u;return n==null?null:(t=n.fontSize,t=t?+t.substring(0,t.indexOf('px')):null,isNaN(t)&&(t=null),r=n.fontWeight,r=r==='bold'||+r>=700,f=n.fontStyle==='italic',i=n.textDecorationStyle,i==null&&(i=n.textDecoration),i=i==='underline',u=n.whiteSpace,u=u?u.indexOf('pre')>-1?!0:!1:!1,{font:{bold:r,italic:f,underline:i,family:this._parseToExcelFontFamily(n.fontFamily),size:t,color:n.color},fill:{color:n.backgroundColor},borders:this._parseBorder(n),hAlign:wjcXlsx.Workbook._parseStringToHAlign(n.textAlign),wordWrap:u})},n._parseBorder=function(n){var t={};return t.left=this._parseEgdeBorder(n,'Left'),t.right=this._parseEgdeBorder(n,'Right'),t.top=this._parseEgdeBorder(n,'Top'),t.bottom=this._parseEgdeBorder(n,'Bottom'),t},n._parseEgdeBorder=function(n,t){var r,u=n['border'+t+'Style'],i;if(u&&u!=='none'&&u!=='hidden'){r={};u=u.toLowerCase();switch(u){case'dotted':r.style=wjcXlsx.BorderStyle.Dotted;break;case'dashed':r.style=wjcXlsx.BorderStyle.Dashed;break;case'double':r.style=wjcXlsx.BorderStyle.Double;break;default:i=n['border'+t+'Width'];i&&i.length>2&&(i=+i.substring(0,i.length-2));r.style=i>2?wjcXlsx.BorderStyle.Thick:i>1?wjcXlsx.BorderStyle.Medium:wjcXlsx.BorderStyle.Thin}r.color=n['border'+t+'Color']}return r},n._parseBorderStyle=function(n,t,i){var r='border'+t+'Style',u='border'+t+'Width';switch(n){case wjcXlsx.BorderStyle.Dotted:case wjcXlsx.BorderStyle.Hair:i[r]='dotted';i[u]='1px';break;case wjcXlsx.BorderStyle.Dashed:case wjcXlsx.BorderStyle.ThinDashDotDotted:case wjcXlsx.BorderStyle.ThinDashDotted:i[r]='dashed';i[u]='1px';break;case wjcXlsx.BorderStyle.MediumDashed:case wjcXlsx.BorderStyle.MediumDashDotDotted:case wjcXlsx.BorderStyle.MediumDashDotted:case wjcXlsx.BorderStyle.SlantedMediumDashDotted:i[r]='dashed';i[u]='2px';break;case wjcXlsx.BorderStyle.Double:i[r]='double';i[u]='3px';break;case wjcXlsx.BorderStyle.Medium:i[r]='solid';i[u]='2px';break;default:i[r]='solid';i[u]='1px'}},n._parseToExcelFontFamily=function(n){var t;return n&&(t=n.split(','),t&&t.length>0&&(n=t[0].replace(/\"|\'/g,''))),n},n._parseToExcelFormula=function(n,t){var i,f,e,s,r,u,o;if(i=n.match(/(floor|ceiling)\([+-]?\d+\.?\d*\)/gi),i)for(r=0;r<i.length;r++)u=i[r],o=u.substring(0,u.lastIndexOf(')'))+', 1)',n=n.replace(u,o);if(i=null,i=n.match(/text\(\"?\w+\"?\s*\,\s*\"\w+\"\)/gi),i)for(r=0;r<i.length;r++)u=i[r],f=u.match(/\"?\w+\"?\s*\,\s*\"(\w+)\"/i),f&&f.length===2&&(e=f[1],/^d{1,4}?$/.test(e)||(s=wjcXlsx.Workbook._parseCellFormat(e,t),o=u.replace(e,s),n=n.replace(u,o)));return n},n._getColumnSetting=function(n,t){var i=n.renderWidth;return i=i||t,{autoWidth:!0,width:i,visible:n.visible,style:{format:n.format?wjcXlsx.Workbook._parseCellFormat(n.format,n.dataType===wjcCore.DataType.Date):'',hAlign:wjcXlsx.Workbook._parseStringToHAlign(this._toExcelHAlign(n.getAlignment())),wordWrap:n.wordWrap}}},n._toExcelHAlign=function(n){return(n=n?n.trim().toLowerCase():n,!n)?n:n.indexOf('center')>-1?'center':n.indexOf('right')>-1||n.indexOf('end')>-1?'right':n.indexOf('justify')>-1?'justify':'left'},n._getColumnCount=function(n){for(var u=0,t=0,i,r=0;r<n.length;r++)i=n[r]&&n[r].cells?n[r].cells:[],i&&i.length>0&&(t=i.length,wjcCore.isInt(i[t-1].colSpan)&&i[t-1].colSpan>1&&(t=t+i[t-1].colSpan-1),t>u&&(u=t));return u},n._getRowCount=function(n,t){for(var u=n.length,r=u-1,e=0,f,o,i;e<t;e++)n:for(;r>=0;r--)if(f=n[r],o=f&&f.cells?f.cells:[],i=o[e],i&&(i.value!=null&&i.value!==''||wjcCore.isInt(i.rowSpan)&&i.rowSpan>1)){wjcCore.isInt(i.rowSpan)&&i.rowSpan>1&&r+i.rowSpan>u&&(u=r+i.rowSpan);break n}return u},n._numAlpha=function(n){var t=Math.floor(n/26)-1;return(t>-1?this._numAlpha(t):'')+String.fromCharCode(65+n%26)},n._getItemType=function(n){return n===undefined||n===null||n.value===undefined||n.value===null||isNaN(n.value)?undefined:wjcCore.getType(n.value)},n._setColumn=function(n,t,i){var u,f,e,r=n[t];r?(u=this._getItemType(i),r.dataType!==u&&r.dataType===wjcCore.DataType.Boolean&&u!==wjcCore.DataType.Boolean&&(r.dataType=u),i&&i.value!=null&&i.value!==''&&(f=wjcXlsx.Workbook._parseExcelFormat(i),f&&r.format!==f&&f!=='General'&&(r.format=f)),i&&i.style&&(i.style.hAlign&&(e=wjcXlsx.Workbook._parseHAlignToString(wjcCore.asEnum(i.style.hAlign,wjcXlsx.HAlign))),r.wordWrap=r.wordWrap==null?!!i.style.wordWrap:r.wordWrap&&!!i.style.wordWrap),e||u!==wjcCore.DataType.Number||(e='right'),r.hAlign=e):n[t]={dataType:this._getItemType(i),format:wjcXlsx.Workbook._parseExcelFormat(i),hAlign:'',wordWrap:null}},n._getItemValue=function(n){if(n===undefined||n===null||n.value===undefined||n.value===null)return undefined;var t=n.value;return wjcCore.isNumber(t)&&isNaN(t)?'':t instanceof Date&&isNaN(t.getTime())?'':t},n._getCellStyle=function(n,t,i,r){try{n.grid.cellFactory.updateCell(n,i,r,t);t.className=t.className.replace('wj-state-selected','');t.className=t.className.replace('wj-state-multi-selected','')}catch(u){return null}return window.getComputedStyle(t)},n._extend=function(n,t){var i,r;for(i in t)r=t[i],wjcCore.isObject(r)&&n[i]?wjcCore.copy(n[i],r):n[i]=r;return n},n._checkParentCollapsed=function(n,t){var i=!1;return Object.keys(n).forEach(function(r){n[r]===!0&&i===!1&&!isNaN(t)&&+r<t&&(i=!0)}),i},n._getColSpan=function(n,t,i){for(var u=0,r=t.leftCol;r<=t.rightCol;r++)(!i||i(n.columns[r]))&&u++;return u},n}();exports.FlexGridXlsxConverter=FlexGridXlsxConverter;XlsxFormatItemEventArgs=function(n){function t(t,i,r,u,f){var e=n.call(this,t,i)||this;return e._cell=r,e._patternCell=u,e._xlsxCell=f,e}return __extends(t,n),Object.defineProperty(t.prototype,"cell",{get:function(){return this._cell},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"xlsxCell",{get:function(){return this._xlsxCell},set:function(n){this._xlsxCell=n},enumerable:!0,configurable:!0}),t.prototype.getFormattedCell=function(){return this._cell||(this._cell=this._patternCell.cloneNode(),this.panel.hostElement.children[0].appendChild(this._cell),FlexGridXlsxConverter._getCellStyle(this.panel,this._cell,this.range.row,this.range.col)),this._cell},t}(wjcGrid.CellRangeEventArgs);exports.XlsxFormatItemEventArgs=XlsxFormatItemEventArgs