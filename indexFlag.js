

function flagSearch(){
    let input = document.getElementById('myInput').value;
    input = input.toLowerCase();
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');

        for (let i = 0; i < card.length; i++){
            if(!card[i].innerHTML.toLowerCase().includes(input)){
                card[i].style.display = "none";
            } else {
                card[i].style.display ="block";
            }
        }

}

