![logo](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/logo.png)

# **Ali Sadiq MS2 – Pharm Online**

[View the live project here.](https://alisadiq91.github.io/PharmOnline/index.html)

This is the second project of my software development career. I have decided to create a website for a chain of pharmacies that have decided to delve into the world of online pharmacy. The company name has changed to PharmOnline because of this. I will be using what I have learnt from my recent modules covering JavaScript and Jquery, as well as how to include an API in a website. I will also use HTML, CSS and the bootstrap framework. I am attempting to show a vast range of what I have learnt, including EmailJS, incorporating APIs and using JavaScript to monitor how a user interacts with the website. 
The website is for the company Pharm Online. They are an online Pharmacy which also have 10 stores across the UK.  Their stores each offer a wide range of services, from covid testing to blood pressure checks. They also have a mobile app which is used for online ordering of medication. 

# **UX - USER STORIES**

## First Time Visitor Goals

1.	As a First Time Visitor, I want to know exactly what services I am able to access.

2.	As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

3.	As a First Time Visitor, I want to be able to know exactly how I can contact the pharmacies, be it online or at their stores. 

4.	As a First Time Visitor, I want to know where each pharmacy is based to see if there is one close to where I live.

5.  As a First Time Visitor, I want to be able to choose a service and make an appointment at my chosen branch.

## Returning Visitor Goals

1.	As a Returning Visitor, I want to know how to download the application to order my medication. 

2.	As a Returning Visitor, I want to be able to know exactly what the steps are of how to use an online pharmacy.

3.	As a Returning Visitor, I want to be able to have any questions I have answered before I commit to anything. 

## Frequent User Goals

1.	As a Frequent User, I want to check to see if there are any new services available at each store.

2.  As a Frequent User, I want to be able to book other services at the same branch. 

Being a registered UK pharmacist myself, I have visited many pharmacy websites and apps, and of course worked in many branches.
With me being vastly experienced in this sector, I know exactly what the user wants, making it easy for me to provide this in a simple way.

# **DESIGN**

## Colour Scheme

* The two main colours used are white smoke and navy.

## Typography

* The Roboto Condensed font is the font used for the logo. The Raleway font is the main font used for all other content. Sans Serif is used as the fallback font if for any reason the above fonts are not functioning. A professional theme is set which these two fonts help achieve. They are also both clear and easy to read.

# **WIREFRAMES AND FEATURES**

# **Header**

* Languages used – HTML, CSS, JavaScript

* Frameworks, Libraries & Programs Used - [Font Awesome](https://fontawesome.com/), Bootstrap

## Features:

1.	The logo – this is of course in the header, so it is on every page. It is at the top on desktop devices and just below the menu on smaller devices.  

2.	Side Menu – I created a pop-out side menu to give interactivity to the site and to help the design on mobile devices as the nav links would take up a large area of the page if the side menu was not created. Originally, I had the idea to have the navbar underneath the logo as a list but to improve interactivity I changed to a side menu.

3.	In mobile view, the Menu (to click to open the side menu) is above the logo so the user can easily scroll to the top and find it there.

4.  Each nav link has an icon from font awesome and changes colour when hovering.

5.  The side menu background colour is slightly darker than the background of the website so that it stands out once opened. 


## Features to implement:

1.	I wanted to add a register link in my header, and to link this to a register page. This page would allow the user the option to use our online ordering service on the website too as opposed to just the app. This is something that I will be able to do later in my developing career. 

![header-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/header-desktop.png)

![sidemenu-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/sidemenu-desktop.png)

# **Footer**

* Languages used – HTML, CSS

* Frameworks, Libraries & Programs Used - [Font Awesome](https://fontawesome.com/), Bootstrap

## Features:

1.	Contact us – here is a link with a hover effect to the contact us page. As well as opening times and a phone number for head office for general enquiries. This number has a link to the user’s phone app. 

2.	Download the app – in the middle is a link to the apple store and the google play store for users to download the companies app so they can order their medication.

3.	Follow – each page must contain links to the business’s social platforms, with a hover effect too.

![footer-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/footer-desktop.png)

# **Home page**

* Languages used – HTML, CSS, JavaScript using JQuery

* Frameworks, Libraries & Programs Used - [Font Awesome](https://fontawesome.com/), Bootstrap

#### **Home page wireframe (desktop)**

![home-desktop-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/home-wireframe.jpg)

#### **Home page wireframe (mobile)**

![home-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/home-mobile-wireframe.jpg)

## Features

1.	Main image - An eye-catching picture, showing a happy patient receiving their medication. Also, with pharmacists behind with happy expressions. I want to show the user a satisfied customer.

2.	Providing services image - Here is an image showing the pharmacy provides services by the NHS, this is a widely used logo. This image will give the user confidence that the company follows NHS guidelines.

3.	Main list - I want the customer to know exactly what is available to them. Here is a list of points of what they can expect to experience, re-iterating the word “free” where possible. Underneath this are again, links to the google play store and apple store to download the app. 

![main-page-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/main-page-desktop.png)

4.	Steps of how it works – Originally, I planned to have these steps as all showing and the user to hover to reveal more information. I decided to change this and add a bootstrap carousel to improve the interactivity for the user. This gives the website a cleaner and simpler look. There are 4 steps, each shown as an image with a caption. When this is hovered over (clicked on mobile/tablet), a more detailed description of this step is revealed to the user. This was done using JavaScript with JQuery.

![steps-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/steps-desktop.png)

![steps-hover](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/steps-hover.png)

## Features to implement:

1.	I had the idea to add a large image under the steps, for the user to click to download the app, but I decided against it as I wanted to keep the website simple. 

2.	When there are new services to advertise, this can be under the header to show frequent users.

## Mobile View

![home-page-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/home-mobile.jpg)

# **Find us page**

* Languages used – HTML, CSS, JavaScript

* Frameworks, Libraries & Programs Used - Bootstrap, EmailJS, [Font Awesome](https://fontawesome.com/)

#### **Find us page desktop wireframe**

![findus-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/findus-wireframe.jpg)

#### **Find us page mobile wireframe.**

![findus-wireframe-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/findus-mobile-wireframe.jpg)

#### **Find us page screenshot.**

![findus-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/find-us-desktop.png)

#### **Find us page mobile screenshot.**

![findus-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/find-us-mobile.jpg)

## Features

1.	Page title – A simple “where to find us?” to catch the eye of the user. 

2.	Map – I used the google map API to incorporate a map and the location of the stores. This gives the user the chance to zoom in on each location and find out exactly where they are. Each location has been given a custom marker, an image universally used as health or pharmacy. When the user clicks the marker, a window pops up with the name of the pharmacy. 

3.  Originally the branches would all be showing underneath the map, however to improve the interactivity for the user, I have hidden them to be shown when the marker is clicked.

4.	When the user clicks a marker, the branch details pop up below with a form for the user to fill out related to what service they require.

5. Above the form, the user is told what branch they have selected, to make sure they are happy with their choice.

![map-popup-window](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-popup.png)

6. The user now chooses which service they require from the drop-down list. If a service is chosen, another input field appears asking the customer what date they would like to book their appointment.

![form-date](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-date.png)

7. If the user chooses the option "Other", instead of an input field for the date, a text box appears for the user to type what service they require from the chosen branch.

![form-other](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-other.png)

8. When the form is submitted, an alert box appears telling the customer that the branch will be in touch with them regarding their appointment.

![map-form-alert](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-map-alert.png)

9. The submit button is a [btn-primary](https://getbootstrap.com/docs/4.0/components/buttons/) button from bootstrap as the colour matches the theme used on the website.

10. Using EmailJS, the business is now sent this request by email in the format shown below. If the user selects the Other option, the text they type in is shown under additional info.

![map-emailjs](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-emailjs.png)

11. The service selected and the email  are set to required and must be submitted in the correct format.

![map-form-option](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-form-option.png)

![map-form-email](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-form-email.png)

12. I had to set the date and other text box as required using JavaScript as they should only be required depending on which service is selected.

![map-form-date](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-form-date.png)

![map-form-other](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-form-other.png)

13. I used a function in javascript to detect that a string was entered into the other text box, an alert pops up to the user if only whitespace is entered.

![map-form-invalid](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-form-invalid.png)

14. The EmailJS is set to send a copy of the email to the user for test purposes.

15. The page is set to respond to smaller devices by having the branch address on top of the form instead of side by side.

![map-form-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-form-mobile.jpg)


# **Covid19 page**

* Languages used – HTML, CSS

* Frameworks, Libraries & Programs Used - Bootstrap, [Font Awesome](https://fontawesome.com/)

#### **Covid19 page wireframe desktop**

![covid-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-wireframe.jpg)

#### **Covid19 page wireframe mobile**

![covid-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-mobile-wireframe.jpg)

## Features

1.	This is a very simple page. With Covid-19 being a huge part of people's lives at present, it is expected that a website providing healthcare must include some advice on how to stay safe. The page includes the 3 ways to stay safe advised by the UK government, with a video embedded to go along with each piece of advice. I have also added a font awesome logo to each point. 

#### **Covid19 page desktop** 

![covid-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-desktop.png)

#### **Image shows the mobile page for the covid-19 page:**

![covid-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/covid-mobile.jpg)

# **FAQ page**

* Languages used – HTML, CSS, JavaScript using JQuery

* Frameworks, Libraries & Programs Used - Bootstrap, [Font Awesome](https://fontawesome.com/)

#### **FAQ page wireframe (desktop)**

![faq-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-wireframe.jpg)

#### **FAQ page wireframe (mobile)**

![faq-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-mobile-wireframe.jpg)

## Features

1. This page contains 5 frequently asked questions that many users would want answering before they use the service.

![faq-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-desktop.png)

2. This has been executed using JavaScript with JQuery. When the user clicks each question, a toggle effect is used. The answer to the question is now shown underneath. It is given a speed of “500” to give a smooth effect.

![faq-answers](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-answers.png)

3. The colour of the answer is different to that of the question to help it stand out to the user. 

4. Once the user clicks the question, the answer stays open until they click the question again as it is a toggle effect. This allows the user to see the answer to more than one question at the same time. 

#### **Mobile View**

![faq-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-mobile.jpg)

![faq-answers-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/faq-answers-mobile.jpg)

# **Contact us page**

* Languages used – HTML, CSS, JavaScript

* Frameworks, Libraries & Programs Used - Bootstrap, EmailJS, [Font Awesome](https://fontawesome.com/)

#### **Contact us page wireframe (desktop)**

![contactus-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-wireframe.jpg)

#### **Contact us page wireframe (mobile)**

![contactus-mobile-wireframe](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-mobile-wireframe.jpg)

## Features

1.	This page contains a simple form that allows the user to send a message to the company. It only asks for their name, email address, and the message they would like to send.

![contactus-desktop](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-desktop.png)

2.	Each field is set to required, and the email field will only accept email formats. 

![contactus-required](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-req.png)

![contactus-required-email](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contactus-emailreq.png)

3. The Full Name and Message fields are where I have used JavaScript to ensure that not just white spaces are entered into the fields. If this occurs, the alert below is shown to the user.

![contactus-invalid-entry](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/contact-us-invalid.png)

4.	The message box is larger than the other input fields to give the user more space to write a detailed message.

5.	The submit button is a [btn-primary](https://getbootstrap.com/docs/4.0/components/buttons/) button from bootstrap as the colour matches the theme used on the website. 

6.	Once the submit button is pressed, the user will receive an alert thanking them for submitting a message and that usually the company replies within 2 working days.

![form-alert](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-alert.png)

7.	Once submitted, the fields automatically reset. 

8.	I used JavaScript to use EmailJs so that any questions or messages submitted can be seen by the company on their email address. This is currently set up to my email address. I have also set the email template to send a copy of the email to the sender so anyone using the form can be sure it has sent. The message is shown in the format below:

![email-example](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/emailJS.png)

#### **Mobile View**

![form-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-mobile.jpg)

![form-alert-mobile](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/form-alert-mobile.jpg)

# **TECHNOLOGIES**

## Languages Used

* HTML5

* CSS3 

* JavaScript

## Frameworks, Libraries & Programs Used

* Bootstrap

    * Bootstrap was used to assist with the responsiveness and styling of the website.

* Google Fonts:

    * Google fonts were used for both Roboto-condensed and Raleway fonts.

* Font Awesome:

    * Font Awesome was used in the header and footer on each page, with social media links, app download links, and also images alongside various captions and titles.

* JQuery

    * JQuery was used to make it easier to use JavaScript. It gives me cleaner code and is very effective.

* EmailJS

    * EmailJS was used to link the form on the contact us page and find us page to my email. I am now able to see any messages and service requests sent to the pharmacy. In the future, of course the pharmacy would have their own email and be able to access these messages through there. 

* Git

    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

* GitHub:

    * GitHub is used to store the projects code after being pushed from Git.

# **TESTING**

## HTML Validation

#### **Home page** 

* No errors or warnings were found.

![html-validator-index](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-index.png)

#### **Find us page**

* No errors or warnings were found.

![html-validator-findus](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-findus.png)

#### **Covid page**

* No errors or warnings were found.

![html-validator-covid](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-covid.png)

#### **FAQs page**

* No errors or warnings were found.

![html-validator-faqs](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-faqs.png)

#### **Contact us page**

* No errors or warnings were found. 

![html-validator-contact](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/html-contact.png)

## CSS validation

* There were 2 errors but these were with the bootstrap model. The warnings were all also with the bootstrap model.

![css-validator](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/cssvalidator.png)

## JavaScript code quality tool

* I used [JSHint](https://jshint.com/) to check my JavaScript code for errors.

* There were no errors for either map.js or script.js

![map.js](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/map-js.png)

![script.js](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/script-js.png)

## Lighthouse

* I used inspect on google chrome to use the Lighthouse tool to check the performance of my web pages. The performance results were all either 99 or 100. Below are the results for each webpage.

### Home page
![lighthouse-home](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/lighthouse-home.png)

### Find Us page
![lighthouse-findus](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/lighthouse-findus.png)

### Covid-19 page
![lighthouse-covid](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/lighthouse-covid.png)

### FAQs page
![lighthouse-faqs](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/lighthouse-faqs.png)

### Contact Us page
![lighthouse-contact](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/lighthouse-contact.png)

## Bugs 

1. When implementing a side nav onto the pages, when opening and closing the nav, the text was collapsing which failed to give a smooth transition.

    * To fix it I had to create a class then use css to hide this, which could then be shown using JavaScript.

    * I also set a timeout function in JavaScript to give it a smoother transition.

    * The JavaScript code is shown below:

![sidemenu-bug](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/side-bug.png)

2. When submitting the contact form on the contact us page, the form was allowing a submission if only white space was entered. This was also an issue I fixed with the map form.

    * To fix it I used an isEmpty function, then added an if statement to check if this function was false. If it was true, an alert would show to let the user know that the input was invalid.

    * The code used is shown below:

![bug-empty-string](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/bug-empty.png)

![bug-alert](https://github.com/alisadiq91/PharmOnline/blob/master/assets/images/bug-alert.png)

# **UX Testing**

## First time visitors

#### Aim

* As a First Time Visitor, I want to know exactly what services I am able to access. 

#### Result

* The homepage has an eye-catching image as soon as you load the page, showing a happy customer. 

* To the side of the image is a list of points of what services are offered.

* Underneath there are 4 steps to show the user exactly how the service works.

* The FAQ page also gives examples of services that are offered.

#### Aim

* As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

#### Result

* The side menu is available on each page, and helps the user easily navigate throughout the site.

* The logo at the top of the page also links the user back to the homepage is clicked.

* The contact us section of the footer also has a link to the contact us page.

* Where the FAQ section mentions the branches, it has a link to the find us page.

* Any external links are made to open to a new tab to keep the user on our website.

#### Aim

* As a First Time Visitor, I want to be able to know exactly how I can contact the pharmacies, be it online or at their stores.

#### Result

* The footer, which is on each page has a phone number for general enquiries, as well as a link to the contact us page. The phone number, when clicked, takes the user to their phone app. 

* The find us page has a phone number for each individual branch. This also, when clicked takes the user to their phone app. 

* The contact us page has a contact form where the user can send a message to the company with any questions or queries. 

#### Aim

* As a First Time Visitor, I want to know where each pharmacy is based to see if there is one close to where I live. 

#### Result

* The find us page has the google maps API incorporated for the user to see the locations of the 10 pharmacies in the UK. Each marker uses a custom image to show the pharmacy. Once this marker is clicked, the full address is shown below with a form if the user would like to request a service.

## **Returning visitors**

#### Aim

* As a Returning Visitor, I want to know how to download the application to order my medication.

#### Result

* Download links for Android and iOS are available on every page in the footer.

* Download links are also available on the home page below the main image.

#### Aim

* As a Returning Visitor, I want to be able to know exactly what the steps are of how to use an online pharmacy.

#### Result

* The simple 4 steps of how to use an online pharmacy are shown in the carousel on the home page.

* This is displayed in a simple way, giving the user the chance to interact with the site.

* Each step is summarised in a caption for the image, and if the patient wants more info, all they have to do is hover over the image to get a more detailed description. This is explained to the user just above the carousel.

#### Aim

* As a Returning Visitor, I want to be able to have any questions I have answered before I commit to anything.

#### Result

* This is available in many ways. The contact numbers for all the branches are available on the find us page. The user can click the branch they are closest to and click the number to ring.

* The telephone number for the online pharmacy is available on every page in the footer. The number when clicked will take the user to their phone application directly.

* A contact us form is also available on the contact us page, so the user can ask any questions.

* The user can also request any service that is not listed on the find us page using the "other" option.

## **Frequent users**

#### Aim

* As a Frequent User, I want to check to see if there are any new services available at each store.

#### Result

* Any new services will be added to the home page just under the header to show frequent users immediately when they open the website.

* New services will also be added to the available options when the form on the find us page is filled out.

#### Aim

* As a Frequent User, I want to be able to book other services at the same branch. 

#### Result

* The form on the find us page is available to be filled out for frequent users. 

# **Further Testing**

* The Website was tested on Google Chrome, Internet Explorer, Mozilla Firefox and Safari browsers.

* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone11 (portrait and landscape), iPad (portrait and landscape), Samsung Galaxy S10 (portrait and landscape) and other android devices.

* I used [responsinator](https://www.responsinator.com/) to make sure it responded to all devices.

* Each link was clicked various times on each page and each device to ensure they were all working correctly.

* The map form was filled out numerous times using each option with each location, and each time checking correct alerts are shown and checking the test email is received correctly.

* I asked 10 family and friends to use the website and look for any errors or bugs. I asked them all to view the website on their laptop, phone and tablet. I also asked them to try all the links, and to fill the forms out with errors to see if it allowed them to submit.

# **DEPLOYMENT**

### I used GitPod to write my code.

I regularly used Git Push to deploy this page to GitHub. Whenever I completed a page, fixed an error, or finished coding for the day, I would:

    1. "git status" - this shows me a list of what has been edited.

    2. "git add ." - to add what has been edited ready to commit.

    3. "git commit -m" - this commits what was added ready to push.

    4. "git push" - this deployed the changes above to the live site.

### I used the information in this [webpage](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site) to create my GitHub pages site.

The link above gave me the following steps.

    1.	Log in to GitHub and locate the GitHub Repository.

    2.	At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

    3.	Scroll down the Settings page until you locate the "GitHub Pages" Section.

    4.	Under "Source", click the dropdown called "None" and select "Master Branch".

    5.	The page will automatically refresh.

    6.	Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

## How to run this project locally

### To clone this project:

1. Follow this link to the [Project GitHub repository](https://github.com/alisadiq91/PharmOnline)

2. Under the repository name, click "Clone or download".

3. In the Clone with HTTPs section, copy the clone URL for the repository.

4. In your local IDE open GIT Bash.

5. Change the current working directory location where you want the cloned directory to be made.

6. Type git clone, and then paste the URL you copied in Step 3.

7. Press Enter. Your local clone will be created.

# **CONTENT**

### All content was written by the coder apart form those listed below.

* FAQ page - I had help from this [link](https://www.jqueryscript.net/accordion/Simple-Smooth-FAQ-Accordion-with-jQuery-CSS-FAQ-Slider.html) writing the JQuery for my FAQ page. 

* Contact Form – I used the integration function found [here](https://dashboard.emailjs.com/admin/integration/browser) on the email JS website to add a link to my profile.

* Side Menu - I had help from this [link](https://www.w3schools.com/howto/howto_js_sidenav.asp) when writing the code for my side menu.

* For checking if a string is blank or contains only white-space I used code from this [link](https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript).

* My Tutor Antonio Rodriguez helped me with these parts of my code:

        1. To have only 1 branch show if one is clicked after another on google maps.
    
        2. To have only the required sections of the find us page form show if different options are clicked one after the other. 

        3. On the contact form - how to not allow white spaces to be submitted using JavaScript.

# **MEDIA**

### I obtained all my images from google images. Here are the links for each image:

* [Main image on home page](https://image.freepik.com/free-photo/happy-customer-holding-her-medicine_13339-298059.jpg)

* [Providing NHS services](https://s3.amazonaws.com/gpandme/img/nhs-logo.png)

* [Apple store](https://miro.medium.com/max/1146/1*POlwgD8liUYUqiEU6IU1Pw.png)

* [Google play store](https://talkhomeapp.com/imgs/icons/download_app_google_play.svg?v=HixK2eXSbwMfMxlyhS4m2OQZwsQDFa5wG1dz9QInL28)

* [Step 1](https://4d0q7u11k31p1qnkosal8q2e-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/pexels-photo-1083931-720x460.jpeg)

* [Step 2](https://nursingnotes.co.uk/wp-content/uploads/2019/01/Medication.jpeg)

* [Step 3](https://cuencahighlife.com/wp-content/uploads/2020/02/new-haven-ct-waterbury-pharmacy-body1.jpg)

* [Step 4](https://images.ctfassets.net/nqqfspfdquz1/3ZL84FFcohI25vIZLSlLcd/7d0e0606f61c372e6e9d40ef57aa3906/Coop_Health_Free_repeat_prescription_delivery_service.jpg?fm=webp&q=60&w=600&h=338)

* [Map marker](https://maps.google.com/mapfiles/ms/icons/hospitals.png)

### The embedded videos on the covid-19 page were all from YouTube. Links are provided below:

* [Stay at home](https://www.youtube.com/embed/smIPGxbHojE)

* [Wash your hands](https://www.youtube.com/embed/4ij1I0OB2hk)

* [Keep your distance](https://www.youtube.com/embed/wPM58DQH0gQ)

# **ACKNOWLEDGEMENTS**

* My Mentor for continuous helpful feedback.

* The Code Institute tutor support team for pointing me in the right direction when I needed help.

# **Thank you!!**

#### Thank you for taking the time to enjoy my second project as a web developer. I really enjoyed completing this, as it is a sector I have a vast amount of experience in, and something I am passionate about! After completing my first project, I wanted to step it up and show exactly what I can do in this project! I hope you enjoy using my website!







