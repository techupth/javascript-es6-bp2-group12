let height = undefined;
let result;

function nullList(height) {
    return result = height ?? "Height is not defined"
}

nullList(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
