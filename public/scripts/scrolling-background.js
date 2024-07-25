var scrollingIntervals = []; // a placeholder object to hold all scrolling backgrounds

function StartScroll(element,xSpeed,ySpeed) {
    var scrollInterval = setInterval(() => {
        Scroll(element,xSpeed,ySpeed);
    }, 100); // starts an interval to scroll the element
    var scrollInformation = {
        "interval":scrollInterval,
        "element":element,
        "id":scrollingIntervals.length,
    }; // stores various information for the interval to stop it later, if applicable
    scrollingIntervals.push(scrollInformation); // ^^^ 
    console.log(`Scrolling Interval:\n${JSON.stringify(scrollInformation)}`);
}

function StopScroll(element,interval,id) {

    console.log(`Stop Scrolling Interval Requested, Searching Scrolling Intervals\n${JSON.stringify(scrollingIntervals)}`)

    var _scrollingIntervals = []; // a placeholder object to hold all non-stopped scrolling intervals
    var stoppedInterval = undefined; // a placeholder variable to hold the stopped scrolling interval once found

    for(let a = 0; a < scrollingIntervals.length; a++) { // loops through all the scrolling intervals to compare data

        console.log(scrollingIntervals[a]);
        if(id == scrollingIntervals[a].id || interval == scrollingIntervals[a].interval || element == scrollingIntervals[a].element) {
            console.log(`Matching Interval Found:\n${JSON.stringify(scrollingIntervals[a])}`)
            stoppedInterval = scrollingIntervals[a].interval;
            break;
        } // checks if the current interval matches any of the parameters to stop

        _scrollingIntervals.push(scrollingIntervals[a]);
    }

    scrollingIntervals = _scrollingIntervals; // sets the scrolling background array to new one without stopped arrays
    if(stoppedInterval) clearInterval(stoppedInterval); // clears the interval of the one meant to be stopped if its found
}

function Scroll(element,xSpeed,ySpeed) {
    const elementPosition = window.getComputedStyle(element).backgroundPosition.split(" ").map(value => {
        return parseFloat(value);
    }); // convert element position to a usable format
    // sets speed to 0 if one wasnt set
    if(xSpeed === null || xSpeed === void 0) xSpeed = 0;
    if(ySpeed === null || ySpeed === void 0) ySpeed = 0;
    element.style.backgroundPosition = `${elementPosition[0]+xSpeed} ${elementPosition[1]+ySpeed}`; // new positions
}