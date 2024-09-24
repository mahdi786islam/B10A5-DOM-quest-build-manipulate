

document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const feniDonationTotal = parseFloat(document.getElementById('feni-donation').innerText);
    const feniDonationInput = parseFloat(document.getElementById('feni-input').value);
    const balanceAmount = parseFloat(document.getElementById('balance').innerText);
    
    if(feniDonationInput > 0 && feniDonationInput < balanceAmount){
        sum = feniDonationInput + feniDonationTotal;
        console.log(sum)
        document.getElementById('feni-donation').innerText = sum;
        remainingBalance = balanceAmount - feniDonationInput;
        document.getElementById('balance').innerText = remainingBalance    
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
    
    if(noakhaliDonationInput > 0 && noakhaliDonationInput < balanceAmount){
        sum = noakhaliDonationInput + noakhaliDonationTotal;
        console.log(sum)
        document.getElementById('noakhali-donation').innerText = sum;
        remainingBalance = balanceAmount - noakhaliDonationInput;
        document.getElementById('balance').innerText = remainingBalance    
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
    
    if(quotaDonationInput > 0 && quotaDonationInput < balanceAmount){
        sum = quotaDonationInput + quotaDonationTotal;
        console.log(sum)
        document.getElementById('quota-donation').innerText = sum;
        remainingBalance = balanceAmount - quotaDonationInput;
        document.getElementById('balance').innerText = remainingBalance    
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
