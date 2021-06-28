let count = 0;

const spanText = document.getElementById("value");
const btns = document.querySelectorAll(".btn"); 

console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")) {
            count--;
        }
        else if(styles.contains("increase")) {
            count++; 
        }
        else {
            count = 0;
        }


        if (count < 0) {
            value.style.color = "red";
        }
        else if (count == 0) {
            value.style.color = "black";
        }
        else {
            value.style.color = "green";
        }
        value.textContent = count;
    });
});
