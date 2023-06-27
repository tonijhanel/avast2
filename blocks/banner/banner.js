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
        
        let linkParent = link.parentNode.nodeName;

        if(linkParent=="EM"){
          button.classList.add('premiumBtn');
        }
        else{
          button.classList.add('bannerBtn');
        }
        
       }//end of for
    }//end of button for loop

   
  
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