(function ($) {
    $(function () {

        $('ul.rooms__ul').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.rooms').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);