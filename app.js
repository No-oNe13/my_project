



function clicked() {
  //Make an array of quotes
  let quotes = [
    "Real change is when you see the same old things differently",
"Treat yourself to a facelift - Smile!",
"Status is a gauge people use to measure what isn't important",
"Do you listen with the same enthusiasm with which you speak?",
"Eternity starts before you die!",
"The part of you that notices how old or how young, how fat or how thin you are, never changes",
"You can't forget what you won't forgive",
"grief has opened many a heart that happiness couldn't",
"A comparison is a sophisticated judgement",
"It is impossible to create pressure without resistance",
"Possibility is the seed of the flower",
"It must surely be an act of ignorance to suppose that the same organised intelligence which created anything as sophisticated as you and I, could eversubject us to somethingas barbaricas luck",
"Achievement is the amount of successyou allow yourself",
"You must carry what you won't let go",
"Life's like a flower. You have to push your way through the top soil and often some manure before you get to blossom",
"Confidence is not being without fear - It's not allowing it to control you",
"Friendship holds people together when they are apart",
"Peace. It dosen't happen to countries, only people",
"The reason many miss out is because their priorities are different to their dreams",
"Personalities are fittings, not fixtures",
"Try substituting the word fear for the word excitement",
"Whatever you blame will control you",
"Many a life has been starved by the hunger for success",
"How much is enough",
"How much do your opinions allow for the feelings of others?",
"Sacrifice is the root of the flower",
"the real art of listening, is listening to those who will not listen to you",
"Depression can be a wonderful gift, concealed within a lousy wrpping",
"The best place to have a party is between your ears!",
"Selfishness will always be rewarded with discontentment",
"The entire universe in its awesome vastness, imortant though it seems to us, is just one of a billion cells forming the wing of a butterfly which settles on the petal of a flower in one of many gardens in a place called life...",
"Enjoy the dreams of others as well as those of your own",
"Instant Karma: Did you ever see an angry person who was happy?",
"Passion is the turbo boost on your life!",
"Use the past as a libary, not a home",
"Your self worth is measured by your ability to receive as much as your ability to give",
"Many people will use up a huge proportion of their lives just trying fit in",
"Many people will use up a huge proportion of their lives just trying to look different",
"Happiness is a mood. Contentment is a state of being",
"Every action marks the spot, where a thought once stood",
"Patience will always come to those who wait",
"What do you hold onto the longest, a criticsm or a compliment?",
"Disappointment is simply a dream that doesn't want to become a reality",
"People who think they won't achieve much, rarely do. People who think they will achieve much, rarely don't",
"Compromise is the shape of water",
"Pain has created more love songs than happiness",
"The one who whispers will draw people closer than the one who shouts",
"Only your lack of trust will ever stop you letting go",
"You have made important whatever offends you",
"A co-incidence is an earthly reply to a cosmic fax you sent earlier!",
"Don't be obsessed to live as long as you can - but as well as you can",
"People who reach out will always touch more",
"If you need directions, don't ask someone who's lost...",
"Much of the beauty of life is missed by people who are busy seeking the approval of others",
"Pain gives birth to miracles! Ask any mother",
"Increase your odds... Don't wait for what's around the corner. Go and look around as many as you can!",
"You don't find treasure on trhe surface",
"Laughter is the dance of the spirit",
"Do you listen or wait to talk?",
"The imagination is a dream factory of which realities are a by-product",
"Expanding on what is right instantly gives less space to what isn't",
"Prejudices are the strings which controls the puppet",
"it's the silence between the notes that creates the music",
"If life is but a dream, then live it...",
  ];
  //console.log (quotes);

  //Get a random element from the array of quotes
  let quotesRandom = quotes [Math.floor(Math.random() * quotes.length)];
 // return quotesRandom

  //We need to insert the random element from the aray to the HTML document
  document.getElementById('output').innerHTML = quotesRandom;
};



