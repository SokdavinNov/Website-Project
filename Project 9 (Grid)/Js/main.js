var gridContainer = document.querySelector("#grid_container");
var columnAmount = 5;
var rowAmount = 5;
var row = 1;
var column = 1;

for (var i = 0; i < columnAmount * rowAmount; i++, column++) {
  if (column > columnAmount && (column - 1) % columnAmount == 0) {
    row++;
    column = 1;
  }

  var divElement = document.createElement("div");
  divElement.className = "grid_items";
  divElement.setAttribute("column", column);
  divElement.setAttribute("row", row);

  if (i == 0) {
    divElement.className = "grid_items fill";
  }
  gridContainer.append(divElement);
}

gridContainer.style =
  "grid-template-columns: repeat(" +
  columnAmount +
  ",auto);" +
  "grid-template-rows: repeat(" +
  rowAmount +
  ",auto);";

function switchGridItem(button) {
  var currentFillGridItems = document.querySelector(".fill");
  var currentColumn = parseInt(currentFillGridItems.getAttribute("column"));
  var currentRow = parseInt(currentFillGridItems.getAttribute("row"));
  var switchColumn = currentColumn;
  var switchRow = currentRow;

  if (button == "ArrowUp") {
    switchRow--;
  } else if (button == "ArrowDown") {
    switchRow++;
  } else if (button == "ArrowLeft") {
    switchColumn--;
  } else if (button == "ArrowRight") {
    switchColumn++;
  }

  if (switchColumn == 0) {
    alert("Cannot go further left");
    return;
  } else if (switchColumn > columnAmount) {
    alert("Cannot go further Right");
    return;
  }
  if (switchRow == 0) {
    alert("Cannot go further up");
    return;
  } else if (switchRow > columnAmount) {
    alert("Cannot go further down");
    return;
  }

  var columnItems = document.querySelectorAll(
    ".grid_items[column='" + switchColumn + "']"
  );
  var rowItems = columnItems[switchRow - 1];

  currentFillGridItems.className = "grid_items";
  rowItems.className = "grid_items fill";
}

document.addEventListener("keydown", (e) => {
  switchGridItem(e.key);
});
document.querySelector(".button_Up").addEventListener("click", () => {
  switchGridItem("ArrowUp");
});
document.querySelector(".button_Down").addEventListener("click", () => {
  switchGridItem("ArrowDown");
});
document.querySelector(".button_Left").addEventListener("click", () => {
  switchGridItem("ArrowLeft");
});
document.querySelector(".button_Right").addEventListener("click", () => {
  switchGridItem("ArrowRight");
});
