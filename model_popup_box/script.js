// Select all needed element
const ModalOpen = document.querySelector('#modal-open');
const Modal = document.querySelector('#modal');
const ModalClose = document.querySelector('#modal-close');


//Select addEventListener
ModalOpen.addEventListener('click', () => {
    Modal.style.display = 'block';
    ModalOpen.style.display = 'none';
})

ModalClose.addEventListener('click', ()=>{
    Modal.style.display = 'none';
    ModalOpen.style.display = 'block';
})