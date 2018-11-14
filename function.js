// การประกาศฟังก์ชันแบบเรียกฟังก์ชัน
function functiondeclare() {
    console.log("Function Declare Function")
}

// การประกาศฟังก์ชันแบบเก็บค่าไว้ในตัวแปร
let vardeclare = function() {
    console.log("Variable Declare Function")
}

// การประกาศฟังก์ชันแบบใช้เครื่องหมายทำเป็นลูกศรแล้วเก็บค่าไว้ในตัวแปร
let arrow = () => {
    console.log("Arrow Function")
}

functiondeclare()
vardeclare()
arrow()