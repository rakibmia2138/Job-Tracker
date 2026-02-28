const allCard = document.getElementById("allCard");
const interviewCard = document.getElementById("interview-card");
const rejectCard = document.getElementById("reject-card");
allCard.classList.remove('hidden');

// Button color code
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// Count update code
let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
// const allCardCount = document.getElementById("allCard").childElementCount;
function calculateCount(){
    total.innerText = allCard.children.length;
    interview.innerText = interviewCard.children.length;
    rejected.innerText = rejectCard.children.length;
}
calculateCount();

function toggleStyle(id){
    // Button color Code
    allFilterBtn.classList.remove('bg-blue-600','text-white');
    interviewFilterBtn.classList.remove('bg-blue-600','text-white');
    rejectedFilterBtn.classList.remove('bg-blue-600','text-white');
    document.getElementById(id).classList.add('bg-blue-600','text-white');
    
    // Toggleing Buttons
    const pages = [allCard,interviewCard,rejectCard];
    for (const page of pages) {
        page.classList.add('hidden');
    }
    
    if(id === 'all-filter-btn'){
        allCard.classList.remove("hidden");
    }else if(id === 'interview-filter-btn'){
        interviewCard.classList.remove('hidden');
    }else{
        rejectCard.classList.remove('hidden');
    }
}

document.getElementById('jobs-container').addEventListener('click',function(event){
    const clickedElement = event.target;
    // console.log(clickedElement.parentNode.parentNode.parentNode);
    const card = clickedElement.closest('.card');
    const parent = card.parentNode;
    const status = card.querySelector('.statu');

    if(clickedElement.classList.contains('interview')){
        status.innerText = 'Interviewed';
        interviewCard.appendChild(card);
    }else if(clickedElement.classList.contains('rejected')){
        status.innerText = 'Rejected';
        rejectCard.appendChild(card);
    }else if(clickedElement.classList.contains('delete')){
        parent.removeChild(card);
    }
    calculateCount();
})