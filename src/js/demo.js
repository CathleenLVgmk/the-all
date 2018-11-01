var Bscroll = new BScroll('.h_b', {
    scrollX: true,
    scrollY: false,
    probeType: 2,
    click: true
});
$('.h_b ul').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
})