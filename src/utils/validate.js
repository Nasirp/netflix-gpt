export const checkValidate = (email, password) => {
     // const isNameValid =  /^[a-zA-Z]+$/.test(name);
     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
     const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
   

     // if(!isNameValid) return "Name is Not Valid";
     if(!isEmailValid) return "email is not valid";
     if(!isPasswordValid) return "Password is not valid";
    

     return null;
};