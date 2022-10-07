async function start() {
    table = document.querySelector("#robotTable tbody");
    response = await fetch("https://60c8ed887dafc90017ffbd56.mockapi.io/robots");
    data = await response.json();
  
    displayRobots();

    document.querySelectorAll("#robotTable thead tr th").forEach((r) => {
        r.addEventListener("click", sort);
      });
}
  
function displayRobots() {
    let result = "";
  
    for (var i = 0; i < data.length; i++) {
      const robotId = data[i].robotId;
      const robotBatLevel = data[i].batteryLevel;
      const robotX = data[i].x;
      const robotY = data[i].y;
  
        result += 
        `<tr>
        <td>${robotId}</td>
        <td>${robotBatLevel} %</td>
        <td>${robotX}</td>
        <td>${robotY}</td>
        </tr>`;
    }
    table.innerHTML = result;
}

var data, table, column;
let asc = false;

function sort(num) {
    let currentSort = num.target.dataset.sort;
  
    if (column === currentSort) {
      asc = !asc;
    } else {
      column = currentSort;
    }
  
    data.sort((a, b) => {
      if (a[column] < b[column]) {
        return asc ? 1 : -1;
      } else {
        if (a[column] > b[column]) {
          return asc ? -1 : 1;
        }
      }
      return 0;
    });
    displayRobots();
}
  
start()