const sol={
   q1: "Sachin Tendulkar",
   q2: "West Indies",
   q3: "Sachin Tendulkar",
   q4: "264",
   q5: "Muttiah Muralitharan"
}

const form =document.querySelector('form');
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const data=new FormData(form);

  let count=0;
  // for (let x of var) ==> for-of
  for(let [key,value] of data.entries()){
    if(value===sol[key]){
      count++;
    }
  }
  
  const result=document.querySelector('.result');
  result.innerText=`${count} out of 5 is corret!`;

  // Because your result is a text element (like a <div> or <span>) and not an input field, form.reset() will not delete it. It only clears the checkboxes and radio buttons.
  form.reset();


})

