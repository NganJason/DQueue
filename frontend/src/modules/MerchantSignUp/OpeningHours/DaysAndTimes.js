function TextValuePair(text, value) {
  this.value = value;
  this.text = text;
}

function createTimeArr(minuteInterval){
  const steps = Math.floor(1440 / minuteInterval)
  const timeArr = [];

  for(let i = 0; i < steps; ++i)
    timeArr.push(new Date(0, 0, 0, 0, i * minuteInterval, 0));

  return timeArr;
}

function dateTimeToText(date)
{
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  
  return `${hour}:${minute}`;
}

function timeValToText(timeVal) {
  const time = new Date(timeVal);
  if(Number.isNaN(time.getHours()))
    return "";

  return dateTimeToText(time)
}

//Create time options with n minute intervals
const timesArr = createTimeArr(30);
const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//Create time and day options for opening hours page
const times = timesArr.map(time => new TextValuePair(dateTimeToText(time), time.getTime()));
const days = daysArr.map((day, index) => new TextValuePair(day, index));

export { times, days, daysArr, timeValToText };
