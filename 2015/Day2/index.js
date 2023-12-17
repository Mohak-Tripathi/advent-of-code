const fs = require("fs");

try {
  let INPUT = fs.readFileSync("./input.txt", "utf-8").split('\n');

  const result = INPUT.reduce((total,_lbh)=>{

    const lwh = _lbh.split("x")
    const length = lwh[0]
    const breath = lwh[1]
    const height = lwh[2]
    // console.log(lwh, length, breath, height)
    return total +   (2*length*breath + 2*breath*height + 2*height*length) + Math.min(length*breath, breath*height, height*length)
 
  },0)
console.log(result)

} catch (err) {
  console.log(err);
}



//2nd half

try {
    let INPUT = fs.readFileSync("./input.txt", "utf-8").split('\n');

  
    const result = INPUT.reduce((total,_lbh)=>{
  
      const lwh = _lbh.split("x").map(Number).sort((a,b)=> a-b )
  
      return total +   (2*lwh[0] + 2*lwh[1] + lwh[0] * lwh[1] * lwh[2])
   
    },0)
  console.log(result)
  
  } catch (err) {
    console.log(err);
  }