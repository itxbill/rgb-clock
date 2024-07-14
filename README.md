# rgb-clock
An RGB digital clock displaying the current time with an animated design, built using HTML, CSS, and JavaScript.

## Clock with JavaScript
A simple digital clock displaying the current time with an animated design, built using HTML, CSS, and JavaScript.

## Features
* Displays current time in hours, minutes, and seconds.
* Shows AM/PM indicator.
* Animated gradient border and text for a visually appealing look.

## Usage
To use this project, simply clone the repository and open the `index.html` file in your browser.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/itxbill/clock-with-javascript.git
    ```
2. Navigate to the project directory:
    ```sh
    cd clock-with-javascript
    ```
3. Open the `index.html` file in your browser.

## Files
* `index.html` - The main HTML file that contains the structure of the clock.
* `time.css` - The CSS file that styles the clock.
* `time.js` - The JavaScript file that updates the time every second.

---

## Code Explanation

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="time.css">
    <title>Clock with JavaScript</title>
</head>
<body>
   <div class="main-div">
    <div class="time" id="time-container">
        <span id="tm">Time Loading...</span>
        <span id="ampm">❤️</span>
    </div>
   </div> 
 <script src="time.js"></script>
</body>
</html>
```
### CSS
```
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', Times, serif;
    background-color: #161616;
}

.main-div {
    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

.time {
    border-width: 5px;
    height: max-content;
    border-style: solid;
    border-image: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0) 1;
    padding: 10px;
    box-shadow: 0 0 10px rgba(255, 236, 61, 0.8);
    animation: ameen 1.5s linear infinite;
    cursor: pointer;
}

.time span {
    font-size: 30px;
    background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    animation: ameen 1.5s linear infinite;
    text-shadow: 0 0 10px rgba(255, 255, 0, 0.801);
}

@keyframes ameen {
    100% {
        filter: hue-rotate(360deg);
    }
}

#ampm {
    padding-left: 0%;
}
```
### CSS
```
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', Times, serif;
    background-color: #161616;
}

.main-div {
    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

.time {
    border-width: 5px;
    height: max-content;
    border-style: solid;
    border-image: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0) 1;
    padding: 10px;
    box-shadow: 0 0 10px rgba(255, 236, 61, 0.8);
    animation: ameen 1.5s linear infinite;
    cursor: pointer;
}

.time span {
    font-size: 30px;
    background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    animation: ameen 1.5s linear infinite;
    text-shadow: 0 0 10px rgba(255, 255, 0, 0.801);
}

@keyframes ameen {
    100% {
        filter: hue-rotate(360deg);
    }
}

#ampm {
    padding-left: 0%;
}
```
### Javascript
```
setInterval(() => {
    let dt = new Date();
    let hr = dt.getHours();
    let mn = dt.getMinutes();
    let sec = dt.getSeconds();

    let time_setting = "AM";

    if (hr >= 12) {
        time_setting = "PM";
        if (hr > 12) {
            hr = hr - 12;
        }
    }

    if (hr == 0) {
        hr = 12;
    }

    hr = hr.toString().padStart(2, '0');
    mn = mn.toString().padStart(2, '0');
    sec = sec.toString().padStart(2, '0');

    const tm = document.getElementById("tm");
    tm.textContent = hr + ":" + mn + ":" + sec;

    const ampm = document.getElementById("ampm");
    ampm.textContent = time_setting;

}, 1000);
```

## Author
### Bilal Raza
### GitHub: [itxbill](https://github.com/itxbill)

## License: Apache 2.0
