let tip;

// when the window loads, update the text
window.onload += updatePercent();
//changes the text next to the slider based on the slider's value
document.addEventListener("keypress", function(event) {
    if(event.keyCode == 13)
    {
        calculateTip();
    }
});
function updatePercent()
{
    tip = document.getElementById('tiprange').value;
    document.getElementById('tipTxt').innerText = tip +'%';
}
//calculates the amount needed to pay
function calculateTip()
{
    try 
    {
        let billAmount = parseFloat(document.getElementById("input").value);
        let pay = billAmount + billAmount * (tip/100)
        if(pay != NaN) document.getElementById("amountToPay").innerText = "$" + Math.round(pay * 100) / 100;
        else document.getElementById("amountToPay").innerText = "$0"
    } catch (error) {
        alert("Unable to Calculate tip needed to pay, please try again");
    }
    finally {
        return;
    }
}