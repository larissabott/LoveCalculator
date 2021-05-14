prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 90) {
    alert("Your love score is " + loveScore + "%. " + " You love each other like Kanye loves Kanye");
}
else if (loveScore > 70 && loveScore <= 90) {
    alert("Your love score is " + loveScore + "%. " + " You go together like PB and J!");
}
else if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%. " + " A modern day love story-- not much hope");
}
else  {
    alert("Your love score is " + loveScore + "%. " + " You go together like water and oil");
}
