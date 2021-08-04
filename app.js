document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 8;
  const squares = [];

  const candyColors = ["red", "yellow", "orange", "purple", "green", "blue"];

  //Create Board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();

  //Drage the candies
  let colorBeingDragged;
  let colorBeingReplaced;
  let sqaureIdBeingDragged;
  let sqaureIdBeingReplaced;

  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    sqaureIdBeingDragged = parseInt(this.id);
    console.log(colorBeingDragged);
    console.log(this.id, "dragstart");
  }

  function dragOver(e) {
    e.preventDefault();
    console.log(this.id, "dragover");
  }

  function dragEnter() {
    console.log(this.id, "dragenter");
  }

  function dragLeave() {
    console.log(this.id, "dragleave");
  }

  function dragEnd() {
    console.log(this.id, "dragOver");
  }

  function dragDrop() {
    console.log(this.id, "dragdrop");
    colorBeingReplaced = this.style.backgroundColor;
    sqaureIdBeingReplaced = parseInt(this.id);
    this.style.backgroundColor = colorBeingDragged;
    squares[sqaureIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  }
  function dragEnd() {
    console.log(this.id, "dragend");
    // what  is a valid move?
    let validMoves = [
      sqaureIdBeingDragged - 1,
      sqaureIdBeingDragged - width,
      sqaureIdBeingDragged + 1,
      sqaureIdBeingDragged + width,
    ];
    let validMove = validMoves.includes(sqaureIdBeingReplaced)

    if (sqaureIdBeingReplaced && validMove) {
        sqaureIdBeingReplaced = null
    } else if (sqaureIdBeingReplaced && !validMove) {
        squares[sqaureIdBeingReplaced.sty.backgroundColor = colorBeingReplaced]
        squares[sqaureIdBeingDragged].style.backgroundColor = colorBeingDragged
    } else squares[sqaureIdBeingDragged].style.backgroundColor = colorBeingDragged
  }
});
