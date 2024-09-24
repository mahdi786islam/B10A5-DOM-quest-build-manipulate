

document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const feniDonationTotal = parseFloat(document.getElementById('feni-donation').innerText);
    const feniDonationInput = parseFloat(document.getElementById('feni-input').value);
    const balanceAmount = parseFloat(document.getElementById('balance').innerText);
    const feniTitle = document.getElementById('feni-title').innerText
    
    if(feniDonationInput > 0 && feniDonationInput < balanceAmount){
        sum = feniDonationInput + feniDonationTotal;
        console.log(sum)
        document.getElementById('feni-donation').innerText = sum;
        remainingBalance = balanceAmount - feniDonationInput;
        document.getElementById('balance').innerText = remainingBalance
        
        const p = document.createElement('p');
        const d = new Date();
        p.innerHTML = ` <div class="container mx-auto p-4 my-2 border border-slate-200 rounded-lg">
                            <h1 class="font-bold text-left text-xl">
                            ${feniDonationInput} Taka to ${feniTitle}
                            </h1>
                            <p class="text-lg font-light">
                            ${d}
                            </p>
                        </div>`;
        console.log(p);
        document.getElementById('history-container').appendChild(p)
    }
    else{
        alert('Invalid Input');
    }
        
    
    }
)
document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const noakhaliDonationTotal = parseFloat(document.getElementById('noakhali-donation').innerText);
    const noakhaliDonationInput = parseFloat(document.getElementById('noakhali-input').value);
    const balanceAmount = parseFloat(document.getElementById('balance').innerText);
    const noakhaliTitle = document.getElementById('noakhali-title').innerText
    
    if(noakhaliDonationInput > 0 && noakhaliDonationInput < balanceAmount){
        sum = noakhaliDonationInput + noakhaliDonationTotal;
        console.log(sum)
        document.getElementById('noakhali-donation').innerText = sum;
        remainingBalance = balanceAmount - noakhaliDonationInput;
        document.getElementById('balance').innerText = remainingBalance
        
        const p = document.createElement('p');
        const d = new Date();
        p.innerHTML = ` <div class="container mx-auto p-4 my-2 border border-slate-200 rounded-lg">
                            <h1 class="font-bold text-left text-xl">
                            ${noakhaliDonationInput} Taka to ${noakhaliTitle}
                            </h1>
                            <p class="text-lg font-light">
                            ${d}
                            </p>
                        </div>`;
        console.log(p);
        document.getElementById('history-container').appendChild(p)
    }
    else{
        alert('Invalid Input');
    }
        
    
    }
)
document.getElementById('quota-donate-btn').addEventListener('click',function(){
    const quotaDonationTotal = parseFloat(document.getElementById('quota-donation').innerText);
    const quotaDonationInput = parseFloat(document.getElementById('quota-input').value);
    const balanceAmount = parseFloat(document.getElementById('balance').innerText);
    const quotaTitle = document.getElementById('quota-title').innerText
    
    if(quotaDonationInput > 0 && quotaDonationInput < balanceAmount){
        sum = quotaDonationInput + quotaDonationTotal;
        console.log(sum)
        document.getElementById('quota-donation').innerText = sum;
        remainingBalance = balanceAmount - quotaDonationInput;
        document.getElementById('balance').innerText = remainingBalance 
        
        const p = document.createElement('p');
        const d = new Date();
        p.innerHTML = ` <div class="container mx-auto p-4 my-2 border border-slate-200 rounded-lg">
                            <h1 class="font-bold text-left text-xl">
                            ${quotaDonationInput} Taka to ${quotaTitle}
                            </h1>
                            <p class="text-lg font-light">
                            ${d}
                            </p>
                        </div>`;
        console.log(p);
        document.getElementById('history-container').appendChild(p)
    }
    else{
        alert('Invalid Input');
    }
        
    
    }
)

document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-section')
})
document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-section')
})
