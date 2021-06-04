let text = `{"employees" : [
    {"firstName" : "John", "lastName" : "Doe"},
    {"firstName" : "Anna", "lastName" : "Smith"},
    {"firstName" : "Peter", "lastName" : "Jones"},
    {"firstName" : "Hyunwoo", "lastName" : "Park"},
    {"firstName" : "Heungmin", "lastName" : "Son"},
    {"firstName" : "Jisung", "lastName" : "Park"},
    {"firstName" : "Gildong", "lastName" : "Hong"},
    {"firstName" : "John", "lastName" : "Doe"},
    {"firstName" : "Anna", "lastName" : "Smith"},
    {"firstName" : "Peter", "lastName" : "Jones"},
    {"firstName" : "Hyunwoo", "lastName" : "Park"},
    {"firstName" : "Heungmin", "lastName" : "Son"},
    {"firstName" : "Jisung", "lastName" : "Park"},
    {"firstName" : "Gildong", "lastName" : "Hong"},
    {"firstName" : "John", "lastName" : "Doe"},
    {"firstName" : "Anna", "lastName" : "Smith"},
    {"firstName" : "Peter", "lastName" : "Jones"},
    {"firstName" : "Hyunwoo", "lastName" : "Park"},
    {"firstName" : "Heungmin", "lastName" : "Son"},
    {"firstName" : "Jisung", "lastName" : "Park"},
    {"firstName" : "Gildong", "lastName" : "Hong"},
    {"firstName" : "Tmax", "lastName" : "Cloud"},
    {"firstName" : "Anna", "lastName" : "Smith"},
    {"firstName" : "Peter", "lastName" : "Jones"}
]}`

obj = JSON.parse(text);
let vi = "";
let arrNumber = new Array();

for (let i=0;i<24;i++){
    arrNumber[i] = i;
}

vi += `<div class=box_outer>`
for(let i = 0; i<obj.employees.length/3; i++){
    vi += `<div class="box" onclick="alert('이름 : ${obj.employees[i].firstName} ${obj.employees[i].lastName}');">` + obj.employees[i].firstName + ' ' + obj.employees[i].lastName + `</div>`;
}
vi += `</div>`;

vi += `<div class=box_outer2>`
for(let i = obj.employees.length/3; i<obj.employees.length/3 * 2; i++){
    vi += `<div class="box" onclick="alert('이름 : ${obj.employees[i].firstName} ${obj.employees[i].lastName}');">` + obj.employees[i].firstName + ' ' + obj.employees[i].lastName + `</div>`;
}
vi += `</div>`;

vi += `<div class=box_outer3>`
for(let i = obj.employees.length/3 * 2; i<obj.employees.length; i++){
    vi += `<div class="box" onclick="alert('이름 : ${obj.employees[i].firstName} ${obj.employees[i].lastName}');">` + obj.employees[i].firstName + ' ' + obj.employees[i].lastName + `</div>`;
}
vi += `</div>`;

let a = document.getElementById('demo');
document.getElementById("demo").innerHTML = vi;