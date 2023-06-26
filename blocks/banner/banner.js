export default async function decorate(block) {
    const content = block.querySelectorAll('.banner>div');
    
    let picture = '';
    let buttons = '';
    let linkList = '';
    let emList = '';
    /**
     * create a div for title and pre-title
     */
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
  
    [...content].forEach((div) => {
      /**
       * check for picture tag
       */
      if(div.querySelector(':has(picture'))
        picture = div.querySelector(':has(picture');
      else 
        contentDiv.appendChild(div);
        contentDiv.classList.add('subText')

 
      

     
      buttons = div.querySelectorAll('h4');

      for(const button of buttons){
         linkList= button.querySelectorAll('a');
         console.log("link list count " + linkList.length);

         for (const link of linkList){
          
           let parentNode = link.closest("div");

           if(parentNode.querySelector(':has(em'))
           {
            link.classList.add('premiumBtn');
           }
           else
           link.classList.add('bannerBtn');

           /*emList = parentNode.querySelectorAll('em');
           console.log("em count " + emList.length);
           if(emList.length>0){
            link.classList.add('premiumBtn');
           }
           */
          // let currentTxt = link.innerHTML;
         
          
         }//end of for
      }

     
    
    }
    
    );
  
    /**
     * define seperator
     */
    const span = document.createElement('span');
    span.classList.add('seperator');
    contentDiv.insertBefore(span, contentDiv.querySelector('div:nth-child(2)'));
    block.appendChild(contentDiv);
    picture.parentNode.classList.add('image');
    
    

  }