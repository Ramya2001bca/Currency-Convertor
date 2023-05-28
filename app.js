//frankfurter currency api
let select=document.querySelectorAll('.currency')
//console.log(select)
let btn=document.getElementById('btn')
let input=document.getElementById('input')


    //API link
fetch('https://api.frankfurter.app/currencies')//call to api
.then(res=>res.json())//change to json
.then(res=>displayDropDown(res)) //we will get a result in json formate.send it to one of our method.


function displayDropDown(res){
 // console.log( Object.entries(res [0][0]))
 //we have to convert array 
 let cur=Object.entries(res)//Two dimensional array
 for(let i=0;i<cur.length;i++){
    let opt=`<option value ="${cur[i][0]}">${cur[i][0]}</option>`
   // console.log(cur[i][0])
   //console.log(opt)
   select[0].innerHTML+=opt
   select[1].innerHTML+=opt



 }


}
btn.addEventListener('click',()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputVal=input.value
    if(curr1===curr2)
        alert("Choose differnet currencies")

    else
    covert(curr1,curr2,inputVal)

});
function covert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value=Object.values(data.rates)[0]
  });
    
}





