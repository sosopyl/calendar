let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');

let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();
console.log(date)
console.log(year)
console.log(month)

let info = document.querySelector('.info')
// let arr = range(getLastDay(2023, 5));
// let firstWeekDay = getFirstWeekDay(2023, 5); 
// let lastWeekDay  = getLastWeekDay(2023, 5); 
// let nums = chunk(normalize(arr, firstWeekDay, 
// 	6 - lastWeekDay), 7); 



function range(count) {
    let arr = [];
    let num = 0;
        for(let i = 1; i<= count ;i++){
        arr.push(i)
    }	
    return arr
}
function getLastDay(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
function getFirstWeekDay(year, month) {
    let date = new Date(year, +month, 1);
    return date.getDay()
    
}
function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDay()
}
function normalize(arr, left, right) {
	let res = [];
    for(let i = 1; i < left; i++){
        res.push('')
    }
    for(let elem of arr){
        res.push(elem)
    }
    for(let i = 0; i <= right; i++){
        res.push('')
    }
    return res
}
function chunk(arr, n) {
	let result = [];
	let count = Math.ceil(arr.length / n);
	
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	
	return result;
}
function createTable(parent, arr) {
    parent.textContent = '';

	for (let subArr of arr) {
        let tr = document.createElement('tr');
        
        for (let elem of subArr) {
            let td = document.createElement('td');
            td.textContent = elem;
            tr.appendChild(td);
        }
        
        parent.appendChild(tr);
    }
}


// console.log(arr);
// console.log(firstWeekDay);
// console.log(lastWeekDay);
// console.log(nums);

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	console.log(arr)
	let firstWeekDay = getFirstWeekDay(year, 
		month); 
    console.log(firstWeekDay)
	let lastWeekDay  = getLastWeekDay(year, 
		month); 
    console.log(lastWeekDay)
	let nums = chunk(normalize(arr, firstWeekDay, 
		6 - lastWeekDay), 7); 
    console.log(nums)
	createTable(body, nums)
}
draw(body, year, month)

function getNextYear(year, month){
    let res = year;
    if (month == 11){
        res++;
        return res
    } else {
        return res
    }
} 

console.log(month)
next.addEventListener('click', function() {
        if(month < 11){
            month++
        } else
        (month = 0)
         if(month == 11){
            year ++
         }

	draw(body, year, month); 
    datename()
});
prev.addEventListener('click', function() {
    if(month > 0){
        month--
    } else
    (month = 11)
     if(month == 0){
        year --
     }

draw(body, year, month); 
datename()
});

function datename(){
    let monthname = month + 1;
    if(monthname <= 9){
        monthname = '0' + monthname
    }
    info.textContent = monthname +'.' + year
}
datename()
