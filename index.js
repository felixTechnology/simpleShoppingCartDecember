window.onload = function () {
    // alert('javascript is working')

    //1.creating variables for cart Box
    const iconShopping = document.querySelector('.iconShopping');/*1*/
    const cartCloseBtn = document.querySelector('.fa-close'); /*3*/
    const cartBox = document.querySelector('.cartBox'); /*2*/


    /*  iconShopping.onclick = function () { //1i
          alert('Shopping Cart is Clicked');
      }*/ /*OR below*/

    iconShopping.addEventListener("click", function () { /*1ii*/
        //alert('shopping cart is clicked'); //1iii
        //alert(cartBox.classList) /*2i*/
        cartBox.classList.add('active');/*2i*/
    })

    cartCloseBtn.addEventListener("click", function () {
        cartBox.classList.remove('active');
    })

    //LocalStorage
    //adding data to localStorage
     const addToCartBtn = document.getElementsByClassName('addToCart');
      let items =[];
     // console.log(addToCartBtn.length);
      for (let i=0; i<addToCartBtn.length; i++ ){

             addToCartBtn[i].addEventListener("click", function (e) {
                        //console.log(e);
                        //console.log(i + " " + e.target);
                         //console.log(i+1);
                 //console.log(e.target);
                 //console.log(e.target.parentElement);
                 //console.log(e.target.parentElement.children);
                 //console.log( e.target.parentElement.children[0])
                 console.log( e.target.parentElement.children[0].textContent);
                 if (typeof(Storage) !== 'undefined'){

                     //localStorage.removeItem("localstoragedemo")

                     let item = {
                           id: i + 1,
                           name: e.target.parentElement.children[0],
                     }
                 }else
                 {
                     console.log('Storage is not working')
                 }

              });
      }

   /* if (typeof(Storage) !== 'undefined'){


        localStorage.removeItem("localstoragedemo")
    }else
    {
        console.log('Storage is not working')
    }*/
}