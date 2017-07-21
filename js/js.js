/**
 * (●'◡'●)Created by QinJiawei on 2017/7/11.
 */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    autoplay: 2000,     //可选选项，自动滑动
    loop: true,         //无限循环
    speed: 1000,          //滑动速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
    // 如果需要分页器
    pagination: '.swiper-pagination',
    autoplayDisableOnInteraction:false,
    paginationClickable:true
});