$( document ).ready(function(){
    samer();
    $(window).resize(function (){
        // $(".case-inner").height($(".case-img").height + $("h3".height) + $("h4".height) + $(".case-inner span".height));
        // $(".case").height($(".case-inner").height);
        samer();
    });
});

function samer(){
    var heights = $(".same").map(function() {
        return $(this).height();
    }).get();

    maxHeight = Math.max.apply(null, heights);

    $(".same").height(maxHeight);
};