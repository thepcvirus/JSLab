import { FlyingCar } from "./flyingcar.js";


let flying = new FlyingCar("Mercedes", new Date());
flying.toString();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    //console.log(data.json());

    return data.json();
  }).then((jsonData) => {
    let Table = document.createElement("Table");
    console.log(jsonData);
    
    jsonData.forEach(element => {
      let Row = document.createElement("tr");
      for (const key in element) {
        //console.log(key);
        if(key == "username" || key == "email"){
          let cell = document.createElement("td");
          cell.innerText = element[key];
          Row.appendChild(cell);
        }
        else if(key == "company"){
          let cell = document.createElement("td");
          cell.innerText = element[key]["name"];
          Row.appendChild(cell);
        }
        else if(key == "address"){
          let cell = document.createElement("td");
          cell.innerText = element[key]["geo"]["lat"];
          Row.appendChild(cell);
          cell = document.createElement("td");
          cell.innerText = element[key]["geo"]["lng"];
          Row.appendChild(cell);
        }
      }
      Table.appendChild(Row);
      Table.appendChild(document.createElement("br"))
    });
document.body.appendChild(Table);
})
  .catch ();