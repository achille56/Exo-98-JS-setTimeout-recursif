let timeoutDiv = document.getElementById("timeout-div");
let intervalStart = document.getElementById("interval-start");
let intervalStop = document.getElementById("interval-stop");
let x = 1;


let timeout = ()=> {
    let timeout2 = setTimeout(() => {
        if (x <= 20 ) {
            timeoutDiv.innerHTML = "Il rest " + x + " minutes avant la pause";
            x++ ;
            timeout();
        }
    },60000);
    intervalStop.addEventListener("click", ()=> {
        clearTimeout(timeout2);
    });
};
intervalStart.addEventListener("click", timeout);


/* exo 97
intervalStart.addEventListener("click", () => {
    let intervalId = setInterval(() => {
        if(x < 240) {
            intervalDiv.innerHTML = x += 60;
        }
        else {
            clearInterval(intervalId);
        }
        intervalStop.addEventListener("click", () => {
            clearInterval(intervalId);
        })
    },60000);// interval de 60 sec
});
 */