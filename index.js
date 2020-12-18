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
                 //console.log( e.target.parentElement.children[0].textContent);
                 if (typeof(Storage) !== 'undefined'){

                     //localStorage.removeItem("localstoragedemo")

                     let item = {
                           id: i + 1,
                           name: e.target.parentElement.children[0].textContent,
                           price: e.target.parentElement.children[1].children[0].textContent,
                           no:1 //by default the number begins with 1
                     }

                     //Adding the items into a local storage whenever we click on an item.
                     //Note this line of code will only add one item  to localstorage even if you click on multiple items.
                     //We need to write a condition to add up as at when you click on an item.
                     //localStorage.setItem("items",JSON.stringify(item));

                     /*if(JSON.parse(localStorage.getItem('items')) === null){//If the localStorage is empty, get into the scope and set items into it
                         localStorage.setItem('items',JSON.stringify(item)); //with this condition when you click on other items it will alert that there's an item present
                     }else{
                         alert('Item is present');
                     }*/

                     if(JSON.parse(localStorage.getItem('items')) === null){//If the localStorage is empty, get into the scope and set items into it

                         items.push(item);
                         localStorage.setItem('items',JSON.stringify(items)); //with this condition when you click on other items it will alert that there's an item present
                     }else{

                         const localItems = JSON.parse(localStorage.getItem("items"));
                         //console.log(localItems);
                         window.location.reload();
                         localItems.map(data =>{
                               //console.log(data);
                             if (item.id === data.id){
                                  //console.log(true);
                                  //item.no += 1; //OR
                                  item.no  = data.no + 1;
                             }
                             else{
                                 items.push(data);
                             }
                         });
                         items.push(item);
                         localStorage.setItem('items',JSON.stringify(items));
                         window.location.reload();

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