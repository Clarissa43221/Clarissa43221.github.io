function gradeQuiz() {
    let score = 0;
    let total = 5;
    let output = "";

    // Question 1 – fill in blank
    let q1 = document.getElementById("q1").value.trim().toLowerCase();
    if (q1 === "quic") { score++; output += "<p><strong>Q1 Correct!</strong></p>"; }
    else { output += "<p><strong>Q1 Incorrect.</strong> Correct answer: QUIC</p>"; }

    // Question 2 – correct: option 1
    let q2 = document.querySelector("input[name='q2']:checked");
    if (q2 && q2.value == "1") { score++; output += "<p>Q2 Correct!</p>"; }
    else { output += "<p>Q2 Incorrect. Correct answer: HTTP/1.1</p>"; }

    // Question 3 – correct: option 1
    let q3 = document.querySelector("input[name='q3']:checked");
    if (q3 && q3.value == "1") { score++; output += "<p>Q3 Correct!</p>"; }
    else { output += "<p>Q3 Incorrect. Correct answer: Multiplexing</p>"; }

    // Question 4 – correct: option 1
    let q4 = document.querySelector("input[name='q4']:checked");
    if (q4 && q4.value == "1") { score++; output += "<p>Q4 Correct!</p>"; }
    else { output += "<p>Q4 Incorrect. Correct answer: Tim Berners-Lee</p>"; }

    // Question 5 – multi-select
    let correct = 
        document.getElementById("q5a").checked &&
        document.getElementById("q5b").checked &&
        !document.getElementById("q5c").checked &&
        document.getElementById("q5d").checked;

    if (correct) { score++; output += "<p>Q5 Correct!</p>"; }
    else { output += "<p>Q5 Incorrect. Correct answers: QUIC, Lower latency, Better for unstable networks</p>"; }

    let passFail = score >= 3 ? "PASS" : "FAIL";
    let color = score >= 3 ? "green" : "red";

    document.getElementById("results").innerHTML =
        `<h2 style='color:${color};'>${passFail} — Score: ${score}/${total}</h2>` + output;
}

function resetResults() {
    document.getElementById("results").innerHTML = "";
}
