let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-btn';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');
let showJobs = document.getElementById('showJobs');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectBtn = document.getElementById('reject-btn');

const allJobs = document.getElementById('all-jobs');
const mainContainer = document.querySelector('main');
const filteredJobs = document.getElementById('filtered-jobs');
showJobs.innerText = allJobs.children.length + ' Jobs';
function calculateCount() {
    total.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id) {
    allBtn.classList.remove('btn-primary', 'text-white');
    interviewBtn.classList.remove('btn-primary', 'text-white');
    rejectBtn.classList.remove('btn-primary', 'text-white');

    allBtn.classList.add('btn-soft', 'bg-base-100', 'text-[#64748B]');
    interviewBtn.classList.add('btn-soft', 'bg-base-100', 'text-[#64748B]');
    rejectBtn.classList.add('btn-soft', 'bg-base-100', 'text-[#64748B]');

    let selected = document.getElementById(id);
    selected.classList.remove('btn-soft', 'bg-base-100', 'text-[#64748B]');
    selected.classList.add('btn-primary', 'text-white');
     currentStatus = id;
    if(id == 'interview-btn'){
        allJobs.classList.add('hidden');
        filteredJobs.classList.remove('hidden');
        if(interviewList.length == 0){
            renderNoInterview();
              showJobs.innerText = '0 Jobs';
        }else{
            renderInterview();
              showJobs.innerText = interviewList.length + ' of ' + allJobs.children.length + ' Jobs';
        }
      
    }else if(id == 'all-btn'){
          allJobs.classList.remove('hidden');
        filteredJobs.classList.add('hidden');
        showJobs.innerText = allJobs.children.length + ' Jobs';
    }else if(id == 'reject-btn'){
         allJobs.classList.add('hidden');
        filteredJobs.classList.remove('hidden');
        if(rejectedList.length == 0){
            renderNoReject();
            showJobs.innerText = '0 Jobs';
        }else{
            renderRejected();
            showJobs.innerText = rejectedList.length + ' of ' + allJobs.children.length + ' Jobs';
        } 
    }
}

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const jobsName = parentNode.querySelector('.jobs-name').innerText;
        const jobsPosition = parentNode.querySelector('.jobs-position').innerText;
        const jobsSalary = parentNode.querySelector('.jobs-salary').innerText;
        const jobsStatus = parentNode.querySelector('.jobs-status').innerText;
        const jobsDescription = parentNode.querySelector('.jobs-description').innerText;
        
        parentNode.querySelector('.jobs-status').innerText = 'Interview';
        const jobsInfo = {
            parentNode,
            jobsName,
            jobsPosition,
            jobsSalary,
            jobsStatus:'Interview',
            jobsDescription
        }
        
        const jobExists = interviewList.find(item => item.jobsName == jobsInfo.jobsName);
        
        if (!jobExists) {
            interviewList.push(jobsInfo);
        }
        rejectedList = rejectedList.filter(item=> item.jobsName!=jobsInfo.jobsName);
        if(currentStatus=='reject-btn'){
              if(rejectedList.length == 0){
            renderNoReject();
           showJobs.innerText = '0 Jobs';
        }else{
            renderRejected();
             showJobs.innerText = rejectedList.length + ' of ' + allJobs.children.length + ' Jobs';
        }
         }
        calculateCount();
        
    }else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const jobsName = parentNode.querySelector('.jobs-name').innerText;
        const jobsPosition = parentNode.querySelector('.jobs-position').innerText;
        const jobsSalary = parentNode.querySelector('.jobs-salary').innerText;
        const jobsStatus = parentNode.querySelector('.jobs-status').innerText;
        const jobsDescription = parentNode.querySelector('.jobs-description').innerText;
        
        parentNode.querySelector('.jobs-status').innerText = 'Rejected';
        const jobsInfo = {
            parentNode,
            jobsName,
            jobsPosition,
            jobsSalary,
            jobsStatus:'Rejected',
            jobsDescription
        }

        const jobExists = rejectedList.find(item => item.jobsName == jobsInfo.jobsName);
        
        if (!jobExists) {
            rejectedList.push(jobsInfo);
        }
          interviewList= interviewList.filter(item=> item.jobsName!=jobsInfo.jobsName);
          if(currentStatus=='interview-btn'){
              if(interviewList.length == 0){
            renderNoInterview();
            showJobs.innerText = '0 Jobs';
        }else{
            renderInterview();
             showJobs.innerText = interviewList.length + ' of ' + allJobs.children.length + ' Jobs';
        }
          }
        calculateCount(); 
    }
});

function renderInterview() {
    filteredJobs.innerHTML = '';
    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'flex card w-[100%] bg-base-100 card-md shadow flex-row';
        div.innerHTML = `
                   <div class="card-body space-y-5">
                        <div class="flex-col space-y-1">
                            <h2 class="jobs-name card-title text-[#002C5C]">${interview.jobsName}</h2>
                            <p class="jobs-position text-[#64748B]">${interview.jobsPosition}</p>
                        </div>
                        <p class="jobs-salary text-[#64748B]">${interview.jobsSalary}</p>
                        <div class="space-y-2">
                            <div id="status" class="jobs-status py-2 px-3 bg-[#EEF4FF] w-28 rounded-sm font-medium text-[#002C5C] text-center">${interview.jobsStatus}</div>
                            <p class="jobs-description text-[#323B49]">${interview.jobsDescription}</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="interview-btn btn btn-outline btn-accent">Interview</button>
                            <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                        </div>
                    </div>
                    <div class="p-6">
                        <button class="border border-[#F1F2F4] rounded-full p-4 text-[#64748B] cursor-pointer"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>
        `
        filteredJobs.appendChild(div);
    }
  
}
function renderRejected() {
    filteredJobs.innerHTML = '';
    for (let reject of rejectedList) {
        let div = document.createElement('div');
        div.className = 'flex card w-[100%] bg-base-100 card-md shadow flex-row';
        div.innerHTML = `
                   <div class="card-body space-y-5">
                        <div class="flex-col space-y-1">
                            <h2 class="jobs-name card-title text-[#002C5C]">${reject.jobsName}</h2>
                            <p class="jobs-position text-[#64748B]">${reject.jobsPosition}</p>
                        </div>
                        <p class="jobs-salary text-[#64748B]">${reject.jobsSalary}</p>
                        <div class="space-y-2">
                            <div id="status" class="jobs-status py-2 px-3 bg-[#EEF4FF] w-28 rounded-sm font-medium text-[#002C5C] text-center">${reject.jobsStatus}</div>
                            <p class="jobs-description text-[#323B49]">${reject.jobsDescription}</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="interview-btn btn btn-outline btn-accent">Interview</button>
                            <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                        </div>
                    </div>
                    <div class="p-6">
                        <button class="border border-[#F1F2F4] rounded-full p-4 text-[#64748B] cursor-pointer"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>
        `
        filteredJobs.appendChild(div);
    }
}

function renderNoInterview() {
    filteredJobs.innerHTML = '';
    
        let div = document.createElement('div');
        div.className = 'flex card w-[100%] bg-base-100 card-md shadow flex-row';
        div.innerHTML = `
                   <div class="card-body space-y-2 text-center">
                        <div class="flex justify-center items-center">
                        <i class="fa-solid fa-file-lines text-4xl text-gray-400"></i>
                        </div>
                        <h3 class="text-[#002C5C] font-bold">No jobs available</h3>
                        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
                    </div>
                   `
        filteredJobs.appendChild(div);
     
}

function renderNoReject() {
    filteredJobs.innerHTML = '';
   
        let div = document.createElement('div');
        div.className = 'flex card w-[100%] bg-base-100 card-md shadow flex-row';
        div.innerHTML = `
                   <div class="card-body space-y-2 text-center">
                        <div class="flex justify-center items-center">
                        <i class="fa-solid fa-file-lines text-4xl text-gray-400"></i>
                        </div>
                        <h3 class="text-[#002C5C] font-bold">No jobs available</h3>
                        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
                    </div>
        `
        filteredJobs.appendChild(div);
     
}


