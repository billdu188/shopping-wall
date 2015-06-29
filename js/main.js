// JavaScript Document

//如何在一个网站去书写你的js代码：
//1，js的分层处理（功能）：jquery(tools)底层类库  组件（ui）   应用（app）  mvc
//2，js的规划（管理）：避免全局变量和方法（命名空间，闭包，面向对象）， 模块化（seajs，requirejs）


window.onload = function() {
	mv.app.toTip();
};

var mv = {};   //命名空间

mv.tools = {};

mv.ui = {};

mv.ui.textChange = function(obj,str) {
	obj.onfocus = function(){
		if(this.value == str){
			this.value = '';
		}
	};
	
	obj.onblur = function(){
		if(this.value == ''){
			this.value = str;
		}
	};
};

mv.app = {};

mv.app.toTip = function() {
	var oText1 = document.getElementById('text1');
	var oText2 = document.getElementById('text2');
	
	mv.ui.textChange(oText1, 'Search website');
	mv.ui.textChange(oText2, 'Search website');
};