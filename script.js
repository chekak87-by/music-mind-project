const musicData = {
    classic: [
        {
            year: "1050", title: "Григорианский хорал",
            description: "Истоки европейской музыки. Монахи поют в унисон без музыкальных инструментов. Музыка строго подчинена тексту.",
            trackName: "Григорианский хорал - Dies Irae", audioSrc: "audio/choral.mp3",
            impact: "Монотонное и плавное пение замедляет мозговые волны до альфа-ритма, вводя слушателя в глубокое медитативное состояние и очищая разум от тревог."
        },
        {
            year: "1720", title: "Эпоха Барокко",
            description: "Иоганн Себастьян Бах пишет свои великие полифонические произведения. Музыка обретает сложную, математически выверенную структуру.",
            trackName: "И.С. Бах - Токката и фуга ре минор", audioSrc: "audio/bach.mp3",
            impact: "Строгая структура барокко работает как тренажер для мозга: она улучшает логическое мышление, память и способность к длительной концентрации."
        },
        {
            year: "1787", title: "Венский классицизм",
            description: "Эпоха Моцарта и Гайдна. Мелодии становятся более легкими, изящными и гармоничными, появляются классические симфонии.",
            trackName: "В.А. Моцарт - Маленькая ночная серенада", audioSrc: "audio/mozart.mp3",
            impact: "Легкость и предсказуемость гармоний создают знаменитый «Эффект Моцарта», кратковременно повышая пространственный интеллект и снимая умственное утомление."
        },
        {
            year: "1808", title: "Романтизм",
            description: "Бетховен взламывает строгие правила классики. Музыка начинает выражать глубокие личные потрясения, страсть и борьбу человека с судьбой.",
            trackName: "Л. ван Бетховен - Симфония №5", audioSrc: "audio/beethoven.mp3",
            impact: "Мощные симфонические всплески помогают слушателю экологично прожить и высвободить подавленные негативные эмоции (гнев, скорбь)."
        },
        {
            year: "1890", title: "Импрессионизм",
            description: "Клод Дебюсси создает музыку из «полутонов и теней», отказываясь от четкого ритма в пользу передачи мимолетного настроения.",
            trackName: "К. Дебюсси - Лунный свет", audioSrc: "audio/debussy.mp3",
            impact: "Отсутствие жесткого ритма снимает мышечное напряжение. Идеальный аудиальный инструмент для борьбы с паническими атаками."
        },
        {
            year: "1913", title: "Авангард и Модернизм",
            description: "Игорь Стравинский шокирует публику балетом «Весна священная». Дикие ритмы и диссонансы ломают все привычные шаблоны звука.",
            trackName: "И. Стравинский - Весна священная", audioSrc: "audio/stravinsky.mp3",
            impact: "Сложные, резкие и непредсказуемые звуки стимулируют образование новых нейронных связей, заставляя мозг выходить из зоны комфорта."
        }
    ],
    rock: [
        {
            year: "1954", title: "Зарождение Рок-н-ролла",
            description: "Слияние блюза, кантри и госпела. Чак Берри и Элвис Пресли делают электрогитару главным инструментом эпохи.",
            trackName: "Elvis Presley - Jailhouse Rock", audioSrc: "audio/elvis.mp3",
            impact: "Простой, но невероятно быстрый ритм (около 140 BPM) стимулирует выработку адреналина и дофамина, вызывая непреодолимое желание двигаться."
        },
        {
            year: "1964", title: "Британское вторжение",
            description: "The Beatles покоряют Америку. Рок-музыка становится голосом целого поколения молодежи и символом свободы.",
            trackName: "The Beatles - Come Together", audioSrc: "audio/beatles.mp3",
            impact: "Социальный аспект этой музыки закрывает психологическую потребность в принадлежности к группе. Она вызывает мощное чувство эйфории и единения."
        },
        {
            year: "1969", title: "Психоделический и Хард-рок",
            description: "Эпоха Вудстока. Группы вроде Pink Floyd и Led Zeppelin удлиняют песни, добавляя сложные соло и философские тексты.",
            trackName: "Led Zeppelin - Whole Lotta Love", audioSrc: "audio/zeppelin.mp3",
            impact: "Длительные гитарные соло и эхо-эффекты вводят слушателя в состояние транса, способствуя саморефлексии и отключению от бытовой реальности."
        },
        {
            year: "1977", title: "Панк-революция",
            description: "Sex Pistols и Ramones возвращают року сырость и агрессию. Грязный звук, три аккорда и протест против системы.",
            trackName: "Sex Pistols - Anarchy in the U.K.", audioSrc: "audio/sexpistols.mp3",
            impact: "Агрессивный вокал и быстрый темп работают как звуковая груша для битья. Это один из лучших жанров для сублимации гнева и фрустрации без вреда для окружающих."
        },
        {
            year: "1991", title: "Гранж",
            description: "Nirvana выпускает «Smells Like Teen Spirit». Громкий гитарный звук смешивается с текстами о депрессии, отчуждении и боли.",
            trackName: "Nirvana - Smells Like Teen Spirit", audioSrc: "audio/nirvana.mp3",
            impact: "Мрачные тексты помогают слушателям (особенно подросткам) прожить кризис идентичности, давая понять, что они не одиноки в своей душевной боли."
        },
        {
            year: "2000", title: "Инди-рок ревайвл",
            description: "Arctic Monkeys и The Strokes возвращают моду на гитарную музыку в гаражном стиле, но с современным, более чистым звучанием.",
            trackName: "Arctic Monkeys - Do I Wanna Know?", audioSrc: "audio/arctic.mp3",
            impact: "Уверенные басовые линии и ритм помогают выстроить личные границы и придают уверенности в себе в стрессовых социальных ситуациях."
        }
    ],
    pop: [
        {
            year: "1950", title: "Традиционная поп-музыка",
            description: "Эпоха крунеров. Фрэнк Синатра и Дин Мартин поют джазовые стандарты под аккомпанемент больших эстрадных оркестров.",
            trackName: "Frank Sinatra - Fly Me To The Moon", audioSrc: "audio/sinatra.mp3",
            impact: "Мягкий, бархатный мужской вокал (баритон) на подсознательном уровне воспринимается психикой как голос защитника, создавая чувство уюта и безопасности."
        },
        {
            year: "1974", title: "Эра Диско",
            description: "ABBA выигрывает Евровидение, а клубы захватывает блестящее диско. Главная цель музыки — заставить людей танцевать.",
            trackName: "ABBA - Dancing Queen", audioSrc: "audio/abba.mp3",
            impact: "Ровный бит (ровно 4 удара в такт) и мажорные аккорды искусственно повышают уровень серотонина, работая как звуковой антидепрессант."
        },
        {
            year: "1982", title: "Рождение мегазвезд",
            description: "Выходит альбом «Thriller». Благодаря Майклу Джексону и Мадонне, поп-музыка становится неотделима от ярких клипов и хореографии.",
            trackName: "Michael Jackson - Billie Jean", audioSrc: "audio/jackson.mp3",
            impact: "Сочетание аудиальных и визуальных образов перегружает центры удовольствия в мозге, создавая мощную привязанность к поп-идолу."
        },
        {
            year: "1999", title: "Тин-поп и Бойз-бенды",
            description: "Бритни Спирс и Backstreet Boys захватывают MTV. Музыка продюсируется по строгим математическим формулам (хиты Макса Мартина).",
            trackName: "Britney Spears - ...Baby One More Time", audioSrc: "audio/britney.mp3",
            impact: "Сверхзапоминающиеся припевы создают так называемый «эффект ушного червя», заставляя мозг бесконечно прокручивать мелодию и поддерживая легкое возбуждение."
        },
        {
            year: "2010", title: "Электропоп и EDM",
            description: "Леди Гага и Кэти Перри смешивают поп с жесткой клубной электроникой. Начинается эпоха синтезаторов и автотюна.",
            trackName: "Lady Gaga - Bad Romance", audioSrc: "audio/gaga.mp3",
            impact: "Плотный, громкий звук с преобладанием басов стимулирует уверенность в себе и повышает толерантность к физическим нагрузкам (идеально для спортзала)."
        },
        {
            year: "2024", title: "Вирусный поп",
            description: "Эпоха TikTok и Билли Айлиш. Популярной становится тихая, шепчущая музыка (ASMR-вокал) с минималистичным битом и откровенными текстами.",
            trackName: "Billie Eilish - bad guy", audioSrc: "audio/billie.mp3",
            impact: "Шепчущий вокал активирует ASMR-отклик мозга (приятные мурашки), снижая тревожность и помогая современному поколению справляться с информационным шумом."
        }
    ],
    jazz: [
        {
            year: "1899", title: "Рэгтайм",
            description: "Скотт Джоплин публикует свои синкопированные фортепианные пьесы. Черная американская музыка впервые обретает широкую популярность.",
            trackName: "Scott Joplin - The Entertainer", audioSrc: "audio/joplin.mp3",
            impact: "Рваный, «прыгающий» ритм рэгтайма заставляет мозг быстро адаптироваться к нестандартному такту, вызывая бодрость и прилив сил."
        },
        {
            year: "1920", title: "Эпоха Свинга",
            description: "Луи Армстронг и Дюк Эллингтон собирают большие оркестры (биг-бенды). Рождается понятие джазовой импровизации.",
            trackName: "Louis Armstrong - What a Wonderful World", audioSrc: "audio/armstrong.mp3",
            impact: "Слушание импровизации активирует те же участки мозга, что и решение сложных головоломок. Это отличная профилактика когнитивного старения."
        },
        {
            year: "1940", title: "Бибоп",
            description: "Чарли Паркер ускоряет джаз до предела. Музыка становится сложной, виртуозной и предназначена для внимательного слушания, а не для танцев.",
            trackName: "Charlie Parker - Donna Lee", audioSrc: "audio/parker.mp3",
            impact: "Невероятная скорость и хаотичность бибопа требуют максимальной концентрации слушателя, тренируя фокус внимания и способность отсекать лишние мысли."
        },
        {
            year: "1959", title: "Кул-джаз и Модальность",
            description: "Майлз Дэвис выпускает самый продаваемый джазовый альбом «Kind of Blue». Музыка становится холодной, отстраненной и меланхоличной.",
            trackName: "Miles Davis - So What", audioSrc: "audio/davis.mp3",
            impact: "Медленный темп и «просторные» паузы между нотами снижают частоту сердечных сокращений, являясь мощным средством от бессонницы и нервного перенапряжения."
        },
        {
            year: "1970", title: "Джаз-фьюжн",
            description: "Херби Хэнкок скрещивает джаз с роком, фанком и электронными синтезаторами. Жанр уходит в космические и футуристические эксперименты.",
            trackName: "Herbie Hancock - Chameleon", audioSrc: "audio/hancock.mp3",
            impact: "Многослойность фьюжна расширяет рамки восприятия. Психика учится находить гармонию в, казалось бы, несочетаемых элементах и хаосе."
        }
    ],
    electronic: [
        {
            year: "1920", title: "Изобретение Терменвокса",
            description: "Лев Термен создает первый в мире электронный музыкальный инструмент, на котором играют движениями рук в воздухе.",
            trackName: "Клара Рокмор - Лебедь (на Терменвоксе)", audioSrc: "audio/theremin.mp3",
            impact: "Потусторонний, «призрачный» звук первых электронных инструментов активирует центры любопытства и легкой тревожности, создавая чувство мистики."
        },
        {
            year: "1974", title: "Синти-поп и Краутрок",
            description: "Немецкая группа Kraftwerk доказывает, что музыку можно писать вообще без живых инструментов. Компьютеры обретают голос.",
            trackName: "Kraftwerk - Autobahn", audioSrc: "audio/kraftwerk.mp3",
            impact: "Повторяющиеся, механические и безэмоциональные синтетические паттерны вводят мозг в состояние потока, идеально подходящее для монотонной работы."
        },
        {
            year: "1985", title: "Хаус и Техно",
            description: "В подпольных клубах Чикаго и Детройта диджеи начинают сводить драм-машины. Рождается танцевальная электронная музыка.",
            trackName: "Frankie Knuckles - Your Love", audioSrc: "audio/house.mp3",
            impact: "Цикличность техно работает как шаманский бубен. Она перегружает сознание монотонностью, заставляя логическую часть мозга отключиться."
        },
        {
            year: "1990", title: "Рейв-культура",
            description: "Бум транса, джангла и биг-бита. Группы The Prodigy и Daft Punk превращают электронную музыку в саундтрек огромных фестивалей.",
            trackName: "Daft Punk - Around The World", audioSrc: "audio/daftpunk.mp3",
            impact: "Высокий BPM (130-150 ударов в минуту) в сочетании с мощными басами вызывает акустический катарсис и мощный выброс эндорфинов в толпе."
        },
        {
            year: "2010", title: "Глобальный EDM",
            description: "Skrillex, Avicii и David Guetta выводят электронику на стадионы. Дроп (момент взрыва в песне) становится главным элементом трека.",
            trackName: "Avicii - Levels", audioSrc: "audio/avicii.mp3",
            impact: "Долгое нарастание звука (билдап) и резкий сброс энергии (дроп) тренируют дофаминовую систему мозга, работая по принципу ожидание-награда."
        },
        {
            year: "2020", title: "Ло-фай и Чиллвейв",
            description: "В ответ на стресс современного мира популярной становится Lo-Fi Hip Hop. Музыка специально делается с эффектом старой кассеты и шумом винила.",
            trackName: "Lofi Girl - chill beats to relax/study to", audioSrc: "audio/lofi.mp3",
            impact: "Аналоговые шумы и медленный бит создают ощущение ностальгии по времени, в котором слушатель даже не жил, снижая уровень тревожности."
        }
    ]
};

let currentGenreData = [];
const DEFAULT_ACCENT_COLOR = "#8A7DE8";

function loadGenre(genreKey, genreColor, clickedButton) {
    const container = document.getElementById('timeline-container');
    const track = document.getElementById('timeline-track');
    
    document.documentElement.style.setProperty('--accent-color', genreColor);
    
    document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    currentGenreData = musicData[genreKey];
    
    if (currentGenreData) {
        container.style.display = 'block';
        container.classList.remove('hidden');
        track.innerHTML = ''; 

        currentGenreData.forEach((item, index) => {
            const point = document.createElement('div');
            point.className = 'timeline-point';
            point.innerHTML = `<span>${item.year}</span>`;
            point.onclick = () => showInfo(index, point);
            track.appendChild(point);
        });

        showInfo(0, track.firstChild);
    }
}

function showInfo(index, clickedPoint) {
    const data = currentGenreData[index];

    document.querySelectorAll('.timeline-point').forEach(p => p.classList.remove('active'));
    if(clickedPoint) clickedPoint.classList.add('active');

    document.getElementById('info-year').innerText = data.year;
    document.getElementById('info-title').innerText = data.title;
    document.getElementById('info-desc').innerText = data.description;
    document.getElementById('info-track-name').innerText = data.trackName;
    document.getElementById('info-impact').innerText = data.impact;
    
    const audioPlayer = document.getElementById('info-audio');
    audioPlayer.pause();
    audioPlayer.src = data.audioSrc;
}

function closeTimeline() {
    const container = document.getElementById('timeline-container');
    const audioPlayer = document.getElementById('info-audio');
    
    container.style.display = 'none';
    container.classList.add('hidden');
    
    audioPlayer.pause();
    
    document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
    document.documentElement.style.setProperty('--accent-color', DEFAULT_ACCENT_COLOR);
}