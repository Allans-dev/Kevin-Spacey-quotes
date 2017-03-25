
var quotes = [
  "The only thing worse than a loser is someone who won’t admit he played badly. - Kevin Spacy",
  "If you haven’t turned rebel by twenty you’ve got no heart; if you haven’t turned establishment by thirty you’ve got no brains! - Kevin Spacy",
  "Sometimes the person who is the most logical is the person whom we call insane. - Kevin Spacy",
  "If you only look at a person through one lens, or only believe what you’re told, you can often miss the truth that is staring you in the face. It’s so easy for us to misperceive and see the thingsin others that we want to see. And, when we’re wrong, and often we’re dead wrong, we miss the truth. - Kevin Spacy",
  "The more successful you become, the higher the houses in the hills get and the higher the fences get. - Kevin Spacy",
  "I’m trying to do something with my success which is bigger than myself.  I’m no longer interested in my personal career. I am interested in the impact I can have on a lot of other people’s careers and on audiences. - Kevin Spacy",
  "I’m used to people thinking I’m nuts. And you know what? I kind of love it. - Kevin Spacy",
  "We too often, conveniently and cutely, try to label everything so that we understand it, and there are things we’ll never fucking understand, ever. All we can do is just watch them. - Kevin Spacy",
  "You need the failures to get the success. You learn more from that. - Kevin Spacy",
  "I feel it’s a responsibility for anyone who breaks through a certain ceiling to send the elevator back down and give others a helpful lift. - Kevin Spacy",
  "I’m aware that, from the outside, this looks like I’ve got quite an ego. - Kevin Spacy",
  "If you feel you have something to give, if you feel that your particular talent is worth developing, is worth caring for then there’s nothing you can`t achieve. - Kevin Spacy",
  "Money is the Mc-mansion in Sarasota that starts falling apart after 10 years. Power is the old stone building that stands for centuries. I cannot respect someone who doesn’t see the difference. - Frank Underwood",
  "I love that woman. I love her more than sharks love blood. - Frank Underwood",
  "Friends make the worst enemies. - Frank Underwood",
  "Power is a lot like real estate. It’s all about location, location, location. The closer you are to the source, the higher your property value. - Frank Underwood",
  "There are two kinds of pain. The sort of pain that makes you strong, or useless pain. The sort of pain that’s only suffering. I have no patience for useless things. - Frank Underwood",
  "There’s no better way to overpower a trickle of doubt than with a flood of naked truth. - Frank Underwood",
  "Proximity to power deludes some into thinking they wield it. - Frank Underwood",
  "For those of us climbing to the top of the food chain, there can be no mercy. There is but one rule: hunt or be hunted. - Frank Underwood",
  "The road to power is paved with hypocrisy, and casualties. - Frank Underwood",
  "The nature of promises, Linda, is that they remain immune to changing circumstances. - Frank Underwood",
  "A great man once said, everything is about sex. Except sex. Sex is about power. - Frank Underwood",
  "From this moment on you are a rock. You absorb nothing, you say nothing, and nothing breaks you. - Frank Underwood",
  "I’ve always loathed the necessity of sleep. Like death, it puts even the most powerful men on their backs. - Frank Underwood",
  "The best thing about human beings is that they stack so neatly. - Frank Underwood"
];
var quote = "";
function newQuote(){
  quote = quotes[(Math.floor(Math.random() * (quotes.length)))] ;
  document.getElementById("quoteDisplay").innerHTML = quote;
};

$(document).ready(function(){

$("#new-quote-btn").click(function(){
  var displayTwitter = document.getElementById("twitter");
  displayTwitter.style.display = "inline-block";
  console.log(displayTwitter.style.display);
})

$(".twitter").click(function(){
   $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quote);
 });
});
