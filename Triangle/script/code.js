function claculateArea() {

    let base= parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
     let area= 0.5 * base * height;
     document.getElementById('area').textContent = area.toFixed(2)
}