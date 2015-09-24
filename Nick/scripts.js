// array full of objects
jQuery(document).ready(function($) {
    var tricks = [];

    $("#go").click(function() {
        doIt();

        console.log(JSON.stringify(tricks));
    });

    function doIt() {
        var trick = {};
        var inputs = document.getElementsByTagName("input");

        $(inputs).each(function(index, value) {
            var key = $(this).attr("data");
            trick[key] = $("[data='" + key + "']").val();
        });

        tricks.push(trick);
    }
})
