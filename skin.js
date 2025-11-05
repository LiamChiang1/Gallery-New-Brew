// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: ????.ggsk
// Generated 2025-11-05T16:56:21

function pano2vrSkin(player,base) {
	player.addVariable('gallery_show_hide', 2, true, { ignoreInState: 0  });
	player.addVariable('gallery_pictures', 1, 0, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0.16%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.logicBlock_visible();
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint);
		el=me._gallery_picture=document.createElement('div');
		els=me._gallery_picture__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._gallery_picture.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._gallery_picture.ggSubElement.setAttribute('alt', player._(me._gallery_picture.ggAltText));
			me._gallery_picture.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._gallery_picture.ggText_untranslated = img;
			me._gallery_picture.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._gallery_picture.ggSubElement.style.width = '0px';
			me._gallery_picture.ggSubElement.style.height = '0px';
			me._gallery_picture.ggSubElement.src='';
			me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._gallery_picture.ggText != player._(me._gallery_picture.ggText_untranslated)) {
				me._gallery_picture.ggText = player._(me._gallery_picture.ggText_untranslated);
				me._gallery_picture.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="gallery_picture";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 98.75%;';
		hs+='left : 0.47%;';
		hs+='position : absolute;';
		hs+='top : 0.21%;';
		hs+='visibility : hidden;';
		hs+='width : 99.375%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_picture.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_picture.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery_picture.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery_picture.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery_picture.style.transition='';
				if (me._gallery_picture.ggCurrentLogicStateVisible == 0) {
					me._gallery_picture.style.visibility=(Number(me._gallery_picture.style.opacity)>0||!me._gallery_picture.style.opacity)?'inherit':'hidden';
					me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
					me._gallery_picture.ggVisible=true;
				}
				else {
					me._gallery_picture.style.visibility="hidden";
					me._gallery_picture.ggSubElement.src='';
					me._gallery_picture.ggVisible=false;
				}
			}
		}
		me._gallery_picture.logicBlock_visible();
		me._gallery_picture.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_pictures') == Number("0")))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("1")))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("2")))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("3")))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("4")))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("5")))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("6")))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("7")))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("8")))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("9")))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("10")))
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("11")))
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("12")))
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("13")))
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("14")))
			)
			{
				newLogicStateExternalUrl = 14;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("15")))
			)
			{
				newLogicStateExternalUrl = 15;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("16")))
			)
			{
				newLogicStateExternalUrl = 16;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("17")))
			)
			{
				newLogicStateExternalUrl = 17;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("18")))
			)
			{
				newLogicStateExternalUrl = 18;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("19")))
			)
			{
				newLogicStateExternalUrl = 19;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("20")))
			)
			{
				newLogicStateExternalUrl = 20;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("21")))
			)
			{
				newLogicStateExternalUrl = 21;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("22")))
			)
			{
				newLogicStateExternalUrl = 22;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture.style.transition='';
				if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture.ggSetImage("gallery/門口照片1.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture.ggSetImage("gallery/門口照片2.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture.ggSetImage("gallery/門口照片3.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture.ggSetImage("gallery/門口照片4.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture.ggSetImage("gallery/門口照片5、6.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture.ggSetImage("gallery/門口照片7.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture.ggSetImage("gallery/門口照片8.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture.ggSetImage("gallery/門口照片9.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture.ggSetImage("gallery/門口照片10.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture.ggSetImage("gallery/門口照片11.jpg");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture.ggSetImage("gallery/門口照片12.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture.ggSetImage("gallery/門口照片13.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture.ggSetImage("gallery/門口照片14.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture.ggSetImage("gallery/門口照片15.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 14) {
					me._gallery_picture.ggSetImage("gallery/門口照片16.jpg");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 15) {
					me._gallery_picture.ggSetImage("gallery/門口照片17.jpg");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 16) {
					me._gallery_picture.ggSetImage("gallery/門口照片18.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 17) {
					me._gallery_picture.ggSetImage("gallery/門口照片19.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 18) {
					me._gallery_picture.ggSetImage("gallery/門口照片20.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 19) {
					me._gallery_picture.ggSetImage("gallery/門口照片21.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 20) {
					me._gallery_picture.ggSetImage("gallery/門口照片22.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 21) {
					me._gallery_picture.ggSetImage("gallery/門口照片23.png");
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 22) {
					me._gallery_picture.ggSetImage("gallery/門口照片24.jpg");
				}
				else {
					me._gallery_picture.ggSetImage("");
				}
			}
		}
		me._gallery_picture.logicBlock_externalurl();
		me._gallery_picture.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture.clientWidth;
			var parentHeight = me._gallery_picture.clientHeight;
			var img = me._gallery_picture__img;
			var aspectRatioDiv = me._gallery_picture.clientWidth / me._gallery_picture.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._gallery_picture.ggScrollbars || currentWidth < me._gallery_picture.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._gallery_picture.scrollLeft=currentWidth / 2 - me._gallery_picture.clientWidth / 2;
			}
			if (!me._gallery_picture.ggScrollbars || currentHeight < me._gallery_picture.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._gallery_picture.scrollTop=currentHeight / 2 - me._gallery_picture.clientHeight / 2;
			}
		}
		me.divSkin.appendChild(me._gallery_picture);
		el=me._gallery_controler=document.createElement('div');
		el.ggId="gallery_controler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 7px;';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_controler.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_controler.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery_controler.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery_controler.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery_controler.style.transition='';
				if (me._gallery_controler.ggCurrentLogicStateVisible == 0) {
					me._gallery_controler.style.visibility=(Number(me._gallery_controler.style.opacity)>0||!me._gallery_controler.style.opacity)?'inherit':'hidden';
					me._gallery_controler.ggVisible=true;
				}
				else {
					me._gallery_controler.style.visibility="hidden";
					me._gallery_controler.ggVisible=false;
				}
			}
		}
		me._gallery_controler.logicBlock_visible();
		me._gallery_controler.ggUpdatePosition=function (useTransition) {
		}
		el=me._gallery_timer=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=0;
		el.ggId="gallery_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_timer.ggIsActive=function() {
			return (me._gallery_timer.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._gallery_timer.ggTimestamp) / me._gallery_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_timer.ggActivate=function () {
			me._gallery_forward.onclick.call(me._gallery_forward);
		}
		me._gallery_timer.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_timer);
		el=me._gallery_fx=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=0;
		el.ggId="gallery_fx";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_fx.ggIsActive=function() {
			return (me._gallery_fx.ggTimestamp + me._gallery_fx.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_fx.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._gallery_picture.style.transition='none';
			} else {
				me._gallery_picture.style.transition='all 500ms ease-out 0ms';
			}
			me._gallery_picture.style.opacity='0';
			me._gallery_picture.style.visibility='hidden';
			me._gallery_picture.ggSubElement.src='';
		}
		me._gallery_fx.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._gallery_picture.style.transition='none';
			} else {
				me._gallery_picture.style.transition='all 500ms ease-out 0ms';
			}
			me._gallery_picture.style.opacity='1';
			me._gallery_picture.style.visibility=me._gallery_picture.ggVisible?'inherit':'hidden';
			me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
		}
		me._gallery_fx.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_fx);
		el=me._gallery_picture_preload=document.createElement('div');
		els=me._gallery_picture_preload__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._gallery_picture_preload.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._gallery_picture_preload.ggSubElement.setAttribute('alt', player._(me._gallery_picture_preload.ggAltText));
			me._gallery_picture_preload.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._gallery_picture_preload.ggText_untranslated = img;
			me._gallery_picture_preload.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._gallery_picture_preload.ggSubElement.style.width = '0px';
			me._gallery_picture_preload.ggSubElement.style.height = '0px';
			me._gallery_picture_preload.ggSubElement.src='';
			me._gallery_picture_preload.ggSubElement.src=me._gallery_picture_preload.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._gallery_picture_preload.ggText != player._(me._gallery_picture_preload.ggText_untranslated)) {
				me._gallery_picture_preload.ggText = player._(me._gallery_picture_preload.ggText_untranslated);
				me._gallery_picture_preload.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="gallery_picture_preload";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._gallery_picture_preload.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_picture_preload.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_pictures') == Number("0")))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("1")))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("2")))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("3")))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("4")))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("5")))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("6")))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("7")))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("8")))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("9")))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("10")))
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("11")))
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("12")))
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("13")))
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("14")))
			)
			{
				newLogicStateExternalUrl = 14;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("15")))
			)
			{
				newLogicStateExternalUrl = 15;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("16")))
			)
			{
				newLogicStateExternalUrl = 16;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("17")))
			)
			{
				newLogicStateExternalUrl = 17;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("18")))
			)
			{
				newLogicStateExternalUrl = 18;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("19")))
			)
			{
				newLogicStateExternalUrl = 19;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("20")))
			)
			{
				newLogicStateExternalUrl = 20;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("21")))
			)
			{
				newLogicStateExternalUrl = 21;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("22")))
			)
			{
				newLogicStateExternalUrl = 22;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("23")))
			)
			{
				newLogicStateExternalUrl = 23;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload.style.transition='';
				if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片1.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片2.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片3.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片4.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片5、6.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片7.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片7.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片8.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片9.jpg");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片10.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片11.jpg");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片12.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片13.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片14.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 14) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片15.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 15) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片16.jpg");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 16) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片17.jpg");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 17) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片18.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 18) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片19.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 19) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片20.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 20) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片21.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 21) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片22.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 22) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片23.png");
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 23) {
					me._gallery_picture_preload.ggSetImage("gallery/門口照片24.jpg");
				}
				else {
					me._gallery_picture_preload.ggSetImage("");
				}
			}
		}
		me._gallery_picture_preload.logicBlock_externalurl();
		me._gallery_picture_preload.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload.clientWidth;
			var parentHeight = me._gallery_picture_preload.clientHeight;
			var img = me._gallery_picture_preload__img;
			var aspectRatioDiv = me._gallery_picture_preload.clientWidth / me._gallery_picture_preload.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._gallery_picture_preload.ggScrollbars || currentWidth < me._gallery_picture_preload.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._gallery_picture_preload.ggScrollbars || currentHeight < me._gallery_picture_preload.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._gallery_controler.appendChild(me._gallery_picture_preload);
		el=me._gallery_pause=document.createElement('div');
		els=me._gallery_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTc3LjcsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM2gtMTQuM2MtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNmMwLTEuMywxLTIuMywyLjMtMi4zaDE0LjMgICBjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3LjcsNDE2LjMtMTc3LjcsNDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4z'+
			'LDIuM0gtMTcwYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42ICAgYzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiAgICBDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiLz4KICAgPHBhdGggZmlsbD0iI0'+
			'ZGRkZGRiIgZD0iTS0xNTUuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYgICAgQy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._gallery_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gallery_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzgsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0xNS45Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjkgICBjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNzgsMzc1LjUtMTc4LDQxOC40LTE3OCw0MTguNHogTS0xNTEsNDE4LjRjMCwxLjQtMS4x'+
			'LDIuNi0yLjYsMi42aC0xNS45ICAgYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjljMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNTEsMzc1LjUtMTUxLDQxOC40LTE1MSw0MTguNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODAuNSwzNzNoLTE1LjljLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY0Mi45YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxNS45YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNDIuOSAgICBDLTE3OCwzNzQuMS0xNzkuMSwzNzMtMTgwLjUsMzczeiIvPgogICA8cG'+
			'F0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45ICAgIEMtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gallery_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gallery_pause";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pause.onclick=function (e) {
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=skin.ggCurrentTime;
			me._gallery_pause.style.transition='none';
			me._gallery_pause.style.visibility='hidden';
			me._gallery_pause.ggVisible=false;
			me._gallery_play.style.transition='none';
			me._gallery_play.style.visibility=(Number(me._gallery_play.style.opacity)>0||!me._gallery_play.style.opacity)?'inherit':'hidden';
			me._gallery_play.ggVisible=true;
		}
		me._gallery_pause.onmouseenter=function (e) {
			me._gallery_pause__img.style.visibility='hidden';
			me._gallery_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['gallery_pause']=true;
		}
		me._gallery_pause.onmouseleave=function (e) {
			me._gallery_pause__img.style.visibility='inherit';
			me._gallery_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['gallery_pause']=false;
		}
		me._gallery_pause.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_pause);
		el=me._gallery_play=document.createElement('div');
		els=me._gallery_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTUwLjUsMzk4LjZsLTM4LjEsMjYuNmMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjJWMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42ICAgQy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5'+
			'MSwzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjZjMS4zLDAuOSwxLjMsMi4zLDAsMy4ybC0zOC4yLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._gallery_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gallery_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDcuOCwzOTguOGwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjYgICBDLTE0Ni40LDM5Ni4yLTE0Ni40LDM5Ny44LTE0Ny44LDM5OC44eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYi'+
			'IGQ9Ik0tMTkyLjgsMzY3YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjZjMS40LDEsMS40LDIuNiwwLDMuNmwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._gallery_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gallery_play";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_play.onclick=function (e) {
			me._gallery_timer.ggTimeout=Number("2") * 1000.0;
			me._gallery_timer.ggTimestamp=skin.ggCurrentTime;
			me._gallery_play.style.transition='none';
			me._gallery_play.style.visibility='hidden';
			me._gallery_play.ggVisible=false;
			me._gallery_pause.style.transition='none';
			me._gallery_pause.style.visibility=(Number(me._gallery_pause.style.opacity)>0||!me._gallery_pause.style.opacity)?'inherit':'hidden';
			me._gallery_pause.ggVisible=true;
		}
		me._gallery_play.onmouseenter=function (e) {
			me._gallery_play__img.style.visibility='hidden';
			me._gallery_play__imgo.style.visibility='inherit';
			me.elementMouseOver['gallery_play']=true;
		}
		me._gallery_play.onmouseleave=function (e) {
			me._gallery_play__img.style.visibility='inherit';
			me._gallery_play__imgo.style.visibility='hidden';
			me.elementMouseOver['gallery_play']=false;
		}
		me._gallery_play.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_play);
		el=me._gallery_forward=document.createElement('div');
		els=me._gallery_forward__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTQ5LDM5OC4xbC0zMC4xLDMwLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTcuNy0xNy43ICAgbC0xNy43LTE3LjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxMS4zLTExLjNjMC42LTAuNiwxLjYtMC42LDIuMiwwbDMwLjEsMzBjMC4zLDAuMywwLjQsMC43'+
			'LDAuNCwxLjEgICBDLTE0OC41LDM5Ny40LTE0OC42LDM5Ny44LTE0OSwzOTguMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi41LDM3OS4zbDE3LjcsMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMTEuMywxMS4zYzAuNiwwLjYsMS42LDAuNiwyLjIsMGwzMC4xLTMwLjEgICBjMC4zLTAuMywwLjUtMC43LDAuNC0xLjFjMC0wLjQtMC4xLTAuOC0wLjQtMS4xbC0zMC4xLTMwYy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTExLjMsMTEuM0MtMTkzLjEsMzc3LjctMTkzLjEsMzc4LjctMTkyLjUsMzc5LjMgICB6Ii8+Ci'+
			'A8L2c+Cjwvc3ZnPgo=';
		me._gallery_forward__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gallery_forward__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDYuMSwzOTguMmwtMzMuNSwzMy40Yy0wLjcsMC43LTEuNywwLjctMi40LDBsLTEyLjUtMTIuNWMtMC43LTAuNy0wLjctMS43LDAtMi40ICAgbDE5LjctMTkuN2wtMTkuNy0xOS43Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwzMy41LDMzLjRjMC4z'+
			'LDAuMywwLjUsMC44LDAuNSwxLjIgICBDLTE0NS42LDM5Ny40LTE0NS43LDM5Ny45LTE0Ni4xLDM5OC4yeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk0LjQsMzc3LjNsMTkuNywxOS43bC0xOS43LDE5LjdjLTAuNywwLjctMC43LDEuNywwLDIuNGwxMi41LDEyLjVjMC43LDAuNywxLjcsMC43LDIuNCwwbDMzLjUtMzMuNCAgIGMwLjMtMC4zLDAuNS0wLjgsMC41LTEuM2MwLTAuNC0wLjItMC45LTAuNS0xLjJsLTMzLjUtMzMuNGMtMC43LTAuNy0xLjctMC43LTIuNCwwbC0xMi41LDEyLjUgICBDLTE5NS4xLDM3NS42LTE5NS4xLDM3Ni42LT'+
			'E5NC40LDM3Ny4zeiIvPgogPC9nPgo8L3N2Zz4K';
		me._gallery_forward__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gallery_forward";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_forward.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_forward.onclick=function (e) {
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') + Number("1"));
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') % Number("23.00"));
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=skin.ggCurrentTime;
		}
		me._gallery_forward.onmouseenter=function (e) {
			me._gallery_forward__img.style.visibility='hidden';
			me._gallery_forward__imgo.style.visibility='inherit';
			me.elementMouseOver['gallery_forward']=true;
		}
		me._gallery_forward.onmouseleave=function (e) {
			me._gallery_forward__img.style.visibility='inherit';
			me._gallery_forward__imgo.style.visibility='hidden';
			me.elementMouseOver['gallery_forward']=false;
		}
		me._gallery_forward.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_forward);
		el=me._gallery_back=document.createElement('div');
		els=me._gallery_back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjhjLTMxLDAtNTYuMiwyNS4xLTU2LjIsNTYuMnMyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjIgICBDLTExOC44LDM2Ni0xNDQsMzQwLjgtMTc1LDM0MC44eiBNLTE1Ny41LDQxNi45bC0xMS4zLDExLjNjLTAuNiwwLjYtMS41LDAuNi0yLjIsMGwtMzAuMi0zMC4xYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuMSAgIGMwLTAuNSwwLjEtMC44LDAuNC0xLjJsMzAuMi0zMC4xYzAuNi0wLjYsMS41LTAuNiwyLjIsMGwxMS4zLDExLjNjMC42LDAuNiwwLjYsMS41LDAsMi4ybC0xNy43LDE3LjdsMTcu'+
			'NywxNy43ICAgQy0xNTYuOSw0MTUuNC0xNTYuOSw0MTYuMy0xNTcuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny41LDQxNC43bC0xNy43LTE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMC42LTEuNSwwLTIuMmwtMTEuMy0xMS4zYy0wLjYtMC42LTEuNS0wLjYtMi4yLDBsLTMwLjIsMzAuMSAgIGMtMC4zLDAuMy0wLjQsMC43LTAuNCwxLjJjMCwwLjQsMC4yLDAuOCwwLjQsMS4xbDMwLjIsMzAuMWMwLjYsMC42LDEuNSwwLjYsMi4yLDBsMTEuMy0xMS4zQy0xNTYuOSw0MTYuMy0xNTYuOSw0MTUuNC0xNTcuNSw0MTQuNyAgIHoiLz'+
			'4KIDwvZz4KPC9zdmc+Cg==';
		me._gallery_back__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gallery_back__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCAgIEMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE1NS42LDQxOS4xbC0xMi41LDEyLjVjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMzMuNS0zMy40Yy0wLjMtMC4zLTAuNS0wLjgtMC41LTEuMiAgIGMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMzMuNS0zMy40YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjVjMC43LDAuNywwLjcsMS43LDAsMi40bC0xOS43LDE5'+
			'LjdsMTkuNywxOS43ICAgQy0xNTQuOSw0MTcuNC0xNTQuOSw0MTguNC0xNTUuNiw0MTkuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS42LDQxNi43bC0xOS43LTE5LjdsMTkuNy0xOS43YzAuNy0wLjcsMC43LTEuNywwLTIuNGwtMTIuNS0xMi41Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTMzLjUsMzMuNCAgIGMtMC4zLDAuMy0wLjUsMC44LTAuNSwxLjNjMCwwLjQsMC4yLDAuOSwwLjUsMS4ybDMzLjUsMzMuNGMwLjcsMC43LDEuNywwLjcsMi40LDBsMTIuNS0xMi41Qy0xNTQuOSw0MTguNC0xNTQuOSw0MTcuNC0xNTUuNiw0MTYuNy'+
			'AgIHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._gallery_back__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gallery_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_back.onclick=function (e) {
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') + Number("22.00"));
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') % Number("23.00"));
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=skin.ggCurrentTime;
		}
		me._gallery_back.onmouseenter=function (e) {
			me._gallery_back__img.style.visibility='hidden';
			me._gallery_back__imgo.style.visibility='inherit';
			me.elementMouseOver['gallery_back']=true;
		}
		me._gallery_back.onmouseleave=function (e) {
			me._gallery_back__img.style.visibility='inherit';
			me._gallery_back__imgo.style.visibility='hidden';
			me.elementMouseOver['gallery_back']=false;
		}
		me._gallery_back.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_back);
		el=me._gallery_counter_total=document.createElement('div');
		els=me._gallery_counter_total__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_counter_total";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._gallery_counter_total.ggUpdateText=function() {
			var params = [];
			var hs = player._("\/ 23", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery_counter_total.ggUpdateText();
		el.appendChild(els);
		me._gallery_counter_total.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_counter_total.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_counter_total);
		el=me._gallery_counter=document.createElement('div');
		els=me._gallery_counter__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_counter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._gallery_counter.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery_counter.ggUpdateText();
		el.appendChild(els);
		me._gallery_counter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_counter.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('gallery_pictures') == Number("0")))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("1")))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("2")))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("3")))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("4")))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("5")))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("6")))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("7")))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("8")))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("9")))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("10")))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("11")))
			)
			{
				newLogicStateText = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("12")))
			)
			{
				newLogicStateText = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("13")))
			)
			{
				newLogicStateText = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("14")))
			)
			{
				newLogicStateText = 14;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("15")))
			)
			{
				newLogicStateText = 15;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("16")))
			)
			{
				newLogicStateText = 16;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("17")))
			)
			{
				newLogicStateText = 17;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("18")))
			)
			{
				newLogicStateText = 18;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("19")))
			)
			{
				newLogicStateText = 19;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("20")))
			)
			{
				newLogicStateText = 20;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("21")))
			)
			{
				newLogicStateText = 21;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("22")))
			)
			{
				newLogicStateText = 22;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter.style.transition='';
				if (me._gallery_counter.ggCurrentLogicStateText == 0) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 1) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("2", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 2) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("3", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 3) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 4) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("5", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 5) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("6", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 6) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("7", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 7) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("8", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 8) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("9", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 9) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("10", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 10) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("11", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 11) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("12", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 12) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("13", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 13) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("14", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 14) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("15", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 15) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("16", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 16) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("17", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 17) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("18", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 18) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("19", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 19) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("20", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 20) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("21", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 21) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("22", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 22) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("23", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
			}
		}
		me._gallery_counter.logicBlock_text();
		me._gallery_counter.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_counter);
		me.divSkin.appendChild(me._gallery_controler);
		me._screen_tint.logicBlock_visible();
		me._gallery_picture.logicBlock_visible();
		me._gallery_picture.logicBlock_externalurl();
		me._gallery_controler.logicBlock_visible();
		me._gallery_picture_preload.logicBlock_externalurl();
		me.elementMouseOver['gallery_pause']=false;
		me.elementMouseOver['gallery_play']=false;
		me.elementMouseOver['gallery_forward']=false;
		me.elementMouseOver['gallery_back']=false;
		me._gallery_counter.logicBlock_text();
		player.addListener('changenode', function(event) {
			me._screen_tint.logicBlock_visible();
			me._gallery_picture.logicBlock_visible();
			me._gallery_picture.logicBlock_externalurl();
			me._gallery_controler.logicBlock_visible();
			me._gallery_picture_preload.logicBlock_externalurl();
			me._gallery_counter.logicBlock_text();
		});
		player.addListener('configloaded', function(event) {
			me._screen_tint.logicBlock_visible();
			me._gallery_picture.logicBlock_visible();
			me._gallery_picture.logicBlock_externalurl();
			me._gallery_controler.logicBlock_visible();
			me._gallery_picture_preload.logicBlock_externalurl();
			me._gallery_counter.logicBlock_text();
		});
		player.addListener('varchanged_gallery_pictures', function(event) {
			me._gallery_picture.logicBlock_externalurl();
			me._gallery_picture_preload.logicBlock_externalurl();
			me._gallery_counter.logicBlock_text();
		});
		player.addListener('varchanged_gallery_show_hide', function(event) {
			me._screen_tint.logicBlock_visible();
			me._gallery_picture.logicBlock_visible();
			me._gallery_controler.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		if (me._gallery_timer.ggLastIsActive!=me._gallery_timer.ggIsActive()) {
			me._gallery_timer.ggLastIsActive=me._gallery_timer.ggIsActive();
			if (me._gallery_timer.ggLastIsActive) {
				me._gallery_forward.onclick.call(me._gallery_forward);
			} else {
			}
		}
		if (me._gallery_fx.ggLastIsActive!=me._gallery_fx.ggIsActive()) {
			me._gallery_fx.ggLastIsActive=me._gallery_fx.ggIsActive();
			if (me._gallery_fx.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._gallery_picture.style.transition='none';
				} else {
					me._gallery_picture.style.transition='all 500ms ease-out 0ms';
				}
				me._gallery_picture.style.opacity='0';
				me._gallery_picture.style.visibility='hidden';
				me._gallery_picture.ggSubElement.src='';
			} else {
				if (player.transitionsDisabled) {
					me._gallery_picture.style.transition='none';
				} else {
					me._gallery_picture.style.transition='all 500ms ease-out 0ms';
				}
				me._gallery_picture.style.opacity='1';
				me._gallery_picture.style.visibility=me._gallery_picture.ggVisible?'inherit':'hidden';
				me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};