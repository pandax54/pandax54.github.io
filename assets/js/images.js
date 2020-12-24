
// div class image div.image img src 

const imgDiv = document.getElementById("image-data")

const array = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]


var start=1;

function set_time()
{
 //this method will apply time interval for 10 second.   
    setInterval(image_show,10000);
}

function image_show()
{
   var imageData;
   if(start==1)
    {
        imageData="1.jpg";
   }
   else if (start==2)
   {
        imageData="2.jpg";
   }

   else if (start==3)
   {
        imageData="3.jpg";
   }

else if (start==4)
   {
        imageData="4.jpg";
   }

else if (start==5)
   {
        imageData="5.jpg";
        start=0;
   }
   else if (start>5)
   {
        start=1;
   }

document.getElementById("img-modal" ).src=`./assets/images/${imageData}`;
imgDiv.style.backgroundImage = `url('./assets/images/${imageData}')`;
start++;
}


// MODAL
// https://codepen.io/bradtraversy/pen/zEOrPp
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#image-data');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'flex';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
