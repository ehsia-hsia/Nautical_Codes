

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


    function Red(){
        let input = document.getElementById('myRedButton');
        // input = input.toLowerCase();
        let card = document.getElementsByClassName('card');
    
            for (let i = 0; i < card.length; i++){
                if(!card[i].innerHTML.includes("RED")){
                    card[i].style.display = "none";
                } else {
                    card[i].style.display ="block";
                }
            }
            
        }

        function Blue(){
            let input = document.getElementById('myBlueButton');
            // input = input.toLowerCase();
            let card = document.getElementsByClassName('card');
            let name = document.getElementsByClassName('name');
        
                for (let i = 0; i < card.length; i++){
                    if(!card[i].innerHTML.includes("BLUE")){
                        card[i].style.display = "none";
                    } else {
                        card[i].style.display ="block";
                    }
                }
                
            }


            function Yellow(){
                let input = document.getElementById('myYellowButton');
                // input = input.toLowerCase();
                let card = document.getElementsByClassName('card');
                let name = document.getElementsByClassName('name');
            
                    for (let i = 0; i < card.length; i++){
                        if(!card[i].innerHTML.includes("YELLOW")){
                            card[i].style.display = "none";
                        } else {
                            card[i].style.display ="block";
                        }
                    }
                    
                }

                function White(){
                    let input = document.getElementById('myWhiteButton');
                    // input = input.toLowerCase();
                    let card = document.getElementsByClassName('card');
                    let name = document.getElementsByClassName('name');
                
                        for (let i = 0; i < card.length; i++){
                            if(!card[i].innerHTML.includes("WHITE")){
                                card[i].style.display = "none";
                            } else {
                                card[i].style.display ="block";
                            }
                        }
                        
                    }

                    function Black(){
                        let input = document.getElementById('myBlackButton');
                        // input = input.toLowerCase();
                        let card = document.getElementsByClassName('card');
                        let name = document.getElementsByClassName('name');
                    
                            for (let i = 0; i < card.length; i++){
                                if(!card[i].innerHTML.includes("BLACK")){
                                    card[i].style.display = "none";
                                } else {
                                    card[i].style.display ="block";
                                }
                            }
                            
                        }


                    function All(){
                        let input = document.getElementById('myAlButton');
                        // input = input.toLowerCase();
                        let card = document.getElementsByClassName('card');
                        let name = document.getElementsByClassName('name');
                        let grid = document.querySelector('.gridlayout');                    
                            for (let i = 0; i < card.length; i++){
                                if(!card[i].innerHTML.includes("")){
                                    card[i].style.display = "none";
                                } else {
                                    card[i].style.display = "grid";
                                    card[i].style.margin = 0;
                                }
                            }
                            
                        }

                        
                       