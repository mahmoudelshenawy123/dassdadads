window.addEventListener('load',function (){
    document.querySelector('.stopScrolling').classList.remove('stopScrolling')
    document.querySelector('#loadDivContainer').classList.add('d-none')
})
 function showInputSearch(){
    document.querySelector('.searchInput2').classList.toggle('showInput')
    document.querySelector('.searchInput2').focus();    
}