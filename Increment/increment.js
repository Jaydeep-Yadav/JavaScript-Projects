const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML = 0;
    const updateCounter =()=>{
        const targetcount = Number(counter.getAttribute('data-target'));
        const startingcount = +counter.innerHTML;
        const incr = targetcount/100;

        if(startingcount< targetcount){
            counter.innerHTML = `${Math.round(startingcount + incr)}`
            setTimeout(updateCounter,10)
        }else{
            counter.innerHTML = targetcount;
        }

    }
    updateCounter();
})