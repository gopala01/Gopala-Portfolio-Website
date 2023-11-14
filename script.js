function clearButton(){
    document.getElementById("addBlogForm").reset();
}




function rejectNull(event){
    if(document.getElementById("inputTitle").value==""|| document.getElementById("inputText").value==""){
        event.preventDefault();
        if(document.getElementById("inputTitle").value==""){
            document.getElementById("inputTitle").setAttribute("style", "background-color:#ffff00;");
        }
        else{
            document.getElementById("inputTitle").setAttribute("style", "background-color:#ffffff;");
        }
        if(document.getElementById("inputText").value==""){
            document.getElementById("inputText").setAttribute("style", "background-color:#ffff00;");
        }
        else{
            document.getElementById("inputText").setAttribute("style", "background-color:#ffffff;");
        }


        return false; 
    }
    return true;
}

