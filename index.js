

function one(){
    console.log('one')
    return 12;
}

const two=()=>{
    setTimeout(()=>{
        return 2;
    },2000);
    console.log('three1')
}

function three(){
    console.log('three')
}

const onevalue=one()


console.log(onevalue)
const value=two()
console.log(value)
three()