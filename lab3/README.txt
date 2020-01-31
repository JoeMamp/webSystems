Name: Joseph Mampillil
Resume Assignment
October 4, 2019

I used HTML5 since it the new standard. Compared to older doctypes, HTML5 has far
more tags and fewer rules. I needed to use divs and spans for my markup to create
my hCard. I did this because the information I wanted to display needed to be
uniformly formatted so that people accessing my site can easily access my contact
information (otherwise, what is the point of having an hCard?). My CSS validates
according to https://jigsaw.w3.org/css-validator/validator. I found one validation
error in my HTML using https://validator.w3.org/nu/#file. This error is in my link
from https://fonts.google.com, the website I used to import fonts. The error is
that I am not supposed to have the '|' character in my link href statement. I looked
up the issue at https://stackoverflow.com/questions/22466913/google-fonts-url-break-html5-validation-on-w3-org
and found the special character code %7C. Inserting the code in place of the |
solve my issue.

The hCard information is useful because it allows those visiting my website to
clearly find my contact information using the classes and title tags I inserted.
I used the information at http://microformats.org/wiki/hcard#targetText=hCard%20is%20a%20simple%2C%20open,RSS%2FXHTML%20or%20other%20XML
to learn more about hCard formatting, and I used http://microformats.org/code/hcard/creator
to create a template for my hCard. The information is useful to automated user
agents as well, as the clear tags allow anyone to parse my markup and figure out
what content is  located in each section. I set the visibility of the hCard credit
paragraph to hidden in my header because it seemed distracting to have appear on
my resume.

I used https://www.w3schools.com/howto/howto_css_rounded_images.asp to make my
profile picture appear as a circle. I used https://www.canva.com/colors/color-palette-generator/
to find a color palette that matched my resume based on my profile picture. I used
https://stackoverflow.com/questions/20180081/css-background-color-with-floating-elements
to figure out how to preserve the background color when floating different containers
within the body (main, section). I tried to figure out how to make my skills section
(which I floated to the right side of the body) scroll with the user as they scrolled
up and down the page, but I could not find a way to do it in HTML and CSS. The information
I found at https://stackoverflow.com/questions/1638895/how-do-i-make-a-div-move-up-and-down-when-im-scrolling-the-page
was the closest I got, but that required JavaScript and jQuery (which I wasn't
quite ready to use since I wasn't sure how to do it myself). Finally, I used
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool to
figure out colors to use for my location/employer names, school/work names, and
for the background for my skills section.