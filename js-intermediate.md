# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer:
  C- create  ==> post 
  R- read  ==> get
  U- update ==> 1) patch (when you update and change info (not replace)  & 2) put (i think thats not the right verb but its when you update-replace an attribute or object)
  D- delete ==> delete

  Researched answer: Post, get, put, patch, delete;
  I remembered these correctly but doubted whether put was correct
Put  = update replace  
patch = update modify

2. Why would you use object destructuring?

  Your answer: to allow for increased accessibility of certain info; makes it easier to access that destructured data later in code

  Researched answer: It serves as shorthand later (saves you typing later on); You can simply define the keys of an object if you don't really care about that object
  (grabbing keys directly from an object description so you ca get rid of content that would be needed for use)



3. Why is testing important?

  Your answer: to make sure code doesnt have "holes" and is written correctly to perform a specific task and give expected results
  Consistent testing can also give you insight on where your code may have broken when trouble shooting later
  Writing tests can also help guide you to write concise code

  Researched answer: Gives you the opportunity to increase the quality and user reliability of your product. It can increase the level of customer support because you have codes that would be able to help identify the area of issue 


4. What is the difference between a class and an object?

  Your answer: a class can create objects or contain within it objects. A class contains properties that can be inherited by the objects that are created using it
  objects can be pretty much anything 

  Researched answer: Everything in JS is an object with the exception of primitive datum (including instances of class)
  A class is a blueprint of an object to be created; 
  

5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer: I honestly did not write a single functional piece of code (without copying verbatum) since we started react. I feel very behind and did not catch up as much as I wanted to this weekend.
Doing these group projects did not help me at all; I am not exadgerating. I would have benefitted from more introductory work. I never learned how to handle events and being able to cause a result from clicking something is still way beyond me. 
also pairs were a lot. i definitely did not learn from mob programming in these introductory instances
I'm not saying that I dont like working in groups or pairs it was just too much with trying to learn React. Now react is over and I have not learned how to do anything functional.

### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer: I don't remember but you use specific syntax

  Researched answer:  <link rel = "stylesheet"
   type = "text/css"
   href = "myStyle.css" /> 


2. What is the difference between a div and a span?

  Your answer: a div is a html tag that can be used as a division for given content
  span is similiar but can be used to wrap contant that you want to span the screen left to right
  

  Researched answer: div is block-level and span is an inline element
  Span is often used to stylize texts 
  Div is used to wrap whole sections and paragraphs of text
  I was totally incorrect I thought span was block level..
  


3. What is a CSS class? When should you use an id instead of a class?

  Your answer: a class is more broad, you can use it to stylize a lot of areas at once; in CSS hierarchy ID comes first (more specific) and class comes after so if an element falls into two different categories, its stylization will come first from the id specs

  Researched answer: id is used to apply a CSS property to one attribute only  (unique to one attribute; can be used for unique items like buttons etc)
  Class is used for applying CSS properties to many locations

4. Name 4 semantic HTML tags.

  Your answer: <strong> <img/> <italic> <header>

  Researched answer: <article><details><footer><nav><section>


5. What are three options for creating responsive design?

  Your answer: React, Javascript?? I don't think that is correct

  Researched answer:
  1. flexible layouts: use a flexible grid to create the website layout that will dynamically resize to any width
  2. Media queries: extend to media types for included styles; specifiy different styles for different browsers and devices
  3. Flexible media: makes media (img, videos, etc) scalable by changing the size of the media as the size of the display changes
  
These are three different ways to accomplish nearly much the same thing (making the display resize well to fit the client's screen)


### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer: developing the client-side content. Front end development creates the user experience/interface. The clients interactions with the site (buttons, menus, links, etc.) and the visual presentation are both included in front end
Some tools uniquely required of front end devs are: Javascript, React, CSS
Some skills that can be uniquely required of front end devs are: good design eye, good use of colors, good understanding of human habits and cognition (kind of like Mac using cognitive psychologists to make GUIs more intuitive for users)
  
  Researched answer: HTML, CSS, JS, jQuery, Frameworks, Responsive design, browser developer tools, web performance
Front end dev = "client-end developer"; they create the visual front end elements of software, app, or website. They create computing components or features that are directly viewable and accessible by the client


2. What is block scope in JavaScript?

  Your answer: i don't know

  Researched answer: similiarto function scope but block scope is the area within the curly brackets of: if statements, switch conditions, or for and while loops ; {this is the block}
  If you declare variables within the {block} it is local to that block and cannot be accessed outside
  
  


3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer: Inheritance comes from a class Component. Each class can have specified attributes, functions, objects and objects created as instances of that class can inherit these. Inheritance can serve as a shortcut when writing code, because you can have a general pool of attributes that are shared and create unique instances that have access to this info
  

  Researched answer: Inheritance is the mechanism in which one class acquires the property(s) of another class. Allows us to reuse the fields and methods of the existing class
  Inheritance facilitates reusability and is an important concept of object oriented programming

