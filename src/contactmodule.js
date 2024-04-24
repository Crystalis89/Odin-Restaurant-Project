
let contact = {

    'contactcontents': [
  
        //Structure
        {
            'itemname': 'contactheader',
            'category': 'contact',
            'elementtype': 'h1',
            'text': 'Contact Us!'
        },
        {
            'itemname': 'contactdiv',
            'elementtype': 'div',
            'category': 'contact',
        },
      
  
  
        //Content, will sort cards into matching category divs
  
        {
          'itemname': 'contactpara',
          'category': 'contact',
          'elementtype': 'p',
          'text': 'Owner: Luigi - Address: 123 Naples St Little Italy, New York - Phone: 123-456-7890',
        } 
  
        
    ],
  
    'createcontact': function createcontact() {
        const contentdiv = document.getElementById('content')
        const contactdiv = document.createElement('div')
        const contactpara = document.createElement('p')
        const contactheader = document.createElement('h1')
  
    
  
        //Loop through array and create a new element for each entry
        for (const element of contact.contactcontents) {
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
  
                contactheader.classList.add(category, 'h1content')
                contactheader.setAttribute('id', elementid)
                contentdiv.appendChild(contactheader.cloneNode())
  
  
                targetelement = document.getElementById(elementid)
  
                targetelement.textContent = element.text
            }
  
            if (element.elementtype === 'div') {
                contactdiv.setAttribute('class', category)
                contactdiv.setAttribute('id', elementid)
                contentdiv.appendChild(contactdiv.cloneNode())
            }
  
            if (element.elementtype === 'p') {
              contactpara.classList.add(category, 'contentitem')
              contactpara.setAttribute('id', elementid)
              targetdiv.appendChild(contactpara.cloneNode())
              targetelement = document.getElementById(elementid)
  
              
              targetelement.textContent = text
  
          }
         
        }
    }
  
  }

  export default contact
