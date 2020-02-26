const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//transfer day to number
const day_to_number = day => days.findIndex(i => i === day)
// transfer number to day
const number_to_day = num => days[num%days.length]

const fill_days = (input, n) => {
  let result = [input[0]];
  for (let i = 0; i < n; i++) {
    const preDay = day_to_number(result[i-1])
    const curDay = number_to_day(preDay +1);
    let inputDay = null;
    for (let j = 0; j < input.length; j++) {
      if(curDay == input[j]){
        inputDay= input[j];
      break;
      }
    }
        if(inputDay){
          result.push(inputDay);
        }else{
          result.push(curDay)
        }
  }
};
console.log(fill_days(["Mon"], 7));
console.log(fill_days(["Mon"], 10));