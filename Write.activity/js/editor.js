var showingSourceCode = false;
var isInEditMode = true;
function enableEditMode() {
    richTextFeild.document.designMode = 'on' ;
}
function execCmd(command) {
    richTextFeild.document.execCommand(command,false,null);
}
function execCommandWithArg(command,arg){
    richTextFeild.document.execCommand(command,false,arg);
}
function toggleSource(){
    if(showingSourceCode){
        richTextFeild.document.getElementsByTagName('body')[0].innerHTML = richTextFeild.document.getElementsByTagName('body')[0].textContent ;
        showingSourceCode = false;
    } else {
            richTextFeild.document.getElementsByTagName('body')[0].textContent = richTextFeild.document.getElementsByTagName('body')[0].innerHTML ;
            showingSourceCode = true;
        }
}
function toggleEdit(){
    if(isInEditMode){
        richTextFeild.document.designMode = 'off' ;
        isInEditMode = false;
    } else {
            richTextFeild.document.designMode = 'on' ;
            isInEditMode = true;
        }
}        

        