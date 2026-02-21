let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectBtn = document.getElementById('reject-btn');

const allJobs = document.getElementById('all-jobs');
const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id){
    allBtn.classList.remove('btn-primary','text-white');
    interviewBtn.classList.remove('btn-primary','text-white');
    rejectBtn.classList.remove('btn-primary','text-white');

    allBtn.classList.add('btn-soft', 'bg-base-100','text-[#64748B]');
    interviewBtn.classList.add('btn-soft', 'bg-base-100','text-[#64748B]');
    rejectBtn.classList.add('btn-soft', 'bg-base-100','text-[#64748B]');

    let selected = document.getElementById(id);
    selected.classList.remove('btn-soft', 'bg-base-100','text-[#64748B]');
    selected.classList.add('btn-primary','text-white');
}
