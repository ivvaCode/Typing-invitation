let text = 'We invite you to our wedding.....';
let i=0;
let speed = 150;
//console.log(text.length)

function type () {
    if(i<text.length) {
        document.querySelector('#par').textContent += text.charAt(i);
        i++;
setTimeout(type, speed);
    }
}

type ()