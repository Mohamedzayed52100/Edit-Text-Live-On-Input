var myinput = document.getElementById('title'),
    mytextarea = document.getElementById('textarea'),
    myp = document.getElementById('p'),
    myh = document.getElementById('h');


myinput.oninput = function() {
    myp.textContent = this.value;

}
mytextarea.oninput = function() {
    myh.textContent = this.value;
}