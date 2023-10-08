const buttonlist = document.querySelector ('.iteam-block');
buttonlist.forEach (function(button){button.addEventListener('click' ,function(){
    const classList = document.querySelector ('item-block.active');
    buttonlist.forEach (function(item){
        item.classList.remove('active')     ; 
    });
    button.classList.add ('active');
})});



 const biến = document.querySelector ('.class')