let text = `{"employees" : [
    {"firstName" : "John", "lastName" : "Doe", "url" : "1.html"},
    {"firstName" : "Anna", "lastName" : "Smith", "url" : "2.html"},
    {"firstName" : "Peter", "lastName" : "Jones", "url" : "3.html"},
    {"firstName" : "Hyunwoo", "lastName" : "Park", "url" : "4.html"},
    {"firstName" : "Heungmin", "lastName" : "Son", "url" : "5.html"},
    {"firstName" : "Jisung", "lastName" : "Park", "url" : "6.html"},
    {"firstName" : "Gildong", "lastName" : "Hong", "url" : "7.html"},
    {"firstName" : "John", "lastName" : "Doe", "url" : "8.html"},
    {"firstName" : "Anna", "lastName" : "Smith", "url" : "9.html"},
    {"firstName" : "Peter", "lastName" : "Jones", "url" : "10.html"},
    {"firstName" : "Hyunwoo", "lastName" : "Park", "url" : "11.html"},
    {"firstName" : "Heungmin", "lastName" : "Son", "url" : "12.html"},
    {"firstName" : "Jisung", "lastName" : "Park", "url" : "13.html"},
    {"firstName" : "Gildong", "lastName" : "Hong", "url" : "14.html"},
    {"firstName" : "John", "lastName" : "Doe", "url" : "15.html"},
    {"firstName" : "Anna", "lastName" : "Smith", "url" : "16.html"},
    {"firstName" : "Peter", "lastName" : "Jones", "url" : "17.html"},
    {"firstName" : "Hyunwoo", "lastName" : "Park", "url" : "18.html"},
    {"firstName" : "Heungmin", "lastName" : "Son", "url" : "19.html"},
    {"firstName" : "Jisung", "lastName" : "Park", "url" : "20.html"},
    {"firstName" : "Gildong", "lastName" : "Hong", "url" : "21.html"},
    {"firstName" : "Tmax", "lastName" : "Cloud", "url" : "22.html"},
    {"firstName" : "Anna", "lastName" : "Smith", "url" : "23.html"},
    {"firstName" : "Peter", "lastName" : "Jones", "url" : "24.html"}
]}`

obj = JSON.parse(text);
let vi = "";
let arrNumber = new Array();

for (let i=0;i<24;i++){
    arrNumber[i] = i;
}

vi += `<div class=box_outer>`
for(let i = 0; i<obj.employees.length/3; i++){
    vi += `<div class="box" ><div class="inner_box_outer">` + obj.employees[i].firstName + ' ' + obj.employees[i].lastName + 
    `<button class="btn" onclick="location.href = './assets/${obj.employees[i].url}'">더 보기</button></div></div>`;
}
vi += `</div>`;

vi += `<div class=box_outer2>`
for(let i = obj.employees.length/3; i<obj.employees.length/3 * 2; i++){
    vi += `<div class="box"><div class="inner_box_outer">` + obj.employees[i].firstName + ' ' + obj.employees[i].lastName + 
    `<button class="btn" onclick="location.href = './assets/${obj.employees[i].url}'">더 보기</button></div></div>`;
}
vi += `</div>`;

vi += `<div class=box_outer3>`
for(let i = obj.employees.length/3 * 2; i<obj.employees.length; i++){
    vi += `<div class="box"><div class="inner_box_outer">` + obj.employees[i].firstName + ' ' + obj.employees[i].lastName +
    `<button class="btn" onclick="location.href = './assets/${obj.employees[i].url}'">더 보기</button></div></div>`;
}
vi += `</div>`;

let a = document.getElementById('demo');
document.getElementById("demo").innerHTML = vi;