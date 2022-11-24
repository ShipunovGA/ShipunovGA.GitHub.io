const data = [46, 35, 68, 50, 43];
const canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
c.fillStyle = 'white';
c.fillRect(0, 0, 500, 600);
c.fillStyle = 'blue';
for (let i = 0; i < data.length; i++) {
    let dp = data[i];
    c.fillRect(43 + i * 100, 500 - dp * 5 - 25, 30, dp * 5);
}
c.fillStyle = 'block';
c.lineWidth = 2.0;
c.beginPath();
c.moveTo(25, 10);
c.lineTo(25, 475);
c.lineTo(490, 475);
c.stroke();

c.fillStyle = 'black';
for (let i = 0; i < 6; i++) {
    c.fillText((5 - i) * 20 + ' ', 4, i * 80 + 75);
    c.beginPath();
    c.moveTo(25, i * 80 + 75);
    c.lineTo(25, i * 80 + 75);
    c.stroke();
}

const labels = ["jan", "feb", "mar", "apr", "may"];
for (let i = 0; i < 5; i++) {
    c.fillText(labels[i], 50 + i * 100, 495);
}