var sharedState = {
    currentIndex: 0,
    labels: [
        "CONFERENCE ROOM 1",
        "CONFERENCE ROOM 2",
        "CONFERENCE ROOM 3",
        "HUDDLE ROOM 1",
        "HUDDLE ROOM 2",
        "HUDDLE ROOM 3",
        "HUDDLE ROOM 4",
        "HUDDLE ROOM 5"
    ],
    calendarUrls: [
        'https://calendar.google.com/calendar/embed?src=c_b2a5f03a6dfee28d2fabcd833053548f78ebdcc4c98305cd50e7d042b3dca57e%40group.calendar.google.com&mode=WEEK',
        'https://calendar.google.com/calendar/embed?src=c_dc377dcbcd68343cf6e360dc3b077b15bfad175f42cd7eb540e03c9899ef972a%40group.calendar.google.com&mode=WEEK',
        'https://calendar.google.com/calendar/embed?src=c_798b1e492d6f40ccfb3c02938563d8134289e27cc2b924b69d12d330ec066e08%40group.calendar.google.com&mode=WEEK',
        'https://calendar.google.com/calendar/embed?src=c_34ef860d4e2deccecef866183cf4a851421e2d0389b2378b202cceb2ca195817%40group.calendar.google.com&ctz=Asia%2FManila&mode=WEEK',
        'https://calendar.google.com/calendar/embed?src=c_7245d81e2744153c65f7e4ff12d72477ffdb332ebe6e4077db592e935ec3e34a%40group.calendar.google.com&ctz=Asia%2FManila&mode=WEEK',
        'https://calendar.google.com/calendar/embed?src=c_425bf20e499515129eb56a4b4232702627e34e58da590e89f71103c2fa98adff%40group.calendar.google.com&ctz=Asia%2FManila&mode=WEEK'
    ]
};

function updateIndex(change) {
    sharedState.currentIndex = (sharedState.currentIndex + change + sharedState.labels.length) % sharedState.labels.length;
    localStorage.setItem("sharedIndex", sharedState.currentIndex);
}

function getCurrentIndex() {
    return parseInt(localStorage.getItem("sharedIndex")) || 0;
}
