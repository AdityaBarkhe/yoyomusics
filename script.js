// Navigation Bar
/*
function toggleNav(){
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.content');

    if(navbar.style.left == '0px')
    {
        navbar.style.left = '-250px';
        content.style.marginleft = '0';
    }
    else
    {
        navbar.style.left = '0px';
        content.style.marginleft = '250px';
    }
}*/

document.addEventListener('DOMContentLoaded',function(){
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.content');

    //Close on clicking outside
    document.addEventListener('click', function(event){
        if(!navbar.contains(event.target) && event.target !== document.querySelector('.menu-icon')){
            closeNav();
        }
    });

    //When menu is clicked
    document.querySelector('.menu-icon').addEventListener('click', function(){
        toggleNav();
    });

    // Function to close nav
    function closeNav()
    {
        navbar.style.left = '-250px';
        content.style.marginLeft = '0';

    }

    // Function to toggle nav
    if(navbar.style.left == '0px')
    {
        closeNav();
    }
    else
    {
        navbar.style.left = '0px';
        content.style.marginLeft = '250px';
    }
})
