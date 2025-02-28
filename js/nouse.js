// 1. colorful button gulu te click korle border o image change korar bebostha kora.
// 2. size er button gulu te click korle border aaner bebostha kora.
// 3. + ba - e click korle increment ba decrement kora.
// 4. Add to cart e click korle checout button ta show korbe. then quantity add ba remove     korate hbe. then quantity er kaj korte hbe. then ki ki select korsi tha checkout button e click korle r ekta page open hoye dekhabe tar jonno ekta array banate hbe.
// 5. ekn checkout button e click korle notun ekta page open korate hbe. then 4 no. e banano array ta okane show korate hbe.

// 1. color button gulu te press korle pic change hbe. then jkn jta te press korbo ekta border asbe.
const ringButtons = document.querySelectorAll(".ring-button");
let productImageBase = "../images/";
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

// 2. ekn emn ekta function banabo jta diye watch er size gulu pawa jabe. ekane function ta k proti ta size er button e giye onclick diye call kore dite hbe. eta uporer niyomeo kora jeto. but notun ekta niyome kora hocche sekhar jonno. eta diye button gulu k border o dewa hbe jkn jake click korbe.
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

// 3. + ba - e click korle increment ba decrement korar jonno function ready korte hbe. 1st e for of loop chaliye button gulu dhora holo. then addEventListener use kore button gulu k clickable kora holo. ete kore + ba - e click korle kaj hocche. then 0 er maan ta k dhorar jono tar id ta k dhore ekta variable er modde raklam. then seta k parseInt kore r ekta variable er modde raklam. then Math.max use korlam. 
const quantityElements = document.querySelectorAll(".quantity-button");
for(let btn of quantityElements) {
    btn.addEventListener("click", function(event) {

// ei line dhara bujai innerText er value + sign hole 1 r - sign hole -1 asbe. sohoj kore niche kore dewa holo.
        const amount = event.target.innerText === "+" ? 1 : -1;

        // if(event.target.innerText === "+") {
        //     return 1;
        // }
        // else{
        //     return -1;
        // }

        const quantityElement = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText);
        
// ekane amount er saathe jog kora hocche cz + e click korle amount er line tar karone 1kore barbe r - e click korle 1 kore kombe.
        const newQuantity = Math.max(0, currentQuantity + amount);
        quantityElement.innerText = newQuantity;
    })
}

// 4. 1st eAdd to cart button ta k clickable korlam. then sei button tar maddhome checkout button ta visible korlam. then quantity er jaiga ta fix korte hbe.

// quantity er maan Add to cart e add korar jonno ekta variable declare kora holo.
let cartCount = 0;

// checkout button e click korle onno ekt page open hoye dekhabe tar jonno ekta empty array nilam.
let cartItems = [];

document.getElementById("add-to-cart").addEventListener("click", function() {
const quantity = parseInt(document.getElementById("quantity").innerText);  

// quantity er maan 0 thekr boro holo eita kaj korbe.
if(quantity > 0) {
    document.getElementById("checkout-container").classList.remove("hidden")    

// ekn quantity er maan er saathe cartCount k jog kora holo. ete kore quantity joto hbe cartCount toto hbe. 
    cartCount = cartCount + quantity;

// ekn cart count er id dhore tar innerText e cartCount er variable ta diye dilam.
    document.getElementById("cart-count").innerText = cartCount;

// item, color, size, quantity, price ei gulu k dhorte hbe. baki ta video dekhe nio. milestone 5: JS DOM DAY 2: part:4.  
const selectedColorButton = document.querySelector("button.border-purple-600.w-6");

const selectedColor = selectedColorButton.id.split("-")[0];

const selectedSizeButtons = document.querySelector("button.border-purple-600:not(.w-6)");

const selectedSize = selectedSizeButtons.innerText.split(" ")[0];

const selectedPrice =  selectedSizeButtons.innerText
.split(" ")[1]
.split("$")[1];

const productImage = document.getElementById("product-image");

    cartItems.push({
        image: selectedColor + ".png",
        title: "Classy Modern Smart Watch",
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: quantity + parseInt(selectedPrice)
    })

    }
    else{
        alert("Please select a quantity");
    }
});

// 5. video dekhe nio.
document.getElementById("checkout-btn").addEventListener("click", function () {
    const cartModal = document.getElementById("cart-modal");
  
    const cartConatainer = document.getElementById("cart-items");
  
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      console.log(item);
      const row = document.createElement("tr");
      row.classList.add("border-b");
      row.innerHTML = `
      <td class="py-2 px-4">
        <div class="flex items-center space-x-2">
          <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
          <span class="font-semibold">${item.title}</span>
        </div>
      </td>
      <td class="py-2 px-4">${item.color}</td>
      <td class="py-2 px-4">${item.size}</td>
      <td class="py-2 px-4">${item.quantity}</td>
      <td class="py-2 px-4">$${item.price}</td>
      `;
      cartConatainer.appendChild(row);
    }
  
    cartModal.classList.remove("hidden");
  });




