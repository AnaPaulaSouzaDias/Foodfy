const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_id}`;
  })
}

const closeModal = document.querySelector('.close-modal').addEventListener("click", function () {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})