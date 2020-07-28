var model = undefined;
const classifierElement = document.getElementById('classifier');
const loaderElement = document.getElementById('loader');

async function initialize() {

    classifierElement.style.display = 'block';

    document.getElementById('predict').addEventListener('click', () => predict());

}

async function predict () {


  model = await tmImage.load('model/model.json', 'model/metadata.json');
  console.log('Successfully loaded model');
  maxPredictions = model.getTotalClasses();

  flip=false;
  const imgEl = document.getElementById('img');
  const prediction = await model.predictTopK(imgEl, maxPredictions, flip);
  console.log(prediction);
  const classes = model.getClassLabels();

  if(prediction[0].className == 'animals'){
    document.getElementById('console').innerText = '#animal #animals #animallovers #animalface #animallove #animalkingdom #animalsofinstagram #animallover #cute #pets #animalprint #petoftheday #petscorner #petsofinstagram #animales #petsagram #pet #petstagram #animalcrossing #zoo ';

  }

  if(prediction[0].className == 'art'){
    document.getElementById('console').innerText = '#art #artist #artistic #artlovers #artlife #artgallery #creative #artsy #fineart #graphicdesign #drawing #artwork #instaart #painting #illustration #design #sketch #digitalart #artistsoninstagram #arte ';
  }

  if(prediction[0].className == 'babies'){
    document.getElementById('console').innerText ='#baby #babies #cute #babies #baby #love #kids #babiesofinstagram #lovelybaby #cute #babyboy #babylove #cutebaby #children #instababy #childhood #adorable #cutebabies #babyphotography #babymodel ';
  }

  if(prediction[0].className == 'fashion'){
    document.getElementById('console').innerText = '#fashion #style #instafashion #fashionBlogger #fashionista #fashiongoals #fashionoftheday #fashionmood #fashionofthemonth #stylish #MensFashion #WomensFashion #FashionDiaries #FashionWeek #FashionStyle #StyleBlog #StyleBlogger #StreetFashion #OutfitOfTheDay #fashionnova';
  }

  if(prediction[0].className == 'fitness'){
    document.getElementById('console').innerText ='#fitness #exercise #fitnessaddict #body #active #train #fitlife #strength #health #healthy #strong #bodyfitness #fitnessjourney #gymaholic #weights #weighttraining #bodybuilder #instahealth #instafitness #instagym';
  }

  if(prediction[0].className == 'flowers'){
    document.getElementById('console').innerText =' #flowers #nature #flowerlove #flowerphotography #spring #beautiful #naturephotography #garden #flowerbeauty #petals #flowerstagram #florist #plants #floral #naturelovers #colors #colorful #picoftheday #pretty #flowersofinstagram ';
  }

  if(prediction[0].className == 'food'){
    document.getElementById('console').innerText ='#food #foodlove #foodie #instafood #foodphotography #foodstagram #yummy #foodexperience #delicious #foodlover #foodaholic #foodpost #foodstyling #foodinsta #foodgasm #tasty #foody #foodielife #foodpics #fooddiary ';
  }

  if(prediction[0].className == 'memes'){
    document.getElementById('console').innerText ='#memes #meme #funny #memelove #humour #memer #funlover #memeforlife #instameme #funnymemes #lol #memesdaily #instagood #fun #comedy #dankmemes #jokes #sarcasm #viral #lmao';
  }
  if(prediction[0].className == 'nature'){
    document.getElementById('console').innerText ='#nature #naturephotography #naturelovers #naturegeography #naturephotographer #natureperfection #naturephotos #naturelife #natureshoooters #natureshot #naturewalk #naturepic #naturepics #natureseekers #naturegram #naturelove #naturebeauty #natureaddict #natureoftheday #natureone ';
  }

  if(prediction[0].className == 'selfie'){
    document.getElementById('console').innerText = '#selfie #selfies #selfiegram #selfiestick #selfieaddict #selfielove #selfiemood #selfie_time #selfiemode #selfiemania #selfieking #selfielovers #selfieoftheday #instaselfie #selfiemoment #randomselfie #cute #model #beauty #selfportrait'
  }

}

function changeImage() {
    var imageDisplay = document.getElementById('img');
    var uploadedImage = document.getElementById('my-file-selector').files[0];
    imageDisplay.src = URL.createObjectURL(uploadedImage);
}

initialize();
