// 轮播图开始
   var left = $('.banner .btnLeft');//获取左点击
 var right = $('.banner .btnRight');//获取右点击
 var aSmall = $('.banner .focusList li');
 var aLi = $('.banner .bannerInner div');
 var iNow = 0;
   // 左点击
left.click(function () {
 iNow--;
 // 判断回流
 if (iNow < 0) {
 iNow = 1;
 }
 aLi.eq(iNow).siblings().stop().animate({
 opacity: 0

 }, 800);
 aLi.eq(iNow).stop().animate({
 opacity: 1

 }, 800);
 aSmall.eq(iNow).addClass('bg').siblings().removeClass('bg');
 });

// 右点击切换
right.click(function () {
 iNow++;
 if (iNow > aLi.length - 1) {
 iNow = 0;
 }
 aLi.eq(iNow).siblings().stop().animate({
 opacity: 0

 }, 800);
 aLi.eq(iNow).stop().animate({
 opacity: 1

 }, 800);
 aSmall.eq(iNow).addClass('bg').siblings().removeClass('bg');

 });

//手动切换
aSmall.click(function () {
 var n = $(this).index();
 //        var iNow = $(this).index();
 //        alert(iNow);
 iNow = n;
 aLi.eq(iNow).siblings().stop().animate({
 opacity: 0

 }, 800);
 aLi.eq(iNow).stop().animate({
 opacity: 1

 }, 800);
 aSmall.eq(iNow).addClass('bg').siblings().removeClass('bg');

 });
// 封装函数体
function move1() {
 aLi.eq(iNow).siblings().stop().animate({
 opacity: 0
 }, 800);
 aLi.eq(iNow).stop().animate({
 opacity: 1
 }, 800);
 aSmall.eq(iNow).addClass('bg').siblings().removeClass('bg');
 }
// 定个定时器的初始值

function run2() {
 iNow++;
 if (iNow > aLi.length - 1) {
 iNow = 0;
 }
 move1();
 }
// 定时器
timer = setInterval(run2, 5000);

