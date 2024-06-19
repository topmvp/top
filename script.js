const donators = [
  {
      name: 'Esteban',
      points: 11,
      imageUrl: 'fotos/esteban2.png',
      sub: false
  },
  {
    name: 'Vicky',
    points: 8,
    imageUrl: 'fotos/vicky2.png',
    sub: true
  },
  { 
    name: 'David_Tp',
    points: 5,
    imageUrl: 'fotos/david2.png',
    sub: false
  },
  {
      name: 'Jando',
      points: 4,
      imageUrl: 'fotos/jando2.png',
      sub: true
  },
  {
      name: 'Yuri - Fanny - Robert',
      points: 3,
      imageUrl: 'fotos/all2.png',
      sub: false
  }
];



document.addEventListener('DOMContentLoaded', () => {
  donators.forEach((donator, index) => {
      const donatorElement = document.getElementById(`donator${index + 1}`);
      donatorElement.querySelector('.profile-pic').src = donator.imageUrl;
      donatorElement.querySelector('.name').textContent = donator.name;
      donatorElement.querySelector('.points').textContent = `${donator.points} mvp`;
      
if (donator.sub == true) {
  donatorElement.querySelector('.name').classList.add('sub');
  donatorElement.querySelector('.name').textContent = donator.name + ' ⭐';
}
  });
});

let boton = 1;
let menu = document.querySelector('.menu');

function flipCard() {
  const cardContainer = document.querySelector('.card-container');
  const flipButton = document.querySelector('.flip-button');

  // Toggle the 'flipped' class on cardContainer
  cardContainer.classList.toggle('flipped');
}
