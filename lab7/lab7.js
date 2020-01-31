$(document).ready(function(){for(var i=0;i<5000;i++)$("ul#foo").append("<li>This is an item in the list. Click to make me disappear.</li>");$("ul").click(function(){$(event.target).hide(400)}),$("#showall").click(function(i){$("li").each(function(){$(this).show(400)})})});
// $(document).ready(function() {
//   for (var i = 0; i < 5000; i++) {
//     $("ul#foo").append("<li>This is an item in the list. Click to make me disappear.</li>");
//   }
//
//   $("ul").click(function() {
//     $(event.target).hide(400);  // 400 specifies the speed
//                                 // KACHIGA KACHIGA KACHOWWW
//   });
//   $("#showall").click(function(e) {
//     $("li").each(function() {
//       $(this).show(400);
//     });
//   });
// });
