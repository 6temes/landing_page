function createAjaxObj(){var httprequest=false
if(window.XMLHttpRequest){httprequest=new XMLHttpRequest()
if(httprequest.overrideMimeType)
httprequest.overrideMimeType('text/xml')}
else if(window.ActiveXObject){try{httprequest=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e){try{httprequest=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){}}}
return httprequest}
function ajax_ticker(xmlfile,divId,divClass,delay,fadeornot){this.xmlfile=xmlfile
this.tickerid=divId
this.delay=delay
this.mouseoverBol=0
this.pointer=0
this.opacitystring=(typeof fadeornot!="undefined")?"width: 100%; filter:progid:DXImageTransform.Microsoft.alpha(opacity=100); -moz-opacity: 1":""
if(this.opacitystring!="")this.delay+=1200
this.opacitysetting=0.2
this.messages=[]
this.ajaxobj=createAjaxObj()
document.write('<div id="'+divId+'" class="'+divClass+'"><div style="'+this.opacitystring+'"></div></div>')
this.getXMLfile()}
ajax_ticker.prototype.getXMLfile=function(){if(this.ajaxobj){var instanceOfTicker=this
var url=this.xmlfile+"?bustcache="+new Date().getTime()
this.ajaxobj.onreadystatechange=function(){instanceOfTicker.initialize()}
this.ajaxobj.open('GET',url,true)
this.ajaxobj.send(null)}}
ajax_ticker.prototype.initialize=function(){if(this.ajaxobj.readyState==4){if(this.ajaxobj.status==200||window.location.href.indexOf("http")==-1){this.contentdiv=document.getElementById(this.tickerid).firstChild
var xmldata=this.ajaxobj.responseText
this.contentdiv.style.display="none"
this.contentdiv.innerHTML=xmldata
if(this.contentdiv.getElementsByTagName("div").length==0){this.contentdiv.innerHTML="<b>Error</b> fetching remote ticker file!"
return}
var instanceOfTicker=this
document.getElementById(this.tickerid).onmouseover=function(){instanceOfTicker.mouseoverBol=1}
document.getElementById(this.tickerid).onmouseout=function(){instanceOfTicker.mouseoverBol=0}
if(window.attachEvent)
window.attachEvent("onunload",function(){instanceOfTicker.contentdiv=instanceOfTicker.ajaxobj=null})
for(var i=0;i<this.contentdiv.getElementsByTagName("div").length;i++){if(this.contentdiv.getElementsByTagName("div")[i].className=="message")
this.messages[this.messages.length]=this.contentdiv.getElementsByTagName("div")[i].innerHTML}
this.contentdiv.innerHTML=""
this.contentdiv.style.display="block"
this.rotatemsg()}}}
ajax_ticker.prototype.rotatemsg=function(){var instanceOfTicker=this
if(this.mouseoverBol==1)
setTimeout(function(){instanceOfTicker.rotatemsg()},30)
else{this.fadetransition("reset")
this.contentdiv.innerHTML=this.messages[this.pointer]
this.fadetimer1=setInterval(function(){instanceOfTicker.fadetransition('up','fadetimer1')},100)
this.pointer=(this.pointer<this.messages.length-1)?this.pointer+1:0
setTimeout(function(){instanceOfTicker.rotatemsg()},this.delay)}}
ajax_ticker.prototype.fadetransition=function(fadetype,timerid){var contentdiv=this.contentdiv
if(fadetype=="reset")
this.opacitysetting=0.2
if(contentdiv.filters&&contentdiv.filters[0]){if(typeof contentdiv.filters[0].opacity=="number")
contentdiv.filters[0].opacity=this.opacitysetting*100
else
contentdiv.style.filter="alpha(opacity="+this.opacitysetting*100+")"}
else if(typeof contentdiv.style.MozOpacity!="undefined"&&this.opacitystring!=""){contentdiv.style.MozOpacity=this.opacitysetting}
else
this.opacitysetting=1
if(fadetype=="up")
this.opacitysetting+=0.1
if(fadetype=="up"&&this.opacitysetting>=1)
clearInterval(this[timerid])}