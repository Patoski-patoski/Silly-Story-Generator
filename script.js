

const customName = document.getElementById("customName");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

let insertX = [`Willy the Goblin`, `Big Daddy`, `Father Christmas`];

let insertY = [`the soup kitchen`, `Disneyland`, `the White House`];

let insertZ = [
  `spontaneously combusted`, `melted into a puddle on the sidewalk`, `turned into a slug and crawled away`,
];



function randomArrayValue(array) {
  const random = Math.floor(Math.random()* array.length);
  return array[random];
   
}

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

   const xItem = randomArrayValue(insertX);
   const yItem = randomArrayValue(insertY);
   const zItem = randomArrayValue(insertZ); 

   newStory = newStory.replaceAll(':insertx:',xItem);
   newStory = newStory.replaceAll(':inserty:',yItem);
   newStory = newStory.replaceAll(':insertz:',zItem);

    if (customName.value !== '') {
      const name =  customName.value;
      newStory = newStory.replace('Bob', name);
      
    } 


    if (document.getElementById('uk').checked) {
      const weight = `${Math.round(300 / 14)} stones`;
      const temperature = `${Math.round((94-32) * ( 5 / 9 ))} centigrade`

      newStory = newStory.replace(`300 pounds`, weight);
      newStory = newStory.replace(`94 fahrenheit`, temperature);

    }

    document.getElementById('uk').onclick = result
    document.getElementById('us').onclick = result


    story.textContent  = newStory;
    story.style.visibility = 'visible'
  
}