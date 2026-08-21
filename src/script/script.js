document.addEventListener("DOMContentLoaded", () => {
  // buttons
  const dailyBtn = document.querySelector('.daily-button');
  const weeklyBtn = document.querySelector('.weekly-button');
  const monthlyBtn = document.querySelector('.monthly-button');
  console.log(dailyBtn, weeklyBtn, monthlyBtn);
  
  // All element that are going to be updated(with data, current hours)
  const workHours = document.querySelector('.present-work-hours');
  const playHours = document.querySelector('.present-play-hours');
  const studyHours = document.querySelector('.present-study-hours');
  const exerciseHours = document.querySelector('.present-exercise-hours');
  const socialHours = document.querySelector('.present-social-hours');
  const selfCareHours = document.querySelector('.present-selfcare-hours');
  console.log(workHours,playHours,studyHours,exerciseHours,socialHours,selfCareHours)
  
  // elements for previous hours
  const previousWorkHour = document.querySelector('.previous-work-hours');
  const previousPlayHour = document.querySelector('.previous-play-hours');
  const previousStudyHour = document.querySelector('.previous-study-hours');
  const previousExerciseHour = document.querySelector('.previous-exercise-hours');
  const previousSocialHour = document.querySelector('.previous-social-hours');
  const previousSelfCareHour = document.querySelector('.previous-selfcare-hours');

  // using asynchronous functions to manipulate data
  async function fetchData() {
    const response = await fetch("data.json");
    console.log(response)
    // check for errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }
    const jsonData = await response.json();
    return jsonData;
  }
  
  let display = function () {
    clickDailyBtn();
    clickWeeklyBtn();
    clickMonthlyBtn();
  }
  
  function clickDailyBtn() {
    dailyBtn.addEventListener('click', () => {
      console.log('daily click button works!')
      const myData = fetchData();
      myData.then((data) => {
        console.log(data)
        // For work (daily)
        workHours.textContent = data[0].timeframes.daily.current;
        previousWorkHour.textContent = `Previous - ${data[0].timeframes.daily.previous}hrs`;
        
        // For play (daily)
        playHours.textContent = data[1].timeframes.daily.current;
        previousPlayHour.textContent = `Previous - ${data[1].timeframes.daily.previous}hrs`;
        
        // For study (daily)
        studyHours.textContent = data[2].timeframes.daily.current;
        previousStudyHour.textContent = `Previous - ${data[2].timeframes.daily.previous}hrs`;
        
        // For exercise (daily)
        exerciseHours.textContent = data[3].timeframes.daily.current;
        previousExerciseHour.textContent = `Previous - ${data[3].timeframes.daily.previous}hrs`;
        
        // For social (daily)
        socialHours.textContent = data[4].timeframes.daily.current;
        previousSocialHour.textContent = `Previous - ${data[4].timeframes.daily.previous}hrs`;
        
        // For selfcare (daily)
        selfCareHours.textContent = data[5].timeframes.daily.current;
        previousSelfCareHour.textContent = `Previous - ${data[5].timeframes.daily.previous}hrs`;
      })
    })
  }
  
  function clickWeeklyBtn() {
    weeklyBtn.addEventListener('click', () => {
      console.log('weekly click button works!')
      const myData = fetchData();
      myData.then((data) => {
        console.log(data)
        // for work (weekly)
        workHours.textContent = data[0].timeframes.weekly.current;
        previousWorkHour.textContent = `Previous - ${data[0].timeframes.weekly.previous}hrs`;
        
        // for play (weekly)
        playHours.textContent = data[1].timeframes.weekly.current;
        previousPlayHour.textContent = `Previous - ${data[1].timeframes.weekly.previous}hrs`;
        
        // for study (weekly)
        studyHours.textContent = data[2].timeframes.weekly.current;
        previousStudyHour.textContent = `Previous - ${data[2].timeframes.weekly.previous}hrs`;
        
        // For Exercise (weekly)
        exerciseHours.textContent = data[3].timeframes.weekly.current;
        previousExerciseHour.textContent = `Previous - ${data[3].timeframes.weekly.previous}hrs`;
        
        // For social (weekly)
        socialHours.textContent = data[4].timeframes.weekly.current;
        previousSocialHour.textContent = `Previous - ${data[4].timeframes.weekly.previous}hrs`;
        
        // For selfcare (weekly)
        selfCareHours.textContent = data[5].timeframes.weekly.current;
        previousSelfCareHour.textContent = `Previous - ${data[5].timeframes.weekly.previous}hrs`;
      })
    });
  };
  
  function clickMonthlyBtn() {
    monthlyBtn.addEventListener('click', () => {
      console.log('monthly click button works!')
      const myData = fetchData();
      myData.then((data) => {
        console.log(data)
        // for work (monthly )
        workHours.textContent = data[0].timeframes.monthly.current;
        previousWorkHour.textContent = `Previous - ${data[0].timeframes.monthly.previous}hrs`;
        
        // for play (monthly)
        playHours.textContent = data[1].timeframes.monthly.current;
        previousWorkHour.textContent = `Previous - ${data[1].timeframes.monthly.previous}hrs`;
        
        // for study (monthly)
        studyHours.textContent = data[2].timeframes.monthly.current;
        previousStudyHour.textContent = `Previous - ${data[2].timeframes.monthly.previous}hrs`;
        
        // for exercise (monthly)
        exerciseHours.textContent = data[3].timeframes.monthly.current;
        previousExerciseHour.textContent = `Previous - ${data[3].timeframes.monthly.previous}hrs`;
        
        // For social (monthly)
        socialHours.textContent = data[4].timeframes.monthly.current;
        previousSocialHour.textContent = `Previous - ${data[4].timeframes.monthly.previous}hrs`;
        
        // For Selfcare (monthly)
        selfCareHours.textContent = data[5].timeframes.monthly.current;
        previousSelfCareHour.textContent = `Previous - ${data[5].timeframes.monthly.previous}hrs`;
      })
    })
  };
  
  display();
}); 
