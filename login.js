let wrapper=document.querySelector('.wrapper')
let loginLink=document.querySelector('.login-link')
let formBox=document.querySelector('.form-box')
let formBoxRegister=document.querySelector('.form-box-Registration')
let registerLink=document.querySelector('.register-link')

let loginBtn=document.querySelector('.button-login')
let cancel=document.querySelector('.cancel')

// let btnPopup=document.querySelector('.button-login')

loginBtn.addEventListener('click', ()=>{wrapper.classList.add('active-login');
                                        wrapper.style.transform='scale(1)';
                                        wrapper.style.transition='0.5s'})

cancel.addEventListener('click', ()=>{wrapper.classList.remove('active-login');
wrapper.style.transform='scale(0)'})

registerLink.addEventListener('click', ()=>{wrapper.classList.add('active');
                                                formBox.style.transform='translateX(-450px)';
                                                formBoxRegister.style.transform='translateX(0)'
                                                formBoxRegister.style.transition='0.5s';
                                               })


loginLink.addEventListener('click', ()=>{wrapper.classList.remove('active');
                                            formBox.style.transform='translateX(0)';
                                            formBoxRegister.style.transform='translateX(400px)'
                                            formBox.style.transition='0.5s';
                                            wrapper.style.height='440px'})