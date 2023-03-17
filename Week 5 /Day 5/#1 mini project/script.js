
      let currentColor;
      let isMousePressed = false;
      const button = document.querySelector(".clear button");
      const main = document.getElementById("main");

      generateColors();
      listenToMain();
      listenToClearButton();

      function listenToClearButton() {
        button.addEventListener("click", clearCanvas);
      }

      function clearCanvas() {
        currentColor = null;
        const squares = document.querySelectorAll("#main > div");
        for (const square of squares) {
          square.style.backgroundColor = "white";
        }
        button.style.backgroundColor = "white";
      }

      function listenToMain() {
        main.addEventListener("mousedown", handleClick);
        main.addEventListener("mousemove", handleMove);
        document.body.addEventListener("mouseup", handleMouseRelease);
      }

      function handleClick() {
        if (currentColor == null) return;
        isMousePressed = true;
      }

      function handleMouseRelease() {
        isMousePressed = false;
      }

      function handleMove(e) {
        if (!isMousePressed) return;
        const hoveredDiv = document.elementFromPoint(e.clientX, e.clientY);
        hoveredDiv.style.backgroundColor = currentColor;
      }

      function generateColors() {
        const colorDivs = document.querySelectorAll(".color");
        for (const colorDiv of colorDivs) {
          const randomColor = generateRandomColor();
          colorDiv.style.backgroundColor = randomColor;
          colorDiv.dataset.color = randomColor;
          colorDiv.addEventListener("click", setCurrentColor);
        }
      }

      function generateRandomColor() {
        const hex = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + hex;
      }

      function setCurrentColor(e) {
        const chosenColor = e.target.dataset.color;
        currentColor = chosenColor;
        button.style.backgroundColor = chosenColor;
      }

