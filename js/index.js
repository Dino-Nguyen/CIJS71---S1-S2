
function reverseStr() {
    document.getElementById("outputStr").innerHTML =''
    let inputStr = document.getElementById("reverseStr").value 
    
    document.getElementById("outputStr").innerHTML += inputStr.split("").reverse().join("")
  }
  
  function unique() {
    document.getElementById('outputArr1').innerHTML = ''
  arr1 = document.getElementById('inputArr1').value
  arr = arr1.split("")
  arr= Array.from(new Set(arr))   
  document.getElementById('outputArr1').innerHTML += arr
  }

 function count() {
    document.getElementById('outputArr2').innerHTML = ''
    arr2 = document.getElementById('inputArr2').value
    arr = arr2.split("")
    arr= arr.sort()
    number = 0
    times = 0
    counting = 1
    for (let i= arr.length-1; i > 0; --i){
        if (arr[i] == arr[i-1]) {
        counting ++; }
        else {
             if (times < counting) {
                 number= arr[i]
                 times = counting
             }
        
     counting = 1
    }}
    document.getElementById('outputArr2').innerHTML += `Số ` +number +` xuất hiện nhiều nhất là `+ times +` lần`
 } 

 ListNumber = [
   {
     name : 'Alice',
     number : 94758052,
   },
   {
    name : 'Bob',
    number : 94758052,
  },
  {
    name : 'Cris',
    number : 94758052,
  },
  {
    name : 'Dan',
    number : 94758052,
  },
 ]

 function renderListNumber() {
   for (let listName of ListNumber) {
     document.getElementById("listNumber").innerHTML += `
         <div class="nameItem"> 
           <span class="name"> `+ listName.name +`
           </span>
           <span class="number"> `+ listName.number +`
           <button> Del </button>
           </span>
           
         </div>
     `
   }
 }
 renderListNumber()