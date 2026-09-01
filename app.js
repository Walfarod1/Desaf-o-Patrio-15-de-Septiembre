// [MÓDULO JS 1: Banco de Preguntas Patria]
const questions = [
    { level: 1, question: "¿En qué año se proclamó la Independencia de Centroamérica?", options: ["1810", "1821", "1848", "1856"], answer: 1, fact: "Costa Rica formaba parte de la Capitanía General de Guatemala, por lo que su independencia estuvo ligada al proceso centroamericano." },
    { level: 1, question: "¿En qué ciudad se firmó el Acta de Independencia de Centroamérica?", options: ["San José", "Cartago", "Ciudad de Guatemala", "Alajuela"], answer: 2, fact: "La noticia de la independencia tardó varias semanas en llegar a Costa Rica debido a las distancias de la época." },
    { level: 1, question: "¿Cuánto tiempo tardó aproximadamente en llegar la noticia de la Independencia a Costa Rica?", options: ["2 días", "1 semana", "Casi un mes", "3 meses"], answer: 2, fact: "La distancia y las condiciones de transporte hicieron que la noticia viajara lentamente en el 'Correo de Mulas'." },
    { level: 1, question: "¿Cuál fue la capital de Costa Rica cuando llegó la noticia en 1821?", options: ["San José", "Heredia", "Alajuela", "Cartago"], answer: 3, fact: "Cartago ostentaba el título de capital colonial de Costa Rica en aquel momento histórico." },
    { level: 1, question: "Verdadero o falso: Costa Rica libró una guerra contra España para obtener su independencia.", options: ["Verdadero", "Falso", "Solo una batalla", "Fue contra México"], answer: 1, fact: "La independencia llegó como parte del proceso político centroamericano de forma pacífica." },
    { level: 1, question: "¿Qué documento estableció las primeras bases políticas de Costa Rica?", options: ["Constitución de 1949", "Acta de Independencia", "Pacto de Concordia", "Tratado Cañas-Jerez"], answer: 2, fact: "El Pacto de Concordia, aprobado en 1821, es considerado la primera constitución política de Costa Rica." },
    { level: 1, question: "¿Qué acontecimiento se recuerda cada 14 de setiembre con la Antorcha?", options: ["Abolición del ejército", "Anexión de Nicoya", "Independencia de C.A.", "Campaña Nacional"], answer: 2, fact: "La antorcha simboliza el recorrido del fuego de la libertad por toda Centroamérica." },
    { level: 2, question: "¿Quién compuso la música del Himno Nacional de Costa Rica?", options: ["José María Zeledón", "Manuel María Gutiérrez", "Juan Rafael Mora", "Juan Santamaría"], answer: 1, fact: "Manuel María Gutiérrez compuso la música en 1852 bajo la presidencia de Juan Rafael Mora Porras." },
    { level: 2, question: "¿Quién escribió la letra actual del Himno Nacional?", options: ["Manuel M. Gutiérrez", "Aquileo J. Echeverría", "José María Zeledón", "Carmen Lyra"], answer: 2, fact: "Billo Zeledón ganó el concurso público convocado en 1903 para darle letra definitiva al Himno." },
    { level: 2, question: "¿Quién diseñó la bandera tricolor de Costa Rica?", options: ["Dolce & Gabbana", "Pacífica Fernández", "Ángela Acuña", "Bernarda Vásquez"], answer: 1, fact: "Se inspiró en los ideales de libertad y los colores de la bandera de Francia en 1848." },
    { level: 2, question: "¿Qué representan las siete estrellas del Escudo Nacional?", options: ["Los volcanes", "Héroes nacionales", "Siete presidentes", "Siete provincias"], answer: 3, fact: "Cada estrella rinde homenaje directo a una de las siete provincias del país." },
    { level: 2, question: "¿Cuál es el ave nacional de Costa Rica?", options: ["Tucán", "Colibrí", "Yigüirro", "Lapa roja"], answer: 2, fact: "El yigüirro fue declarado ave nacional en 1977, conocido por anunciar la llegada de las lluvias." },
    { level: 2, question: "¿Qué tradición se celebra la noche del 14 de setiembre?", options: ["Desfile de carretas", "Festival de la Luz", "Desfile de Faroles", "Mascaradas"], answer: 2, fact: "Se hace en conmemoración a María Dolores Bedoya, quien corrió por Guatemala con un farol pidiendo la firma del acta." },
    { level: 2, question: "¿Qué significan los 3 volcanes en el escudo?", options: ["Los 3 poderes", "Tres cordilleras", "Tres mares", "Héroes de 1856"], answer: 1, fact: "Representan las tres cordilleras volcánicas que cruzan el territorio nacional." },
    { level: 3, question: "¿Qué producto impulsó el desarrollo económico de Costa Rica en el siglo XIX?", options: ["Banano", "Cacao", "Café", "Caña"], answer: 2, fact: "El café, nuestro 'Grano de Oro', financió obras tan icónicas como el Teatro Nacional." },
    { level: 3, question: "¿Qué inscripción lleva la cinta azul superior del escudo?", options: ["República de Costa Rica", "Vivan siempre el trabajo", "América Central", "Dios y Patria"], answer: 0, fact: "La cinta azul dice 'República de Costa Rica', y la blanca debajo dice 'América Central'." },
    { level: 3, question: "¿En qué año Costa Rica abolió su ejército?", options: ["1821", "1856", "1948", "1956"], answer: 2, fact: "José Figueres Ferrer abolió el ejército tras la guerra civil de 1948 en el Cuartel Bellavista." },
    { level: 3, question: "¿Qué significado tiene el sol naciente en el escudo?", options: ["Clima de Guanacaste", "Energía renovable", "Nacimiento de la República", "Hora de la firma"], answer: 2, fact: "El sol naciente alegoriza el surgimiento de una nación próspera, libre y esperanzadora." },
    { level: 3, question: "¿De quién es la famosa canción 'De la caña se hace el guaro'?", options: ["José Capmany", "Lencho Salazar", "Ray Tico", "Autor Anónimo"], answer: 3, fact: "A pesar de ser muy popular en el folclore tico, se considera una obra de dominio público anónima." },
    { level: 3, question: "Completa la frase: '¡Viva siempre el trabajo y la paz!' Es la última línea de:", options: ["Constitución", "Juramento a la bandera", "Himno Nacional", "Acta de Independencia"], answer: 2, fact: "Es la inspiradora estrofa final que corona la letra de nuestro Himno Nacional escrito por Zeledón." }
];

const levelConfigs = {
    1: { name: "🟢 NIVEL 1: TICO DE CORAZÓN", points: 100 },
    2: { name: "🟡 NIVEL 2: ORGULLO NACIONAL", points: 200 },
    3: { name: "🔴 NIVEL 3: MAESTRO DE LA PATRIA", points: 300 }
};

// 1. Imágenes estándar para selección de equipos y podio intermedio
const teamImages = {
    "Los Yigüirros": "Assets/yigui.png",
    "Los Hijos de Lencho Salazar": "Assets/Los_hijos.png",
    "Los Tuanis": "Assets/Tuanis.png",
    "Los de la Carreta": "Assets/Carreta.png"
};

// 2. Imágenes de celebración exclusivas para los peldaños del Podio Final
const podiumCelebrationImages = {
    "Los Yigüirros": "Assets/pajaro.png",
    "Los Hijos de Lencho Salazar": "Assets/hijos.png",
    "Los Tuanis": "Assets/porcio.png",
    "Los de la Carreta": "Assets/guaro.png"
};

const kahootStyles = [
    { class: 'btn-red', icon: '▲' },
    { class: 'btn-blue', icon: '◆' },
    { class: 'btn-yellow', icon: '●' },
    { class: 'btn-green', icon: '◼' }
];

// ==========================================================================
// [MÓDULO JS 2: Variables de Estado Global, Assets y Secuencia de Banderas]
// ==========================================================================
let userRole = "player";
let playerName = "";
let selectedTeam = "";
let playerScore = 0;
let playerId = "player_" + Date.now();
let currentQuestionIndex = 0;
let timer = null;
let timeLeft = 15;
let confettiAnimationId = null;

// Índice de control para rotar imágenes de banderas
let currentFlagIndex = 0;

// [MÓDULO JS 3: Inicialización Firebase DB Sync - Producción Realtime]
const firebaseConfig = {
    apiKey: "AIzaSyC4Tnc_Gi8XQf2wDvBPA8L0B2iRye-23cI",
    authDomain: "reto-patrio-2026.firebaseapp.com",
    databaseURL: "https://reto-patrio-2026-default-rtdb.firebaseio.com",
    projectId: "reto-patrio-2026",
    storageBucket: "reto-patrio-2026.firebasestorage.app",
    messagingSenderId: "1090963167498",
    appId: "1:1090963167498:web:7158f4c58b5f54098fc2f3"
};

let db = null;
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
        console.log("🟢 Conexión en tiempo real activa para Reto Patrio 2026.");
    }
} catch (e) {
    console.error("🔴 Error al conectar con Firebase:", e);
}

// [MÓDULO JS 4: Controladores de Pantalla y Rol Proyector]
document.getElementById('btn-secret-host').addEventListener('click', () => {
    userRole = "host";
    showScreen('screen-host-board');
    initHostGame();
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    const target = document.getElementById(screenId);
    target.classList.remove('hidden');
    target.classList.add('active');
}

// [MÓDULO JS 5: Registro de Jugador, Autocompletado Móvil y Sincronización DB]
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
    const btnJoin = document.getElementById('btn-join-game');
    if (selectedTeam !== "") {
        btnJoin.disabled = false;
    } else {
        btnJoin.disabled = true;
    }
}

document.getElementById('btn-join-game').addEventListener('click', () => {
    const inputVal = document.getElementById('player-name').value.trim();
    playerName = inputVal !== "" ? inputVal : "Jugador Tico " + Math.floor(Math.random() * 900 + 100);

    showScreen('screen-player-gamepad');
    document.getElementById('player-info-tag').innerHTML = `👤 ${playerName} | 🛡️ ${selectedTeam}`;
    document.getElementById('player-score-tag').textContent = playerScore;

    if (db) {
        db.ref('players/' + playerId).set({
            name: playerName,
            team: selectedTeam,
            score: 0
        });
        
        // Listener de sincroniación global con el Proyector (Host)
        db.ref('gameState').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                if (typeof data.qIndex !== 'undefined') {
                    currentQuestionIndex = data.qIndex;
                }
                
                // Si el Administrador reinicia la partida, resetear marcador local en teléfono
                if (data.status === 'reset') {
                    playerScore = 0;
                    document.getElementById('player-score-tag').textContent = '0';
                    resetGamepadUI();
                } else if (data.status === 'question') {
                    resetGamepadUI();
                }
            }
        });
    }
});

// ==========================================================================
// [MÓDULO JS 6: Lógica de Evaluación de Respuestas y Persistencia Garantizada]
// ==========================================================================
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

    // Persistir puntaje, nombre y equipo garantizados usando .update() en Firebase
    if (db) {
        db.ref('players/' + playerId).update({
            name: playerName,
            team: selectedTeam,
            score: playerScore
        });

        db.ref('answers/' + currentQuestionIndex + '/' + playerId).set({
            choice: choiceIndex,
            correct: isCorrect,
            earned: earned
        });
    }

    // Renderizar feedback visual en el celular
    const modal = document.getElementById('modal-player-feedback');
    const img = document.getElementById('player-feedback-img');
    const title = document.getElementById('player-feedback-title');
    const sub = document.getElementById('player-feedback-sub');

    if (isCorrect) {
        img.src = "Assets/Bien.png";
        title.textContent = "¡QUE MANERA!";
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

// [MÓDULO JS 7: Lógica del Proyector (Host) y Control de Reinicio Instantáneo]
function initHostGame() {
    // 1. Detener cualquier temporizador que esté corriendo
    if (timer) {
        clearInterval(timer);
    }
    
    currentQuestionIndex = 0;
    
    // 2. Notificar e ignorar/borrar datos previos en el servidor
    if (db) {
        db.ref('gameState').set({ status: 'reset', qIndex: 0 });
        db.ref('answers').remove();
        db.ref('players').remove();
        console.log("🧹 Partida reiniciada: Marcadores y respuestas eliminadas.");
    }

    // 3. Iniciar la primera pregunta
    renderHostQuestion();
}

function renderQuestionOptionsForHost(q) {
    const container = document.getElementById('host-options-grid');
    container.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const style = kahootStyles[idx];
        const btn = document.createElement('div');
        btn.className = `btn-kahoot ${style.class}`;
        btn.style.cursor = 'default';
        btn.innerHTML = `<span class="shape-icon">${style.icon}</span> <span>${opt}</span>`;
        container.appendChild(btn);
    });
}

function renderHostQuestion() {
    document.getElementById('modal-host-results').classList.add('hidden');
    const q = questions[currentQuestionIndex];

    document.getElementById('host-progress-text').textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    document.getElementById('host-level-text').textContent = levelConfigs[q.level].name;
    document.getElementById('host-question-title').textContent = q.question;
    document.getElementById('host-answers-count').textContent = '0';

    renderQuestionOptionsForHost(q);
    startHostTimer();

    if (db) {
        db.ref('gameState').set({ status: 'question', qIndex: currentQuestionIndex });
        db.ref('answers/' + currentQuestionIndex).on('value', snapshot => {
            const data = snapshot.val();
            const count = data ? Object.keys(data).length : 0;
            document.getElementById('host-answers-count').textContent = count;
        });
    }
}

function startHostTimer() {
    if (timer) {
        clearInterval(timer);
    }
    timeLeft = 15;
    document.getElementById('host-timer-display').textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('host-timer-display').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showHostResults();
        }
    }, 1000);
}

// Evento directo sobre el botón "Reiniciar Partida" de la cabecera
document.getElementById('btn-host-reset-now').addEventListener('click', () => {
    if (confirm("🚨 ¿Deseas borrar las puntuaciones actuales y reiniciar el juego desde la Pregunta 1?")) {
        initHostGame();
    }
});

// ==========================================================================
// [MÓDULO JS 8: Cálculo de Promedios, Carga de Banderas y Podio en Vivo]
// ==========================================================================

function showHostResults() {
    const q = questions[currentQuestionIndex];
    document.getElementById('host-fact-text').textContent = q.fact;
    document.getElementById('host-correct-answer-text').textContent = q.options[q.answer];

    // Rotación e intercambio inteligente de imágenes de banderas
    const heroImg = document.getElementById('host-hero-img');
    if (heroImg) {
        const currentPath = flagImages[currentFlagIndex];
        heroImg.src = currentPath;

        // Recuperación automática si el nombre del archivo en GitHub difiere en mayúsculas/minúsculas
        heroImg.onerror = function() {
            if (this.src.includes("Bandera.png")) this.src = "Assets/bandera.png";
            else if (this.src.includes("bandera.png")) this.src = "Assets/Bandera.png";
            else if (this.src.includes("Bandera")) this.src = this.src.replace("Bandera", "bandera");
            else if (this.src.includes("bandera")) this.src = this.src.replace("bandera", "Bandera");
        };

        // Avanzar cíclicamente en el índice (0 a 5)
        currentFlagIndex = (currentFlagIndex + 1) % flagImages.length;
    }

    if (db) {
        db.ref('gameState').set({ status: 'results', qIndex: currentQuestionIndex });
        db.ref('players').once('value', snapshot => {
            const players = snapshot.val() || {};
            calculateAndRenderPodium(players, 'host-podium-list');
        });
    } else {
        calculateAndRenderPodium({}, 'host-podium-list');
    }

    document.getElementById('modal-host-results').classList.remove('hidden');
}

function calculateTeamAverages(playersObject) {
    const allTeams = ["Los Yigüirros", "Los Hijos de Lencho Salazar", "Los Tuanis", "Los de la Carreta"];
    const teamData = {};
    allTeams.forEach(t => teamData[t] = { totalScore: 0, count: 0, avg: 0 });

    Object.keys(playersObject).forEach(key => {
        const p = playersObject[key];
        // Validar que el jugador tenga equipo asignado
        if (p && p.team && teamData[p.team]) {
            teamData[p.team].totalScore += (p.score || 0);
            teamData[p.team].count += 1;
        }
    });

    allTeams.forEach(t => {
        if (teamData[t].count > 0) {
            teamData[t].avg = Math.round(teamData[t].totalScore / teamData[t].count);
        }
    });

    return Object.keys(teamData)
        .map(t => ({ team: t, avg: teamData[t].avg, count: teamData[t].count }))
        .sort((a, b) => b.avg - a.avg);
}

function calculateAndRenderPodium(playersObject, containerId) {
    const sortedTeams = calculateTeamAverages(playersObject);
    const podiumContainer = document.getElementById(containerId);
    podiumContainer.innerHTML = '';
    const medals = ["🥇", "🥈", "🥉", "4️⃣"];

    sortedTeams.forEach((item, index) => {
        const imgPath = teamImages[item.team] || '';
        const div = document.createElement('div');
        div.className = `podium-row-large rank-${index + 1}`;
        div.innerHTML = `
            <div class="podium-team-large">
                <span>${medals[index]}</span>
                <img src="${imgPath}" alt="${item.team}" class="podium-avatar-large" />
                <span>${item.team}</span>
            </div>
            <div>
                <span class="podium-score-large">${item.avg.toLocaleString()} pts</span>
                <span style="font-size:0.95rem; color:#cbd5e1; margin-left:8px;">(${item.count} 👤)</span>
            </div>
        `;
        podiumContainer.appendChild(div);
    });
}

document.getElementById('btn-host-next-question').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderHostQuestion();
    } else {
        renderGrandPodiumStage();
    }
});

// [MÓDULO JS 9: Gran Podio Final 3D con Assets Exclusivos de Celebración]
function renderGrandPodiumStage() {
    document.getElementById('modal-host-results').classList.add('hidden');
    showScreen('screen-grand-podium');

    if (db) {
        db.ref('players').once('value', snapshot => {
            const players = snapshot.val() || {};
            populateGrandPodiumData(players);
        });
    } else {
        populateGrandPodiumData({});
    }

    startConfettiAnimation();
}

function populateGrandPodiumData(playersObject) {
    const sorted = calculateTeamAverages(playersObject);

    // 1º Lugar (Oro) - Usa podiumCelebrationImages
    if (sorted[0]) {
        document.getElementById('grand-name-1').textContent = sorted[0].team;
        document.getElementById('grand-score-1').textContent = `${sorted[0].avg.toLocaleString()} pts`;
        document.getElementById('grand-img-1').src = podiumCelebrationImages[sorted[0].team] || 'Assets/pajaro.png';
    }

    // 2º Lugar (Plata) - Usa podiumCelebrationImages
    if (sorted[1]) {
        document.getElementById('grand-name-2').textContent = sorted[1].team;
        document.getElementById('grand-score-2').textContent = `${sorted[1].avg.toLocaleString()} pts`;
        document.getElementById('grand-img-2').src = podiumCelebrationImages[sorted[1].team] || 'Assets/hijos.png';
    }

    // 3º Lugar (Bronce) - Usa podiumCelebrationImages
    if (sorted[2]) {
        document.getElementById('grand-name-3').textContent = sorted[2].team;
        document.getElementById('grand-score-3').textContent = `${sorted[2].avg.toLocaleString()} pts`;
        document.getElementById('grand-img-3').src = podiumCelebrationImages[sorted[2].team] || 'Assets/porcio.png';
    }

    // 4º Lugar
    if (sorted[3]) {
        document.getElementById('grand-name-4').textContent = sorted[3].team;
        document.getElementById('grand-score-4').textContent = `${sorted[3].avg.toLocaleString()}`;
    }
}

// Motor de animación continua de confeti en Canvas
function startConfettiAnimation() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#f1c40f', '#ce1126', '#002b7f', '#ffffff', '#e67e22'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;

            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 2);
            ctx.restore();
        });

        confettiAnimationId = requestAnimationFrame(animate);
    }

    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    animate();
}

document.getElementById('btn-restart-tournament').addEventListener('click', () => {
    if (confirm("🚨 ¿Deseas reiniciar el torneo y borrar todos los datos de esta partida?")) {
        if (db) db.ref().remove();
        location.reload();
    }
});
