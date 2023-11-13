const ProjectNumber = document.querySelector('#project-number');
const ClientNumber = document.querySelector('#client-number');
const AchieveNumber = document.querySelector('#achieve-number');


const Project = setInterval(projectDone, 10);
const Client = setInterval(clientDone, 10);
const Achieve = setInterval(achieveDone, 10);

let count1 = 1;
let count2 = 1;
let count3 = 1;

//Project start here
function projectDone(){
    count1++;
    ProjectNumber.innerHTML = count1;
    if(count1 == 500){
        clearInterval(Project)
    }
}
//Project end here

//Client start here
function clientDone(){
    count1++;
    ClientNumber.innerHTML = count1;
    if(count1 == 300){
        clearInterval(Client)
    }
}
//Client end here

//achieve start here
function achieveDone(){
    count1++;
    AchieveNumber.innerHTML = count1;
    if(count1 == 409){
        clearInterval(Achieve)
    }
}
//achieve end here