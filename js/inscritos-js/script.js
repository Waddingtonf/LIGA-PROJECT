function changeImage(){

    img = document.getElementById('eye').src;

    if(img == "localhost/img/inscritos/OlhoNotSelected.svg" ){
        img = "localhost/img/inscritos/OlhoSelected.svg";
        document.getElementById('eye').src = "img/inscritos/OlhoSelected.svg"
    }

    else if(img == "img/inscritos/OlhoSelected.svg" ){
        img = "localhost/img/inscritos/OlhoNotSelected.svg"
        document.getElementById('eye').src = "localhost/img/inscritos/OlhoNotSelected.svg"
    }

}