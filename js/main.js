$(document).ready(function($) {
    

$('.show_block').each(function(){
    var totalHeight = getTotalHeigh($(this));
    if (totalHeight > 40)
    {
        $(this)
        .css({'border-bottom': '3px #50c3af solid'})
        .mouseover(function(){
            var tH = getTotalHeigh($(this));
            $(this).animate({
                'height': tH,
                'borderBottomWidth': '0px'
            }, 1000);
        })
        .mouseleave(function(){
            var tH = getTotalHeigh($(this));
            $(this).animate({
                'borderBottomWidth': '1px',
                'height': 40
            }, 1000);
        });
    }
});

function getTotalHeigh(obj)
{
    var totalHeight = 0;
    obj.children().each(function () {
        totalHeight += $(this).height();
    });
    return totalHeight;
}


});













// // div {
// //     width: 50px;
// //     height: 40px;
// //     overflow: hidden;
// //     text-overflow: clip;
// // }



