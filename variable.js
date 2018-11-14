// var ใช้ในการประการตัวแปรแบบ Global Variable
// let ใช้ในการประกาศตัวแปรแบบ Local Variable
// const ใช้ในการประกาศตัวแปรค่าคงที่ แต่ถ้าประกาศดังตัวอย่าง จะแสดงผลคล้ายกับ Local Variable

var a = 10
let b = 5
const c = 50

if (true) {
    var a = 9
    let b = 4
    const c = 40
    console.log(`Locally : var a = ${a} , let b = ${b} , const c = ${c}`)
}
console.log(`Globally : var a = ${a} , let b = ${b} , const c = ${c}`)

// Output
// Locally: var a = 9, let b = 4, const c = 40
// Globally: var a = 9, let b = 5, const c = 50