const donators = [
  {
    name: 'Jando',
    points: 17,
    imageUrl: 'fotos/jando2.png',
    sub: true
  },
  {
      name: 'Esteban',
      points: 15,
      imageUrl: 'fotos/esteban2.png',
      sub: false
  },
  { 
    name: 'Vicky',
    points: 10,
    imageUrl: 'fotos/vicky2.png',
    sub: true
  },
  {
    name: 'Martin lb',
    points: 10,
    imageUrl: 'fotos/martinlb2.png',
    sub: true
  },
  {
    name: 'David_Tp',
    points: 7,
    imageUrl: 'fotos/david2.png',
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
