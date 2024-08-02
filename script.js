document.getElementById('generateBtn').addEventListener('click',()=>{
    const text = document.getElementById('textInput').value.trim()
    if(text){
        const qrcode = document.getElementById('qrcode');
        qrcode.innerHTML = ''
        const qrcodeimg = document.createElement('img');
        qrcodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
        qrcode.appendChild(qrcodeimg)
    }
    else{
        alert('please enter some text')
    }
})