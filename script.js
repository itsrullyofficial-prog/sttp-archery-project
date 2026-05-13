function showMessage() {
    alert("Welcome to STTP Elite Archery Training!");
}

function recommendGear() {
    let level = document.getElementById("level").value;
    let result = document.getElementById("result");

    if(level === "beginner"){
        result.innerHTML = "Recommended: Lightweight Recurve Bow, Arm Guard, Finger Tab";
    }
    else if(level === "intermediate"){
        result.innerHTML = "Recommended: Carbon Arrows, Adjustable Sight, Stabilizer";
    }
    else if(level === "advanced"){
        result.innerHTML = "Recommended: Olympic Recurve Set, Precision Scope, Professional Release Aid";
    }
    else{
        result.innerHTML = "Please select a level.";
    }
}