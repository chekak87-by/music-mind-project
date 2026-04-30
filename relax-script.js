let isRelaxing = false;
let breatheInterval;

function startRelaxation() {
    const btn = document.getElementById('start-relax-btn');
    const audio = document.getElementById('relax-audio');
    const circle = document.getElementById('b-circle');
    const text = document.getElementById('breathe-text');

    if (!isRelaxing) {
        // ЗАПУСК
        isRelaxing = true;
        btn.innerHTML = "⏸ Остановить сеанс";
        audio.play();

        // Сразу запускаем первый вдох
        breatheCycle(circle, text);

        // Запускаем бесконечный цикл: каждые 8 секунд (4с вдох + 4с выдох)
        breatheInterval = setInterval(() => {
            breatheCycle(circle, text);
        }, 8000);

    } else {
        // ОСТАНОВКА
        isRelaxing = false;
        btn.innerHTML = "▶ Начать сеанс";
        audio.pause();
        audio.currentTime = 0; // Возвращаем трек в начало
        clearInterval(breatheInterval); // Останавливаем цикл
        
        // Возвращаем сферу в исходное состояние
        circle.classList.remove('inhale');
        text.innerText = "Готовы?";
    }
}

function breatheCycle(circle, text) {
    // ВДОХ (Сфера расширяется)
    text.style.opacity = '0'; // Плавно прячем текст
    setTimeout(() => {
        text.innerText = "Вдох...";
        text.style.opacity = '1'; // Показываем новый текст
        circle.classList.add('inhale');
    }, 500);

    // ВЫДОХ (Через 4 секунды сфера начинает сужаться)
    setTimeout(() => {
        text.style.opacity = '0';
        setTimeout(() => {
            text.innerText = "Выдох...";
            text.style.opacity = '1';
            circle.classList.remove('inhale');
        }, 500);
    }, 4000);
}