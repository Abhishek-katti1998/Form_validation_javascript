console.log('welcome');
const parentEl=document.querySelector('.form');
function validateForm(e){
e.preventDefault();

const el=Array.from(parentEl.childNodes)
.filter((_,i)=>{
    return i%2!=0
})
console.log(el[0].children[1]);
let temp=[]
for(let i=0;i<el.length;i++){
    if(el[i].children[0].textContent==='First Name'){
        var firstName=el[i].children[1].value
    }
    if(el[i].children[0].textContent==='Last Name'){
        var lastName=el[i].children[1].value
    }
    if(el[i].children[0].textContent==='Email Id'){
        var emailId=el[i].children[1].value
    }
    if(el[i].children[0].textContent==='Password'){
        var password=el[i].children[1].value
    }
}
const nameRegx=/^[a-zA-z]+$/g
const lnameRegx=/^[a-zA-z]+$/g
console.log(nameRegx.lastName);
const emailReg=/[a-z0-9?]+\.?[a-z]+[@]+[a-z]+[.]+[a-z]+$/g
const passwordReg=/^[A-Z]+[A-Za-z0-9\.!@#$%^&*)(~`]+[a-zA-z0-9\.!@#$%^&*)(~`]+$/g
if(!nameRegx.test(firstName))alert('Enter a Valid First Name')
if(!lnameRegx.test(lastName))alert('Enter a Valid Last Name')
if(!emailReg.test(emailId))alert('Enter valid Email Id');
if(passwordReg.source.length<8 || !passwordReg.test(password))alert('Enter a Strong Password!!!!')

}
parentEl.addEventListener('submit',validateForm)