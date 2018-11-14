let age = '20'

// Double Equal เทียบแค่ค่า แต่ไม่เทียบประเภทตัวแปร
if (age == 20 && age !== 20) {
    console.log("Oh! You're Twenty. but WTF.")
}

// Triple Equal เทียบทั้งค่า เทียบทั้งประเภทตัวแปร
else if(age === 20) {
    console.log("You're twenty and your type is OK!")
}

else {
    console.log("Not Twenty!!")
}

// Output
// Oh! You're Twenty. but WTF.