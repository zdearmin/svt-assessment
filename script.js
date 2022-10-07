async function start() {
    table = document.querySelector("#robotTable tbody");
    response = await fetch("https://60c8ed887dafc90017ffbd56.mockapi.io/robots");
    data = await response.json();
  
    displayRobots();
}
  
function displayRobots() {
    let result = "";
  
    for (var i = 0; i < data.length; i++) {
      const robotId = data[i].robotId;
      const robotBatLevel = data[i].batteryLevel;
      const robotX = data[i].x;
      const robotY = data[i].y;
  
      result += `<tr>
                    <td>${robotId}</td>
                    <td>${robotBatLevel} %</td>
                    <td>${robotX}</td>
                    <td>${robotY}</td>
                  </tr>`;
    }
    table.innerHTML = result;
}
  
start()