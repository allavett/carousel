/**
 * Created by Allar on 26.06.2014.
 */

var speed = 4000;
run = setInterval("switchSlide()", speed);

$(document).ready(function() {
    $('#carousel div:gt(0)').hide();
});

function switchSlide()
{
    $('#carousel div:first').fadeOut(1000).next().show().end().appendTo('#carousel');
}
