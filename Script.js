function insert(num){
  var myString = document.form.textveiw.value;
  var lastChar = myString[myString.length -1]
  if (myString.length < 30) {
    if (!isNaN(lastChar)|| lastChar==null||  !isNaN(num)) 
    {
      document.form.textveiw.value= myString+num;
    }else if (num !=lastChar) {
      document.form.textveiw.value=myString.replace(lastChar,num)
    }
    
  }
}
function equal() {
  var sum = document.form.textveiw.value;
  if (sum) {
    document.form.textveiw.value = eval(sum)
  }
}
function clean(){
  document.form.textveiw.value = ''
}
function back(){
  var exp = document.form.textveiw.value
    document.form.textveiw.value = exp.substring (0,exp.length -1)
}
