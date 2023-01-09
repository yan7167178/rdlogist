const openPopup =document.getElementById('btn-main');
const closePopup =document.getElementById('pop_up_close');
const Popup =document.getElementById('pop_up')

openPopup.addEventListener('click',function(e) {
    e.preventDefault();
    Popup.classList.add('active');

})

closePopup.addEventListener('click',()=>{
    Popup.classList.remove('active')

})


