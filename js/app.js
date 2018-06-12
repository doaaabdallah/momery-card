let card = document.getElementsByClassName("card");
let cards = [...card];
var gv;
var openedCards = [];
var cardesRandom = shuffle(cards);
var img = document.querySelector(".row");
console.log(cards);
console.log(cardesRandom);
setCards();
for (var i = 0; i < cards.length; i++) {
    //cards[i].childNodes[1].classList.toggle("disable");
    cards[i].childNodes[1].style.visibility = "hidden";
    cards[i].onclick = fn;

    //cards[i].addEventListener("click", fn);

    console.log("forloop")
}
// console.log(cardesRandom);
function fn(e) {
    //this.childNodes[1].classList.toggle("show");
    
   // this.childNodes[1].classList.toggle("pulse");
    
    this.childNodes[1].classList.add("pulse");
    this.childNodes[1].style.visibility = "visible";
    console.log("fn ");
    console.log(this);
    gv = this;
    //this.onclick = null;
    opened();
}
// creat random array
function shuffle(array) {
    var tmp, current, top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
    console.log(array);
}
//shuffle(cards);
//console.log(shuffle(cards));
// set random array   

function setCards() {
    console.log("start")
    for (var i = 0; i < cardesRandom.length; i++) {
    [].forEach.call(cardesRandom, function (item) {
            img.appendChild(item);
            console.log("start-for")
        });
    }
}
//////////////////////
var count = 0;
function opened() {
    openedCards.push(gv);
    var len = openedCards.length;
    if (len == 2) {
        for (var i = 0; i < cards.length; i++) {
            cards[i].onclick = null;
        }
       
        console.log("if")
        
        // if the cardes similars
        if (openedCards[0].getAttribute("data-src") == openedCards[1].getAttribute("data-src")) {
            console.log("yes");
            console.log(openedCards[0]);
            openedCards[0].style.backgroundColor = "#4caf50";
            openedCards[1].style.backgroundColor = "#4caf50"
            count++;
            console.log(count);
           /* openedCards[0].onclick=null;
            openedCards[1].onclick=null;*/
            
            for (var i = 0; i < cards.length; i++) {
                    cards[i].onclick = fn;
                }
             // if the cardes is not similars
        } else {
            console.log("no");
            var fristcard = openedCards[0];
            console.log(fristcard);
            var secondcard = openedCards[1];
            setTimeout(function () {
                fristcard.childNodes[1].style.visibility = "hidden";
                secondcard.childNodes[1].style.visibility = "hidden";
                for (var i = 0; i < cards.length; i++) {
                    cards[i].onclick = fn;
                }
            }, 1000);
        }
        openedCards.length = 0;
    }
}

// function to result

if (count == 6) {
    result();
}

function result() {
    alert("your result :");
}
