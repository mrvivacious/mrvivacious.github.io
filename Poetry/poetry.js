// List of lists
// Each poem list is [title, date, body]
// ['', '', ''],
const poems = [
  ['October 16 2019', 'I\'m livid', 'The cold air kisses my face\nIf only it was you, but you\'re not around\nNot even in town, nor in state\nWhat you\'re upto and how you\'ve been\nIs all that I think about\n\n' +
    'It just got cold and we\'ve just entered fall\nLong since, however, I\'ve fallen for you\nDance in these leaves and pose under trees\nCome to campus, I wanna put my hoodies on you\n\n' +
    'Rhyming is hard fuck it\nI want you, but I won\'t let this desire consume my time for school or friends\nI don\'t wanna help my feelings, but I can\'t share a moment with you, so I\'m going to temporarily\n' +
    'Put you on hold\nYou are sensible and would probably offer the same advice\nI think I love you, or so, but\nThese next reps are for me\nI sit you out\nI\'ll catch you another time, probably catch these feelings again too\n\n' +
    'From your admirer\n\nMissing you ~'],
  ['October 13 2019', 'Snack', 'You look good\nYou smell good\nAre you a snack, are you food?\nI just wanna know,\n\nDo you taste good?\n\n' +
    'Oh, you have to go now?\nDo you have to go, now?\nWhy do when you could\n\nCome\nWith me\n\nCome with me to a place\nA place for only you and me\nOnly\n\nYou and me\n\n' +
    'My style\nYou could say\nIs tongue-in-cheek, but\nreally, I wanna put\nmy\n\nTongue\nin\nYour\nCheek\n\nTell me, now, how it\nTastes\nMy tongue,\nMy tongue between your cheeks,\n\nMy tongue between your\nteeth\n\n' +
    'Fantasy\nThis scene\nI daydream\nThe actress and the actor\nRespectively you and me\n\nWill this be something\nI shall see\nWith you...\n...\nMaybe, I don\'t know...\nThe thought of you and me is maybe something with which you disagree\n' +
    'If you read this,\nThe girl I wanna see,\nHurry and reject me, so that I can reclaim my thoughts and my life can proceed,\nOr like, fucking, message me\nFor knowing that you\nmiss me\nWill feel so\nlovely\n' +
    'And if I don\'t hear anything\nThen I\'ll\nAs I\'ve been\nContinue to roam\n\nThe body of a human\nOperated by\nA\nLove\nZom\nbie'],
  ['October 11 2019', 'Wife TBD', 'I wanna\nSee you\nGreet you\nMeet you\nWant you\n\nDate you\n\nHug you\n\nKiss you\n\nLove you\n\nFuck you\n\nHold you\n\nWife you\n\nMarry you.\n\n\n\nSee you ~'],
  ['September 30 2019', 'By heart', 'More for me than for you, for the more I can be me, the more I can enjoy with you.'],
  ['September 30 2019', 'A she for this he', 'Sorry\nYou can\'t stay in my head any longer\nI enjoy the thought of you and us\nI miss you a lot too.\nIt\'s that, I\'m not going to see you for who knows how long\nWe will meet again, time and place to be announced after the fact\n' +
    'I just can\'t support you in the home that is my mind\nWe\'re overbooked -- I barely have room for me\nI\'ll see you around. Someday.\nI\'ll work hard and try to mature and grow in different parts of my life and try new things\n' +
    'At the very least, the next time we meet, you can be proud of how far I\'ve come\n\nMy friend.'],
  ['September 27 2019', 'Marcus', 'The turn is yours, but the pleasure is mine'],
  ['September 26 2019', 'Jealousy', 'Not a good feeling at first\nHowever you will realize\nJealousy is an indicator that you still have unrealized potential\n\nGo get it done, or remember why you stopped caring in the first place and go focus on that which you do desire'],
  ['September 25 2019', 'Fuck outta here', 'The time\'s always been here\nI just burned it earlier on miscellaneous shit\n\nNow, lemme burn it on my stuffs before I do miscellaneous things'],
  ['September 24 2019', 'Linus', 'If my words got you hot\nMy touch will have you\nSweating\n\nIf my touch has you sweating\nMy embrace will have you\nPanting\n\nIf my embrace has you panting\nLet\'s start\n\nDating.'],
  ['September 24 2019', 'In my ears ring loud forever, in my mind, forget never', 'Questions of anxiety?\nI answer by\nActing.\nMoods of existentialism?\nI silence by\nExisting.\n\n...\n\nYou, who stands in the way of my fullest self-expression and comfort with myself –– begone.\nI express myself to the fullest for I have worked to understand my self.'],
  ['September 23 2019', 'Last time I didn\'t have the idea but next time I\'m at the theatre with a girl it\'s on sight', 'Dammmmmmm you didn\'t need to dress so well, you know I can\'t see you after they turn the lights off in the theatre, remember?\nDon\'t get me wrong,\nthough...\n' +
    'I have this movie ticket but I\'d be happy to spend the next two hours with my\neyes\nin\nyours.'],
  ['September 22 2019', 'Snowy', 'Dog happily eats off the floor\nI am not so willing to eat off the floor\nThe difference: I was taught to eat from a plate and the dog was taught to eat from the floor\n\n' +
    'What other parts of me stem from teaching as opposed to my own experiences?'],
  ['September 10 2019', 'I state:', 'When I die, bury my body at Siebel, and with my heart and brain, cut them into pieces and bury them in the countries where my apps have been downloaded'],
  ['September 10 2019', 'Jihoon', 'It had been two years since I last saw you\n\nOne day, one look, one embrace,\n\nI no longer have to miss you.'],
  ['September 7 2019', 'Where do you see yourself in five years?', 'Five years from now, find me in an aisle at the local grocery store, tongue deep in my girl\'s mouth next to a cart filled with children\'s cereals (for me, of course)'],
  ['September 7 2019', 'MF = My Friend', 'Goodbye?\nWhy not \'Greatbye\'?\nFuck your goodbye, take this\nSupremebye\nMF'],
  ['September 3 2019', 'Resolve', 'I\'m gonna build the world\'s best porn blocker and then nobody else will have to and then nobody else will need to\nsuffer'],
  ['August 25 2019', 'Jon Sam Dan', '"You\'d hate to see it..." and I love to see you'],
  ['August 22 2019', 'Nice lines', 'The meaning of this expression is unknown to me\nSimilar to a personality, it will require more than a first glance to see the' +
    ' essence of this illustration\nHow long will it take?\nOne hour, ten hours, one hundred hours?\nOne thousand hours, ten thousand hours, one million hours?\nHow long will it take\n' +
    'How long would it take\nHow long should it take\nHow long could it take\nHow much longer will it take for me to learn\nIf you and I\nCan be meant for each other'],
  ['August 22 2019', 'Hmm...', 'I can\'t see you\nI can\'t meet you\nI don\'t hear from you, but I could call you...\n' +
    'No job, I\'m thinking about you\nIf I was employed, I\'d still think about you, call it a double shift\n' +
    'After work, I\'ll think about you, call it overtime\nThe weekends too, I remember you, call it hard-working\n' +
    'I think about you much, but why? Why do I think of you, why do I choose your thought, when I can\'t even meet you?\n\n' +
    'This feeling I have not felt in so long..., your thought reminds me of love\nThrough our interactions and our memories I have found that I am still' +
    ' able to love and desire a pure form of love\n\nThe person who just learned how to ride a bicycle without training wheels' +
    ' will be hard to seperate from this newfound joy.\n\nI am this person and through you and us\n\nI can ride my bike without training wheels'],
  ['August 21 2019', 'Net worth', 'My net worth is what I define, and I define my net worth to be\nKindess\nEmpathy\nCompassion\nSeeking forgiveness\nGiving forgiveness\nFriendship\nLove\nHumility\n' +
    'Learning from mistakes\nExperience\nSeeing for myself\nHumanity\nThe human condition\nEmotion\nExpression\nGentle\nManifestation\nAbstraction\nResolve\nDesire\nStrength\nValues\nHuman'],
  ['August 20 2019', 'Jayem my friend, student, lover', 'Ey girl\nIf I can\'t hold you\nHey girl\nLet me get some soju'],
  ['August 19 2019', 'Prithiv Kumar', 'No boba\nNo rubix\nNo games\nNo trampoline\nNo summer UIUC session + Adrian\nThanks to phys212 in 2019 summer\n' +
    'Thanks to Prithiv recognizing me when I asked a question\nThanks to Youth Global Citizen for meeting Prithiv'],
  ['August 13 2019', 'Vivek Bhookya', 'I am not a software developer\n\nSoftware development is just something I sometimes happen to do\n' +
    'As I am not a software developer, I shouldn\'t feel any imaginary expectations or pressure to live or behave a certain way\n\n' +
    'Of course, I will keep my software skills sharp because I want to be the greatest programmer of all time, but how and what I' +
    ' desire is my own discretion and judgement\n\nI am not a software developer\n\nI am me\n\nI\'m going to do me and this may manifest' +
    ' in the form of software development, however\n\nI am not a software developer\n\nI am me\nI want to do me\nI do me\nI\'m doing me'],
  ['August 12 2019', 'Nice', 'Things don\'t make sense\nBrain: Make this make sense\n\nAlso brain: Suffering\n\nSome things will never make sense because that\'s just how a mind is shaped\nNo longer desire for sense --\nAccept that nonsense is nonsense from the get-go and carry on'],
  ['August 8 2019', 'Today poem', 'The outcome may reject your expectations but you should not reject yourself'],
  ['August 5 2019', 'Exhausted', 'What concerns me the most is not that I don\'t follow any set exercise routine but that I feel such discomfort with my body right now.\nWhy I cannot just be comfortable with my own body?'],
  ['August 4 2019', 'Happiness', 'With the right hands, anyone can make anything seem completely undesirable.\n\nHe he'],
  ['July 29 2019', 'When shall I no longer be tormented by your existence?', 'Rain may wash away the tears on my face, but it cannot rinse my mind of these feelings, nor my heart of these pains'],
  ['July 28 2019', 'Love and Hope', 'The world is as it is.\nIt is courtesy of my memories that makes these parts\nSpecial.'],
  ['July 28 2019', 'Vivek Bhookya', 'Without knowing what I want, all seems\npreferable\nand I become\nlost.'],
  ['July 28 2019', 'Are you ok?', 'My heart\ncraves you,\nbut my mind is very afraid'],
  ['July 25 2019', 'Screen off memo', 'All will be well\nHope\nfuture\nlove\nfamily\npassion\nAll is well\n\nA way will be found for the desire\nFeedback is not in the domain, only\naction'],
  ['July 22 2019', 'Suffer', 'How does your\n"All have worth and value"\nfare when you try to define yourself?'],
  ['July 20 2019', 'Feelings I can\'t quite name', 'I want you and I\nOne more time'],
  ['July 19 2019', 'What\'s this?', 'There\'s plenty of oxygen, but I\'m suffocating'],
  ['July 18 2019', 'Close-call', 'My feet are green, therefore I\'ve been on Green Street'],
  ['July 17 2019', 'Journal', 'The books with the blank pages end up having the most interesting stories.'],
  ['July 17 2019', 'Shravya', 'Is your genome\nATCG,\nbecause you are\nA\nTerrificly-\nCute\nGirl'],
  ['July 16 2019', 'Friend', 'I wouldn\'t sweat more physics if it meant that I could keep coming home to you'],
  ['July 15 2019', 'Why do you insist?', 'Of all times, now? Of all places, here? How and why do you come? How and when will you leave?\n...Well, since you\'re here, let\'s share the time to figure out what you need.'],
  ['July 7 2019', 'Goddammit I wrote June 7 in my journal when it was July 7 lmao wtf', 'Let us be optimistic and believe that we shall live for 100 years, for even one day of vigor and peace is healthier than one hundred years drowned in a fear of death.'],
  ['July 2 2019', 'Sleep zzzz', 'It\'s not like the problems are solved, right, but when I sleep and wake up, I don\'t feel whatever unpleasantries I was feeling earlier. Sleep didn\'t solve my problems, but why does it hide them? Or, why do I need to feel my anguish to accept that things could be better?'],
  ['July 1 2019', 'Madhuri good luck finding a job', 'It is not you that I desire; rather, it is the way you make me feel, that I crave.'],
  ['May 30 2019', '', 'I won\'t forget because I\nChoose to not forget'],
  ['May 30 2019', 'Grass is always greener', 'We go to that grass and realize that our old grass itself was pretty good\nIt isn\'t about the grass\nWe are just good at seeing the positives in that which we don\'t have'],
  ['May 22 2019', 'Headache', 'I made it myself\nI will take care of it myself'],
  ['May 22 2019', 'Another poem wtf', 'how can we make everything uniformly larger without fucking up the margins ?????'],
  ['May 19 2019', '', 'There\'s something in my life that I feel is lacking and,\nYou, me, ice cream, do you want that happening?'],
  ['May 14 2019', '', 'I\'m so good at time management that I am dead -- I lived out my whole life in the time I otherwise would have spent on miscellaneous stuff and procrastination.\n' +
    '---\nWe define our happines. Likewise, we define our unhappiness.\n---\nIf you have a different opinion, I\'ll respect your experiences. If you ask my for help, only then may I provide guidance.'],
  ['May 13 2019', '', 'I feel pain,\nI choose peace.\nNow, only peace is left.'],
  ['April 16 2019', '', 'The older I get, the less it seems I know, the less certain I am about things\n\nAlthough, am I doing less or more compared to before?'],
  ['April 13 2019', '', 'My lack of clarity cannot be substituted with the opinions of the world ~'],
  ['April 8 2019', '', 'I don\'t know why we stopped talking\n\nIf it was something I did, then I\'ll apologize because I am responsible.\n\nIf nothing happened, and we really did just stop talking, then let\'s talk.'],
  ['March 26 2019', 'BLEACH', 'When I work on projects, I feel like I am working on a part of my soul'],
  ['March 6 2019', '', 'Only after I came, could I see the truth,\nOnly after I came, could I think again'],
  ['March 3 2019', '', 'Am I so lonely that I build apps to take the place of the friends I don\'t see that much?'],
  ['January 31 2019', '', '"Be happy?"\n\nYou don\'t want to be happy?\n\n"No"\n\nOK, then!\nJust be whatever you want to, then!'],
  ['January 28 2019', '', 'I was fully fine.\n\nThen, the lecture started playing...\n\nI instantly felt famished of energy, desiring sleep simply from the sight of my lecture videos'],
  ['January 24 2019', '', 'I spend a lot of time thinking about this girl that\nI don\'t\n\nEven\n\nSee\n\nIn real\n\nLife.'],
  ['January 20 2019', '', 'Only when others spoke about such things did I feel that I missed out and should\'ve planned better.\nOnly then...'],
  ['January 13 2019', '', 'The congratulations I \'need\' are the congratulations from myself\n\nyippee\nyay\nHooray'],
  ['January 7 2019', 'Wisdom in haiku form', 'Girls can be cute but\nWe don\'t necessarily\nhave to think them cute'],
  ['December 21 2018', 'Writing in ink The color of pink?', 'Accidents happen\nReflection is important\nBe focused\nNot necessarily on some particular xyz, but focus on what you\'re doing, whatever that may be'],
  ['December 13 2018', '', 'I can\'t think for myself and instead I rely on my senses to show me the truth'],
  ['November 19 2018', '', 'I sit writing away\nWith unlimited paper and unlimited ink\nAlthough the pen moves forward across the phone\n' +
    'is my life and that around me moving forward as well?'],
  ['DATE', 'TITLE', 'POEM']
]

function newlineToBreak(poem) {
  while (poem.includes('\n')) {
    poem = poem.replace('\n', '<br>');
  }

  return poem;
}

function autoReload() {
  setTimeout(refresh, 4000);
}

function refresh() {
  location.reload();
}

function main() {
  // Build the poem HTML
  let div_poems = document.getElementById('poems');

  for (let i = 0; poems[i]; i++) {
    let poemObj = poems[i];
    let poemDate = poemObj[0];
    let poemTitle = poemObj[1];
    let poem = poemObj[2];

    // Create and append the title
    let poemObject = document.createElement('p');
    let text = document.createTextNode(poemTitle);

    let br = document.createElement('br');
    let hr = document.createElement('hr');

    poemObject.appendChild(text);
    poemObject.id = 'poemTitle';

    div_poems.appendChild(poemObject);

    // Create and append the date
    poemObject = document.createElement('span');
    text = document.createTextNode(poemDate);

    poemObject.appendChild(text);
    poemObject.id = 'poemDate';

    div_poems.appendChild(poemObject);

    // Create and append a <br>
    div_poems.appendChild(br);

    // Create and append the poem
    poemObject = document.createElement('span');
    text = document.createTextNode(poem);

    poemObject.appendChild(text);
    // div_poems.children[div_poems.childElementCount - 1].innerHTML = poem;
    poemObject.id = 'poem';

    div_poems.appendChild(poemObject);
    // console.log(div_poems.childElementCount);
    // console.log(div_poems.children[div_poems.childElementCount - 1]);
    div_poems.children[div_poems.childElementCount - 1].innerHTML = newlineToBreak(poem);

    // Add invisible hr for spacing
    div_poems.appendChild(hr);
  }
  document.title = 'Poetry, ' + poems.length;
}

main();

// If post 8 pm, switch on dark mode
if (new Date().getHours() <= 8 || new Date().getHours() >= 20) {
  // Recolor the title texts
  document.getElementsByTagName('h3')[0].style.color = 'blanchedAlmond';
  document.getElementsByTagName('h3')[1].style.color = 'blanchedAlmond';

  // Recolor the page background
  document.body.style.background = 'black';

  // Recolor all paragraphs
  let p = document.getElementsByTagName('p');

  for (let i = 0; p[i]; i++) {
    p[i].style.color = 'blanchedAlmond';
  }

  // Recolor the poems
  let spans = document.getElementsByTagName('span');

  for (let i = 0; spans[i]; i++) {
    if (spans[i].id === 'poem') {
      spans[i].style.color = 'blanchedAlmond';
    }
  }
}

// autoReload(); // Great to avoid manual refresh
