let btnEl=document.getElementById("score1")
let x1=0
function add1(){
    x1+=1
btnEl.textContent=x1

}

function add2(){
    x1+=2
    btnEl.textContent=x1
    
    }
    function add3(){
        x1+=3
        btnEl.textContent=x1
        
        }

        let btnEl2=document.getElementById("score2")
        let x2=0
function add11(){
    x2+=1
btnEl2.textContent=x2

}

function add22(){
    x2+=2
    btnEl2.textContent=x2
    
    }
    function add33(){
        x2+=3
        btnEl2.textContent=x2
        
        }


        function reset(){
            btnEl.innerText=0;
            x1=0
        }
        let btnEll=document.getElementById("prev")
        function save(){
           btnEll.textContent= btnEll.textContent+x1+" - "
          
        }

function reset2(){
btnEl2.innerText=0
x2=0
}
let btnEll2=document.getElementById("prev2")
function save2(){
    btnEll2.textContent=btnEll2.textContent+x2+" - "
}