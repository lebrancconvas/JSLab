try {
    let a = 5
    throw 50
    console.log(a)  
} catch (e) {
    console.log('What is it?',e)
} finally {
    console.log('Hello')
}

let a = () => {
  try {
    return "Oh!";
  } finally {
    console.log("Pika!");
  }
};

console.log(a());

