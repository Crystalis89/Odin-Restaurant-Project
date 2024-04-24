
let menu = {

    'menucontents': [

        //Structure
        {
            'itemname': 'pizzaheader',
            'category': 'pizza',
            'elementtype': 'h1',
            'text': 'Pizza'
        },
        {
            'itemname': 'pizzadiv',
            'elementtype': 'div',
            'category': 'pizza',
        },  
        {
            'itemname': 'saladheader',
            'elementtype': 'h1',
            'text': 'Salads',
            'category': 'salad'
  
        },  
        {
            'itemname': 'saladdiv',
            'elementtype': 'div',
            'category': 'salad'
        },  
        {
            'itemname': 'appetizersheader',
            'elementtype': 'h1',
            'text': 'Appetizers',
            'category': 'appetizers',
        },  
        {
            'itemname': 'appetizersdiv',
            'elementtype': 'div',
            'category': 'appetizers',
        },

        //Content, will sort cards into matching category divs
        {
            'itemname':'Cheese Pizza',
            'category': 'pizza',
            'price': '9.99',
            'elementtype': 'p',
        },
  
        {
            'itemname':'Pepperoni Pizza',
            'category': 'pizza',
            'price': '9.99',
            'elementtype': 'p',
        },
  
  
        {
          'itemname': 'Supreme Pizza',
          'category': 'pizza',
          'price': '9.99',
          'elementtype': 'p'
        },
  
        {
            'itemname':'Chef Salad',
            'category': 'salad',
            'price': '9.99',
            'elementtype': 'p',
  
  
        },
  
        {
            'itemname':'House Salad',
            'category': 'salad',
            'price': '9.99',
            'elementtype': 'p',
  
        },
  
        {
            'itemname':'Garlic Bread',
            'category': 'appetizers',
            'price': '9.99',
            'elementtype': 'p',
  
        },
  
        {
            'itemname':'Balsamic Bruschetta',
            'category': 'appetizers',
            'price': '9.99',
            'elementtype': 'p',
  
        },
    ],
  
    'createmenu': function createmenu() {
        const contentdiv = document.getElementById('content')
        const menudiv = document.createElement('div')
        const menupara = document.createElement('p')
        const menuheader = document.createElement('h1')
  
        
    
  
        //Loop through array and create a new element for each entry
        for (const element of menu.menucontents) {
            let elementid = element.itemname
            let targetelement
            let category = element.category
            let targetdiv = document.getElementById(element.category + 'div')
            let text =  `${element.itemname} Price ${element.price}`
            //depending what elementtype is
  
            if (element.price) {
                text =  `${element.itemname} Price ${element.price}`
                } else {
                text = element.text     
                }
          
          
            if (element.elementtype === 'h1') {
       
                menuheader.setAttribute('id', elementid)
                contentdiv.appendChild(menuheader.cloneNode())
  
                targetelement = document.getElementById(elementid)

                targetelement.removeAttribute('class')
                targetelement.classList.add(category, 'h1content')
                targetelement.textContent = element.text
            }
  
            if (element.elementtype === 'div') {
                menudiv.setAttribute('class', category)
                menudiv.setAttribute('id', elementid)
                contentdiv.appendChild(menudiv.cloneNode())
            }
  
            if (element.elementtype === 'p') {

              menupara.setAttribute('id', elementid)
              targetdiv.appendChild(menupara.cloneNode())

              targetelement = document.getElementById(elementid)
              
              targetelement.removeAttribute('class')
              targetelement.classList.add(category, 'contentitem')
              targetelement.textContent = text
  
          }
         
        }
    }
  
  }

  export default menu
