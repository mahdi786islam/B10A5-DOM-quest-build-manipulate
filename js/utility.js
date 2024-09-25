function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
    

}


function addBgByClick(id){

    document.getElementById('donation-btn').classList.remove('bg-yellow-400')
    document.getElementById('history-btn').classList.remove('bg-yellow-400')
    document.getElementById(id).classList.add('bg-yellow-400')
}