$(function(){
  $("#datepicker").datepicker().datepicker("setDate", "today");
  document.getElementById("barcode").textContent = enc_jan("197309197309");
});

var calc_checkdigit = function(data){
  var sum = 0;
  var v = data;
  for(i=0; i<12; i++){
    var n = v%10;
    v = parseInt(v/10);
    sum += n*Math.pow(3, (i+1)%2);
  }

  return (10-sum%10)%10;
}

var calc_date100 = function(date){
  console.log(date);
  var t = new Date(date)
  var s = Math.floor(t.getTime()/1000);
  var d = Math.floor(s/(60*60*24));

  return (d+35)%100;
}

var enc_barcode = function(){
  var form = document.forms.info;

  var date = form.date.value;
  if(date==""){
    alert("date error.");
    return;
  }
  var date100 = calc_date100(date);

  var hour = form.hour.value;
  if(hour == ""){
    alert("hour error.");
    return;
  }

  var data = form.data.value;
  if(data.length != 8){
    alert("digits error.");
    return;
  }

  data = "" + data + date100 + hour
  var cd = calc_checkdigit(data);
  code = ""+data+cd;
  document.getElementById("barcode").textContent = enc_jan(code);
}
