var main = document.createElement("div");
main.setAttribute("class","container bg-dark text-white flex-wrap justify-content-center");
main.setAttribute("id","main");

var p = document.createElement('p');
p.innerHTML = "BASIC CALCULATOR";
p.style.textAlign="center";

var p2 = document.createElement('p');
p2.setAttribute("id","input_text");

var text_box = document.createElement("input");
text_box.setAttribute("type","text")
text_box.setAttribute("id","input");
text_box.addEventListener("keydown",update);

main.append(p,p2,text_box);

var cal_key_btn = {
"AC":{"type":"button","class":"btn-light","value":"AC","event_call":"clear_full()"},
"DEL":{"type":"button","class":"btn-light","value":"DEL","event_call":"del()"},
"mod":{"type":"button","class":"btn-light","value":"%","event_call":"add_value('%')"},
"div":{"type":"button","class":"btn-warning","value":"/","event_call":"add_value('/')"},
"seven":{"type":"button","class":"btn-light","value":"7","event_call":"add_value('7')"},
"eight":{"type":"button","class":"btn-light","value":"8","event_call":"add_value('8')"},
"nine":{"type":"button","class":"btn-light","value":"9","event_call":"add_value('9')"},
"mul":{"type":"button","class":"btn-warning","value":"*","event_call":"add_value('*')"},
"four":{"type":"button","class":"btn-light","value":"4","event_call":"add_value('4')"},
"five":{"type":"button","class":"btn-light","value":"5","event_call":"add_value('5')"},
"six":{"type":"button","class":"btn-light","value":"6","event_call":"add_value('6')"},
"minus":{"type":"button","class":"btn-warning","value":"-","event_call":"add_value('-')"},
"one":{"type":"button","class":"btn-light","value":"1","event_call":"add_value('1')"},
"two":{"type":"button","class":"btn-light","value":"2","event_call":"add_value('2')"},
"three":{"type":"button","class":"btn-light","value":"3","event_call":"add_value('3')"},
"plus":{"type":"button","class":"btn-warning","value":"+","event_call":"add_value('+')"},
"doublezero":{"type":"button","class":"btn-light","value":"00","event_call":"add_value('00')"},
"zero":{"type":"button","class":"btn-light","value":"0","event_call":"add_value('0')"},
"dot":{"type":"button","class":"btn-light","value":".","event_call":"add_value('.')"},
"equal":{"type":"button","class":"btn-warning","value":"=","event_call":"calculate()"}
}

Object.keys(cal_key_btn).forEach(key=>
  {
    let temp = (cal_key_btn[key]);
    let button = document.createElement(temp.type);
    button.setAttribute("class",temp.class);
    button.setAttribute("onclick",temp.event_call);
    button.innerHTML=temp.value;
    main.append(button);
  })
document.body.append(main);


var input_val = document.getElementById("input");
  var input_txt =document.getElementById("input_text"); 
 
function clear_full(){
      input_val.value="";
      input_txt.innerHTML="";  
}
  
function del(){
  if (input_val.value.length>1){
    input_txt.innerHTML = input_val.value.slice(0,(input_val.value.length-1)); 
    input_val.value = input_val.value.slice(0,(input_val.value.length)-1);                 
  }
  else{
    clear_full();          
  }          
}
  
function calculate(){
  
  let checker = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/.test(input_val.value);
  if (!checker){
    alert("Only numbers are allowed");
  }
  else{
    let final_value = eval(input_val.value);
    input_val.value=final_value;
  }

}
  
function add_value(e){
  input_val.value += e;
  input_txt.innerHTML += e;
}
  
function update(e){
    console.log(e.key);

  if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" || e.key === "." ){
    input_txt.innerHTML+=e.key;
    
    
  }
  else if(e.key === 'Enter'){
    calculate();
  }
  else if(e.keyCode === 8){
  backspace();
  }
  else
  {
    alert("Only numbers are allowed");
    input_val.value="";
    input_txt.innerHTML="";  
  }   
}

function backspace(){
  if (input_val.value.length>1){
          input_val.value = input_val.value.slice(0,(input_val.value.length));        
          input_txt.innerHTML = input_val.value.slice(0,(input_val.value.length-1)); 
                 
  }
  else{
    clear_full();          
  }          
}

