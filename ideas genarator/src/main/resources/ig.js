let theIdeas = [
    "HTTP Methods Project",
    "Wikipedia Search Project",
    "Weather Data Project",
    "Github Project",
    "Zomato Restaurant Project",
    "Comfy House Project",
    "Analogue Clock Project",  
    "JavaScript clock",
    "JavaScript calculator.",
    "Tic Tac Toe game.",
    "JavaScript tip calculator.",
    "Change the Background Color Project",
    "Local Pass the Message Project",
    "Simple Counter Project",
    "Array Testimonials Project using Objects",
    "Tip Form Project",
    "Grocery List Project #1",
    "JavaScript OOP Budget App",
    "Coffee Shop Project",
    "Car Dealership Project",
    "Random Person AJAX Project",
    "Random Joke AJAX Project",
    "Wikipedia Search Project",
    "Weather Data Project",
    "github Project",
    "Zomato Restaurant Project",
    "Comfy House Project",
    "Digital Clock Project",
    "JavaScript Tip Percentage Calculator",
    "Word Length Calculator Project",
    "javascript day of week project",
    "JavaScript Image Slider",
    "math addition app project",
    "JavaScript Height Conversion Tool",
    "Word Finding Game Project",
    "JavaScript Car Game Project",
    "Input Field Character Counter Project",
    "Element Scrolling Content Code Snippet Project",
    "Fun with The Document Object Model Project",
    "Just JavaScript Click Counter Project",
    "Image Popup Window Project",
    "JavaScript Word Guessing Hangman Game Project",
    "JavaScript Modal Popup Example Project",
    "Image Carousel JavaScript Animated Slideshow Application Project",
    "Star Rating Project",
    "Plane Bomber Game JavaScript Project",
    "JavaScript Accordion Component Project ",
    "Chaser Box Game Project",
    "Tool tip Project",
    "Email Exacter Application Project",
    "Popup Message JavaScript Project",
    "Clipboard – Copy and Move Project",
    "Pure JavaScript Calculator Project",
    "Editable Shopping List Project",
    "Placeholder Image Path Generator Project",
    "Catch Element Game Project",
    "Element Mouse and Click Events Project",
    "Create Form Validation Project",
    "Cookie Get Set Tester Project",
    "DOM Interaction Application Project",
    "Google Sheet Data to CSV Exporter Project",
    "Flying Bird Game Project",
    "Number Guessing Game Project",
    "Element Catcher Game Project",
    "Alien Invader Game Project",
    "Card War Game Project",
    "YouTube API Connection Project",
    "Brick Breaker Paddle Ball Game",
]

let idea = document.getElementById("idea");

function getIdea(){
    idea.innerHTML = theIdeas[Math.floor(Math.random()*theIdeas.length)];
}