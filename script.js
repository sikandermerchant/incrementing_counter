const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () =>{
    //the target from the getAttribute when returned is a string and hence we add the + sign to make it a number so we can do mathematical operations on it
    const target = +(counter.getAttribute('data-target'));
    const c = +(counter.innerText);
    //the increment can be modified depending on the steps or how long we want the counters to be, the higher the number target is divided by the longer it will display the counter effect
    const increment = target / 200;
    console.log(increment);
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      ///use setTimeout to call the updateCounter function to give the counting effect or else it will just display that figure without the counter effect
      setTimeout(updateCounter, 1);
    }else{
      counter.innerText = target;
    }
  }
  updateCounter();
});