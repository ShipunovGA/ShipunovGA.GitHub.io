const data2 = [80, 40, 20, 10, 5];
const cC = document.getElementById('canvasCircle');
let d = cC.getContext('2d');
d.fillStyle = 'white';
d.fillRect(0, 0, 500, 600);
const colors = ['red', 'blue', 'purple'];
let total = 0;
for (let i = 0; i < data2.length; i++) {
    total += data2[i];
}
let prefAngle = 0;
for (let i = 0; i < data2.length; i++) {
    let fraction = data2[i] / total;
    const angle = prefAngle + fraction * Math.PI * 2;
    d.beginPath();
    d.moveTo(250, 250);
    d.arc(250, 230, 150, prefAngle, angle, false);
    d.lineTo(250, 250);
    d.fill();
    d.strokeStyle = "red";
    d.stroke();
    prefAngle = angle;
}