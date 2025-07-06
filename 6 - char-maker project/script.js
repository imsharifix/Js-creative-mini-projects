let rootStyle = document.querySelector(":root");
let faceBtn = document.querySelector("#face-btn");
let face = document.querySelector("#face");
let colorBtn = document.querySelector("#color-btn");
let hornsBtn = document.querySelector('#horns-btn');
let tailBtn = document.querySelector('#tail-btn');


let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];

let colors = [...bodyColors, 'transparent']


let [faceCounter, tailCounter, hornsCounter, colorCounter] = Array(4).fill(0);

 
const setCounter = (counter, lenght) => {
  return counter < lenght - 1 ? counter + 1 : 0;
}
//  face Button Change
faceBtn.addEventListener("click", () => {
  faceCounter = setCounter(faceCounter, 6);
  face.setAttribute("src", `face-${faceCounter}.png`);
});

// color Button Change
colorBtn.addEventListener("click", () => {
  colorCounter = setCounter(colorCounter, bodyColors.length);
  rootStyle.style.setProperty("--color-character", bodyColors[colorCounter]);

});


// horns Button Change
hornsBtn.addEventListener('click', () => {
  hornsCounter = setCounter(hornsCounter, colors.length);
  rootStyle.style.setProperty("--color-horns", colors[hornsCounter]);
})

// tail Button Change color
tailBtn.addEventListener('click', () => {
    hornsCounter = setCounter(hornsCounter, colors.length);
    rootStyle.style.setProperty("--color-tail", colors[hornsCounter]);
})