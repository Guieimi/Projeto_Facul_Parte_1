function confirmPersonalInfo() {
    document.getElementById("imc-calculator").style.display = "block";
}

function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    const imc = weight / (height * height);
    
    const resultElement = document.getElementById("imc-result");
    resultElement.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
    
    document.getElementById("goal-questionnaire").style.display = "block";
}

function showWorkoutAndDiet() {
    const selectedGoal = document.querySelector('input[name="goal"]:checked').value;
    let workout = "";
    let diet = "";
    
    // Lógica para gerar planos de treino e dieta com base na meta selecionada.
    switch (selectedGoal) {
        case "Hipertrofia":
            workout = "Plano de treino para hipertrofia: A, B, C";
            diet = "Dieta para hipertrofia: Coma alimentos ricos em proteínas.";
            break;
        case "Perda de peso":
            workout = "Plano de treino para perda de peso: D, E";
            diet = "Dieta para perda de peso: Controle as calorias e escolha alimentos saudáveis.";
            break;
        // Adicione mais casos para outras metas aqui.
    }
    
    document.getElementById("workout").innerHTML = `<h3>Plano de Treino:</h3>${workout}`;
    document.getElementById("diet").innerHTML = `<h3>Dieta:</h3>${diet}`;
    
    document.getElementById("workout-and-diet").style.display = "block";
}