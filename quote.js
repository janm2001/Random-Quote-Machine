


var quote = [
"I\’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\’t handle me at my worst, then you sure as hell don\’t deserve me at my best. -Marilyn Monroe",
"You only live once, but if you do it right, once is enough. -Mae West",
"A friend is someone who knows all about you and still loves you. -Elbert Hubbard",
"Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi",
"I\’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou ",
"To live is the rarest thing in the world. Most people exist, that is all. -Oscar Wilde",
"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. -Bil Keane",
"That which does not kill us makes us stronger. -Friedrich Nietzsche",
"The greatest pleasure in life is doing what people say you cannot do. -Walter Bagehot ",
"Just because someone doesn\’t love you the way you want them to, doesn\’t mean they don’t love you with everything they have. -unknown"



]
function newQuote(){
	var randomNum = Math.floor(Math.random() * (quote.length));
	document.querySelector("#quote").innerHTML = quote[randomNum];
}


	


