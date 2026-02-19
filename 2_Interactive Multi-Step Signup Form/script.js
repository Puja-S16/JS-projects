
const next1=document.getElementById("next1");
next1.addEventListener('click',(event)=>{

  // const un=document.getElementById("username");
  // const email=document.getElementById("email");
  // const pass=document.getElementById("password");
  // const Cpass=document.getElementById("Cpassword");

  // if(un.value.trim()=="" ||email.value.trim()=="" ||pass.value.trim()=="" ||pass.value.trim()!=Cpass.value || !email.value.includes("@")||!email.value.includes(".")){
  //   alert("fill the form correctly!");
  //   return;
  // }

  const div1=document.getElementById("one");
  const div2=document.getElementById("two");
  div2.style="display: block";
  div1.style="display: none";

  document.querySelector('#progress-bar').style.width="50%";

  
})

const next2=document.getElementById("next2");
next2.addEventListener('click',(event)=>{

  const name=document.getElementById("name");
  const dob=document.getElementById("dob");
  const sex=document.getElementById("sex");

  // if(name.value.trim()=="" ||dob.value=="" ||sex.value.trim()==""){
  //   alert("fill the form correctly!");
  //   return;
  // }

  const div2=document.getElementById("two");
  div2.style="display: none";
  const div3=document.getElementById("three");
  div3.style="display: block";

  document.querySelector('#progress-bar').style.width="75%";

  
})

const previous1=document.getElementById("previous1");
previous1.addEventListener('click',(event)=>{
  const div2=document.getElementById("two");
  const div1=document.getElementById("one");
  div2.style="display: none";
  div1.style="display:block";

  document.querySelector('#progress-bar').style.width="25%";
  
})


const previous2=document.getElementById("previous2");
previous2.addEventListener('click',(event)=>{
  const div3=document.getElementById("three");
  div3.style="display:none";
  const div2=document.getElementById("two");
  div2.style="display: block";

  document.querySelector('#progress-bar').style.width="50%";
  
})

//1st submit button
const form= document.querySelector('form');
const submitButton=document.getElementById('submit1');
submitButton.addEventListener('click',(event)=>{
  // const selectedField = document.querySelector('input[name="fields"]:checked');
  // if (!selectedField) {
  //     alert("Bhai, kam se kam ek field toh select karo!");
  //     return;
  // }
  const div3=document.getElementById("three");
  div3.style="display:none";
  const div_r=document.getElementById("div-review");
  div_r.style="display:block";

  const data=new FormData(form);
  // console.log(data.get("dob"));
  const name=document.getElementById("r-name");
  const dob=document.getElementById("r-dob");
  const sex=document.getElementById("r-sex");
  const email=document.getElementById("r-email");
  const fields=document.getElementById("r-fields");
  const noti=document.getElementById("r-noti");

  name.innerText=`${data.get("name")}`;
  dob.innerText=`${data.get("dob")}`;
  sex.innerText=`${data.get("sex")}`;
  email.innerText=`${data.get("e-mail")}`;
  fields.innerText=`${data.get("fields")}`;
  noti.innerText=`${data.getAll("notifications")}`;  // getAll


  document.querySelector('#progress-bar').style.width="100%";
  
  

})
// go back to form
const back_button=document.getElementById("back");
back_button.addEventListener('click',(event)=>{
  const div_r=document.getElementById("div-review");
  div_r.style="display:none";
  const div3=document.getElementById("three");
  div3.style="display:block";
  document.querySelector('#progress-bar').style.width="75%";
})

// submit
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  alert("form submitted!");
  console.log("form submitted!");
  document.querySelector('#progress-bar').style.width="100%";
})












// NOTES
    // contents element ko "container" ki tarah khatam kar deta hai. Agar tumne div par padding, border ya background lagaya hoga, toh display: contents karte hi wo sab gayab ho jayega, sirf uske andar ka text/inputs bachenge.

    // Better Choice: Zyadatar developers display: block (ya flex) use karte hain taaki container apni jagah aur styling barkaraar rakhe.


    // <input id="f1" type="radio" name="fields" value="coding" checked>
    // Isse "Coding" pehle se selected rahega, aur user ko pick karne ki mehnat nahi karni padegi (unless wo badalna chahe).