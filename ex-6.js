let height = undefined;
let result;
function nullish(){
    return result = height ?? "Height is not defined"  
}
nullish(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
