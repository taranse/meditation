import resize from "./utils/resize";
import debounce from "./utils/debounce";
import Swiper, { Pagination } from "swiper";


resize();
window.addEventListener("resize", debounce(resize));

const swiper = new Swiper('#main_swiper', {
  speed: 400,
  spaceBetween: 50,
  
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

const modals = document.querySelectorAll('.modal');
const modalsSwipers = {};

modals.forEach(modal => {
  const thumbsSwiper = new Swiper('#swiper_thumbs_' + modal.dataset.id, {
    speed: 400,
    spaceBetween: 24,
    slidesPerView: 4,
  });

  modalsSwipers[modal.dataset.id] = new Swiper('#modal_swiper_' + modal.dataset.id, {
    speed: 400,
    spaceBetween: 50,
    thumbs: {
      swiper: thumbsSwiper
    }
  });
});


function modalChangeSlide(id, slide) {
  modalsSwipers[id].slideTo(slide)
}

window.modalChangeSlide = modalChangeSlide

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    document.body.classList.add('no-scroll');
    modal.classList.add('active');
  }
}


function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    document.body.classList.remove('no-scroll');
    modal.classList.remove('active');
  }
}

function modalButtonToggle(button, id) {
  const buttons = document.querySelectorAll('#product_modal_' + id + ' .modal__inner-info-content-size-btn');
  buttons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');

  const price = document.querySelector('#product_modal_' + id + ' [data-bind-price]');
  price.textContent = button.dataset.price

}


function toggleMenu() {
  const header = document.getElementById('header');
  header.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

window.openModal = openModal
window.closeModal = closeModal
window.modalButtonToggle = modalButtonToggle
window.toggleMenu = toggleMenu