var strings = ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin"];
var texts = ['Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described. ',
         'Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference. ',
          'Assure polite his really and others figure though. Day age advantages end sufficient eat expression travelling. Of on am father by agreed supply rather either. Own handsome delicate its property mistress her end appetite. Mean are sons too sold nor said. Son share three men power boy you. Now merits wonder effect garret own. ',
          'Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred. ',
          'She suspicion dejection saw instantly. Well deny may real one told yet saw hard dear. Bed chief house rapid right the. Set noisy one state tears which. No girl oh part must fact high my he. Simplicity in excellence melancholy as remarkably discovered. Own partiality motionless was old excellence she inquietude contrasted. Sister giving so wicket cousin of an he rather marked. Of on game part body rich. Adapted mr savings venture it or comfort affixed friends.',
          'At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all enable. Needed its design number winter see. Oh be me sure wise sons no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up. '
       ]
var basic = {id:'primary', title: 'string', owner: 'string', guestNum: 'int', bedNum: 'int', bath: 'int', description: 'text', location:'string', category:'string'}

var generator = (schema, num) => {
   var records = [];
   for (var j = 0; j < num; j++) {
     var keys = Object.keys(schema);
     var obj = {};
     for (var i = 0; i < keys.length; i++) {
         if (schema[keys[i]] === 'primary') {
            obj[keys[i]] = j;
         } else if (schema[keys[i]] === 'int') {
            obj[keys[i]] = Math.floor(Math.random()*10);
         } else if (schema[keys[i]] === 'string') {
            obj[keys[i]] = getRandomStr();
         } else if (schema[keys[i]] === 'text') {
            obj[keys[i]] = getRandomText();
         } else if (schema[keys[i]] === 'const') {
            obj[keys[i]] = 0;
         } 
      }
      records.push(obj);
   }
   return records;
}

var getRandomStr = () => {
  return strings[Math.floor(Math.random()*strings.length)];
}

var getRandomText = () => {
  return texts[Math.floor(Math.random()*texts.length)];
}
