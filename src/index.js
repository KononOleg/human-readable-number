module.exports = function toReadable (number) {

    if(number==0)
    {
        return "zero";
    }

    var res="";
    var hundreds =Math.floor(number/100);
    var tens = Math.floor((number-hundreds*100)/10);
    var ones = number - hundreds*100 -tens*10;

    let onesArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensArr = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    if(number < 20)
    {
        res =onesArr[number];
        return res.trim();

    }
    else if(number >19 && number <100)
    {
        res=tensArr[tens]+onesArr[ones];
        return res.trim();
    }
    else 
    {
        if((tens*10+ones)>9 && (tens*10+ones)<20)
            {
                res = onesArr[hundreds]+ " hundred "+onesArr[(tens*10)+ones];
            }
        else{
            res = onesArr[hundreds]+ " hundred "  +tensArr[tens]+onesArr[ones];
            }
    
        return res.trim();
    }
  
}
