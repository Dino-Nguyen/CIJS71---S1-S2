
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
     number : '94758052',
   },
   {
    name : 'Bob',
    number : '94778052',
  },
  {
    name : 'Cris',
    number : '94456052',
  },
  {
    name : 'Dan',
    number : '94758052',
  },
 ]

 //let addName = document.getElementById("addName").value
 //addName = addName.toString()
 //let addNumber = document.getElementById("addNumber").value

 //addList.name = document.getElementById("addName").value
 //addList.number = document.getElementById("addNumber").value
 
 function addToList() {
  const addList = {}
  addList.name = document.getElementById("addName").value
 addList.number = document.getElementById("addNumber").value

//  Object.defineProperties(addList,
 //  {name : {value : document.getElementById("addName").value}},
// {number : {value :  document.getElementById("addNumber").value}})
        
        if (addList.name ==="") {
             alert("Please enter Name")
             return
        }
        if (addList.number ===""){
          alert("Please enter numbers")
          return
        }
        else {
          ListNumber.push(addList)
        
        console.log(ListNumber)
          for (let i=0 ; i < ListNumber.length -1 ; i++ ) {
            for ( let j = i + 1 ; j < ListNumber.length; j++) {
            if (ListNumber[i].name === ListNumber[j].name){
                ListNumber.splice([j],1)
                alert("Already exist this name")
            }
             if (ListNumber[i].number === ListNumber[j].number){
              ListNumber.splice([j],1)
              alert("Already exist this number")
            }
          }
        }}
          document.getElementById("listNumber").innerHTML =''
        renderListNumber()
 }

 function renderListNumber() {
  const ar = ListNumber.sort(function(a, b)
  {
    let nA = a.name.toLowerCase();
    let nB = b.name.toLowerCase();
   
    if(nA < nB)
      return -1;
    else if(nA > nB)
      return 1;
   return 0;
  });
   for (let listName of ListNumber) {
 
     document.getElementById("listNumber").innerHTML += `
         <div class="nameItem"> 
           <span class="name"> `+ listName.name +`
           </span>
           <span class="number"> `+ listName.number +`
          
           </span>
           
         </div>
     `
    
    
   }
   
 }
 renderListNumber()

function delDupNum() {
 for (let i=0 ; i < ListNumber.length -1 ; i++ ) {
  for ( let j = i + 1 ; j < ListNumber.length; j++){
    if (ListNumber[i].number === ListNumber[j].number){
      ListNumber.splice([j],1)
     alert("Dan and Alice have the same number")
   }
   }
}
document.getElementById("listNumber").innerHTML =''
renderListNumber()
}

function search() {
  find = document.getElementById("findName").value
  console.log(find)
  for (let listName of ListNumber) {
    if (find ===""){
      alert("You haven't enter infomation")
      return
    }
  if (listName.name === find || listName.number === find) {
    document.getElementById("listNumber").innerHTML =''
    document.getElementById("listNumber").innerHTML += `
         <div class="nameItem"> 
           <span class="name"> `+ listName.name +`
           </span>
           <span class="number"> `+ listName.number +`
          
           </span>
           
         </div>
     `
  }
}
}