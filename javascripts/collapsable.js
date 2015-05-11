$(".telescope-menu-header").click(function () {

    $menu = $(this);
    //getting the next element
    $content = $menu.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        $menu.text(function () {});
    });

});