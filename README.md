# rgb-clock

An rgb digital clock displaying the current time with an animated design, built using HTML, CSS, and JavaScript.

## Features

- Displays current time in hours, minutes, and seconds.
- Shows AM/PM indicator.
- Animated gradient border and text for a visually appealing look.

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

- `index.html` - The main HTML file that contains the structure of the clock.
- `time.css` - The CSS file that styles the clock.
- `time.js` - The JavaScript file that updates the time every second.

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
