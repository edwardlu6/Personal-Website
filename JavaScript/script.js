
document.addEventListener('DOMContentLoaded', function () {

    const newInfo =  document.querySelector("#newBeatles");

    const image2 = document.querySelector(".image2");

    const allParagraphs = document.getElementsByTagName("p");

    document.getElementById('button2').addEventListener('click', function(){
        console.log('clicked');

        newInfo.innerHTML = 'The Beatles are the best-selling music act of all time, with estimated sales of 600 million units worldwide.[4][5] They are the most successful act in the history of the US Billboard charts,[6] holding the record for most number-one albums on the UK Albums Chart (15), most number-one hits on the US Billboard Hot 100 chart (20), and most singles sold in the UK (21.9 million).';
    });

    document.getElementById('button3').addEventListener('click', function () {
           console.log('clicked');
           document.body.style.backgroundColor = 'yellow';
           image2.style.width = '300px';  // Set the width
           image2.style.height = '200px'; // Set the height
    });
});

///// 0 Sunday --- 1 Monday......
var today = new Date().getDay();

    // Update the page based on the day of the week
    if (today === 0) {
        document.body.style.backgroundColor = 'red';
         document.getElementById('date').innerHTML = 'Today is Sunday';
    } else if (today === 1) {
        document.body.style.backgroundColor = 'orange';
        document.getElementById('date').innerHTML = 'Today is Monday';
    } else if (today === 2) {
        document.body.style.backgroundColor = 'yellow';
        document.getElementById('date').innerHTML = 'Today is Tuesday';
    } else if (today === 3) {
        document.body.style.backgroundColor = 'green';
        document.getElementById('date').innerHTML = 'Today is Wednesday';
    } else if (today === 4) {
        document.body.style.backgroundColor = 'blue';
        document.getElementById('date').innerHTML = 'Today is Thursday';
    } else if (today === 5) {
        document.body.style.backgroundColor = 'indigo';
        document.getElementById('date').innerHTML = 'Today is Friday';
    } else if (today === 6) {
        document.body.style.backgroundColor = 'violet';
        document.getElementById('date').innerHTML = 'Today is Saturday';
    }