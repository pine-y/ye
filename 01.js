//购物车
function navshoop() {
	var div=document.querySelector('.nav .div3');
	div.style.display='inline-block';
}
function navshoop1() {
	var div=document.querySelector('.nav .div3');
	div.style.display='none';
}
//头部导航
function hdli(a){
	var i=a.getAttribute('name');
	// console.log(i);
	var div=document.getElementById('hddiv'+i);
	div.style.display='block'
}
function hdli01(a){
	var i=a.getAttribute('name')
	var div=document.getElementById('hddiv'+i);
	div.style.display='none'
}
//导航 下滑
// function hdli(a){
// 	var i=a.getAttribute('name');
// 	console.log(i);
// 	var div=document.querySelectorAll('.hdpucss');
// 	div[i-1].style.height=230+'px';
// 	div[i-1].style.borderColor='#ddd';
// 	var div1=document.querySelectorAll(' .hdpubdiv');
// 	div1[i-1].firstChild.style.height=230+'px';
// }
// function hdli01(a){
// 	var i=a.getAttribute('name');
// 	console.log(i);
// 	var div=document.querySelectorAll('.hdpucss');
// 	div[i-1].style.height=0+'px';
// 	div[i-1].style.borderColor='transparent';
// 	var div1=document.querySelectorAll(' .hdpubdiv');
// 	div1[i-1].firstChild.style.height=0+'px';
// }
//搜索框
function input(){
	var div=document.getElementById('input');
	div.style.display='block';
	var div1=document.getElementById('hdlist');
	div1.style.display='block';
	var div2=document.querySelector('.heade .input');
	// console.log(div2);
	div2.style.borderColor='red';
}
function input1(){
	var e=window.event||arguments.callee.caller.arguments[0];//获得event对象  自动创建，封装事件属性的对象
	var src=e.srcElement||e.target;							 //获得目标对象
	if (src.id!="input1"&&src.id!='input') {
		var div=document.getElementById('input');
		div.style.display='none';
		var div1=document.getElementById('hdlist');
		div1.style.display='none';
		var div2=document.querySelector('.heade .input');
		console.log(div2);
		div2.style.borderColor='#a7aca8';	
	}
}
//主体上左侧导航
function mtjsli(a){
	var i=a.getAttribute('name');
	console.log(i);
	var div=document.getElementById('mtjsli'+i);
	div.style.display='block'
}
function mtjsli01(a){
	var i=a.getAttribute('name')
	var div=document.getElementById('mtjsli'+i);
	div.style.display='none'
}
//主题上轮播图
//按钮
function rotation(){
	var div=document.getElementById('mtjsimg');
	var j = div.getAttribute('src').slice(8,9);
	console.log(j);
	j++;
	if(j>=5){j=5;}
	div.setAttribute('src','images/s'+j+'.jpg');
	abcd(j);
	// var div2=document.querySelectorAll('.lunboli');
 // console.log(div2);
 // for(var k=0;k<div2.length;k++){
	//  	div2[k].style.background='white';
	//  }
	//  div2[5-j].style.background='red';
}
function rotation2(){
	var div=document.getElementById('mtjsimg');
	var j = div.getAttribute('src').slice(8,9);
	j--;
	if(j<=1){j=1;}
	div.setAttribute('src','images/s'+j+'.jpg');
	abcd(j);
	// var div2=document.querySelectorAll('.lunboli');
 // console.log(div2);
 // for(var k=0;k<div2.length;k++){
	//  	div2[k].style.background='white';
	//  }
	//  div2[5-j].style.background='red';	
}
//自动
function rotation3(){
	var div=document.getElementById('mtjsimg');
	var j = div.getAttribute('src').slice(8,9);
	// console.log(j);
	j++;
	if(j==6){j=1;}
	div.setAttribute('src','images/s'+j+'.jpg');
	abcd(j);
	// var div2=document.querySelectorAll('.lunboli');
 // // console.log(div2);
 // for(var k=0;k<div2.length;k++){
	//  	div2[k].style.background='white';
	//  }
	//  div2[5-j].style.background='red';
}
var timer=null;
var timer1=null;
window.onload=function(){
	timer=setInterval(rotation3,3000);
	timer1=setInterval(rototion6,4000);
	mbdapi1();
}
//圆点循环
function rotation0(a){
 	var i=a.getAttribute('name');
	var div=document.getElementById('mtjsimg');
	div.setAttribute('src','images/s'+i+'.jpg');
}
function rototion00(a){
	var i=a.getAttribute('name');
	console.log(i);
	abcd(i);
	// var div2=document.querySelectorAll('.lunboli');
	// // console.log(div2);
	// for(var j=0;j<div2.length;j++){
 // 	div2[j].style.background='white';
	// }
	// div2[5-i].style.background='red';
}

function abcd(d){
	var div2=document.querySelectorAll('.lunboli');
	// console.log(div2);
	for(var j=0;j<div2.length;j++){
 	div2[j].style.background='white';
	}
	div2[5-d].style.background='red';
}
//小米明星商品
function  rototion4(){
	var div=document.getElementById('mtjsul');
	// console.log(div);
	div.style.left=-1226+'px';
}
function  rototion5(){
	var div=document.getElementById('mtjsul');
	console.log(div);
	div.style.left=0+'px';
}
//自动小米明星商品
var x=1;
function  rototion6(){
	var div=document.getElementById('mtjsul');
	// console.log(x);
	div.style.left=-1226*x+'px';
	x++;
	var but=document.querySelectorAll('.button');
	for(var i=0;i<but.length;i++){
		but[i].style.background='#fff';
	}
	but[x-1].style.background='#ddd';
	
	if(x==2){
		x=0;
	}
}
//为你推荐
function  rototion7(){
	var div=document.getElementById('mbjsdiv');
	div.style.marginLeft=-1226+'px';
}
function  rototion8(){
	var div=document.getElementById('mbjsdiv');
	div.style.marginLeft=0+'px';
}
//搭配
// function mbdapei(a){
// 	var i=a.getAttribute('name');
// 	console.log(i);
// 	var div=document.getElementById('mbjsdiv2');
// 	div.style.left=(3-i)*-990+'px';
// 	 var div2=document.querySelectorAll('.pubblka');
// 	 console.log(div2);
// 	 console.log(div2[i]);
// 	 for(var j=0;j<div2.length;j++){
// 	 	div2[j].style.color='#333';
// 	 	div2[j].style.textDecoration='none';
// 	 }
// 	 div2[i].style.color='#ff6700';
// 	 div2[i].style.textDecoration='underline';
// 	}
function dhbiaoqian(a){
var i=a.getAttribute('name');
 var div2=document.querySelectorAll('.pubblka');
 for(var j=0;j<div2.length;j++){
	 	div2[j].style.color='#333';
	 	div2[j].style.textDecoration='none';
	 }
	 div2[i].style.color='#ff6700';
	 div2[i].style.textDecoration='underline';
}
//起始字体颜色
function mbdapi1(){
 var div2=document.querySelectorAll('.pubblka');
	 div2[3].style.color='#ff6700';
	 div2[3].style.textDecoration='underline';
	 div2[8].style.color='#ff6700';
	 div2[8].style.textDecoration='underline';
	 div2[12].style.color='#ff6700';
	 div2[12].style.textDecoration='underline';
}
function mbdapei(a){
	var i=a.getAttribute('name');
	// console.log(i);
	var div=document.getElementById('mbjsdiv2');
	div.style.left=(3-i)*-990+'px';
}
//按钮
function button(a){
	var j=a.getAttribute('name');
	var but=document.querySelectorAll('.button');
	for(var i=0;i<but.length;i++){
		but[i].style.background='#fff';
	}
	but[j].style.background='#ddd';
}
// var b=0;
// function but(){
// 	b--;
// 	if (b>=0) {
// 		hh();
// 	}
// 	else{
// 		b=0;
// 	}
// }
// function but1(){
// 	b++;
// 	if(b<=3){
// 		hh();
// 	}
// 	else{
// 		b=3;
// 	}
// }
// function hh(){
// 	var aa=document.getElementById('aaa');
// 	aa.style.left=b*-306+'px';
// }
// var d=0;
// function but2(){
// 	d--;
// 	if (d>=0) {
// 		dd();
// 	}
// 	else{
// 		d=0;
// 	}
// }
// function but3(){
// 	d++;
// 	if(d<=3){
// 		dd();
// 	}
// 	else{
// 		d=3;
// 	}
// }
// function dd(){
// 	var aa=document.getElementById('ddd');
// 	aa.style.left=d*-305+'px';
// }
// var f=0;
// function but4(){
// 	f--;
// 	if (f>=0) {
// 		ff();
// 	}
// 	else{
// 		f=0;
// 	}
// }
// function but5(){
// 	f++;
// 	if(f<=3){
// 		ff();
// 	}
// 	else{
// 		f=3;
// 	}
// }
// function ff(){
// 	var aa=document.getElementById('fff');
// 	aa.style.left=f*-304+'px';
// }
// var g=0;
// function but6(){
// 	g--;
// 	if (g>=0) {
// 		gg();
// 	}
// 	else{
// 		g=0;
// 	}
// }
// function but7(){
// 	g++;
// 	if(g<=3){
// 		gg();
// 	}
// 	else{
// 		g=3;
// 	}
// }
// function gg(){
// 	var aa=document.getElementById('ggg');
// 	aa.style.left=g*-304+'px';
// }
function but1(a){	
	var ii=a.getAttribute('name');
	var hhhh=document.getElementById('a'+ii);
    var g=hhhh.style.left;
	console.log(g);
	var p=-parseInt(g)/306;
	console.log(p);
	if (isNaN(p)) {
		p=0;
	}
	p++;
	if(p<=3){
		hhhh.style.left=p*-306+'px';
	}
	else{
		p=3;
	}
}
function but(a){
	var ii=a.getAttribute('name');
	var hhhh=document.getElementById('a'+ii);
	var g=hhhh.style.left;
	var t=-parseInt(g)/306;
	t--;
	if(t>=0){
		hhhh.style.left=t*-306+'px';
	}
	else{
		t=0;
	}
}