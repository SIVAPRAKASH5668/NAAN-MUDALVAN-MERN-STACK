let itemlist=[];
let item2list=[];
let additem= () =>{
    let item=document.getElementById('todo').value;
    itemlist.push(item);
    console.log(itemlist)
    document.getElementById('todo').value='';
    getItem();
}
document.getElementById('btn').addEventListener("click",additem);
let getItem=() =>{
    let emptystr='';
    let sno=1;
    itemlist.forEach(function(value,index){
        sno+=1;
        emptystr +='<tr><td>' +sno +'</td> <td>'+ value +"</td> <td><button onclick=deleteitem("+index+")> Remove </button></td> </tr>";   
    })
document.getElementById('tbl').innerHTML=emptystr;
}


function deleteitem(id){
    itemlist.splice(id,1);
    getItem();
}




let includeitem= () =>{
    let addprod=document.getElementById('addprod').value;
    item2list.push(addprod);
    console.log(item2list);
    document.getElementById('addprod').value='';
}
let removeItem() =>{
    let empt='';
    let count=1;
    item2list.forEach(function(value,index){
        count+=1;
        empt+='<tr><td>'+count+'</td>
    }
}
document.getElementById('')
    
}
