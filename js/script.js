// color button gulu te press korle pic change hbe. then jkn jta te press korbo ekta border asbe.
const ringButtons = document.querySelectorAll(".ring-button");

for(let i = 0; i < ringButtons.length; i++) {
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener("click", function(event) {

// ei line dhara proti ta colorful button er id er -color part ta replace diye "" khali kore dewa hbe. then oita k 21 no. line er color part tar saathe jog kore diye oi line ta k dynamic banano hbe. ete kore proti ta colorful button er saathe ekta kore image jog hoye jabe. so button gulu te click korle ekta ekta kore image asbe.
        const color = event.target.id.replace("-color", "");

// ei line diye shudu jeta te click korbo setar e border asbe.
    for(let j = 0; j < ringButtons.length; j++) {
        ringButtons[j].classList.remove("border-purple-600");
        ringButtons[j].classList.add("border-white");
    }
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-white");

// ei line er dhara colorful button e click korle image change hbe.
    const productImage = document.getElementById("product-image");
    // productImage.src = "../images/cyan.png";
    productImage.src = "../images/" + color + ".png";
    })
}

// ekn emn ekta function banabo jta diye watch er size gulu pawa jabe. ekane function ta k proti ta size er button e giye onclick diye call kore dite hbe. eta uporer niyomeo kora jeto. but notun ekta niyome kora hocche sekhar jonno. eta diye button gulu k border o dewa hbe jkn jake click korbe.
function selectWristSize(size) {
    
// ekta array nije theke nilam html e dewa size onojai.
    const sizes = ["S", "M", "L", "XL"];
    for(let i = 0; i < sizes.length; i++) {

// proti ta button er id k dynamic vabe dhora holo.
    const button = document.getElementById("size-" + sizes[i]);
    const elemnt = sizes[i];
    if(size === elemnt) {
        button.classList.add("border-purple-600")
    }
    else{
        button.classList.remove("border-purple-600")
        }
    }
} 