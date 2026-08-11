let colorInput = document.querySelector('#cor');
let hexInput = document.querySelector('#text');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    document.querySelector('h1').style.color = color;
})
