// Empty Function
function empty(data) {
    if (typeof(data) == 'number' || typeof(data) == 'boolean') {
        return false;
    }
    if (typeof(data) == 'undefined' || data === null) {
        return true;
    }
    if (typeof(data.length) != 'undefined') {
        return data.length == 0;
    }
    var count = 0;
    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count == 0;
}
// End of the empty function
// Sets Poly Backgrounds for some titles. Sets default if the section doesn't have a data-element
var poly = document.getElementsByClassName('break');
for (var i = poly.length - 1; i >= 0; i--) {
    var color = poly[i].dataset.color;
    if (empty(color)) {
        color = 'Blues';
    };
    var pattern = Trianglify({
        cell_size: 60,
        seed: null,
        x_colors: color,
        width: window.innerWidth,
        height: 800
    });
    poly[i]
    poly[i].style.backgroundImage = "url('" + pattern.canvas().toDataURL("image/png") + "')";
};
// jQuery(document).ready(function($) {
//     function open($image) {
//         $($image).addClass('abs-img');
//         $('body').addClass('fade');
//     }

//     function close() {
//         $('.break-box-img .abs-img').removeClass('abs-img');
//         $('body').removeClass('fade');
//     }
//     $('.break-box-img').on('click', 'img', function(event) {
//         $image = $(this);
//         open($image);
//     });
//     // $('body .fade').on('click', function(event) {
//     //     console.log('cats');
//     // });
//     $(document).keyup(function(e) {
//         if (e.keyCode == 27) {
//             close();
//         }
//     });
// });