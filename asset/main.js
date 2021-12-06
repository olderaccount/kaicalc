//menghindari eval gunakan master fungsi ini
function mastercalc(data) {
  return new Function('return ' +data)();
}


function insert(data) {
      document.mainform.maintext.value = document.mainform.maintext.value+data;
      document.mainform.quickview.value = mastercalc(document.mainform.maintext.value);
}
function clearall() {
  document.mainform.maintext.value= "";
  document.mainform.quickview.value= "";
}

function clearone () {
  document.mainform.maintext.value = document.mainform.maintext.value.slice(0, -1)
}

function calculate() {
  data = document.mainform.maintext.value;
  if(data){
    document.mainform.maintext.value = mastercalc(data);
    document.mainform.quickview.value = "";
  } else {
    document.mainform.maintext.value = "test";
  }
}

function makepercent() {
  data = document.mainform.maintext.value;
  if(isNaN(data/100)){
    document.mainform.quickview.value=document.mainform.quickview.value/100;
  } else  {
    document.mainform.maintext.value=data/100;
  }
}


/* ----------- Scientific Calculator ------------ */
//aktivasi SC
// tinggal tambah onclick di td terkait
function addClass() {
  var tb1=document.getElementById('tb1');
  var tb2=document.getElementById('tb2');
  tb1.className += " deactive";
  tb2.className += " active";
}

//deaktivasi SC
 function rmvClass() {
   var tb1=document.getElementById('tb1');
   var tb2=document.getElementById('tb2');
   tb1.classList.remove("deactive");
   tb2.classList.remove("active");
 }
//rumus untuk  SC
 function phinum() {
   data = document.mainform.maintext.value;
   if(data === ""){
     document.mainform.maintext.value=Math.PI;
   } else {
     document.mainform.maintext.value=data+"*3.1416";
     document.mainform.quickview.value=mastercalc(document.mainform.maintext.value);
   }
 }
 function oneper() {
   data = document.mainform.maintext.value;
   if(data === 0){
     document.mainform.maintext.value="cant div 0";
   } else {
       document.mainform.maintext.value=1/data;
   }
 }

 function squareroot(){
   data = document.mainform.maintext.value;
   if(isNaN(data)){
     document.mainform.quickview.value=Math.sqrt(document.mainform.quickview.value);
   } else {
     document.mainform.maintext.value=Math.sqrt(data);
   }
 }

// untuk sin, cos , tan, semua angka dianggap radian
function mathsin() {
  data = document.mainform.maintext.value;
  if(isNaN(data)){
    document.mainform.quickview.value=Math.sin(document.mainform.quickview.value);
  } else {
    document.mainform.maintext.value=Math.sin(data);
  }
}
function mathcos() {
  data = document.mainform.maintext.value;
  if(isNaN(data)){
    document.mainform.quickview.value=Math.cos(document.mainform.quickview.value);
  } else {
    document.mainform.maintext.value=Math.cos(data);
  }
}
function mathtan() {
  data = document.mainform.maintext.value;
  if(isNaN(data)){
    document.mainform.quickview.value=Math.tan(document.mainform.quickview.value);
  } else {
    document.mainform.maintext.value=Math.tan(data);
  }
}
function radtodeg() {
  data = document.mainform.maintext.value;
  var pi = Math.PI;
  if(isNaN(data)){
    document.mainform.quickview.value=Math.toDegrees(document.mainform.quickview.value);
  } else {
    var deg = data * (180/pi);
    document.mainform.maintext.value=deg;
  }
}
function eulernum(){
  data = document.mainform.maintext.value;
  if(data === ""){
    document.mainform.maintext.value=2.718;
  } else {
    document.mainform.maintext.value="";
    document.mainform.quickview.value=Math.exp(document.mainform.quickview.value);
  }
}
// factorial
 function factorial() {
   data = document.mainform.maintext.value;
   data = factori(data);
   document.mainform.maintext.value = data;
 }
function factori(n) {
    return n ? n * factori(n-1) :1;
 }
