const form = document.querySelector(".diagramChangeForm");
const changeCoefficient = document.getElementById(".changeCoefficient");


function updateColumns(updateCoefficient) {
    let data = [46, 35, 68, 50, 43];
    for (let i = 0; i < data.length; i++) {
        data[i] *= updateCoefficient / 12;
    }
    console.log(data)
    const canvas = document.getElementById('canvas');
    let canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'pink';
    canvasContext.fillRect(0, 0, 500, 600);
    canvasContext.fillStyle = 'blue';
    for (let i = 0; i < data.length; i++) {
        let dp = data[i];
        canvasContext.fillRect(43 + i * 100, 500 - dp * 5 - 25, 30, dp * 5);
    }
    canvasContext.fillStyle = 'block';
    canvasContext.lineWidth = 2.0;
    canvasContext.beginPath();
    canvasContext.moveTo(25, 10);
    canvasContext.lineTo(25, 475);
    canvasContext.lineTo(490, 475);
    canvasContext.stroke();
    
    canvasContext.fillStyle = 'black';
    for (let i = 0; i < 6; i++) {
        canvasContext.fillText((5 - i) * 20 + ' ', 4, i * 80 + 75);
        canvasContext.beginPath();
        canvasContext.moveTo(25, i * 80 + 75);
        canvasContext.lineTo(25, i * 80 + 75);
        canvasContext.stroke();
    }
    
    const labels = ["jan", "feb", "mar", "apr", "may"];
    for (let i = 0; i < 5; i++) {
        canvasContext.fillText(labels[i], 50 + i * 100, 495);
    }
}
updateColumns(12);
console.log("changeCoefficient.value");
form.addEventListener("submit", function () {
    /*e.preventDefault();*/
    console.log("i m here")
    updateColumns(changeCoefficient.value);
    changeCoefficient.value = " ";
});