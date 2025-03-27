let demo = () => {
    let c1 = document.getElementsByClassName('id2');
    let result = c1.length;
    alert("The count of elements with class 'id2' is: " + result);
    c1[0].style.color = "red";
};
let demo2 =()=>{
    let l1=document.createElement('label');
    let txt=document.createTextNode("Enter a Username");
        l1.appendChild(txt);
        let inp =document.createElement('input');
        inp.setAttribute('type',"text");
        inp.setAttribute('id','uname');
        inp.setAttribute("value",'');
        inp.setAttribute("placeholder",'enter a name');
        l1.appendChild(inp);
        document.body.appendChild(l1);
    
}

function addTask(){
    const taskInput=document.getElementById('taskInput');
    const tasklist =document.getElementById('tasklist');
    const tasktext=taskInput.value.trim();
    if (taskInput===""){
        alert("please create a task");
        return;
    }
    const li= document.createElement('li');
    li.textContent=tasktext;
    const deleteButton=document.createElement('button');
    deleteButton.textContent="Delete";
    deleteButton.onclick=function(){
        tasklist.removeChild(li);
    };
    li.appendChild(deleteButton);
    tasklist.appendChild(li);
    taskInput.value="";
}

const images=['assets/img1.jpg','assets/img2.jpg','assets/img3.jpg']
let currentindex=0;
function updateImage(){
    document.getElementById('slider').src=images[currentIndex];
    }
    function nextImage() {
        currentIndex =(currentIndex +1) % images.length;
        updateImage();
    }
    function prevImage(){
        currentIndex =(currentIndex-1) % images.length;
        updateImage();
    }