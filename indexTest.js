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
    if (typeof(Storage) !== 'undefined'){
              //console.log('Our Storage is working');
              //setting item in the local storage
               const array = ['a','b','c','d'];
               /*const object = {
                                 name: 'Felix Atsu Kofi Ackuayi',
                                 channelName: "Amalitech web Training",
                                  address: {
                                     houseNo: '257'
                                  }
                               }*/

        /*const objects = [
            {
                name: 'Felix Atsu Kofi Ackuayi',
                channelName: "Amalitech web Training",
                address: {
                    houseNo: '257'
                }
            },
            {
                name: 'Eric Doe  Ackuayi',
                channelName: "Goldfields Ghana Training",
                address: {
                    houseNo: '300'
                },
            }
        ]*/
             /*localStorage.setItem('localstoragedemo','Ghana is good');*/
            /* localStorage.setItem('localstoragedemo', array);*/
            // localStorage.setItem('localstoragedemo', 45);
              /* localStorage.setItem('localstoragedemo', JSON.stringify(object));*/
                //localStorage.setItem('localstoragedemo', JSON.stringify(objects));

        //get data from local Storage
        //const data = localStorage.getItem('localstoragedemo');
        //console.log(data)
        //console.log(data[3])

        /*console.log(JSON.parse(data))*/
        /*console.log(JSON.parse(data)[1])*/
        //console.log(JSON.parse(data)[1].address)
        //console.log(data)

        localStorage.removeItem("localstoragedemo")
    }else
    {
        console.log('Storage is not working')
    }
}