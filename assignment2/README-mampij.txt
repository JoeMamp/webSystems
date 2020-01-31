Joseph Mampillil
mampij
Lab 6 - hexed!
October 23, 2019

-----------------------------
1) What are the advantages to writing a jQuery plugin over regular JavaScript that uses jQuery?

When you write JavaScript that uses jQuery, all the jQuery objects inherit all
of jQuery's methods. When you write a jQuery plugin, the jQuery objects also
inherit the functions that you write yourself.
-----------------------------
2) Explain how your jQuery plugin adheres to best practices in JavaScript and jQuery
development.

The plugin uses readable and straightforward variable names. We also started off
with fairly few features, implementing progressive enhancement as well as we could
on the timeline we had. Some of the functions, especially for trying to get and post
high scores, are pretty long and complicated, and don't have many comments, so that
is something that made it somewhat difficult to look into someone else's code and
figure out why some feature was acting in a certain way.
-----------------------------
3) Does anything prevent you from POSTing high scores to a server on a different domain? If so,
what? If not, how would we go about it (written explanation/pseudocode is fine here)?

It seems that this would not be possible due to the same-origin policy and CORS. However,
if we made new headers for the origin request and Access-Control-Allow-Origin response
that occur when we try to get to a new page, then we might be able to convince the
machine that we are allowed to exchange information without coming from the same
place.

**Update**: we tried doing this, and writing html without a header (the header was
added through the plugin) didn't seem to solve the problem very well.
-----------------------------

Used https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool to get colors
Use https://dev.to/clairecodes/how-to-create-a-polka-dot-background-with-css-23m0 to learn some new CSS background formatting tricks
Used https://fonts.google.com/?selection.family=Amatic+SC to get a sp00ky font
Some of this is irrelevant because as people edited and updated to new versions
of our code, they did remove some features/styling
Used https://www.w3.org/wiki/JavaScript_best_practices to look at what are widely
considered to be best practices in JS.