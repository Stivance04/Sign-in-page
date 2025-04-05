function clicksubmitbutton(event){
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const welcomemessage= document.getElementById('welcome');
    welcomemessage.textContent="welcome, "+ username +'!'
    welcomemessage.style.display='block';
    const pic =document.getElementById('pic');
    pic.style.display='block'
}    