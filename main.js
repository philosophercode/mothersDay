window.onload = function() {
    backgroundCrazy();
};

function ranColor() {
    return (Math.floor(Math.random() * 256));
}



function backgroundCrazy() {
    
    for (let i = 0; i < 10000; i++) {
        const mDay = document.getElementById('mDay');
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        setInterval(() => {
            const red = ranColor();
            const green = ranColor();
            const blue = ranColor();
            //https://www.sitepoint.com/generating-random-color-values/
            
            const backgroundHue = 'rgb(' + red + ',' + green + ',' + 255 + ')';
            const fontHue = 'rgb(' + 255 + ',' + 0 + ',' + blue + ')';
            
            document.body.style.backgroundColor = backgroundHue;
            // document.body.style.color = hue;

            
            const x = (Math.floor(Math.random() * screenWidth));
            const y = (Math.floor(Math.random() * screenHeight));

            mDay.style.left = "" + x + "px";
            mDay.style.top = "" + y + "px";
            mDay.style.color = fontHue;

            const left = document.getElementById("mDay").style.left;
            const top = document.getElementById("mDay").style.top;


            console.log('i: ', i);
            
            
            console.log('screenWidth: ', screenWidth);
            console.log('screenHeight: ', screenHeight);
            console.log('x: ', x);
            console.log('y: ', y);
            console.log('left: ', left);
            console.log('top: ', top);
            

        }, 3000)
    }
}