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

var enc_barcode = function(){
  var get_hour = function(data){
    n = parseInt(data/1000)%10;
    switch(n){
      case 1:
        return "18";
      case 2:
        return "02";
      case 3:
        return "11";
    }
    return form.hour.value;
  }

  var error_chk = function(){
    if(date == ""){
      alert("date error.");
      return;
    }

    if(hour == ""){
      alert("hour error.");
      return;
    }

    if(data8.length != 8){
      alert("digits error.");
      return;
    }
  }

  var calc_date00 = function(date){
    var t = new Date(date);
    var s = Math.floor(t.getTime()/1000);
    var d = Math.floor(s/(60*60*24));

    return (d+35)%100;
  }

  var form = document.forms.info;
  var date = form.date.value;
  var data8 = form.data.value;
  var hour = get_hour(data8);

  error_chk();

  var date00 = calc_date00(date);

  var data12 = "" + data8 + date00 + hour;
  var cd = calc_checkdigit(data12);
  var code = ""+data12+cd;

  document.getElementById("barcode").textContent = enc_jan(code);
}
