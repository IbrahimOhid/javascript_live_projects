// select all needed element
const InputText = document.querySelector('#input-text');

// EventListener
InputText.addEventListener('input', () => {
    const Image = document.querySelectorAll('.image');
    var ImgLen = Image.length;
    for (var i = 0; i < ImgLen; i++) {
        Image[i].style.display = 'none';
    }

    for (var j = 0; j < ImgLen; j++) {
        var allTitle = Image[j].getAttribute('title');
        if (InputText.value == allTitle) {
            Image[j].style.display = 'block';
        }
    }
})
