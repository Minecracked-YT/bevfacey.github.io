/**
 * SWFCache v2.0: Flash Player cache control
 *
 * SWFCache is copyright (c) 2007 Chris Your and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Last updated: February 14, 2008
 * Check for updates @ http://www.ignitionindustries.com/swfcache
 *
 */
/** SWFCache GLOBAL SETTINGS **/
var swfcache_global = 1;
var swfcache_global_print = 0;
/** SWFCache **/
if(typeof ign=="undefined"){ign={}}ign.SWFCache=function(a,b,c){this.mode=b;this.swf='';this.cache='';switch(b){case'development':this.make(a,this.getTimestamp());break;case'global':if(swfcache_global){if(swfcache_global=='development'){this.make(a,this.getTimestamp())}else{this.make(a,String(swfcache_global))}}else{this.make(a)}if(swfcache_global_print==1){this.print()}break;default:if(c!==null){this.make(a,c)}else{this.make(a)}break}};ign.SWFCache.prototype={setSwf:function(a){this.swf=a},setCache:function(a){this.cache=a},getTimestamp:function(){var a=new Date();var y=String(a.getFullYear());var m=String(a.getMonth()+1);if(m.length==1){m='0'+m}var d=String(a.getDate());if(d.length==1){d='0'+d}var h=String(a.getHours());if(h.length==1){h='0'+h}var b=String(a.getMinutes());if(b.length==1){b='0'+b}var s=String(a.getSeconds());if(s.length==1){s='0'+s}var c='-';var e='-';var f='_';var g=y+c+m+c+d+f+h+e+b+e+s;return g},make:function(a,b){if(b!==null){this.setSwf(a+"?swfcache="+b);this.setCache(b)}else{this.setSwf(a);this.setCache('')}},print:function(){var a='<div id="swfcache" style="text-align:left;font-family:arial,verdana,helvetica,sans-serif; font-size:14px; background-color:#1F2226; padding:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; color:#fff; margin:10px;">';a+='<div class="swfcache-title" style="font-size:1.5em;">SWFCache</div>';a+='<div class="swfcache-mode" style="margin:3px 0;"><span style="font-weight:bold;">Mode:</span> '+this.mode+'</div>';a+='<div class="swfcache-swf" style="margin:3px 0;"><span style="font-weight:bold;">Swf:</span> '+this.swf+'</div>';a+='<div class="swfcache-cache" style="margin:3px 0;"><span style="font-weight:bold;">Cache:</span> '+this.cache+'</div>';if(this.mode=='global'){a+='<div class="swfcache-global" style="margin:13px 0;"><span style="background-color:#2B3035; border:1px solid #4A515B; padding:7px;">Change the value of the \'swfcache_global\' variable in \'swfcache.js\' to control the global cache.</span></div>'}a+='</div>';var b=window.document.getElementsByTagName('body')[0];try{var c=window.document.createElement('<div id="swfcache-wrapper"></div>')}catch(e){c=window.document.createElement("div");c.setAttribute("id","swfcache-wrapper")}c.innerHTML=a;b.insertBefore(c,window.document.body.childNodes[0])}};var SWFCache=ign.SWFCache;