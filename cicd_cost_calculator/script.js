function calc(){
let runs=parseFloat(document.getElementById('a').value)||0;
let duration=parseFloat(document.getElementById('b').value)||0;
let cost=parseFloat(document.getElementById('c').value)||0;

let totalCost = runs * cost;
let totalTime = runs * duration;

let level = totalCost < 50 ? "Low CI/CD cost ✅" :
            totalCost < 200 ? "Moderate cost ⚖️" :
            "High CI/CD cost ⚠️";

let insights = "";
if(runs > 100) insights += "Frequent runs. Optimize triggers.<br>";
if(duration > 20) insights += "Long pipelines. Optimize steps.<br>";
if(totalCost > 200) insights += "High cost. Review pipeline usage.<br>";

document.getElementById('result').innerHTML =
"Total Cost: $" + totalCost.toFixed(2) + "<br><br>" +
"Total Time (minutes): " + totalTime.toFixed(0) + "<br><br>" +
level + "<br><br>" + insights;
}
