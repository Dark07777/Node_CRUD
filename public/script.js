let x = document.querySelector('.btn')

x.addEventListener('click',()=>{
    let inp = document.querySelector('.inp').value
let inp1 = document.querySelector('.inp1').value
    fetch('/addName',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({name: inp, age:inp1 })
    })         
})
