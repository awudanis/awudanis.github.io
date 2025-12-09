# Final Project - Portfolio Website


### Planning

I first looked at a bunch of websites and wrote down what I liked about each one. I found some common features of each website that I wanted to try and include my own, I also took a look at their code and tried to learn how they named things and organized their files. Then I decided on a general color theme/asthetic and began the general planning. I knew that I wanted a navigation bar, main page, a page to show my projects and a footer that included some way for the viewers of my website to contact me. I also started my project with the Github pages demo we did in class so I also already had some code for the head section of the website.

### Navigation Bar

For the navigation bar, I strugged a little bit trying to figure out how they did the spacing but I ended up looking at [W3 schools](https://www.w3schools.com/css/css_navbar.asp) again for reference.


### Body

The first part of website you will see is my demo reel. I first tried to embed the video like we did in class but Github didn't let me push the video which was over 50MB. This meant that I had to actually post my demo reel as a unlisted video on youtube and had to use `<iframe>` to put the youtube video on the website. I searched up how to do this and found the [tutorial on W3 schools](https://www.w3schools.com/tags/tag_iframe.asp).

In the main body of my website where I made a About Me section with some text, then some bullet points with the `<ul>` and `<li>`list synax in the skills and education section. I also found out about the `<strong>` tag which I used to bold certain words. 
	
After that I made a section to list projects I worked on. I first had them just listed like the navigation bar with links to different HTML pages but added CSS later to make project cards that had a little preview of the projects on the main page. I also used `<section>` to split all these different parts of my main website to different sections, I used this instead of a `<div>` because I felt that since it was called *section* it probably was for bigger catagories of groupings.

Then I worked on the Contact section where I used `<a href="mailto:aliciawudanis@gmail.com class="email-link">aliciawudanis@gmail.com</a>` to make a little button that people could click on and it would direct them straight to sending an email with me. I used this also on my navigation bar where I also have a contact button. 

### Footer

then for the footer, I saw that a lot of people had little copyright symbols on the bottom of the page so I thought why not, I'll make one too. I used `&copy` for the copyright sign. I was actually suprised that there was an actual way to write a copyright sign built into HTML. I also found out about this in [W3 schools](https://www.w3schools.com/html/html_entities.asp).

### Project Pages

For the Project Pages, most of them are not completed yet so I haven't finished putting in pictures and videos but I have already made placeholder so that in the future when they are finished, I can just put the pictures in easily without much coding. I struggled in the beginning on how I wanted to make the video fit well (also applies to demo reel) but I came across the `object-fit: cover;` [code example](https://www.w3schools.com/css/css3_object-fit.asp) from W3 schools which makes the video/media fit perfectly in the box section.

##CSS

I think the hardest part of this project for me was the CSS. Since we didn't really talk about it during class, I had to look at a lot of examples to see if I could try to copy something someone else did. In the beginning, I read articles on W3 school to figure out the basic syntax which led me to try and format everything with just padding and margin. This became a problem super fast because as I changed the size of the screen, the things on the page would not scale and it would end up looking really weird. Then I found out about [flexbox](https://www.w3schools.com/css/css3_flexbox.asp) which was a way of using things like `display: flex;` and `justify-content: center;` to make things centered instead of pushing it with margin. To use flexbox, I also had to go back into the HTML to make `<div>`s around my "objects". Because flexbox needs to know the parent to center, I had to group each "object" with a div and set the bigger section as the parent/reference for center. Another thing I used to make sure that the website would move along with you adjusting your screen was [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp). This makes it so that the whole website is responsive depending on the window size or device screen size. For this I used the code `@media (max-width: 768px)` for tablets or `@media (max-width: 480px)` for smaller screens.
	
Then I also tried to play around with a lot of CSS animations and hover effects. For example, for the navigation bar contact button, I made it so it would turn black when you hover over it. While using the `hover` tag along with the name of the section, I also used [transitions](https://www.w3schools.com/css/css3_transitions.asp) to make the animation less abrupt. This was applied to basically everywhere that had an effect.
	
The next main thing I worked on in CSS was the buttons and project cards. For both, I had to use many similar techniques. I [transformed the y of objects](https://www.w3schools.com/css/css3_2dtransforms.asp) using `transform: translateY` to make it so that when the user hovers over certain things (buttons/project cards) the object would pop out a little to indicate that you are hovering it. Along with this I also used [box shadows](https://www.w3schools.com/css/css3_shadows_box.asp) to make the pop out effect more obvious. I found both of these effects from W3 Schools.
	
As I was reading over the W3 schools website I also found some other random things that I thought would be fun to include. For example, I used `position: sticky` on my navigation bar to make it stay on the top of the page no matter where they scroll on the page. I think this is pretty neat since it makes it a lot easier to navigate/jump to different parts of the website. I also added a backdrop filter blur effect with `backdrop-filter: blur`. One of the most used was the border radius. The border radius made every box have rounded corners and I used that in a lot of places. For example, in the video place holders/img placeholders, buttons and even the project links. Then while targeting everything execpt for the contact buttons using `.nav-menu a:not(.contact-btn)::after` I made it so it would underline the links that you are hovering.

### Conclusion

Generally, I think the project went really well. I think the annoying thing was that since we had to do it in textmate, everytime I made a change in my code I had to reopen the HTML file so I could see what I changed. It was ever harder when I uploaded my file to Github since everytime I wanted to make a minor change, I had to push my changes to Github. If I could do this project over again, I would not have done all the spacing with margin and padding because I spent A LOT of time trying to get everything perfectly aligned just to realize that it does not match the moment you change the tab size. I also really liked all of the effects I used on the website and I am pretty happy with how the website came out. Even though I don't have everything completed yet on my website for the pictures, I made everything so that if I do include more projects in the future I would have to do very little coding.




