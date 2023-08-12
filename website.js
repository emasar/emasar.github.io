//------------Creating the SignUp Section---------------//
  const signUp = e =>{
    let fname = document.getElementById('fname').value,
    lname = document.getElementById('lname').value,
    email = document.getElementById('email').value,
    pwd = document.getElementById('pwd').value,
    cpwd = document.getElementById('cpwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data =>
      data.fname.toLowercase() == fname.toLowercase() &&
      data.lname.toLowercase() == lname.toLowercase()
      );
  //------- Writing Condition for SignUp/creating account----------//
  if(!exist){
    formData.push({fname, lname, email, pwd, cpwd});
    localStorage.setItem('formData', JSON.stringify(formData));
    document.querySelector('form').reset();
    document.getElementById('fname').focus();
    alert("Account Created.\n\nPlease Sign In using the link below.");
  }
  else{
    alert("Oooopppssss...Duplicate found!!!\nYou have already signed up");
  }
  e.preventDefault();

}
//-- Creating singnIn Section and Comparing stored Information------//

const signIn = e =>{
  let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value,

   formData = JSON.parse(localStorage.getItem('formData')) || [];
  let exist = formData.length &&
  JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowercase() == email && data.pwd.toLowercase() == pwd );
 
  if(!exist){
    alert("Incorrect login credentials");
  }
  else{
    Window.location.href="website.html";
  }
  e.preventDefault();

}
