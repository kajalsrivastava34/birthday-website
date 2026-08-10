function showWish(){

    document.getElementById("message").innerHTML =
    "🎉 May your life be filled with love, success and endless happiness❤️ Humeshaa khshhh rhoo and haste rhoo!! ❤️🎊🎉";


    // Play music
    let song = document.getElementById("song");
    song.play();


    // Fireworks effect

    for(let i=0; i<50; i++){

        let sparkle = document.createElement("span");

        sparkle.innerHTML = "✨";

        sparkle.className = "sparkle";

        sparkle.style.left = Math.random()*100 + "vw";
        sparkle.style.top = Math.random()*100 + "vh";


        document.body.appendChild(sparkle);


        setTimeout(()=>{
            sparkle.remove();
        },2000);

    }

}