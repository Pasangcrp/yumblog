let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

//Slider Header
const posts = [
  {
    title: 'Browny Cookies',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium voluptas libero tempora illum, aspernatur pariatur?',
    link: 'https://google.com/',
    bgImg: '/img/browny_cookies.jpg',
    label: 'cookies',
  },
  {
    title: 'Caramel Cookies',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium voluptas libero tempora illum, aspernatur pariatur?',
    link: 'https://google.com/',
    bgImg: '/img/browny_cookies.jpg',
    label: 'cookies',
  },
  {
    title: 'Healthy Cookies',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium voluptas libero tempora illum, aspernatur pariatur?',
    link: 'https://google.com/',
    bgImg: '/img/browny_cookies.jpg',
    label: 'cookies',
  },
  {
    title: 'Pizza',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium voluptas libero tempora illum, aspernatur pariatur?',
    link: 'https://google.com/',
    bgImg: '/img/browny_cookies.jpg',
    label: 'pizza',
  },
];

let currentSlide = 0;

function showSlide(slideIndex) {
  const slide = posts[slideIndex];
  document.querySelector('.headertitle').textContent = slide.title;
  document.querySelector('.headerpara').textContent = slide.desc;
  document.querySelector('.headerbtn').href = slide.link;
  document.querySelector('.headerimg').style.backgroundImage = slide.bgImg;
}

// initial slide
showSlide(currentSlide);

// header posts change
const headerPosts = document.querySelector('.headercards');

const headerPostsCards = () => {
  const updateSlider = () => {
    headerPosts.innerHTML = '';
    for (let i = currentSlide; i < currentSlide + 6; i++) {
      const post = posts[i % posts.length];
      const postElement = document.createElement('a');
      postElement.classList.add('headercard');
      postElement.classList.add('flex');
      postElement.href = `${post.link}`;
      postElement.innerHTML = `
      <img src="${post.bgImg}" alt="image" />
      <div class="hcardinfo">
        <span>${post.label}</span>
        <h3>${post.title}</h3>
      </div>
      `;
      headerPosts.appendChild(pos);
    }
  };
};
