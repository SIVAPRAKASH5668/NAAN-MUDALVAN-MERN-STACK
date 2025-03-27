document.getElementById('saveBtn').addEventListener('click', () => {
    const payData = {
        username: document.getElementById('name').value,
        id: document.getElementById('eid').value,
        phone: document.getElementById('phone').value
    };
    localStorage.setItem('payData', JSON.stringify(payData));
    alert("Data saved!");
});
document.getElementById('printBtn').addEventListener('click',()=>{
    const payData=JSON.parse(localStorage.getItem('payData'));
    if (payData)
    {
        const print =window.open('','_blank');
        print.document.write(`Name ${payData.name}`);
        print.document.write(`Eid ${payData.eid}`);
        print.document.write(`Phone ${payData.phone}`);
    }
    console.log(username);
});