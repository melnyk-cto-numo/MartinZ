document.addEventListener('DOMContentLoaded', function () {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    setInterval(() => {
        const timeEnd = new Date(2020, 1, 29, 0, 0, 0);
        let today = new Date(Date.now());
        today = Math.floor((timeEnd - today) / 1000);

        let sec = today % 60;
        today = Math.floor(today / 60);
        if (sec <= 0) {
            sec = '00'
        } else if (sec < 10) sec = '0' + sec;
        seconds.innerHTML = String(sec);

        let min = today % 60;
        today = Math.floor(today / 60);
        if (min <= 0) {
            min = '00'
        } else if (min < 10) min = '0' + min;
        minutes.innerHTML = String(min);

        let hour = today % 24;
        today = Math.floor(today / 24);
        if (hour <= 0) {
            hour = '00'
        } else if (hour < 10) hour = '0' + hour;
        hours.innerHTML = String(hour);

        if (today <= 0) {
            today = '00'
        } else if (today < 10) today = '0' + today;
        days.innerHTML = String(today);

    }, 1000);

    // show video
    const cover = $("#cover");
    const video = $("#video");

    cover.on('click', function () {
        $('<iframe id="player" width="560" height="315" src="https://www.youtube.com/embed/riQGv-9abKg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
            .appendTo('#video');
        video.css("display", "flex");
        $("html").css("overflow", "hidden");
    });

    $(document).mouseup(function (e) {
        const player = $("#player");
        const cover = $("#cover ");
        if (!player.is(e.target) && cover.has(e.target).length === 0) {
            $("html").css("overflow", "inherit");
            video.hide();
            player.remove()
        }
    });

});