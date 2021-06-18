$("button").click(function() {
    let colors = $(".colors").val();
    let feelings = $(".feelings").val();

    if (colors === "Yellow"&& feelings === "Happy") {
        $(".message").text("Congrats! You're happy Spongebob!!");
        $(".message").css("color" , "Yellow");
    } else if (colors === "Yellow"&& feelings === "Mad") {
        $(".message").text("Uh Oh! You're mad Spongebob!");
         $(".message").css("color" , "red");
    } else if (colors === "Yellow" && feelings === "Sad") {
        $(".message").text("Oh man! You're sad Spongebob!");
         $(".message").css("color" , "blue");
        
    } else if (colors === "Pink" && feelings === "Happy") {
        $(".message").text("Congrats! You're happy Patrick!!");
         $(".message").css("color" , "#ff99ff");
    } else if (colors === "Pink" && feelings === "Mad") {
        $(".message").text("Uh Oh! You're mad Patrick!");
         $(".message").css("color" , "red");
    } else if (colors === "Pink" && feelings === "Sad") {
        $(".message").text("Oh man! You're sad Patrick!");
         $(".message").css("color" , "blue");
        
    } else if (colors === "Brown"&& feelings === "Happy") {
        $(".message").text("Congrats! You're happy Sandy!!");
         $(".message").css("color" , "Brown");
    } else if (colors === "Brown" && feelings === "Mad") {
        $(".message").text("Uh Oh! You're mad Sandy!");
        $(".message").css("color" , "red");
    } else if (colors === "Brown" && feelings === "Sad") {
        $(".message").text("Oh man! You're sad Sandy!");
        $(".message").css("color" , "blue");
        
    } else if (colors === "Turquoise"& feelings === "Happy") {
        $(".message").text("Congrats! You're happy Squidward!!");
        $(".message").css("color" , " #538cc6");
    } else if (colors === "Turquoise" && feelings === "Mad") {
        $(".message").text("Uh Oh! You're mad Squidward!");
         $(".message").css("color" , "red");
    } else if (colors === "Turquoise"&& feelings === "Sad") {
        $(".message").text("Oh man! You're sad Squidward!");
         $(".message").css("color" , "blue");
    } else {
        alert("Please make sure to type your answers!");
    }
});