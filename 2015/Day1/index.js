const fs = require("fs");



try {
  let input = fs.readFileSync("./input.txt", "utf-8").split("");

  let floor = 0;
let position = 0

  for (let direction of input) {
//Ist part
    direction == "(" ? floor++  : floor--

//2nd part
    if (floor >=0){
        position++
    }
    else{
        position++
        break
    }

  }

  console.log("floor: " + floor)
  console.log(position, "position");
} catch (err) {
  console.log(err);
}
