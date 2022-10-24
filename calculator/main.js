let buttons = document.querySelector('.buttons');
        let btn = document.querySelectorAll('span');
        let value = document.getElementById('value');
        let toggleBTN = document.querySelector('.toggleBTN');
        let body = document.querySelector("body");

        for(let i=0; i<btn.length; i++){
            btn[i].addEventListener("click", function(){

                if (this.innerHTML =="="){
                    value.innerHTML = eval(value.innerHTML);                    
                }
                else{
                    if (this.innerHTML =="Clear"){
                        value.innerHTML = "";                        
                    }
                    else{
                        value.innerHTML += this.innerHTML;
                    }
                }
            })
        }

        toggleBTN.onclick = function(){
            body.classList.toggle("dark");
        }