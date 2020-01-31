$(document).ready(function() {
  $.getJSON("lab10.json", function(data) {
    var lecList = "";
    for (var i = 0; i < data.websys_course[0].lectures.length; i++) {
      var lecNum = Object.keys(data.websys_course[0].lectures[i])[0];
      lecList += '<li id="Lecture ' + (i+1).toString() + '">' + lecNum + "</li>";
    }
    $("#lecList").html(lecList);
    var labList = "";
    for (var i = 0; i < data.websys_course[1].labs.length; i++) {
      var labNum = Object.keys(data.websys_course[1].labs[i])[0];
      labList += '<li id="Lab ' + (i+1).toString() + '">' + labNum + "</li>";
    }
    $("#labList").html(labList);
    $("#lecList").click(function() {
      var lecArray = data.websys_course[0].lectures;
      for (var i = 0; i < lecArray.length; i++) {
        var curr = Object.keys(lecArray[i])[0];
        if (curr == $(event.target).attr("id")) {
          $("#title").html(lecArray[i][curr][0].title);
          $("#description").html(lecArray[i][curr][0].description);
          $("#link").html('<a href="' + lecArray[i][curr][0].slides + '">Link to Slides</a>');
        }
      }
    });
    $("#labList").click(function() {
      var labArray = data.websys_course[1].labs;
      for (var i = 0; i < labArray.length; i++) {
        var curr = Object.keys(labArray[i])[0];
        if (curr == $(event.target).attr("id")) {
          $("#title").html(labArray[i][curr][0].title);
          $("#description").html(labArray[i][curr][0].description);
          $("#link").html('<a href="' + labArray[i][curr][0].info + '">Link to Instructions</a>');
        }
      }
    });
  });

  $("#refresh").click(function() {
    var emptyList = "";
    $("#lecList").html(emptyList);
    $("#labList").html(emptyList);
    $.getJSON("lab10.json", function(data) {
      var lecList = "";
      for (var i = 0; i < data.websys_course[0].lectures.length; i++) {
        var lecNum = Object.keys(data.websys_course[0].lectures[i])[0];
        lecList += '<li id="Lecture ' + (i+1).toString() + '">' + lecNum + "</li>";
      }
      $("#lecList").html(lecList);
      var labList = "";
      for (var i = 0; i < data.websys_course[1].labs.length; i++) {
        var labNum = Object.keys(data.websys_course[1].labs[i])[0];
        labList += '<li id="Lab ' + (i+1).toString() + '">' + labNum + "</li>";
      }
      $("#labList").html(labList);
    });
  });

});