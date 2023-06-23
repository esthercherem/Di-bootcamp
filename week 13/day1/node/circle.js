const calculateCircleArea = (radius) => {
    const area = Math.PI * radius ** 2;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `the area of the circle with a radius of ${radius} is ${area.toFixed(2)}.`;
};

export default calculateCircleArea;