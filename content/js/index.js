var quotes = ['WAMPUS THWAMPUS', 'ZAMN', 'MEDIC!!!', 'I ain\'t done nun', 'I NEED MORE BOOLETS', 'BitLife was removed for good reason', 'You should killbind NOW!!!!', 'WAZZAH', 'Zinglebingle', 'Play gobba axle. We want YOU!!!!!', 'samalamadamalumasuma', 'wahwahwahwahwahwahwah', 'purple crayon', 'There\'s a scary behind you', 'ppi vipe', 'i i i a i i a alunde', 'pew pew', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel pellentesque mi, vitae fringilla velit. Proin molestie fermentum cursus. Cras condimentum nibh ut imperdiet elementum. Proin in lectus lectus. Morbi eu est felis. Vivamus rhoncus imperdiet est, id commodo lacus lobortis porta. Nunc eleifend convallis porta. Fusce iaculis dui a mi consectetur suscipit. Aliquam ut maximus ligula. Etiam dolor mi, porttitor eu cursus vel, congue maximus diam. Vestibulum ac.', 'lesplaefootball', 'Fun Fact: googoo', 'R.I.P', 'Walls?', 'bread', 'come give grandma a kiss', 'SO MANY GAMES ON THIS STUPID WEBSITE ARE BROKEN', 'FE!N', 'I\'M NOT SCHIZOPHRENIC', 'yo nice you got total awesome cool beans 1 in one krillion message epic no cap crazy so cool epik omg']

function funny(num) {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function quote(num) {
    if(num == -8) {
        $('#quote').html(funny())
    }
    else {
        $('#quote').html(quotes[num])
    }
}

$(document).ready(function() {
    quote(-8)
});
