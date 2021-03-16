

Ali Sadiq MS2 – Pharm Online

[View the live project here.](https://alisadiq91.github.io/PharmOnline/index.html)

This is the second project of my software development career. I have decided to create a website for a chain of pharmacies that have decided to delve into the world of online pharmacy. The company name has changed to PharmOnline because of this. I will be using what I have learnt from my recent modules covering Javascript and Jquery, as well as how to include an API in a website. I will also use HTML, CSS and the bootstrap framework. I am attempting to show a vast range of what I have learnt, including emailJS, incorporating APIs and using Javascript to monitor how a user interacts with the website. 
The website is for the company Pharm Online. They are an online Pharmacy which also have 4 stores across the UK.  They currently have a site in Leeds, Bradford, York and Manchester, which each offer a range of services. They also have a mobile app which is used for online ordering of medication. 

--- UX --- USER STORIES ---

• First Time Visitor Goals

1.	As a First Time Visitor, I want to know exactly what services I am able to access.

2.	As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

3.	As a First Time Visitor, I want to be able to know exactly how I can contact the pharmacies, be it online or at their stores. 

4.	As a First Time Visitor, I want to know where each pharmacy is based to see if there is one close to where I live. 

• Returning Visitor Goals

1.	As a Returning Visitor, I want to know how to download the application to order my medication. 

2.	As a Returning Visitor, I want to be able to know exactly what the steps are of how to use an online pharmacy.

3.	As a Returning Visitor, I want to be able to have any questions I have answered before I commit to anything. 

• Frequent User Goals

1.	As a Frequent User, I want to check to see if there are any new services available at each store. 

Being a registered UK pharmacist myself, I have visited many pharmacy websites and apps, and of course worked in many branches.
With me being vastly experienced in this sector, I know exactly what the consumer wants, making it easy for me to provide this in a simple way.

--- DESIGN ---

Colour Scheme

•	The two main colours used are white smoke and navy.

Typography

•	The Roboto Condensed font is the font used for the logo. The Raleway font is the main font used for all other content. Sans Serif is used as the fallback font if for any reason the above fonts are not functioning. A professional theme is set which these two fonts help achieve. They are also both clear and easy to read.

--- WIREFRAMES AND FEATURES ---

Header – languages used – HTML, CSS, Font Awesome https://fontawesome.com/

Features:

1.	The logo – this is of course in the header, so it is on every page. It is always at the top of the header, above the navbar. 

2.	Nav Bar – I used bootstrap (https://getbootstrap.com/docs/4.5/components/navbar/) for this, for efficiency. Each button on the nav bar has a hover effect. These are all places under the logo evenly spaced out.

3.	In desktop view, there is an NHS logo in the top right to show that NHS services are provided, this is not shown in mobile view as it is also shown below.

4.	In mobile view, the nav links each have their own line to keep it simple and organised. 


Features to implement :

1.	I wanted to add a register link in my header, and to link this to a register page. This page would allow the user the option to use our facilities on the website too as opposed to just the app. This is something that I will be able to do later in my developing career. 

![header-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/header-desktop.png)

Footer – languages used – HTML, CSS, fontawesome (https://fontawesome.com/)

Features:

1.	Contact us – here is a link with a hover effect to the contact us page. As well as opening times and a phone number for general enquiries. This number has a link to the user’s phone app. 

2.	Download the app – in the middle is a link to the apple store and the google play store for users to download the companies app. 

3.	Follow – each page must contain links to the business’s social platforms, with a hover effect too.

![footer-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/footer-desktop.png)

Home page – 

Languages used – HTML, CSS, Javascript using JQuery, font awesome https://fontawesome.com/)

Home page wireframe (desktop)

![home-desktop-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/home-wireframe.jpg)

Home page wireframe (mobile)

![home-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/home-mobile-wireframe.jpg)

Features

1.	Main image – An eye-catching picture, showing a happy patient receiving their medication. Also, with pharmacists behind with happy expressions. I want to show the consumer a satisfied customer.

2.	Providing services image – Here is an image showing the pharmacy provides services by the NHS, this is a widely used logo. 

3.	Main list – I want the customer to know exactly what is available to them. Here is a list of points of what they can expect to experience, re-iterating the word “free” where possible. Underneath this are again, links to the google play store and apple store to download the app. 

![main-page-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/main-page-desktop.png)

4.	Steps of how it works – The homepage should have a simple way for the customer to know what they need to do once they download the app.  There are 4 steps to the process, each is initially shown as an image, with a caption underneath. When the user hovers (clicks on mobile) over each image it will reveal a more detailed description of exactly what they need to do for this step. This is done using Javascript with Jquery. In mobile view, these steps are each on their own line. 

![steps-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/steps-desktop.png)

![steps-hover](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/steps-hover.png)

Features to implement:

1.	I had the idea to add a large image under the steps, for the user to click to download the app, but I decided against it as I wanted to keep the website simple. 

2.	When there are new services to advertise, this can be under the header to show frequent users.

Mobile View –

![home-page-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/home-mobile.jpg)

Find us page – languages used – HTML, CSS, Javascript

Find us page desktop wireframe.

![findus-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/findus-wireframe.jpg)

Find us page mobile wireframe.

![findus-wireframe-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/findus-mobile-wireframe.jpg)

Find us page screenshot.

![findus-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/find-us-desktop.png)

Find us page mobile screenshot.

![findus-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/findus-mobile.png)

Features

1.	Page title – A simple “where to find us?” to catch the eye of the user. 

2.	Map – I used the google map API to incorporate a map and the location of the stores. This gives the user the chance to zoom in on each location and find out exactly where they are. Each location has been given a custom marker, an image universally used as health or pharmacy. When the user clicks the marker, a window pops up with the name of the pharmacy. 

3.	When each marker on the map is clicked. The branch is highlighted below to show the user which branch they have clicked on. When each marker is clicked, it only highlights the branch the user has clicked, even after a different branch is clicked.

![map-popup-window](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-popup.png)

4. List of branches – Underneath the map is a list of the 4 branches in the UK. If the user wants to quickly see the locations without using the map. 

5. In mobile view - the branches are each on their own line


Covid19 page – languages used – HTML, CSS, font awesome 

Covid19 page wireframe desktop

![covid-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-wireframe.jpg)

Covid19 page wireframe mobile

![covid-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-mobile-wireframe.jpg)

Features

2.	This is a very simple page, with Covid-19 being a huge part of peoples lives at present, it is very important for a website providing healthcare to include some advice on how to stay safe. The page includes the 3 ways to stay safe advised by the UK government, with a video embedded to go along with each piece of advice. I have also added a font awesome logo to each point. 

Covid19 page desktop 

![covid-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-desktop.png)

Image shows the mobile page for the covid-19 page: 

![covid-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-mobile.jpg)

FAQ page – languages used – HTML, CSS, Javascript using JQuery, fontawesome https://fontawesome.com/)

FAQ page wireframe (desktop)

![faq-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-wireframe.jpg)

FAQ page wireframe (mobile)

![faq-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-mobile-wireframe.jpg)

Features

1.	This page contains 5 frequently asked questions that many users would want answering before they use the service.

![faq-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-desktop.png)

2.This has been executed using Javascript with JQuery. When the user clicks each question, a toggle effect is used. The answer to the question is now shown underneath. It is given a speed of “500” to give a smooth effect.

![faq-answers](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-answers.png)

3.The colour of the answer is different to that of the question to help it stand out to the user. 

4.Once the user clicks the question, the answer stays open until they click the question again as it is a toggle effect. This allows the user to see the answer to more than one question at the same time. 

Mobile View –

![faq-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-mobile.jpg)

![faq-answers-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-answers-mobile.jpg)

Contact us page – languages used – HTML, CSS, Javascript, EmailJS, font awesome, bootstrap

Contact us page wireframe (desktop)

![contactus-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-wireframe.jpg)

Contact us page wireframe (mobile)

![contactus-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-mobile-wireframe.jpg)

Features

1.	This page contains a simple form that allows the user to send a message to the company. It only asks for their name and email address, and the message they would like to pass on.

![contactus-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-desktop.png)

2.	Each field is set to required, and the email field will only accept email formats. 

![contactus-required](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-req.png)

![contactus-required-email](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-emailreq.png)

3.	The message box is larger than the other input fields to give the user more space to write a detailed message.

4.	The submit button is “btn-primary” (https://getbootstrap.com/docs/4.0/components/buttons/) button from bootstrap as the colour matches the theme used in the website. 

5.	Once the submit button is pressed, the user will receive an alert thanking them for submitting a message and that usually the company replies within 2 working days.

![form-alert](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-alert.png)

6.	Once submitted, the fields automatically reset. 

7.	I used Javascript to use emailJs so that any questions or messages submitted can be seen by the company on their email address. This is currently set up to my email address. I have also set the email template to send a copy of the email to the sender so anyone using the form can be sure it has sent. The message is shown in the format below:

![email-example](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/emailJS.png)

Mobile View –

![form-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-mobile.jpg)

![form-alert-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-alert-mobile.jpg)

Technologies

Languages Used

•	HTML5

• CSS3 

•	Javascript

Frameworks, Libraries & Programs Used

1.	Bootstrap

o Bootstrap was used to assist with the responsiveness and styling of the website.

2.	Google Fonts:

o Google fonts were used for both Roboto-condensed and Raleway fonts.

3.	Font Awesome:

o Font Awesome was used in the header and footer on each page, with social media links, app download links, and also images alongside various captions and titles.

4.	JQuery

•	JQuery was used to make it easier to use Javascript. It gives me cleaner code and is very effective.

5.	EmailJS

•	EmailJS was used to link the form on the contact us page to my email. I am now able to see any messages sent to the pharmacy. In the future, of course the pharmacy would have their own email and be able to access these messages through there. 

6.	Git

o Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

5.	GitHub:

o GitHub is used to store the projects code after being pushed from Git.

Testing

HTML VALIDATOR

Home page 

No errors were found.

![html-validator-index](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-index.png)

Find us page

No errors were found.

![html-validator-findus](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-findus.png)

Covid page

No errors were found. 

![html-validator-covid](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-covid.png)

FAQs page

No errors were found.

![html-validator-faqs](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-faqs.png)

Contact us page

No errors were found. 

![html-validator-contact](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-contact.png)

CSS validator

There were 2 errors but these were with the bootstrap model. The warnings were all also with the bootstrap model.

![css-validator](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/cssvalidator.png)

JS errors 

I used https://jshint.com/ to check my Javascript code for errors.

There were no errors for either map.js or script.js

![map.js](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-js.png)

![script.js](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/script-js.png)


Aim

•	As a First Time Visitor, I want to know exactly what services I am able to access. 

Result

•	The homepage has an eye-catching image as soon as you load the page, showing a happy customer. 

•	To the side of the image is a list of points of what services are offered.

•	Underneath there are 4 steps to show the user exactly how to the service works.

Aim

•	As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

Result

•	The header and footer are available on each page, to easily cycle through the site to find the page you need.

•	Any external links are made to open to a new tab to keep the user on our website.

Aim

•	As a First Time Visitor, I want to be able to know exactly how I can contact the pharmacies, be it online or at their stores.

Result

•	The footer, which is on each page has a phone number for general enquiries, as well as a link to the contact us page. The phone number, when clicked, takes the user to their phone app. 

•	The find us page has a phone number for each individual branch.

•	The contact us page has a contact form where the user can send a message to the company with any questions or queries. 

Aim

•	As a First Time Visitor, I want to know where each pharmacy is based to see if there is one close to where I live. 

Result

•	The find us page has the google maps API incorporated for the user to see the locations of the 4 pharmacies in the UK. Each marker uses a custom image to show the pharmacy. Once this marker is clicked, the full address is shown in a pop-up window. 

•	Underneath this map is a list of all the branches, their full address, and their phone numbers. 

Aim

•	As a Returning Visitor, I want to find information about which rooms are available, and the cost of these.

Result

•	There is a quick overview of the rooms on the homepage, in the form of a carousel. It contains the room name, difficulty level and an image of what the room is like.

•	The room page contains all information needed regarding the rooms available. There is a teaser video for each room embedded to play in the webpage. To the right of this is a background story of the room, giving the customer a taster of what the room is about. This also contains a recommended team size, price per person and difficulty level.

Aim

•	As a Returning Visitor, I want to be able to book the room I want in a simple way.

Result

•	Each webpage has multiple links to the book now page to keep reminding the customer to book.

•	The booking page has a simple form to fill out, and the same submit button as other book now links, for consistency.

•	By setting limits and required attributes, it has been made easy to not make a mistake on the form.

Aim

•	As a Returning Visitor, I want to be able to be able to see a taster of each room available, as a video or pictures.

Result

•	This is explained above as each room has a picture on the homepage in the carousel, and a trailer video on the room page.

Aim

•	As a Frequent User, I want to check to see if there are any newly added rooms or challenges.

Result

•	Each new room added will be placed to the top of the room page, with a font awesome icon to show it is new.

•	The home page will also have a link to this new room, again with a font awesome icon.

Further Testing

• The Website was tested on Google Chrome, Internet Explorer, Mozilla Firefox and Safari browsers.

• The website was viewed on a variety of devices such as Desktop, Laptop, iPhone11 (portrait and landscape), iPad (portrait and landscape), Samsung Galaxy S10 (portrait and landscape) and other android devices.

• I used www.responsinator.com to make sure it responded to all devices.

• Each link was clicked various times on each page and each device to ensure they were all working correctly.

• I asked 10 family and friends to use the website and look for any errors or bugs. I asked them all to view them on their laptop, phone and tablet. I also asked them to try all the links, and to fill the form out with errors to see if it allowed them to submit.

Deployment

I used GitPod to write my code.

I regularly used Git Push to deploy this page to GitHub. Whenever I completed a page, fixed an error, or finished coding for the day, I would git commit and then git push.

I used the information in this webpage to create my GitHub pages site. https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site

The link above gave me the following steps.

1.	Log in to GitHub and locate the GitHub Repository.

2.	At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

3.	Scroll down the Settings page until you locate the "GitHub Pages" Section.

4.	Under "Source", click the dropdown called "None" and select "Master Branch".

5.	The page will automatically refresh.

6.	Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

Content

All content was written by the coder apart form those listed below.

FAQ page - I had help from this link writing the JQuery for my FAQ page. https://www.jqueryscript.net/accordion/Simple-Smooth-FAQ-Accordion-with-jQuery-CSS-FAQ-Slider.html

Contact Form – I used the integration function on the email JS website to add a link to my profile. https://dashboard.emailjs.com/admin/integration/browser

Find us page - My Tutor Antonio Rodriguez helped me to write the code to highlight each branch from the list when clicking the marker.

Media

I obtained all my images from google images. Here are the links for each image:

Main image on home page  – https://image.freepik.com/free-photo/happy-customer-holding-her-medicine_13339-298059.jpg

Providing NHS services – https://s3.amazonaws.com/gpandme/img/nhs-logo.png

NHS logo - https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/NHS-Logo.svg/371px-NHS-Logo.svg.png

Apple store - https://miro.medium.com/max/1146/1*POlwgD8liUYUqiEU6IU1Pw.png

Google play store- https://talkhomeapp.com/imgs/icons/download_app_google_play.svg?v=HixK2eXSbwMfMxlyhS4m2OQZwsQDFa5wG1dz9QInL28

Step 1 - https://4d0q7u11k31p1qnkosal8q2e-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/pexels-photo-1083931-720x460.jpeg

Step 2 - https://nursingnotes.co.uk/wp-content/uploads/2019/01/Medication.jpeg

Step 3 - https://cuencahighlife.com/wp-content/uploads/2020/02/new-haven-ct-waterbury-pharmacy-body1.jpg

Step 4 - https://images.ctfassets.net/nqqfspfdquz1/3ZL84FFcohI25vIZLSlLcd/7d0e0606f61c372e6e9d40ef57aa3906/Coop_Health_Free_repeat_prescription_delivery_service.jpg?fm=webp&q=60&w=600&h=338

The embedded videos on the covid-19 page were all from YouTube. Links are provided below:

Stay at home -  – https://www.youtube.com/embed/smIPGxbHojE

Wash your hands -  – https://www.youtube.com/embed/4ij1I0OB2hk

Keep your distance - https://www.youtube.com/embed/wPM58DQH0gQ

Acknowledgements

•	My Mentor for continuous helpful feedback.

Thank you!!

Thank you for taking the time to enjoy my second project as a web developer. I really enjoyed completing this, as it is a sector I have a vast amount of experience in, and something I am passionate about! Having done my first project, I wanted to step it up and show exactly what I can do in this project! I hope you enjoy using my website!







