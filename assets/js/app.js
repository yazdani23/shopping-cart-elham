// //single selectors---> return a element
// document.getElementById("")
// document.querySelector(".add-to-cart").addEventListener()

// //multi selectors ---> return a list of element
// document.getElementsByClassName("add-to-cart")
// document.querySelectorAll("add-to-cart")


function increaseQtyTotal() {
  const qtyTotal = document.querySelector(".quantity-total-cart");
  ++qtyTotal.innerText;
}

function getProductInfo(product) {
    const idP = product.id;
    const titleP = product.querySelector(".t-product").innerText;
    const priceP = product.querySelector(".price-product").innerText;
    const imageP = product.querySelector("img").src;

    const productInfo={
      idP,
      titleP,
      priceP,
      imageP
    }
    return productInfo
}

function createItemCart(productInfo) {

  const {idP,titleP,priceP,imageP}= productInfo
  const item = `<li id="ItemCart-${idP}" >
                      <a href="#">
                          <img src=${imageP}>
                          <div class="properties-cart">
                              <span class="item-title">${titleP}</span>
                              <span class="item-price">${priceP}</span>
                              <span class="quantity-item">1</span>
                          </div>
                      </a>
                      <i class="far fa-trash-alt delete-item"></i>
                   </li>`;

    return item               
  
}


const btnsAddToCart = document.querySelectorAll(".add-to-cart");

btnsAddToCart.forEach((element) => {
  element.addEventListener("click", (event) => {

    const emptyCart=document.querySelector(".empty-cart")
    emptyCart.style.display="none"
    const product = event.target.parentElement;
    increaseQtyTotal()

    const item= getProductInfo(product)
    const itemCart = document.querySelector(`#ItemCart-${idP}`);

    if (itemCart == null) {
      createItemCart(item) 

      document.querySelector(".items").innerHTML += item;


      document.querySelectorAll(".delete-item").forEach((item) => {
        item.addEventListener("click", function (e) {
          const qtyTotal = document.querySelector(".quantity-total-cart");
          const li = e.target.parentElement;
          const qtyItem=li.querySelector(".quantity-item")

          qtyTotal.innerText= qtyTotal.innerText-qtyItem.innerText
          li.remove();
          if (qtyTotal.innerText==0) {
            emptyCart.style.display="block"
          }
        });
      });




    } else {
      ++itemCart.querySelector(".quantity-item").innerText;
    }
  });
});






// const profile= {firstName:"Zahra", lastName:"Yazdani", email:"z.yazdani@gmail.com", age:33}

// const firstName1= profile.firstName;
// const lastName1= profile.lastName;
// const email1= profile.email;

// const {firstName, lastName, email}= profile


// const numbers= [10, 20, 30, 40, 50]
// // const num1= numbers[0]
// // const num2= numbers[1]
// // const num4= numbers[3]

// const [num1, num2, , num4]=numbers