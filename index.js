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
     //console.log(addToCartBtn); //displaying this in console will display all items with addCart will be displayed, so we use for Loop

      let items =[]; //global array for items to be kept in localStorage
      // console.log(addToCartBtn.length);//this will give you total number of loop to expect.
      for (let i=0; i < addToCartBtn.length; i++ ){

             addToCartBtn[i].addEventListener("click", function (e) { //addToCartBtn, will give us the button details per their Indexes,when
                                                                                        //clicked on each item button
                        //console.log(e); //this will give you all objects per click made for clicking on the mouse
                         //console.log(e.target); //this will target each item's <a></a> tag or you can use <button></button>
                        //console.log(i + " " + e.target); // every item on ecommerce platform is considered as array of items.Hence each has an index.
                         //console.log(i+1); //this concept is just to change the custom index numbers starting from 0, and make it start by adding 1 to each index,anytime you click on different buttons
                 //console.log(e.target);
                 //console.log(e.target.parentElement);
                 //console.log(e.target.parentElement.children);
                 //console.log( e.target.parentElement.children[0])
                 //console.log( e.target.parentElement.children[0].textContent);
                 if (typeof(Storage) !== 'undefined'){

                     //localStorage.removeItem("localstoragedemo")

                     let item = {
                           id: i + 1, //meaning when we click on item element on the website each will return an id (starting from 1...)
                           name: e.target.parentElement.children[0].textContent,// when you click on an element, we getting to the parent element,and further move to its 1st child.The position of the 1st child is the [0]
                           price: e.target.parentElement.children[1].children[0].textContent,
                           //no:1 //by default the number begins with 1
                            no: 1
                     };

                     //Adding the items into a local storage whenever we click on an item.
                     //Note this line of code will only add one item  to localstorage even if you click on multiple items.
                     //We need to write a condition to add up as at when you click on an item.
                     //localStorage.setItem("items",JSON.stringify(item));

                     /*if(JSON.parse(localStorage.getItem('items')) === null){//If the localStorage is empty, get into the scope and set items into it
                         localStorage.setItem('items',JSON.stringify(item)); //with this condition when you click on other items it will alert that there's an item present
                     }else{
                         alert('Item is present');
                     }*/

                     if(JSON.parse(localStorage.getItem('items')) === null)
                     {//If the localStorage is empty, get into the scope and set items into it, from the line of code (setItem())

                         items.push(item);//we pushing the object into an array and afterwards set it as a SetItem as immediate below.
                         localStorage.setItem('items',JSON.stringify(items)); //with this condition when you click on other items it will alert that there's an item present
                          window.location.reload();
                     }
                     else{

                         const localItems = JSON.parse(localStorage.getItem("items"));
                         //console.log(localItems);
                         //window.location.reload();
                         localItems.map(data =>{ //map will group all the items in the localStorage
                               //console.log(data);
                             if (item.id === data.id){ //variable item is an object so we accessing it ID as declared in the object details above.
                                                       //want to create an effect that when you click an item and it is exist in the localStorage, just pick the ID of
                                                       //that clicked item and search through the items in the localStorage and compare if it already exist.If it exist just add the number of clicks to count total number of items selected
                                  //console.log(true);
                                  //item.no += 1; //OR
                                  item.no  = data.no + 1;//this will give count of number of items selected in an array. So when you click first item more than once it will give count
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
                     console.log('Local Storage is not working on your browser')
                 }

              });
      }

    //Adding data to shopping cart

    const iconShoppingP = document.querySelector('.iconShopping p');
      let no = 0
      JSON.parse(localStorage.getItem('items')).map(data=>{
          no = no + data.no;

      });
      iconShoppingP.innerHTML = no;


      //Adding cartbox data in a table

       const cardBoxTable = cartBox.querySelector('table')
       //console.log(cardBoxTable);

        //Creating an array string for the data in a Table
        let tableData = '';
        tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No:</th><th>Item Price:</th><th></th>';
        if (JSON.parse(localStorage.getItem('items')) === null){
            tableData += '<tr><td colspan="5">No items found</td></tr>'
        }else {

        }
        cardBoxTable.innerHTML = tableData;



   /* if (typeof(Storage) !== 'undefined'){


        localStorage.removeItem("localstoragedemo")
    }else
    {
        console.log('Storage is not working')
    }*/
}