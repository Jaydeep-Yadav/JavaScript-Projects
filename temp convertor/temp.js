const calculatetemp =()=>{
    const numbertemp = document.getElementById('temp1').value;
    console.log(numbertemp);
    const tempdiff = document.getElementById('tempdiff');
    const valtemp = tempdiff.options[tempdiff.selectedIndex];
    let result;

    const fartocel = (cel)=>{
        let far = Math.round(cel*1.8 + 32);
        return far;
    }
    const celtofar = (far)=>{
        let cel = Math.round((far-32)/1.8);
        return cel;
    }
    if(valtemp == 'cel'){
        result = celtofar(numbertemp);
        document.getElementById('result').innerHTML = `= ${result} far`
    }else{
        result = fartocel(numbertemp);
        document.getElementById('result').innerHTML = `= ${result} far`
    }

}
