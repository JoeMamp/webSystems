$(document).ready(function() {
  $("#site").click(function() {
    $.getJSON("lab5.json", function(data) {
      $("#title").html(data[1].trackName);
      $("#artist").html(data[1].trackArtist);
      $("#album").html(data[1].trackAlbum);
      $("#date").html(data[1].trackRelease);
      var genres = "";
      for (var i = 0; i < data[1].genres.length; i++) {
        genres += "<li>" + data[1].genres[i].trackGenre + "</li>";
      }
      $("#genres").html(genres);
      $("#site").attr("href", data[1].site);
      $("#coverart").attr("src", data[1].image);
    });
  });
});