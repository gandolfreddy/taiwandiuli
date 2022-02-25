

function showResult() {
    const date = document.querySelector("input").value;
    const result = document.querySelector(".result");
    const resultContent = document.querySelector(".result-content");
    let resultText = '';
    if (date) {
        if (date === "1992-12-16") {
            resultText = "妳是個，びじん";
        } else if (date === "1996-10-21") { 
            resultText = "Diu 立學研究家の誕生日";
        } else {
            resultText = "乎資です";
        }
        result.style.display = "flex";
        resultContent.textContent = resultText;
    }
}