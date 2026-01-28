// ternary operations
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}

function cal(x,y,ope){
    return (ope=="add")?add(x,y):
            (ope=="subtract")?subtract(x,y):
            "invalid ope";

}
console.log("Addition=",cal(10,5,"add"))
console.log("Subtraction=",cal(24,5,"subtract"))

