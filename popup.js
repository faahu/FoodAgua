
const resetKclButton = document.querySelector('.reset-kcl');
const resetWaterButton = document.querySelector('.reset-water');
const exportButton = document.querySelector('.export-button');
const timeDisplay = document.getElementById('time-display');

const kclButton = document.getElementById('kclButton');
const waterButton = document.getElementById('waterButton');
const meatButton = document.getElementById('meatButton');
const carbsButton = document.getElementById('carbsButton');

const ml250Button = document.getElementById('ml250Button');
const ml500Button = document.getElementById('ml500Button');
const ml1000Button = document.getElementById('ml1000Button');

// Const no working
  // const foodsButton = document.getElementById('foodsButton');
  // const biciButton = document.getElementById('biciButton');
  // const fulboButton = document.getElementById('fulboButton');
  // const cardioButton = document.getElementById('cardioButton');
  // const setAlarmButton = document.getElementById('setAlarmButton');
  // setAlarmButton.addEventListener('click', setAlarm);


// Initialize the values


let storedKclCount = localStorage.getItem('kclCount');
let storedWaterIntake = localStorage.getItem('waterIntake');
if (!storedKclCount) {
  storedKclCount = 0;
}
if (!storedWaterIntake) {
  storedWaterIntake = 0;
}
kclCount.innerText = storedKclCount;
waterIntake.innerText = storedWaterIntake;

// Add event listeners
kclButton.addEventListener('click', () => {
  const newKclCount = parseInt(kclCount.innerText) + 50; // Add 100 calories
  kclCount.innerText = newKclCount;
  localStorage.setItem('kclCount', newKclCount.toString());
});

waterButton.addEventListener('click', () => {
  const newWaterIntake = parseInt(waterIntake.innerText) + 50; // Add 100 ml
  waterIntake.innerText = newWaterIntake;
  localStorage.setItem('waterIntake', newWaterIntake.toString());
});

meatButton.addEventListener('click', () => {
  const newKclCount = parseInt(kclCount.innerText) + 350; // Add 350 kcls
  kclCount.innerText = newKclCount;
  localStorage.setItem('kclCount', newKclCount.toString());
});

carbsButton.addEventListener('click', () => {
  const newKclCount = parseInt(kclCount.innerText) + 1000; // Add 350 kcls
  kclCount.innerText = newKclCount;
  localStorage.setItem('kclCount', newKclCount.toString());
});

// Function to add calories to the calorie count
function addCalories(calories) {
  const kclCount = document.getElementById("kclCount");
  const currentCalories = parseInt(kclCount.innerText);
  const newCalories = currentCalories + calories;
  kclCount.innerText = newCalories;
}

// RESET BUTTON 

resetKclButton.addEventListener('click', () => {
  localStorage.removeItem('kclCount');
  kclCount.innerText = '0';
});

resetWaterButton.addEventListener('click', () => {
  localStorage.removeItem('waterIntake');
  waterIntake.innerText = '0';
});

//AGUA BOTONES CHICOS

ml250Button.addEventListener('click', () => {
  updateWaterIntake(250);
});

ml500Button.addEventListener('click', () => {
  updateWaterIntake(500);
});

ml1000Button.addEventListener('click', () => {
  updateWaterIntake(1000);
});


function updateWaterIntake(ml) {
  const currentWaterIntake = parseInt(waterIntake.innerText);
  const newWaterIntake = currentWaterIntake + ml;
  waterIntake.innerText = newWaterIntake;
  localStorage.setItem('waterIntake', newWaterIntake.toString());
}


/* f5, gym , cardio afk consts



// Add event listeners to F5, Gym, and Bici buttons
const f5Button = document.getElementById('f5Button');
const gymButton = document.getElementById('gymButton');
const biciButton = document.getElementById('biciButton'); */

/* f5Button.addEventListener('click', () => {
  const currentButtons = f5Button.innerText;
  const newButtons = currentButtons + ' F5';
  f5Button.innerText = newButtons;
});

gymButton.addEventListener('click', () => {
  const currentButtons = gymButton.innerText;
  const newButtons = currentButtons + ' Gym';
  gymButton.innerText = newButtons;
});

biciButton.addEventListener('click', () => {
  const currentButtons = biciButton.innerText;
  const newButtons = currentButtons + ' Bici';
  biciButton.innerText = newButtons;
}); */

/* gym f5 y bici normal sin colores
Normal

let f5Value = 0;
let gymValue = 0;
let biciValue = 0;

// Function to add the value of the clicked button
function addValue(buttonTitle) {
  if (buttonTitle === 'F5') {
    f5Value++;
  } else if (buttonTitle === 'Gym') {
    gymValue++;
  } else if (buttonTitle === 'Bici') {
    biciValue++;
  }
} */




function updateTime() {
  const currentTime = new Date();
  const options = {
    timeZone: 'America/Argentina/Buenos_Aires',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const formattedTime = currentTime.toLocaleString('en-US', options);
  timeDisplay.innerText = formattedTime;
}

// Initial time update
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

/* Suma pero se ven los 3
 */
// /* EJERCICIOS CON COLORES*/

// let f5Value = 0;
// let gymValue = 0;
// let biciValue = 0;

// // Function to add the value of the clicked button
// function addValue(buttonTitle) {
//   if (buttonTitle === 'F5') {
//     f5Value++;
//     const f5Button = document.getElementById('f5Button');
//     f5Button.classList.add('selected');
//   } else if (buttonTitle === 'Gym') {
//     gymValue++;
//     const gymButton = document.getElementById('gymButton');
//     gymButton.classList.add('selected');
//   } else if (buttonTitle === 'Bici') {
//     biciValue++;
//     const biciButton = document.getElementById('biciButton');
//     biciButton.classList.add('selected');
//   }
// }

/* CLICKEAD SE COPIAN DE A UNO
 */

let f5Clicked = false;
let gymClicked = false;
let biciClicked = false;

// Function to add the value of the clicked button
function addValue(buttonTitle) {
  if (buttonTitle === 'F5') {
    
    const f5Button = document.getElementById('f5Button');
    f5Button.classList.add('selected');
    f5Clicked = true; // Mark F5 button as clicked
  } else if (buttonTitle === 'Gym') {

    const gymButton = document.getElementById('gymButton');
    gymButton.classList.add('selected');
    gymClicked = true; // Mark Gym button as clicked
  } else if (buttonTitle === 'Bici') {

    const biciButton = document.getElementById('biciButton');
    biciButton.classList.add('selected');
    biciClicked = true; // Mark Bici button as clicked

  }
}

// TRACK IT COPY BUTTON
function copyAndRedirect() {
  const kclCount = document.getElementById('kclCount'); // Replace with your actual value
  const waterIntakeValue = document.getElementById('waterIntake'); // 2do error
  const formattedTimeElement = document.getElementById('time-display');
  const formattedTime = formattedTimeElement.innerText;
  // const dataToCopy = `Calories: ${kclCount.innerHTML}, Water: ${waterIntake.innerHTML}, F5: ${f5Value}, Gym: ${gymValue}, Bici: ${biciValue}, Time: ${formattedTime}`;

  let dataToCopy = `Calories: ${kclCount.innerHTML}, Water: ${waterIntake.innerHTML}`;

    // Check if F5, Gym, or Bici buttons have been clicked and add their values accordingly
    if (f5Clicked) {
      dataToCopy += `, F5: 1`;
    }
    if (gymClicked) {
      dataToCopy += `, gym: 1`;
    }
    if (biciClicked) {
      dataToCopy += `, bici: 1`;
    }
    
  dataToCopy += `, Time: ${formattedTime}`;
  
  
  navigator.clipboard.writeText(dataToCopy)
  .then(() => {
    console.log("Data copied successfully!");
    window.location.href = "https://www.notion.so/Calories-Track-2023-a02a9e695fb246a381a239b1d371d5c8";
    })
    .catch((error) => {
      console.error("Error copying data:", error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  // Food items and their calorie values
  
  
/*comidas con macros

const foods = {
    "Apple": 52,
    "Banana": 96,
    "Chicken Breast": 165,
    "Salmon": 206,
    "Avena, 1egg, banana, pasta de mani, Scoop, lech" : 700,
    // Add more food items and their calorie values here
  };
   */

  // Get the "Foods" button and add a click event listener
  const foodsButton = document.getElementById("foodsButton");
  foodsButton.addEventListener("click", function() {
    // Create a dropdown menu to select food items
    const dropdown = document.createElement("select");
    
    // Add an option for each food item
    for (const food in foods) {
      const option = document.createElement("option");
      option.text = food;
      dropdown.add(option);
    }
    
    // Add a button to add the selected food item to the calorie count

   /*  const addButton = document.createElement("button");
    addButton.textContent = "Add Food";
    addButton.addEventListener("click", function() {
      const selectedFood = dropdown.value;
      const calories = foods[selectedFood];
      addCalories(calories);
    }); */
    
    // Append the dropdown menu and button to the DOM
    const container = document.querySelector(".small-buttons");
    container.appendChild(dropdown);
    container.appendChild(addButton);
  });
  
  
  const container = document.querySelector(".small-buttons-agua");
  container.appendChild(dropdown);
  container.appendChild(addButton);
  

});

  //Fin del code

/* EDITABle texto
  
      function makeEditable(element) {
        const inputEl = element.querySelector('input[type="text"]');
        if (inputEl) {
            inputEl.readOnly = false;
            inputEl.focus();
            element.classList.remove('uneditable');
            inputEl.addEventListener('blur', () => {
                inputEl.readOnly = true;
                element.classList.add('uneditable');
              });
              inputEl.addEventListener('keyup', (event) => {
                  if (event.key === 'Enter') {
                      inputEl.readOnly = true;
                      element.classList.add('uneditable');
                    }
                  });
                }
              } */
             
/* EXCEL Y COPY DATA
            exportButton.addEventListener('click', () => {
                const kclCountValue = parseInt(kclCount.innerText);
                const waterIntakeValue = parseInt(waterIntake.innerText);
                const csvContent = `data:text/csv;charset=utf-8,KCL count,Water intake\n${kclCountValue},${waterIntakeValue}`;
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement('a');
                link.setAttribute('href', encodedUri);
                link.setAttribute('download', 'kcl-water-data.csv');
                document.body.appendChild(link);
                link.click();
              }); */
  
/* COPY DATA
              
              document.getElementById("copy-button").addEventListener("click", function(){
                  const kclCountValue = parseInt(kclCount.innerText);
    const waterIntakeValue = parseInt(waterIntake.innerText);
    const currentTime = new Date();
    const options = { timeZone: 'America/Argentina/Buenos_Aires', hour12: false };
    const formattedTime = currentTime.toLocaleTimeString('en-US', options);
  
    const dataToCopy = `Calories: ${kclCountValue}, Water: ${waterIntakeValue}, Time: ${timeDisplay.innerText}`;  navigator.clipboard.writeText(dataToCopy)
      .then(() => {
        console.log("Data copied successfully!");
      })
      .catch((error) => {
          console.error("Error copying data:", error);
        });
    }); */