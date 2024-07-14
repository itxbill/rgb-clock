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