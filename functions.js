let checkbox = document.getElementById("toggle-one");
checkbox.addEventListener( 'change', function() {
    console.log(this.checked);
    if(this.checked) {
        localStorage.removeItem('dark-mode');
        document.body.classList.remove('dark-mode');
        $("#nav-bar").removeClass('dark-mode');
    } else {
        localStorage.setItem('dark-mode','dark-mode');
        document.body.classList.add('dark-mode');
        $("#nav-bar").addClass('dark-mode');
    }
});


window.onload = function(){
    //remember dark mode
    //there is some lag when remaining in dark mode
    if(localStorage.getItem('dark-mode')!== null){
        document.body.classList = localStorage.getItem("dark-mode");
    }else{
        document.body.classList = "";
    }
}