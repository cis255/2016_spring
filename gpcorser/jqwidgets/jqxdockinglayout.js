/*
jQWidgets v4.1.2 (2016-Apr)
Copyright (c) 2011-2016 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxDockingLayout","jqxLayout",{});a.extend(a.jqx._jqxDockingLayout.prototype,{defineInstance:function(){if(this.base===null){throw new Error("jqxDockingLayout: Missing reference to jqxlayout.js.")}this.base.dockingLayout=this;var b={events:["float","dock"]};a.extend(true,this,b)},createInstance:function(){var b=this;if(!b.base.host.jqxWindow){throw new Error("jqxDockingLayout: Missing reference to jqxwindow.js.")}b._oldIE=a.jqx.browser.msie&&a.jqx.browser.version<9;b._addClasses();b._createOverlay();b._createEdgeOverlays()},loadLayout:function(b){if(b!==undefined&&a.isEmptyObject(b)===false){var c=this.base,d=c.element.id;if(a("."+d+"FloatGroup").length>0){a("."+d+"FloatGroup").off();a("."+d+"FloatGroup").jqxWindow("destroy")}c.loadLayout(b)}},destroy:function(){var b=this,c=b.base,d=c.element.id;if(a("."+d+"FloatGroup").length>0){a("."+d+"FloatGroup").off();a("."+d+"FloatGroup").jqxWindow("destroy")}b._removeHandlers();c.destroy()},addFloatGroup:function(c,k,d,j,h,e,g){var b=this.base,i={type:"floatGroup",width:c,height:k,position:d,items:[],programmaticallyAdded:true},f={type:j,title:h,content:e,initContent:g};i.items.push(f);b.layout.push(i);b.render()},_raiseEvent:function(f,c){if(c===undefined){c={owner:null}}var d=this.events[f];c.owner=this;var e=new a.Event(d);e.owner=this;e.args=c;if(e.preventDefault){e.preventDefault()}var b=this.base.host.trigger(e);return b},_addClasses:function(){var b=this.base;b.host.addClass(b.toThemeProperty("jqx-docking-layout"))},_removeHandlers:function(){var b=this,c=b.base,d=c.element.id;b.removeHandler(a(document),"mousemove.jqxDockingLayout"+d);b.removeHandler(c.host,"mouseleave.jqxDockingLayout"+d);if(c._touchDevice){b.removeHandler(a(document),"touchmove.jqxDockingLayout"+d);b.removeHandler(a(document),"touchend.jqxDockingLayout"+d)}},_removeByDragHandler:function(b,i,e,g,d){if(g===undefined){g=b.args.draggedIndex}if(d===undefined){d=true}if(!e.hasClass("jqx-ribbon")){e=e.find(".jqx-ribbon")}var f=this,j=i.items,c=j[g],h=i.widget.find(".jqx-ribbon-content-section").eq(g).contents().detach();f._createFloatGroup(b,c.title,h,"documentGroup",i,c);f.base._closeDocumentPanel(g,j,i,e,d)},_floatTabbedGroup:function(h,f,b){var g=this,l,d,j=[],c=f.find(".jqx-ribbon");for(var e=0;e<h.items.length;e++){var m=h.items[e],k=c.find(".jqx-ribbon-content-section").eq(e).contents().detach();if(m.selected){l=m.title;d=e}j.push(k)}g._createFloatGroup(b,l,j,"tabbedGroup",h,null,d);g.base._close(h);if(b){b.target.style.cursor=""}},_addTabbedGroupHandlers:function(h,f){var g=this,c=g.base,b=c.element.id,e=f.find(".jqx-layout-window-header"),i=false,d,k=c._touchDevice?["touchstart","touchend"]:["mousedown","mouseup"];function j(l){if(i===true&&c._clickedToResize!==true){g._floatTabbedGroup(h,f,l);i=false}}g.addHandler(e,k[0]+".jqxDockingLayout"+b,function(l){if(h.allowDrag!==false){i=true;l.target.style.cursor="move";if(c._touchDevice){var m=l.originalEvent.touches[0];d=document.elementFromPoint(m.pageX,m.pageY)}}});g.addHandler(e,k[1]+".jqxDockingLayout"+b,function(l){i=false;l.target.style.cursor=""});if(!c._touchDevice){g.addHandler(e,"mouseleave.jqxDockingLayout"+b,function(l){j({pageX:l.pageX,pageY:l.pageY,target:l.target})})}else{g.addHandler(a(document),"touchmove.jqxDockingLayout"+b,function(l){if(c._clickedToResize===true){l.preventDefault()}var m=l.originalEvent.touches[0];if(d!==document.elementFromPoint(m.pageX,m.pageY)){j({pageX:m.pageX,pageY:m.pageY,target:d})}})}},_floatAutoHideGroup:function(e,f,d,c){var b=this;b._createFloatGroup(c,f,d.detach(),"autoHideGroup",e,e);b.base._close(e)},_addAutoHideGroupHandlers:function(g,e,i,h){var f=this,c=f.base,b=c.element.id,j=false,d,l=c._touchDevice?["touchstart","touchend"]:["mousedown","mouseup"];function k(m){if(j===true){f._floatAutoHideGroup(g,i,h,m);j=false;m.target.style.cursor=""}}f.addHandler(e,l[0]+".jqxDockingLayout"+b,function(m){if(g.parent.allowDrag!==false){j=true;m.target.style.cursor="move";if(c._touchDevice){var n=m.originalEvent.touches[0];d=document.elementFromPoint(n.pageX,n.pageY)}}});f.addHandler(e,l[1]+".jqxDockingLayout"+b,function(m){j=false;m.target.style.cursor=""});if(!c._touchDevice){f.addHandler(e,"mouseleave.jqxDockingLayout"+b,function(m){k({pageX:m.pageX,pageY:m.pageY,target:m.target})})}else{f.addHandler(a(document),"touchmove.jqxDockingLayout"+b,function(m){if(c._clickedToResize===true){m.preventDefault()}var n=m.originalEvent.touches[0];if(d!==document.elementFromPoint(n.pageX,n.pageY)){k({pageX:n.pageX,pageY:n.pageY,target:d})}})}},_createFloatGroup:function(B,H,z,f,F,p,e){var l=this,g=l.base,o,n,v,u,D,b,d=a('<div class="'+g.toThemeProperty("jqx-docking-layout-group-floating")+" "+g.element.id+'FloatGroup"><div></div><div></div></div>');a("body").append(d);if(f==="documentGroup"){if(B){o=B.args.x;n=B.args.y}v=F.widget.width();u=F.widget.height();D=z}else{if(f==="tabbedGroup"){if(B){o=B.pageX;n=B.pageY}v=F.widget.width();u=F.widget.height();D="";b=a("<div></div>");var G=a("<div></div>"),E=a('<ul class="jqx-layout-ribbon-header jqx-layout-ribbon-header-'+(l.rtl?"rtl":"ltr")+'"></ul>');for(var C=0;C<F.items.length;C++){var h=F.items[C],t=a("<div></div>");var r=a("<li>"+h.title+"</li>");E.append(r);t.append(z[C]);G.append(t)}b.append(E);b.append(G);D=b}else{if(f==="autoHideGroup"){if(B){o=B.pageX;n=B.pageY}v=F.parent.widget.find(".jqx-ribbon-content").width();u=F.parent.widget.height();D=z}}}if(!o&&!n){var c=g.host.offset();o=(g.host.width()-v)/2+c.left+100;n=(g.host.height()-u)/2+c.top+10}d.on("moved close",function(j){l._hideOverlays();var i=d.current;if(j.type==="moved"){i.position.x=j.args.x;i.position.y=j.args.y;if(i._overlayGroup){l._updateOverlayGroup(i._overlayGroup)}l._clearTextSelection();l._windowCreate=false;l._hideOverlays()}else{if(i._overlayGroup){i._overlayGroup.removed=true;l._updateOverlayGroups()}i.removed=true;g._updateLayout(g.layout)}});d.on("resized",function(j){var i=d.current,k=a(this).offset();i.width=j.args.width;i.height=j.args.height;i.position.x=k.left;i.position.y=k.top;if(i._overlayGroup){l._updateOverlayGroup(i._overlayGroup)}});d.jqxWindow({theme:g.theme,title:H,content:D,width:v,maxWidth:null,height:u,maxHeight:null,position:{x:o-100,y:n-10},closeButtonAction:"close",rtl:g.rtl,initContent:function(){var k=d.find(".jqx-window-header"),i=g._touchDevice?"touchstart":"mousedown",j;if(f==="autoHideGroup"){j=F.parent}else{j=F}if(B){l._draggedWindow={fromGroup:j,fromPanel:p,title:H,element:d};k.trigger("mousedown",[o,n]);l._windowDragged=true;l._windowCreate=true;l._interval();if(g.resizable){g._overlay[0].style.display="block"}l._showEdgeOverlays()}k.on(i,function(){l._windowDragged=true;if(d.current._overlayGroup){d.current._overlayGroup.self=true}l._interval();if(g.resizable){g._overlay[0].style.display="block"}l._draggedWindow={fromGroup:j,fromPanel:p,title:H,element:d};l._showEdgeOverlays()});k.on("mouseup",function(){l._hideOverlays();l._windowCreate=false});if(f==="tabbedGroup"){b.jqxRibbon({theme:g.theme,width:"100%",height:"100%",position:"bottom",selectedIndex:e,selectionMode:"click",animationType:"none",rtl:g.rtl,reorder:true,_removeByDrag:true});b.on("select",function(x){if(!(x.owner.widgetName&&x.owner.widgetName!=="jqxRibbon")){var y=d.current.items[0].items[x.args.selectedIndex];d.jqxWindow("setTitle",y.title);y.selected=true}});b.on("unselect",function(x){if(!(x.owner.widgetName&&x.owner.widgetName!=="jqxRibbon")){d.current.items[0].items[x.args.unselectedIndex].selected=false}});b.on("reorder",function(x){g._swapPanelsInLayout(d.current.items[0].items,x.args.newIndex,x.args.oldIndex)});b.on("_removeByDrag",function(x){l._removeByDragHandler(x,d.current.items[0],b);if(d.current.items[0].items.length===1){b.jqxRibbon({_removeByDrag:false})}})}}});var m={type:"floatGroup",parent:{type:"host"},widget:d,position:{x:o-100,y:n-10},index:g.layout.length,width:v,height:u},s,q;d.current=m;if(p){m.items=[];g._copyItem(p,m.items);s=m.items;q=m}else{m.items=[{type:"tabbedGroup",items:[],parent:m,widget:b}];s=m.items[0].items;for(var A=0;A<F.items.length;A++){g._copyItem(F.items[A],s)}q=m.items[0]}for(var w=0;w<s.length;w++){s[w].parent=q}g.layout.push(m);l._raiseEvent("0",{item:m});l._trackFloatGroups()},_interval:function(){var c=this;if(c._oldIE===true){var b=c._overlay.width(),d=c._overlay.height();c._oldIEInterval=setInterval(function(){c._checkPosition(b,d);if(c._windowCreate){c._draggedWindow.element.jqxWindow("move",c._x-50,c._y-10)}},1000)}},_createOverlay:function(){var e=this,f=e.base,i=f.element.id;e._overlay=a('<div class="'+f.toThemeProperty("jqx-docking-layout-overlay")+'"></div>');var c=a('<div class="jqx-docking-layout-overlay-section"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-docking-layout-overlay-square-invisible")+'"></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-widget-content jqx-docking-layout-overlay-square-top")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square")+'"><div class="'+f.toThemeProperty("jqx-widget-header jqx-docking-layout-overlay-inner-square-header")+'"></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square-content")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-fill-state-pressed jqx-docking-layout-overlay-highlight jqx-docking-layout-overlay-highlight-top")+'"></div></div></div></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-docking-layout-overlay-square-invisible")+'"></div></div><div class="jqx-docking-layout-overlay-section"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-widget-content jqx-docking-layout-overlay-square-left")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square")+'"><div class="'+f.toThemeProperty("jqx-widget-header jqx-docking-layout-overlay-inner-square-header")+'"></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square-content")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-fill-state-pressed jqx-docking-layout-overlay-highlight jqx-docking-layout-overlay-highlight-left")+'"></div></div></div></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-widget-content jqx-docking-layout-overlay-square-center")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square")+'"><div class="'+f.toThemeProperty("jqx-widget-header jqx-docking-layout-overlay-inner-square-header")+'"></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-fill-state-pressed jqx-docking-layout-overlay-inner-square-content jqx-docking-layout-overlay-highlight")+'"></div></div></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-widget-content jqx-docking-layout-overlay-square-right")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square")+'"><div class="'+f.toThemeProperty("jqx-widget-header jqx-docking-layout-overlay-inner-square-header")+'"></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square-content")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-fill-state-pressed jqx-docking-layout-overlay-highlight jqx-docking-layout-overlay-highlight-right")+'"></div></div></div></div></div><div class="jqx-docking-layout-overlay-section"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-docking-layout-overlay-square-invisible")+'"></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-widget-content jqx-docking-layout-overlay-square-bottom")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square")+'"><div class="'+f.toThemeProperty("jqx-widget-header jqx-docking-layout-overlay-inner-square-header")+'"></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-inner-square-content")+'"><div class="'+f.toThemeProperty("jqx-widget-content jqx-fill-state-pressed jqx-docking-layout-overlay-highlight jqx-docking-layout-overlay-highlight-bottom")+'"></div></div></div></div><div class="'+f.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-docking-layout-overlay-square-invisible")+'"></div></div>');e._overlay.append(c);e._overlayCenter=e._overlay.find(".jqx-docking-layout-overlay-square-center").children();e._dropOverlay=a('<div class="'+e.toThemeProperty("jqx-docking-layout-drop-overlay")+'"></div>');if(!f._ie7){f.host.append(e._overlay,e._dropOverlay)}else{a("body").append(e._overlay,e._dropOverlay)}e._addOverlayHandlers();e._squares=e._overlay.find(".jqx-docking-layout-overlay-square-top").add(e._overlay.find(".jqx-docking-layout-overlay-square-left")).add(e._overlay.find(".jqx-docking-layout-overlay-square-center")).add(e._overlay.find(".jqx-docking-layout-overlay-square-right")).add(e._overlay.find(".jqx-docking-layout-overlay-square-bottom"));e._sansCenter=e._squares.not(".jqx-docking-layout-overlay-square-center").find(".jqx-docking-layout-overlay-inner-square");var d=false;function h(k,j,m,l){e._dropOverlay.show();e._dropOverlay[0].style.width=k+"px";e._dropOverlay[0].style.height=j+"px";e._dropOverlay.offset({left:m,top:l})}function g(l){l=l.closest(".jqx-docking-layout-overlay-square");d=l;if(l.find(".jqx-docking-layout-overlay-inner-square").hasClass("jqx-fill-state-disabled")){return}var m=e._dropToGroup.element.width(),k=e._dropToGroup.element.height(),j=e._dropToGroup.element.offset();if(l.hasClass("jqx-docking-layout-overlay-square-top")){h(m,k/2,j.left,j.top)}else{if(l.hasClass("jqx-docking-layout-overlay-square-left")){h(m/2,k,j.left,j.top)}else{if(l.hasClass("jqx-docking-layout-overlay-square-center")&&!e._overlayCenter.hasClass("jqx-docking-layout-square-disabled")){h(m,k,j.left,j.top)}else{if(l.hasClass("jqx-docking-layout-overlay-square-right")){h(m/2,k,j.left+m/2,j.top)}else{if(l.hasClass("jqx-docking-layout-overlay-square-bottom")){h(m,k/2,j.left,j.top+k/2)}else{if(f._touchDevice){e._dropOverlay.hide();d=false}}}}}}}function b(t){var l=e._dropToGroup.settings;if(t.find(".jqx-docking-layout-overlay-inner-square").hasClass("jqx-fill-state-disabled")){e._hideOverlays();return}if(t.hasClass("jqx-docking-layout-overlay-square-top")){e._dropHandler(0,"vertical","height","top")}else{if(t.hasClass("jqx-docking-layout-overlay-square-left")){e._dropHandler(0,"horizontal","width","left")}else{if(t.hasClass("jqx-docking-layout-overlay-square-center")){var p=e._getDraggedWindowInformation(),s=p.title,q=p.content,k,r;if(l.type==="documentGroup"){k=l.widget;r="documentPanel"}else{if(l.type==="tabbedGroup"){if(l.parent.type==="floatGroup"){k=l.widget}else{k=l.widget.find(".jqx-ribbon")}r="layoutPanel"}}if(l.type==="layoutGroup"){e._dropToEmptyLayoutGroup(p)}else{for(var n=0;n<s.length;n++){k.jqxRibbon({_suppressReorder:true});k.jqxRibbon("addAt",k.find(".jqx-ribbon-content-section").length,{title:s[n],content:q[n]},true);var m=l.items.length,o={type:r,title:s[n],parent:l,index:m,detachedContent:p.content[n],docked:true};l.items.push(o);f._addRightClickHandler(a(k.find(".jqx-ribbon-item")[m]),{current:o})}}if(l.parent.type==="floatGroup"){l.widget.jqxRibbon({_removeByDrag:true})}e._clearTextSelection();e._raiseEvent("1",{position:"center",item:l})}else{if(t.hasClass("jqx-docking-layout-overlay-square-right")){e._dropHandler(1,"horizontal","width","right")}else{if(t.hasClass("jqx-docking-layout-overlay-square-bottom")){e._dropHandler(1,"vertical","height","bottom")}}}}}e._removeFloatGroupObject(e._draggedWindow.element.current);e._draggedWindow.element.remove();e._hideOverlays()}if(!f._touchDevice){e.addHandler(e._squares,"mouseenter.jqxDockingLayout"+i,function(){g(a(this))});e.addHandler(e._squares,"mouseleave.jqxDockingLayout"+i,function(){e._dropOverlay.hide()});e.addHandler(e._squares,"mouseup.jqxDockingLayout"+i,function(){b(a(this))})}else{e.addHandler(a(document),"touchmove.jqxDockingLayout"+i,function(j){if(e._windowDragged){j.preventDefault();var k=j.originalEvent.touches[0],l=a(document.elementFromPoint(k.pageX,k.pageY));g(l)}});e.addHandler(a(document),"touchend.jqxDockingLayout"+i,function(){if(d!==false){b(d);d=false}})}},_addOverlayHandlers:function(){var c=this,b=c._overlay.width(),d=c._overlay.height();if(!c.base._touchDevice){c.addHandler(a(document),"mousemove.jqxDockingLayout"+c.base.element.id,function(e){c._x=e.pageX;c._y=e.pageY;if(c._windowDragged&&!c._oldIE){c._checkPosition(b,d);if(c._windowCreate){c._draggedWindow.element.jqxWindow("move",e.pageX-50,e.pageY-10)}}})}else{c.addHandler(a(document),"touchmove.jqxDockingLayout"+c.base.element.id,function(f){var e=f.originalEvent.touches[0];c._x=e.pageX;c._y=e.pageY;if(c._windowDragged&&!c._oldIE){c._checkPosition(b,d);if(c._windowCreate){c._draggedWindow.element.jqxWindow("move",e.pageX-50,e.pageY-10)}}})}},_checkPosition:function(h,n){var g=this,c=g.base,l=g._x,k=g._y;for(var f=0;f<c._overlayGroups.length;f++){var o=c._overlayGroups[f];if(!o.self){var b=o.width,m=o.height,e=o.offset,d=e.left,j=e.top;if(l>=d&&l<=d+b&&k>=j&&k<=j+m){if(((o.settings.type==="documentGroup"&&g._draggedWindow.fromGroup.type==="documentGroup")||(o.settings.type==="tabbedGroup"&&(g._draggedWindow.fromGroup.type==="tabbedGroup"||g._draggedWindow.fromGroup.type==="autoHideGroup"))||(o.settings.type==="layoutGroup"))&&o.settings.allowDrop!==false){g._overlayCenter.removeClass(c.toThemeProperty("jqx-fill-state-disabled"))}else{g._overlayCenter.addClass(c.toThemeProperty("jqx-fill-state-disabled"));if(o.settings.parent.type==="floatGroup"){return}}if(o.settings.parent.type==="floatGroup"){g._sansCenter.addClass(c.toThemeProperty("jqx-fill-state-disabled"))}else{g._sansCenter.removeClass(c.toThemeProperty("jqx-fill-state-disabled"))}g._overlay[0].style.display="block";g._overlay.offset({left:parseInt(d+b/2-h/2,10),top:parseInt(j+m/2-n/2,10)});g._dropToGroup=o;return}}}g._overlay[0].style.display="none"},_dropHandler:function(p,u,w,z){var f=this,d=f.base,h=f._dropToGroup.settings,c=h.parent,m=f._getDraggedWindowInformation(),A=m.title,r=m.content,o=m.groupType,y=m.itemType,l=[],b,v;if(c.orientation===u){b=h.index+p;v={type:o,parent:c};v[w]=f._draggedWindow.element[w]();for(var t=0;t<A.length;t++){l.push({type:y,title:A[t],parent:v,prevent:true,selected:f._getFloatGroupItemSelection(t),detachedContent:r[t],docked:true})}v.items=l;f._setOptimalDimension(w,v,h);c.items.splice(b,0,v)}else{var x,e;if(w==="width"){x="height";e="minHeight"}else{x="width";e="minWidth"}var g={type:"layoutGroup",orientation:u,parent:h.parent,index:h.index};g[x]=h[x];if(h[e]){g[e]=h[e]}h.parent.items.splice(h.index,1);h.parent.items.splice(h.index,0,g);h.parent=g;v={type:o,parent:g};for(var s=0;s<A.length;s++){l.push({type:y,title:A[s],parent:v,prevent:true,selected:f._getFloatGroupItemSelection(s),detachedContent:r[s],docked:true})}v.items=l;delete h[x];h[w]="50%";v[w]="50%";g.items=[h];g.items.splice(0+p,0,v)}d.render();var n=v.widget.find(".jqx-ribbon-content-section");for(var q=0;q<n.length;q++){a(n[q]).append(r[q])}f._clearTextSelection();d._raiseEvent("1",{item:h});f._raiseEvent("1",{position:z,item:v})},_setOptimalDimension:function(d,b,c){var f=this,k=d==="width"?"minWidth":"minHeight",h=c[k]||f.base["minGroup"+d.charAt(0).toUpperCase()+d.slice(1)],e=c.parent.widget[d](),g;g=parseFloat(c[d])-h/e*100;var j=b[d]/e*100;if(g<j){b[d]=parseFloat(c[d])/2+"%";b[k]=parseInt(parseFloat(b[d])/100*e,10);c[d]=parseFloat(c[d])-parseFloat(b[d])+"%";var i=parseInt(parseFloat(c[d])/100*e,10);if(i<h){c[k]=i}}else{b[d]=j+"%";c[d]=parseFloat(c[d])-j+"%"}},_dropToEmptyLayoutGroup:function(e){var f=this,d=f._dropToGroup.settings,k=e.groupType,h={type:k,items:[],parent:d},g=e.content;if(d.orientation==="horizontal"){h.width="100%"}else{if(d.orientation==="vertical"){h.height="100%"}}for(var c=0;c<e.title.length;c++){var m={type:e.itemType,title:e.title[c],parent:h,prevent:true,selected:f._getFloatGroupItemSelection(c),detachedContent:g[c],docked:true};h.items.push(m)}d.items.push(h);f.base.render();var l=h.widget.find(".jqx-ribbon-content-section");for(var b=0;b<l.length;b++){a(l[b]).append(g[b])}},_getFloatGroupItemSelection:function(b){var d=this,c;if(d._draggedWindow.fromPanel){c=true}else{c=d._draggedWindow.element.current.items[0].items[b].selected}return c},_createEdgeOverlays:function(){function b(e){var h=e==="left"||e==="right"?"horizontal":"vertical",g='<div class="'+d.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-mini-window-edge-"+h)+'"><div class="'+d.toThemeProperty("jqx-widget-header jqx-docking-layout-overlay-inner-square-header jqx-docking-layout-overlay-inner-square-header-"+h)+'"></div><div class="'+d.toThemeProperty("jqx-widget-content jqx-fill-state-pressed jqx-docking-layout-overlay-inner-square-content jqx-docking-layout-overlay-inner-square-content-"+h)+'"></div></div>',j='<div class="'+d.toThemeProperty("jqx-docking-layout-overlay-square-edge-arrow-container jqx-docking-layout-overlay-square-edge-arrow-container-"+h)+'"><div class="'+d.toThemeProperty("jqx-fill-state-pressed jqx-docking-layout-overlay-square-edge-arrow jqx-docking-layout-overlay-square-edge-arrow-"+e)+'"></div></div>',i;if(e==="left"||e==="top"){i=g+j}else{i=j+g}var f=a('<div class="'+d.toThemeProperty("jqx-widget-content jqx-docking-layout-overlay-square jqx-docking-layout-overlay-square-edge")+'"><div class="'+d.toThemeProperty("jqx-docking-layout-overlay-inner-square-edge")+'">'+i+"</div></div>");return f}var c=this,d=c.base;c._leftOverlay=b("left");c._rightOverlay=b("right");c._topOverlay=b("top");c._bottomOverlay=b("bottom");c._edgeOverlays=c._leftOverlay.add(c._rightOverlay).add(c._topOverlay).add(c._bottomOverlay);if(!d._ie7){d.host.append(c._edgeOverlays)}else{a("body").append(c._edgeOverlays)}c._addEdgeOverlaysHandlers()},_addEdgeOverlaysHandlers:function(){function g(k,j,m,l){d._dropOverlay.show();d._dropOverlay[0].style.width=k;d._dropOverlay[0].style.height=j;d._dropOverlay.offset({left:m,top:l})}var d=this,e=d.base,i=e.element.id,c,f=false;function h(j){c=e.host.offset();j=a(j).closest(".jqx-docking-layout-overlay-square-edge")[0];f=j;switch(j){case d._leftOverlay[0]:g("100px",e.host.height()+"px",c.left,c.top);break;case d._rightOverlay[0]:g("100px",e.host.height()+"px",c.left+e.host.width()-100,c.top);break;case d._topOverlay[0]:g(e.host.width()+"px","100px",c.left,c.top);break;case d._bottomOverlay[0]:g(e.host.width()+"px","100px",c.left,c.top+e.host.height()-100);break;default:if(e._touchDevice){f=false}}}function b(j){switch(j){case d._leftOverlay[0]:d._dropToEdge("left",0,"horizontal","width");break;case d._rightOverlay[0]:d._dropToEdge("right",e.layout[0].items.length-1,"horizontal","width");break;case d._topOverlay[0]:d._dropToEdge("top",0,"vertical","height");break;case d._bottomOverlay[0]:d._dropToEdge("bottom",e.layout[0].items.length-1,"vertical","height");break}}if(!e._touchDevice){d.addHandler(d._edgeOverlays,"mouseenter.jqxDockingLayout"+i,function(){h(this)});d.addHandler(d._edgeOverlays,"mouseleave.jqxDockingLayout"+i,function(){d._dropOverlay.hide()});d.addHandler(d._edgeOverlays,"mouseup.jqxDockingLayout"+i,function(){b(this)})}else{d.addHandler(a(document),"touchmove.jqxDockingLayout"+i,function(k){if(d._windowDragged){k.preventDefault();var l=k.originalEvent.touches[0],j=a(document.elementFromPoint(l.pageX,l.pageY));h(j)}});d.addHandler(a(document),"touchend.jqxDockingLayout"+i,function(){if(f!==false){b(f);f=false}})}},_dropToEdge:function(c,d,u,w){var f=this,b=f.base,h=b.layout[0],m=f._getDraggedWindowInformation(),z=m.title,r=m.content,o=m.groupType,y=m.itemType,l=[],v,q;f._removeFloatGroupObject(f._draggedWindow.element.current);if(h.orientation===u){v={type:o,parent:h};v[w]=f._draggedWindow.element[w]();for(var t=0;t<z.length;t++){l.push({type:y,title:z[t],parent:v,prevent:true,selected:f._getFloatGroupItemSelection(t),detachedContent:r[t],docked:true})}v.items=l;q=h.items[d];f._setOptimalDimension(w,v,q);if(c==="left"||c==="top"){h.items.splice(d,0,v)}else{h.items.push(v)}}else{var x,e;if(w==="width"){x="height";e="minHeight"}else{x="width";e="minWidth"}var g={type:"layoutGroup",orientation:u,parent:h.parent,index:h.index};v={type:o,parent:g};for(var s=0;s<z.length;s++){l.push({type:y,title:z[s],parent:v,prevent:true,selected:f._getFloatGroupItemSelection(s),detachedContent:r[s],docked:true})}v.items=l;delete h[x];delete v[x];v[w]="50%";h[w]="50%";h.parent=g;if(c==="left"||c==="top"){g.items=[v,h]}else{g.items=[h,v]}b.layout[0]=g;q=h}b.render();var n=v.widget.find(".jqx-ribbon-content-section");for(var p=0;p<n.length;p++){a(n[p]).append(r[p])}f._clearTextSelection();b._raiseEvent("1",{item:q});f._raiseEvent("1",{position:c+"-edge",item:v});f._draggedWindow.element.remove();f._hideOverlays()},_showEdgeOverlays:function(){var h=this,c=h.base,l=c.host.width(),d=c.host.height(),k=c.host.offset(),b=a(),i=true,j=true,e=true,g=true;function f(o){if(!o.items||o.items.length===0){return}var m=o.orientation,p=o.items[0],n=o.items[o.items.length-1];if(m==="horizontal"){if(p.type==="autoHideGroup"){i=i&&false}else{if(p.type==="layoutGroup"){f(p)}}if(n.type==="autoHideGroup"){j=j&&false}else{if(n.type==="layoutGroup"){f(n)}}}else{if(m==="vertical"){if(p.type==="autoHideGroup"){e=e&&false}else{if(p.type==="layoutGroup"){f(p)}}if(n.type==="autoHideGroup"){g=g&&false}else{if(n.type==="layoutGroup"){f(n)}}}}}f(c.layout[0]);if(i){b=b.add(h._leftOverlay)}if(j){b=b.add(h._rightOverlay)}if(e){b=b.add(h._topOverlay)}if(g){b=b.add(h._bottomOverlay)}b.show();h._leftOverlay.offset({left:k.left+5,top:k.top+d/2-20});h._rightOverlay.offset({left:k.left+l-40,top:k.top+d/2-20});h._topOverlay.offset({left:k.left+l/2-20,top:k.top+5});h._bottomOverlay.offset({left:k.left+l/2-20,top:k.top+d-40})},_hideOverlays:function(){var b=this,c=b.base;b._windowDragged=false;if(b._oldIE===true){clearInterval(b._oldIEInterval)}if(c.resizable){setTimeout(function(){b.base._overlay[0].style.display="none"},0)}b._overlay.hide();b._edgeOverlays.hide();b._dropOverlay.hide()},_getDraggedWindowInformation:function(){var f=this,h=[],e=[],b,g;if(f._draggedWindow.fromPanel){h.push(f._draggedWindow.title);e.push(f._draggedWindow.element.find(".jqx-window-content").contents().detach())}else{for(var d=0;d<f._draggedWindow.element.current.items[0].items.length;d++){var c=f._draggedWindow.element.current.items[0].items[d];h.push(c.title);e.push(f._draggedWindow.element.find(".jqx-ribbon-content-section").eq(d).contents().detach())}}if(f._draggedWindow.fromGroup.type==="documentGroup"){b="documentGroup";g="documentPanel"}else{b="tabbedGroup";g="layoutPanel"}return{title:h,content:e,groupType:b,itemType:g}},_removeFloatGroupObject:function(c){var b=this.base;c.removed=true;b._updateLayout(b.layout)},_trackFloatGroups:function(){var f=this,g=f.base;for(var d=1;d<g.layout.length;d++){var b=g.layout[d];if(b.items[0].type==="tabbedGroup"){var c=b.items[0].widget,e={element:c,width:c.width(),height:c.height(),offset:c.offset(),settings:b.items[0]};b._overlayGroup=e;g._overlayGroups.push(e)}}},_updateOverlayGroup:function(c){if(c){var b=c.element;c.width=b.width();c.height=b.height();c.offset=b.offset();c.self=false}},_updateOverlayGroups:function(){var d=this.base._overlayGroups;for(var b=d.length-1;b>=0;b--){var c=d[b];if(c.removed===true){d.splice(b,1)}}},_clearTextSelection:function(){try{if(document.selection){document.selection.empty()}else{if(window.getSelection){if(window.getSelection().empty){window.getSelection().empty()}else{if(window.getSelection().removeAllRanges){window.getSelection().removeAllRanges()}}}}}catch(b){}}})})(jqxBaseFramework);