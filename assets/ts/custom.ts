function runtime() {
	setTimeout(runtime, 1000);
	/* 请修改这里的起始时间 */
    let startTime = new Date('09/13/2022 15:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let dd = document.getElementById('days');
	let hh = document.getElementById('hours');
	let mm = document.getElementById('minutes');
	let ss = document.getElementById('seconds');
    dd.innerHTML = '<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days;
	hh.innerHTML = '<i class="far fa-clock fa-fw"></i> '
        + ((hours < 10) ? '0' : '') + hours;
	mm.innerHTML = '<i class="far fa-clock fa-fw"></i> '
        + ((minutes < 10) ? '0' : '') + minutes;
	ss.innerHTML = '<i class="far fa-clock fa-fw"></i> '
        + ((seconds < 10) ? '0' : '') + seconds;
}
runtime();