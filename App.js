function a(){
    var a1=10;
    function b(){
        var b1=20;
        function c(){
            console.log(a1,b1)
        }
        return c;
    }
    return b()
}
var d=a()
console.log(d)
console.log(d())