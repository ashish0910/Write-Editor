// Script to making iframe editable
var showingSourceCode = false;
var isInEditMode = true;

function enableEditMode() {
    richTextFeild.document.designMode = 'on' ;
}
// function to get source html of iframe
function toggleSource(){
    if(showingSourceCode){
        richTextFeild.document.getElementsByTagName('body')[0].innerHTML = richTextFeild.document.getElementsByTagName('body')[0].textContent ;
        showingSourceCode = false;
    } else {
            richTextFeild.document.getElementsByTagName('body')[0].textContent = richTextFeild.document.getElementsByTagName('body')[0].innerHTML ;
            showingSourceCode = true;
        }
}
// function to get back to edit mode
function toggleEdit(){
    if(isInEditMode){
        richTextFeild.document.designMode = 'off' ;
        isInEditMode = false;
    } else {
            richTextFeild.document.designMode = 'on' ;
            isInEditMode = true;
        }
}        

        