var event1 = new KeyboardEvent('keydown', {
	key: 'a',
	ctrlKey: true
});

var event2 = new KeyboardEvent('keydown', {
	key: 's',
	ctrlKey: true
});

var event3 = new KeyboardEvent('keydown', {
	key: 'd',
	ctrlKey: true
});

var event4 = new KeyboardEvent('keydown', {
	key: 'f',
	ctrlKey: true
});

let speed = 100

let amount = 0;

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}

}

function SecondsToMilliSeconds(seconds)
{
    return seconds * 1000;
}

setInterval(function(){
	for (i = 0; i < speed; i++) {
        if (amount >= 100000)
        {
            amount = 0;
            sleep(SecondsToMilliSeconds(20));
        }

        let event;
        switch(i%4)
        {
            case 0:
                event = event1;
            case 1:
                event = event2;
            case 2:
                event = event3;
            case 3:
                event = event4;
        }
		document.dispatchEvent(event);

        amount++;
	}

    speed = parseInt((Math.floor(Math.random() * 200)).toString());
}, 0);