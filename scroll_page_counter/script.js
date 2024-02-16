const Project = document.querySelector('#project');
const Client = document.querySelector('#client');
const Achieve = document.querySelector('#achieve');

window.onscroll = () => {
    var count = 0;
    const project1 = setInterval(project, 10);
    function project() {
        count++;
        Project.innerHTML = count;
        if (count == 200) {
            clearInterval(project1)
        }
    }

    var count1 = 0;
    const client1 = setInterval(client, 10);
    function client() {
        count1++;
        Client.innerHTML = count1;
        if (count1 == 300) {
            clearInterval(client1)
        }
    }

    var count2 = 0;
    const achieve2 = setInterval(achieve, 10);
    function achieve() {
        count2++;
        Achieve.innerHTML = count2;
        if (count2 == 150) {
            clearInterval(achieve2)
        }
    }
}