// autoReload(); // Great to avoid manual refresh

// List of lists
// Each poem list is [title, date, body]
// ['', '', ''],
const poems = [
  ['November 13 2019', 'Brown body', 'I knew I\'d be disappointed if what I found wasn\'t hot\n' +
    'I touched with my fingers, such smooth curves, I thought\n' +
    'I brought my face close...the heat was definitely a nice change from the frost\n' +
    'What to do with my tongue, I didn\'t really know where to start\n' +
    'No plan of action but the one I\'d make up, no script, just this raw, developing plot\n' +
    'I pushed my lips together and with my hand, I gave a little loft\n' +
    'Time moving slow, I moved my head close and went after that which I sought\n' +
    'I kissed\nI sucked\nI sipped\nThe chocolate milk really wasn\'t too hot\n\n' +
    'Tonight, it looks like my tongue will be spared a burned spot'
  ],
  ['November 10 2019', 'Forbidden writing', 'Don\'t touch my notebook\n' +
    'Don\'t touch my journal\n' +
    'Don\'t touch my computer\n' +
    'Don\'t fucking touch anything I write without asking\n\n' +
    'I don\'t want you accidentally stumbling into the pain that is the content of my brain'
  ],
  ['November 8 2019', 'Bachelor\'s of liberal arts and sciences | Master\'s of bations', 'I open my mouth, strange noises come out (what am I doing, what am I feeling)\n' +
    'I\'m touching myself, my self-control has been shelved (what am I doing, what am I feeling)\n' +
    'My hand on my hip, my finger on the tip (what am I doing, what am I feeling)\n' +
    'I don\'t wanna pull out, but it\'s tempting to slip (what am I doing, what am I feeling)\n' +
    'How did I get here (how), how was this inspired\n' +
    'And why am I stressing, I\'m starting to perspire (wow)\n' +
    'Good grief, show me my desire (show me)\n' +
    'My pants on the ground, my eyes on the ceiling (oh homie)\n' +
    'My wrist is clicking, now my body is leaking (show me)\n' +
    'This ain\'t something anyone needs to be seeing (oooh)\n' +
    'Unless you\'re my girl\n...what am I doing, what am I feeling\n' +
    'But then I\'d be spilling between me and you\n' +
    'I\'m not lying, I don\'t know what to do\n' +
    'My feeling that they labeled "sexual", this is the first time I\'ve stopped and looked into\n' +
    'What am I doing, let\'s check out what I\'m feeling'
  ],
  // ['November 7 2019', 'I met this boy', 'I am not sure, where to start, I will just start ' +
  //   'with what I feel in my heart\n' +
  //   'I\'ll start with his eyes\nHis beautiful eyes\n' +
  //   'I like when he looks at me with his half-open eyelids covering the tops of his pupils\n' +
  //   'It\'s a gentle gaze, and he makes me shy when adds a small smile to that face\n' +
  //   'His black chain on his brown chest\nThat gold jewelry sitting on his soft neck\n' +
  //   'The pieces in his ears aren\'t the same\nPeople ask "why?"\n"My style" he says, but he doesn\'t need to explain\n' +
  //   'For he wears that jewelry not for them, but\nFor him\n' +
  //   'I touch his jewelry, I touch his ears, I touch his hair\nI explore everywhere\n' +
  //   'The skin on his skull, I observe in full\nFind me biting his lips, find me giving them a little pull\n' +
  //   'Often, we greet\nLess often, we meet\nI arrive\nHe comes\nIt\'s interesting for me, hearing him breathe\n' +
  //   'After a moment, he\'ll stop curling those feet\n' +
  //   'He open his mouth\nHe laughs so loud\nMy mom has said something like...\n' +
  //   '"Those who laugh the loudest, have suffered the most"\nMom shut the hell up, lmao\n' +
  //   'Sure he\'s had some troubles, but he is so much more\nThough it\'s sometimes hard for him to see it, but he\'s no poor soul\n' +
  //   'Out of that same mouth, endless jokes pour\nHe has no interest in being a comedian, we\'ve talked about our goals\n' +
  //   'Yet in his idle time he\'ll review, he\'ll write, it\'s certain he desires for more\nWhat for?\n' +
  //   'The experience of laugh, even after having so many in store\nSeeing them change the shapes of their eyes, ' +
  //   'their teeth showing through their smiles, and all the while, their faces lit up so bright\n' +
  //   'Really, it\'s just this, that brings him delight\n'
  // ],
  ['November 6 2019', 'Show me how it heals', 'I don\'t need your approval to say yes\n' +
    'I don\'t need your permission to say no\n' +
    'Right now, it\'s just me\n' +
    'I don\'t know about the future, I\'ll know when it gets here\n' +
    'Until then,\n' +
    'It\'s just me\n' +
    'The past? I can\'t comprehend, right now isn\'t the past\n' +
    'Right now, it\'s just me\n' +
    'What are my goals\n' +
    'What is my personality\n' +
    'What are my hobbies\n' +
    'I don\'t know, you are the observer, you tell me\n' +
    'I only do that which my life has taught me'
  ],
  ['November 6 2019', 'UIUC roads please relax thanks', 'I only saw the whites of her eyes\n' +
    'Was she smiling or frowning or anything-in-betweening, I couldn\'t tell ya, not gonna lie\n' +
    'For it was dark\n' +
    'I\'m with my homie in his car\n' +
    'We\'re driving by Scott park\n' +
    'Why were you on the road\n' +
    'You could\'ve been hit smh\n' +
    'Your jacket was dark, we barely saw shit\n' +
    'One little slip and you\'d be in bandages\n' +
    'Use the crosswalk you pedestrian\n' +
    'Or wear something bright\n' +
    'Or don\'t choose to walk when we\'re right by'
  ],
  ['November 4 2019', 'Woosh', 'The creaks of your metal body from the kiss of this cold wind\nIt helps me breathe joyfully'],
  ['November 4 2019', 'D', 'If I didn\'t want you, I wouldn\'t keep replaying that night with you in my head\n' +
    'If I didn\'t want you, I wouldn\'t keep up at night with thoughts of you on my bed\n' +
    'If I didn\'t want you, I wouldn\'t keep wondering what it\'d be like to share our bodies in bed\n' +
    'If I didn\'t want you, I wouldn\'t keep telling myself I shouldn\'t ask you out because I don\'t know what lies ahead\n' +
    'If I didn\'t want you, I wouldn\'t keep talking about you with all these friends on all these threads\n' +
    'If I didn\'t want you, I wouldn\'t keep considering that regardless of what happens between us, I\'ll soon be dead\n' +
    'My friend\n' +
    'If I didn\'t want you, I wouldn\'t keep bending my mind\ninto this into that\n' +
    'To stop myself from asking you to be mine\n' +
    'To force you out of my thoughts in my unoccupied time\n' +
    'To punish myself out of wanting you as if attraction is a crime\n' +
    'To discourage myself from seeing you as this girl who\'s so fine\n' +
    'I\'m done beating myself up...I\'m exhausted,\n' +
    'Lemme reach into my soul and pull out these feelings I wanna get lost in'
  ],
  ['November 4 2019', 'Joonmin Kweon', 'The days that you try are the days that count'],
  ['November 3 2019', 'Nothing to gain nothing to lose just right now to enjoy', 'Our interaction is going to be a piece of each other\'s development, ' +
    'lemme try to make it a good piece...\n\nOne thing I can do for you, is accept you. That\'s the best thing I could do for you. Everything else is for ' +
    'you to figure out.'
  ],
  ['October 31 2019', 'Skyrim life DLC', 'I somehow caught a break from this storm inside me\n' +
    'Once I caught a break from this storm inside me, I saw the snowflakes choreographing this cold storm outside me\n\n' +
    'Now, I can join the snow in their chilled form'
  ],
  ['October 29 2019', 'Fuck the milk best buy date was two days ago lol', 'Ahhh\nThe milk is the same color as my skin\nI mixed way too much choco-\nWait\nThis tastes pretty good\nChocolate milk'],
  // ['October 29 2019', 'Call me cs + astronomy, now come drop thatassonme', 'I wanna fuck this girl\nCan\'t stop thinking about\nPutting my tongue in her mouth\n\n' +
  //   'Put your fingers between mine, girl\nIntertwined, interlaced...do you dress your skin in lace?\nPut it in my mouth and I\'ll pull it off, no doubt...come here, let\'s shrink this space\n\n' +
  //   'I feel so comfortable with you, girl\nOur last kiss was practice\nMy next lip, you\'ll catch me at my bestest\n\nI look into your eyes, you\'ll put me in arrest\nTake me home and undress\n' +
  //   'Come over and you\'ll find, my bed has no sheets\nYet that won\'t stop me from giving you this meat\nLet\'s date, I insist\nA relationship, I desire to exist\nPlay with me, let\'s make bliss\n' +
  //   'While I bite your skin, while I bite your lips\nWhatever your past, I don\'t care, I won\'t prejudice\nAs for mine...I\'ve grown and I\'m growing, in peace it rests, in peace I rest\n' +
  //   'Right now, it\'s just you and me\nHere on out, let our worlds see\nThis story...your initials X VB\n\nNow come around, let\'s go around town\n' +
  //   'Let\'s go home, show me your shade of brown\nLet\'s go home,\nI\'ll show you this brown\n\nPut me in your pussy, and your spit in my mouth so juicy\n' +
  //   'Put a tit in my mouth, I don\'t care which side, I ain\'t choosey\nPin you up against this wall, come feel my all\nCome with your all, come until my dick refuses to grow tall\n' +
  //   'Throw this hand on your clit\nUnleash the trigger in this finger\nI can\'t help myself,\nI just wanna itch her\nThrow your hand on my head\nAnd drown me in your body\n' +
  //   'My final words?\nMy tongue going sloppy\n\nFinally, I lay, dead on this bed\nDon\'t sweat my last supper, rest assured I was well fed\nThis journey comes to an end, nothing more ahead\n' +
  //   'A chalk outline under her tush\nMy grave? Find my bone in her bush.'
  // ],
  ['October 23 2019', 'Weathered', 'My style is too hot for this cold weather'],
  ['October 21 2019', 'Comparison + ignoring my self', 'I don\'t sit and wonder if my favorite color is good or bad, so why do I scrutinize my personality?'],
  ['October 19 2019', '10-18-19', 'Anger is not something to ignore\nAnger shows that something ain\'t right\n' +
    'Anger is like an onion, each layer is a desire, a feeling, a thought of "How did things get like this", creeping regret...\n' +
    'Peel away the layers to expose the source of anger\nNow, in clarity, how will you address this?'
  ],
  ['October 18 2019', 'STAT200', 'It\'s hard to see myself for who I am when I keep looking through lenses that filter out my personality in exchange for enhancing the qualities I\'ve heard are valued'],
  ['October 18 2019', 'Oh Pingu, when will I see you?', 'Deeply riddled I feel ridiculous\nWhy do I keep choosing this topic Why do I insist\nNever ridiculed by anyone but myself\nYet it would be easier to join these physical matters\nCompared to understanding my self\nGenerally I don\'t care\nI pick my earrings, I style my own hair\n' +
    'And yet I stop and stare\nAt those I believe to appear more endearing, at those who seem to have more flair\nLook into my lungs and find\nUnreasonably, unexplainably, unwillingly\n' +
    'Tension in my air\n\nWhy not abandon this thinking\nAnd participate in that some would say on out I\'m missing\nOut of nowhere, though, a voice that knows more suddenly begins insisting\n' +
    '"How much drink needs to be drunk\nBefore your insecurities are sunk\nHow much sex shall you obsess\nBefore these episodes are put to rest\n' +
    'How much and\nWhat\nUntil\nYou\nDecide\nYou are\nEnough\nYour desires\nAre enough\nYou are only and have always been\nGoing up\nWhy play in this mirror maze of\nBluffs\nWhy choose a life, that on your mind is\nOnly rough"\n\nThis endless doubt will persist long after my life has ended\n\nThis endless doubt is no way to live.'
  ],
  ['October 17 2019', 'Honey on my bread', 'Throw my transcript on her chest\nCall that, double Ds\nNow lemme speak with some respect\nEnough is a flat chest to please me\n' +
    'Girl in my future, wife eventually\nWhisper in my ear, your fantasies\nRun this tongue across your neck\nThe variations in your breath will seduce me\n' +
    'Feign a kiss, or two, even three\nYou already know I enjoy it, when you tease me\nHoney of my life, loving me is for free\nAs for a relationship\nDon\'t expect any carry from me\n' +
    'I\'m looking for a lady who can operate independently\nAnd I\nEqually\nOffer myself and\nAll of me\nHoney of my life\nI know you wanna meet me\nNo need to say it twice\nThe specifics of our development\nI just have to wait to see'
  ],
  ['October 16 2019', 'I\'m livid', 'The cold air kisses my face\nIf only it was you, but you\'re not around\nNot even in town, nor in state\nWhat you\'re upto and how you\'ve been\nIs all that I think about\n\n' +
    'It just got cold and we\'ve just entered fall\nLong since, however, I\'ve fallen for you\nDance in these leaves and pose under trees\nCome to campus, I wanna put my hoodies on you\n\n' +
    'Rhyming is hard fuck it\nI want you, but I won\'t let this desire consume my time for school or friends\nI don\'t wanna help my feelings, but I can\'t share a moment with you, so I\'m going to temporarily\n' +
    'Put you on hold\nYou are sensible and would probably offer the same advice\nI think I love you, or so, but\nThese next reps are for me\nI sit you out\nI\'ll catch you another time, probably catch these feelings again too\n\n' +
    'From your admirer\n\nMissing you ~'
  ],
  ['October 13 2019', 'Snack', 'You look good\nYou smell good\nAre you a snack, are you food?\nI just wanna know,\n\nDo you taste good?\n\n' +
    'Oh, you have to go now?\nDo you have to go, now?\nWhy do when you could\n\nCome\nWith me\n\nCome with me to a place\nA place for only you and me\nOnly\n\nYou and me\n\n' +
    'My style\nYou could say\nIs tongue-in-cheek, but\nreally, I wanna put\nmy\n\nTongue\nin\nYour\nCheek\n\nTell me, now, how it\nTastes\nMy tongue,\nMy tongue between your cheeks,\n\nMy tongue between your\nteeth\n\n' +
    'Fantasy\nThis scene\nI daydream\nThe actress and the actor\nRespectively you and me\n\nWill this be something\nI shall see\nWith you...\n...\nMaybe, I don\'t know...\nThe thought of you and me is maybe something with which you disagree\n' +
    'If you read this,\nThe girl I wanna see,\nHurry and reject me, so that I can reclaim my thoughts and my life can proceed,\nOr like, fucking, message me\nFor knowing that you\nmiss me\nWill feel so\nlovely\n' +
    'And if I don\'t hear anything\nThen I\'ll\nAs I\'ve been\nContinue to roam\n\nThe body of a human\nOperated by\nA\nLove\nZom\nbie'
  ],
  ['October 11 2019', 'Wife TBD', 'I wanna\nSee you\nGreet you\nMeet you\nWant you\n\nDate you\n\nHug you\n\nKiss you\n\nLove you\n\nFuck you\n\nHold you\n\nWife you\n\nMarry you.\n\n\n\nSee you ~'],
  ['September 30 2019', 'By heart', 'More for me than for you, for the more I can be me, the more I can enjoy with you.'],
  ['September 30 2019', 'A she for this he', 'Sorry\nYou can\'t stay in my head any longer\nI enjoy the thought of you and us\nI miss you a lot too.\nIt\'s that, I\'m not going to see you for who knows how long\nWe will meet again, time and place to be announced after the fact\n' +
    'I just can\'t support you in the home that is my mind\nWe\'re overbooked -- I barely have room for me\nI\'ll see you around. Someday.\nI\'ll work hard and try to mature and grow in different parts of my life and try new things\n' +
    'At the very least, the next time we meet, you can be proud of how far I\'ve come\n\nMy friend.'
  ],
  ['September 27 2019', 'Marcus', 'The turn is yours, but the pleasure is mine'],
  ['September 26 2019', 'Jealousy', 'Not a good feeling at first\nHowever you will realize\nJealousy is an indicator that you still have unrealized potential\n\nGo get it done, or remember why you stopped caring in the first place and go focus on that which you do desire'],
  ['September 25 2019', 'Fuck outta here', 'The time\'s always been here\nI just burned it earlier on miscellaneous shit\n\nNow, lemme burn it on my stuffs before I do miscellaneous things'],
  ['September 24 2019', 'Linus', 'If my words got you hot\nMy touch will have you\nSweating\n\nIf my touch has you sweating\nMy embrace will have you\nPanting\n\nIf my embrace has you panting\nLet\'s start\n\nDating.'],
  ['September 24 2019', 'In my ears ring loud forever, in my mind, forget never', 'Questions of anxiety?\nI answer by\nActing.\nMoods of existentialism?\nI silence by\nExisting.\n\n...\n\nYou, who stands in the way of my fullest self-expression and comfort with myself –– begone.\nI express myself to the fullest for I have worked to understand my self.'],
  ['September 23 2019', 'Last time I didn\'t have the idea but next time I\'m at the theatre with a girl it\'s on sight', 'Dammmmmmm you didn\'t need to dress so well, you know I can\'t see you after they turn the lights off in the theatre, remember?\nDon\'t get me wrong,\nthough...\n' +
    'I have this movie ticket but I\'d be happy to spend the next two hours with my\neyes\nin\nyours.'
  ],
  ['September 22 2019', 'Snowy', 'Dog happily eats off the floor\nI am not so willing to eat off the floor\nThe difference: I was taught to eat from a plate and the dog was taught to eat from the floor\n\n' +
    'What other parts of me stem from teaching as opposed to my own experiences?'
  ],
  ['September 10 2019', 'I state:', 'When I die, bury my body at Siebel, and with my heart and brain, cut them into pieces and bury them in the countries where my apps have been downloaded'],
  ['September 10 2019', 'Jihoon', 'It had been two years since I last saw you\n\nOne day, one look, one embrace,\n\nI no longer have to miss you.'],
  ['September 7 2019', 'Where do you see yourself in five years?', 'Five years from now, find me in an aisle at the local grocery store, tongue deep in my girl\'s mouth next to a cart filled with children\'s cereals (for me, of course)'],
  ['September 7 2019', 'MF = My Friend', 'Goodbye?\nWhy not \'Greatbye\'?\nFuck your goodbye, take this\nSupremebye\nMF'],
  ['September 3 2019', 'Resolve', 'I\'m gonna build the world\'s best porn blocker and then nobody else will have to and then nobody else will need to\nsuffer'],
  ['August 25 2019', 'Jon Sam Dan', '"You\'d hate to see it..." and I love to see you'],
  ['August 22 2019', 'Nice lines', 'The meaning of this expression is unknown to me\nSimilar to a personality, it will require more than a first glance to see the' +
    ' essence of this illustration\nHow long will it take?\nOne hour, ten hours, one hundred hours?\nOne thousand hours, ten thousand hours, one million hours?\nHow long will it take\n' +
    'How long would it take\nHow long should it take\nHow long could it take\nHow much longer will it take for me to learn\nIf you and I\nCan be meant for each other'
  ],
  ['August 22 2019', 'Hmm...', 'I can\'t see you\nI can\'t meet you\nI don\'t hear from you, but I could call you...\n' +
    'No job, I\'m thinking about you\nIf I was employed, I\'d still think about you, call it a double shift\n' +
    'After work, I\'ll think about you, call it overtime\nThe weekends too, I remember you, call it hard-working\n' +
    'I think about you much, but why? Why do I think of you, why do I choose your thought, when I can\'t even meet you?\n\n' +
    'This feeling I have not felt in so long..., your thought reminds me of love\nThrough our interactions and our memories I have found that I am still' +
    ' able to love and desire a pure form of love\n\nThe person who just learned how to ride a bicycle without training wheels' +
    ' will be hard to seperate from this newfound joy.\n\nI am this person and through you and us\n\nI can ride my bike without training wheels'
  ],
  ['August 21 2019', 'Net worth', 'My net worth is what I define, and I define my net worth to be\nKindess\nEmpathy\nCompassion\nSeeking forgiveness\nGiving forgiveness\nFriendship\nLove\nHumility\n' +
    'Learning from mistakes\nExperience\nSeeing for myself\nHumanity\nThe human condition\nEmotion\nExpression\nGentle\nManifestation\nAbstraction\nResolve\nDesire\nStrength\nValues\nHuman'
  ],
  ['August 20 2019', 'Jayem my friend, student, lover', 'Ey girl\nIf I can\'t hold you\nHey girl\nLet me get some soju'],
  ['August 19 2019', 'Prithiv Kumar', 'No boba\nNo rubix\nNo games\nNo trampoline\nNo summer UIUC session + Adrian\nThanks to phys212 in 2019 summer\n' +
    'Thanks to Prithiv recognizing me when I asked a question\nThanks to Youth Global Citizen for meeting Prithiv'
  ],
  ['August 13 2019', 'Vivek Bhookya', 'I am not a software developer\n\nSoftware development is just something I sometimes happen to do\n' +
    'As I am not a software developer, I shouldn\'t feel any imaginary expectations or pressure to live or behave a certain way\n\n' +
    'Of course, I will keep my software skills sharp because I want to be the greatest programmer of all time, but how and what I' +
    ' desire is my own discretion and judgement\n\nI am not a software developer\n\nI am me\n\nI\'m going to do me and this may manifest' +
    ' in the form of software development, however\n\nI am not a software developer\n\nI am me\nI want to do me\nI do me\nI\'m doing me'
  ],
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
  ['July 17 2019', 'S', 'Is your genome\nATCG,\nbecause you are\nA\nTerrificly-\nCute\nGirl'],
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
    '---\nWe define our happines. Likewise, we define our unhappiness.\n---\nIf you have a different opinion, I\'ll respect your experiences. If you ask my for help, only then may I provide guidance.'
  ],
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
    'is my life and that around me moving forward as well?'
  ],
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
    text = document.createTextNode(poemDate + ' | Vivek Bhookya');

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
