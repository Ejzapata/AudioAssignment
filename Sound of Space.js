/*Eleni Zapata*/

/*This is my start sound function*/
function startSound()
{
  mySound = new sound("us-lab-background-1.mp3");
  mySound.play();

document.getElementById("stopButton").disabled = false;
document.getElementById("startButton").disabled = true;
}


/*This is my sound src function*/
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play()
    }

}
/*This is my stop sound function*/
function stopSound()
{
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    window.location.reload();

}