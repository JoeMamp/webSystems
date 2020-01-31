
$.fn.hexed = function() {
    $(this).load("sustenanceCenter-hexed.html",function(){
        $("#game").prepend("<style>html {background:blue;}</style>");
        $("#game style").load("sustenanceCenter-hexed.css");
        $.getScript("sustenanceCenter-hexed.js");
    });

};
