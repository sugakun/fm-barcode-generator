var gug = ["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"]
var enc_jan = function(txt){
  // Left Block
  var first = txt[0]
  var enc = "_"+first+"*"
  var max = ((txt.length<7)? txt.length:7)
  for(var i = 1;i< max;i++){
    enc+=gug[first][i-1]+txt[i]
  }

  enc+="**"

  // Right Block
  var max = ((txt.length<12)? txt.length:12)
  for(var i = 7;i<  max;i++){
    enc+="R"+txt[i]
  }
  pr = 0

  //Checksum
  for(var i= Math.min(txt.length,12);i>=1;i--){
    pr+=parseInt(txt[i-1])*(i%2==1?1:3)
  }
  pr=(10-(pr%10))%10
  enc+="R"+pr
  enc+="*"

  return enc
}
