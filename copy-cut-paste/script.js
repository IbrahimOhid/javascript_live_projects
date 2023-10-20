// copy start here
const copyText = document.querySelector('#copy-text');
const copyBtn = document.querySelector('#copyBtn');

copyBtn.addEventListener('click', textCopy = () => {
    navigator.clipboard.writeText(copyText.value);
    copyText.value = '';
})
// copy end here

// cut start here
const cutText = document.querySelector('#cut-text');
const cutBtn = document.querySelector('#cutBtn');

cutBtn.addEventListener('click', textCut = () => {
    navigator.clipboard.writeText(cutText.value);
    cutText.value = '';
})
// cut end here

// paste start here
const pasteText = document.querySelector('#paste-text');
const pasteBtn = document.querySelector('#pasteBtn');

pasteBtn.addEventListener('click', textPaste = () => {
    pasteText.value = '';
    navigator.clipboard.readText()
    .then(function(text){
        pasteText.value = text;
    })
})
// paste end here