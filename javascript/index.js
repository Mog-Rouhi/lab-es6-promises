// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        })
      })
    })
  })
});

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
    return obtainInstruction("steak", 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");

  })
  .catch(console.log("there was an error"));

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try{
    const step0 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  
    const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
  
    const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  
    const step3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  
    const step4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
  
    const step5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
  
    const step6 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`

    document.querySelector("#broccoliImg").removeAttribute("hidden");

  }
  catch (err) {
    console.log("there was an error:", err)
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

const promise0 = obtainInstruction('brusselsSprouts', 0)
const promise1 = obtainInstruction('brusselsSprouts', 1)
const promise2 = obtainInstruction('brusselsSprouts', 2)
const promise3 = obtainInstruction('brusselsSprouts', 3)
const promise4 = obtainInstruction('brusselsSprouts', 4)
const promise5 = obtainInstruction('brusselsSprouts', 5)
const promise6 = obtainInstruction('brusselsSprouts', 6)
const promise7 = obtainInstruction('brusselsSprouts', 7)

let promises = [promise0, promise1, promise2, promise3, promise4, promise5, promise6, promise7]
/*
Promise.all(promises).then((values) =>{
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[0]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[1]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[2]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[3]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[4]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[5]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[6]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[7]}</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})
*/
Promise.all(promises)
  .then((values) => {
    for (let i = 0; i <= 7; i++) {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[i]}</li>`;
    }
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch("There was an error");

