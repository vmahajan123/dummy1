let a = document.querySelector("nav i");
let b = document.querySelector(".nav2");
let flag = 0;
a.addEventListener("click", function() {
    if(flag == 0) {
        b.style.display = "block";
        flag = 1;
    }
    else  {
        b.style.display = "none";
        flag = 0;
    }
})