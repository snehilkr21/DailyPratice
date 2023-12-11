
var a=10;
let b=20;
const c=30;
function d(){
    var a1=10;
    let b1=20;
    const c1=30;
    {
        var a11=10;
        let b11=20;
        const c11=30;
        {
            var a111=10;
            let b111=20;
            const c111=30;
        }
    }
}
d()
