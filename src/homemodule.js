
let home = {

    'homecontents': [
  
        //Structure
        {
            'itemname': 'homeheader',
            'category': 'home',
            'elementtype': 'h1',
            'text': 'Traditional Wood Fired Pizza'
        },
        {
            'itemname': 'homediv',
            'elementtype': 'div',
            'category': 'home',
        },  
       
  
        //Content, will sort cards into matching category divs
        {
            'itemname':'Cheese Pizza',
            'category': 'home',
            'elementtype': 'p',
            'text': 'Since 1951 our family has been baking pizzas in our traditional wood oven using only local sustainably harvested wood.'
        },
  
        
    ],
  
    'createhome': function createhome() {
        const contentdiv = document.getElementById('content')
        const homediv = document.createElement('div')
        const homepara = document.createElement('p')
        const homeheader = document.createElement('h1')
  
 
        //e.firstElementChild can be used. 
        let child = contentdiv.lastElementChild;
        while (child) {
            contentdiv.removeChild(child);
            child = contentdiv.lastElementChild; }
  
        //Loop through array and create a new element for each entry
        for (const element of home.homecontents) {
            let elementid = element.itemname
            let targetelement
            let category = element.category
            let target = element.category + 'div'

            let targetdiv = document.getElementById(target)
            let text
            

            if (element.price) {
                text =  `${element.itemname} Price ${element.price}`
                } else {
                text = element.text     
                }
            
            
            //depending what elementtype is
  
            if (element.elementtype === 'h1') {
  
                homeheader.classList.add(category, 'h1content')
                homeheader.setAttribute('id', elementid)
                contentdiv.appendChild(homeheader.cloneNode())
  
  
                targetelement = document.getElementById(elementid)
  
                targetelement.textContent = element.text
            }
  
            if (element.elementtype === 'div') {
                homediv.setAttribute('class', category)
                homediv.setAttribute('id', elementid)
                contentdiv.appendChild(homediv.cloneNode())
            }
  
            if (element.elementtype === 'p') {
              homepara.classList.add(category, 'contentitem')
              homepara.setAttribute('id', elementid)
              targetdiv.appendChild(homepara.cloneNode())
              targetelement = document.getElementById(elementid)
  
              
              targetelement.textContent = text
  
          }
         
        }
    }
  
  }

  export default home
