
document.getElementById('btn1').addEventListener('click', function () {

    const addMoney1 = getInputFieldValueId('inp1');
    const ta1 = getTextFieldValueId('ta1');
    const balance = getTextFieldValueId('balance');
    if (addMoney1 > 0 || addMoney1 != isNaN) {
        const newAddMoney1 = addMoney1 + ta1;
        const newBalance = balance - addMoney1;
        document.getElementById('ta1').innerText = newAddMoney1;
        document.getElementById('balance').innerText = newBalance;
        alert('Thank you for your contribution');
        console.log(newAddMoney1);
        const div = document.createElement('div');
        div.className='bg-lime-100 border border-slate-200'
        div.innerHTML=`
        <p> ${addMoney1} donated for the flood at Noakhali, Bangladesh</p>
        <p> ${new Date()}</p><br>
        `;
        
        const historyContainer = document.getElementById('history-div');
        historyContainer.insertBefore (div,historyContainer.firstChild);
        
    }
    else {
        alert('Please Donate!')
    }
});

document.getElementById('btn2').addEventListener('click', function () {

    const addMoney2 = getInputFieldValueId('inp2');
    const ta2 = getTextFieldValueId('ta2');
    const balance = getTextFieldValueId('balance');
    if (addMoney2 > 0 && addMoney2 != isNaN) {
        const newAddMoney2 = addMoney2 + ta2;
        const newBalance = balance - addMoney2;
        document.getElementById('ta2').innerText = newAddMoney2;
        document.getElementById('balance').innerText = newBalance;
        alert('Thank you for your contribution');
        console.log(newAddMoney2);
        const div = document.createElement('div');
        div.className='bg-lime-100 border border-slate-200'
        div.innerHTML=`
        <p> ${addMoney2} donated for the flood in Feni, Bangladesh</p>
        <p> ${new Date()}</p><br>
        `;
        
        const historyContainer = document.getElementById('history-div');
        historyContainer.insertBefore (div,historyContainer.firstChild);
    }
    else {
        alert('Please Donate!')
    }
});


document.getElementById('btn3').addEventListener('click', function () {

    const addMoney3 = getInputFieldValueId('inp3');
    const ta3 = getTextFieldValueId('ta3');
    const balance = getTextFieldValueId('balance');


    if (addMoney3 > 0 && addMoney3 != isNaN) {
        const newAddMoney3 = addMoney3 + ta3;
        const newBalance = balance - addMoney3;
        document.getElementById('ta3').innerText = newAddMoney3;
        document.getElementById('balance').innerText = newBalance;
        alert('Thank you for your contribution');
        console.log(newAddMoney3);
        const div = document.createElement('div');
        div.className='bg-lime-100 border border-slate-200'
        div.innerHTML=`
        <p> ${addMoney3} Aided for the Quota Movement in Bangladesh</p>
        <p> ${new Date()}</p>
        <br>
        `;
        
        const historyContainer = document.getElementById('history-div');
        historyContainer.insertBefore (div,historyContainer.firstChild);
    }
    else {
        alert('Please Donate!')
    }
});

const historyTab = document.getElementById('history');
const donationTab = document.getElementById('donation');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-lime-400');
    donationTab.classList.remove('bg-lime-400');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('history-detail').classList.remove("hidden");
    
    

});

donationTab.addEventListener('click', function () {
    donationTab.classList.add('bg-lime-400');
    historyTab.classList.remove('bg-lime-400');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('history-detail').classList.add("hidden");
      
});



