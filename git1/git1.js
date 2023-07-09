var firstRandomNumber = Math.random() * 100000 //create captcha code
var finalCaptchaCode = Math.floor(firstRandomNumber)
let usersData = [//users that they registred 
  {id:1,username:"amir",pass:'amir123'},
  {id:2,username:"hasan",pass:'hasan123'},
  {id:3,username:"pari",pass:'pari562501'},
  {id:4,username:"parsa",pass:'parsa'},
  {id:5,username:"amin",pass:'mashalla'},
  {id:6,username:"amirreza",pass:'reza123'},
  {id:7,username:"ali",pass:'123ali'}
]
let userInput = prompt('Enter your Username')// give user username
let mainuser = usersData.find(function(user){//trust username
  return user.username === userInput
})
if(mainuser === undefined){
  alert("please register first")
  
}else{
let userInputPass = prompt("enter pass")//give user pass
if(userInputPass === mainuser.pass){//trust userpass
  alert("WElCOME")
}else{
  alert("incorrect pass")
  alert("let go to restore your pass ")//restore the previous pass
  var userinputcaptcha = Number(prompt("enter this captcha code"+finalCaptchaCode,))
if(userinputcaptcha === finalCaptchaCode){
  alert("this is your previous pass:\n"+mainuser.pass)
}else{
  alert("please input the captcha correctly")
}
}}