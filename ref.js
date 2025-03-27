async function demo (){
    var response=await fetch ()
    var datas= await response.json()
    let emptystr ='';
    datas.forEach((values,index) =>{
        emptyStr += '<div class ="card m-4 py-2" style = "width:28 rem;"> <img src =" ' +values.image+ '" class ="card -img top"><h1>"' + values.title+' "</h1></div>'

    })
    document.getElementById("display").innerHTML=emptyStr;
}
