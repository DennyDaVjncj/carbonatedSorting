const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const userSlctns = [
    ...document.getElementsByClassName("userSlctns")
  ].map(dropdown => Number(dropdown.value));
  
  var sortedVals=botSorting(userSlctns)
  updateUI(sortedVals);
}

const updateUI = (slctnsArray = []) => {
  slctnsArray.forEach((num,i) => {
    const slctnOutput = document.getElementById(`output-value-${i}`);
    slctnOutput.innerText = num;
  })
}


const botSorting=(userRqsts)=>{
    for(let i=0;i<userRqsts.length;i++){
      //I'm not sure as to the reasoning for the outer & inner loops
      for(let j=0;j<userRqsts.length-1;j++){
        if(userRqsts[j]>userRqsts[j+1]){
          const crrntUsrSlctn=userRqsts[j];
          userRqsts[j]=userRqsts[j+1];
          userRqsts[j+1]=crrntUsrSlctn;
        }
      }
    }
    return userRqsts;
  }
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * step 23
 * swapping logic in tentative state
 */