/**
 * Created by Alex on 2/28/2017.
 */
function menuanimation() {
    var menuSheet = document.querySelector('.menu');
    if (!menuSheet.classList.contains('show-menu')) {
        menuSheet.classList.add('show-menu');
        if (menuSheet.classList.contains('hide-menu')) {
            menuSheet.classList.remove('hide-menu');
        }
        if (menuSheet.classList.contains('hidden')) {
            menuSheet.classList.remove('hidden');
        }
    }
    showTint();
}

function menuClicked() {
    var menuSheet = document.querySelector('.menu');
    if (menuSheet.classList.contains('show-menu')) {
        menuSheet.classList.remove('show-menu');
        menuSheet.classList.add('hide-menu');
    }
    hideTint();
}

function moreAnimation(){

}

function moreClicked(){
    var menuSheet = document.querySelector('.more');
    if (menuSheet.classList.contains('show-more')) {
        menuSheet.classList.remove('show-more');
        menuSheet.classList.add('hide-more');
    }
}




function tintclick(element){
    var tint = element;
    if(tint.classList.contains('tint')){
        hideTint();
        menuClicked();
    }

}

function showTint(){
    var tint = document.querySelector('#darkness');
    tint.classList.add('tint')

}

function hideTint(){
    var tint = document.querySelector('#darkness');
    tint.classList.remove('tint')
}

function showSearch(element){
    var search = document.querySelector(element);
    search.classList.toggle('searchActive');
}