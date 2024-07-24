// 2- dimational array:


let student = ["sandhya","lalitha", "chaithanya", "lakshmi"];

let marks = [

    [10, 20, 30],
    [40, 50, 60, 70],
    [80, 90]
    [100, 110, 120, 130]
]

document.write("My expected results: ", marks[1][1])



// 3- dimational array:

let students = ["sandhya","lalitha", "chaithanya", "lakshmi"];

let mark = [
    [
        ["anil", "amar", "anthony"],
        ["banit", "ravi", "bhanu"]
    ],

    [10, 20, 30]
    [40, 50, 60, 70],
    [80, 90],
    [100, 110, 120, 130, 140, 150, 160]
]

document.write("My expected results:", mark[0][0][1])


// String method:

// 1.split method:

var sample = "This is a string sample text"

document.write(sample.split(" "))

// 2. String- trim:

var studen = "        sandhya        ";
document.write(student);

console.log(studen.trim())



// 3.  string-carAt:


var studen = "Sandhya";
document.write(studen.charAt(5));


// For loop:

for(var a = 5; a<=10; a++){
    document.write(a+ ")"+ "Javascript" + "<br>")
}



// While-loop:

let x = 0;
while(x<=10){
    document.write(x+")" + "Hello world" + "<br>")
    x++
}


// do-while loop:


let y = 0;
do{
    document.write(y+")" + "This is a do-while output" + "<br>")
    y++
}
while(y<20)




