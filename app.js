// [MÓDULO JS 5: Registro de Jugador y Listener de Sincronización en Tiempo Real]
document.querySelectorAll('.team-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.team-btn').forEach(b => b.classList.remove('selected'));
        const targetBtn = e.target.closest('.team-btn');
        targetBtn.classList.add('selected');
        selectedTeam = targetBtn.getAttribute('data-team');
        validatePlayerForm();
    });
});

document.getElementById('player-name').addEventListener('input', validatePlayerForm);

function validatePlayerForm() {
    playerName = document.getElementById('player-name').value.trim();
    document.getElementById('btn-join-game').disabled = !(playerName !== "" && selectedTeam !== "");
}

document.getElementById('btn-join-game').addEventListener('click', () => {
    showScreen('screen-player-gamepad');
    document.getElementById('player-info-tag').innerHTML = `👤 ${playerName} | 🛡️ ${selectedTeam}`;
    document.getElementById('player-score-tag').textContent = playerScore;

    if (db) {
        // Registrar jugador en el servidor
        db.ref('players/' + playerId).set({
            name: playerName,
            team: selectedTeam,
            score: 0
        });
        
        // Escuchar cambios de estado globales emitidos por el Host
        db.ref('gameState').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Sincronizar el número de pregunta activa con el servidor
                if (typeof data.qIndex !== 'undefined') {
                    currentQuestionIndex = data.qIndex;
                }
                // Si el Host envió la señal de nueva pregunta, reactivar mando móvil
                if (data.status === 'question') {
                    resetGamepadUI();
                }
            }
        });
    }
});

// [MÓDULO JS 6: Lógica de Evaluación de Respuestas del Gamepad Móvil]
document.querySelectorAll('#gamepad-grid .btn-kahoot').forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = parseInt(btn.getAttribute('data-choice'));
        submitPlayerAnswer(choice);
    });
});

function submitPlayerAnswer(choiceIndex) {
    // Ocultar botones y mostrar pantalla de espera en celular
    document.getElementById('gamepad-grid').classList.add('hidden');
    document.getElementById('gamepad-waiting').classList.remove('hidden');

    // Obtener la pregunta actual sincronizada
    const q = questions[currentQuestionIndex];
    const isCorrect = (choiceIndex === q.answer);
    
    let earned = 0;
    if (isCorrect) {
        const basePts = levelConfigs[q.level].points;
        let bonus = (timeLeft > 10) ? 50 : (timeLeft > 5 ? 25 : 0);
        earned = basePts + bonus;
        playerScore += earned;
    }

    // Actualizar puntaje local en pantalla móvil
    document.getElementById('player-score-tag').textContent = playerScore;

    // Persistir puntaje y respuesta enviada en Firebase Realtime DB
    if (db) {
        db.ref('players/' + playerId + '/score').set(playerScore);
        db.ref('answers/' + currentQuestionIndex + '/' + playerId).set({
            choice: choiceIndex,
            correct: isCorrect,
            earned: earned
        });
    }

    // Renderizar feedback visual en el modal del celular
    const modal = document.getElementById('modal-player-feedback');
    const img = document.getElementById('player-feedback-img');
    const title = document.getElementById('player-feedback-title');
    const sub = document.getElementById('player-feedback-sub');

    if (isCorrect) {
        img.src = "Assets/Bien.png";
        title.textContent = "¡CORRECTO!";
        title.className = "modal-title correct";
        sub.textContent = `+${earned} pts`;
    } else {
        img.src = "Assets/Mal.png";
        title.textContent = "¡CASI, MAE!";
        title.className = "modal-title incorrect";
        sub.textContent = `Era: ${q.options[q.answer]}`;
    }

    modal.classList.remove('hidden');
}

function resetGamepadUI() {
    document.getElementById('modal-player-feedback').classList.add('hidden');
    document.getElementById('gamepad-waiting').classList.add('hidden');
    document.getElementById('gamepad-grid').classList.remove('hidden');
}
