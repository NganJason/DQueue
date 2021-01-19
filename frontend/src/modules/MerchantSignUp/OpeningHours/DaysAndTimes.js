function TextValuePair(text, value) {
  this.value = value;
  this.text = text;
}
const timesArr = [
  "12:00am", "12:30am", "1:00am", "1:30am", "2:00am", "2:30am", "3:00am", "3:30am",
  "4:00am", "4:30am", "5:00am", "5:30am", "6:00am", "6:30am", "7:00am", "7:30am",
  "8:00am", "8:30am", "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm", "3:00pm", "3:30pm",
  "4:00pm", "4:30pm", "5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm",
  "8:00pm", "8:30pm", "9:00am", "9:30am", "10:00pm", "10:30pm", "11:00pm", "11:30pm"
];

const timesVal = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5,
  6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
  11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5,
  16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20,
  20.5, 21, 21.5, 22, 22.5, 23, 23.5
]

const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const times = [];
for (let i = 0; i < timesArr.length; ++i)
  times.push(new TextValuePair(timesArr[i], timesVal[i]));

const days = daysArr.map((day, index) => new TextValuePair(day, index));

function timeValToText(timeVal) {
  return timesArr[timesVal.findIndex(elem => elem === timeVal)];
}

export { times, days, daysArr, timeValToText };
