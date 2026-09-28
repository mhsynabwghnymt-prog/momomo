// ===== بيانات الشعب (مصر) =====
const tracksData = {
    "2sec": {
        "science-math": {
            name: "علمي رياضة",
            subjects: [
                { name: "اللغة العربية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "الرياضيات", coeff: 4 },
                { name: "الفيزياء", coeff: 3 },
                { name: "الكيمياء", coeff: 3 },
                { name: "الأحياء", coeff: 2 },
                { name: "التاريخ", coeff: 2 },
                { name: "الفلسفة والمنطق", coeff: 2 },
                { name: "التربية الدينية", coeff: 2 }
            ]
        },
        "science-science": {
            name: "علمي علوم",
            subjects: [
                { name: "اللغة العربية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "الرياضيات", coeff: 3 },
                { name: "الفيزياء", coeff: 3 },
                { name: "الكيمياء", coeff: 3 },
                { name: "الأحياء", coeff: 4 },
                { name: "التاريخ", coeff: 2 },
                { name: "الفلسفة والمنطق", coeff: 2 },
                { name: "التربية الدينية", coeff: 2 }
            ]
        },
        "literary": {
            name: "أدبي",
            subjects: [
                { name: "اللغة العربية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التاريخ", coeff: 4 },
                { name: "الجغرافيا", coeff: 3 },
                { name: "الفلسفة والمنطق", coeff: 3 },
                { name: "علم النفس والاجتماع", coeff: 3 },
                { name: "الاقتصاد والإحصاء", coeff: 2 },
                { name: "التربية الدينية", coeff: 2 }
            ]
        }
    },
    "3sec": {
        "science-math": {
            name: "علمي رياضة",
            subjects: [
                { name: "اللغة العربية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "الرياضيات (جبر وهندسة فراغية)", coeff: 4 },
                { name: "الرياضيات (تفاضل وتكامل)", coeff: 4 },
                { name: "الفيزياء", coeff: 4 },
                { name: "الكيمياء", coeff: 3 },
                { name: "الأحياء", coeff: 2 },
                { name: "التاريخ", coeff: 2 },
                { name: "الفلسفة والمنطق", coeff: 2 },
                { name: "التربية الدينية", coeff: 2 }
            ]
        },
        "science-science": {
            name: "علمي علوم",
            subjects: [
                { name: "اللغة العربية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "الرياضيات", coeff: 3 },
                { name: "الفيزياء", coeff: 3 },
                { name: "الكيمياء", coeff: 3 },
                { name: "الأحياء", coeff: 4 },
                { name: "التاريخ", coeff: 2 },
                { name: "الفلسفة والمنطق", coeff: 2 },
                { name: "التربية الدينية", coeff: 2 }
            ]
        },
        "literary": {
            name: "أدبي",
            subjects: [
                { name: "اللغة العربية", coeff: 4 },
                { name: "اللغة الإنجليزية", coeff: 3 },
                { name: "اللغة الفرنسية", coeff: 2 },
                { name: "التاريخ", coeff: 4 },
                { name: "الجغرافيا", coeff: 4 },
                { name: "الفلسفة والمنطق", coeff: 3 },
                { name: "علم النفس والاجتماع", coeff: 3 },
                { name: "الاقتصاد والإحصاء", coeff: 2 },
                { name: "التربية الدينية", coeff: 2 }
            ]
        }
    }
};

let user = null;

window.addEventListener('DOMContentLoaded', () => {
    const levelSelect = document.getElementById('level');
    if (levelSelect) {
        levelSelect.addEventListener('change', () => {
            const level = levelSelect.value;
            const trackSelect = document.getElementById('track');
            trackSelect.innerHTML = '<option value="">-- اختر الشعبة --</option>';
            if (level && tracksData[level]) {
                for (let key in tracksData[level]) {
                    let opt = document.createElement('option');
                    opt.value = key;
                    opt.textContent = tracksData[level][key].name;
                    trackSelect.appendChild(opt);
                }
            }
        });
    }

    if (document.getElementById('subjectsList')) {
        const saved = localStorage.getItem('thanawiUser');
        if (saved) {
            user = JSON.parse(saved);
            loadDash();
        } else {
            window.location.href = 'index.html';
        }
    }

    if (localStorage.getItem('dark') === 'true') {
        document.body.classList.add('dark');
    }
});

function start() {
    const level = document.getElementById('level').value;
    const track = document.getElementById('track').value;
    const name = document.getElementById('name').value.trim();
    if (!level || !track || !name) {
        alert('من فضلك أكمل كل البيانات');
        return;
    }
    user = { name, level, track, progress: {}, grades: {} };
    localStorage.setItem('thanawiUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
}

function loadDash() {
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userTrack').textContent = tracksData[user.level][user.track].name;
    document.getElementById('userLevel').textContent = user.level === '2sec' ? 'الثانية الثانوي' : 'الثالثة الثانوي';
    renderSubjects();
    renderGrades();
    updateTotal();
}

function renderSubjects() {
    const list = document.getElementById('subjectsList');
    const subjects = tracksData[user.level][user.track].subjects;
    list.innerHTML = '';
    subjects.forEach((s, i) => {
        const p = user.progress[i] || 0;
        const div = document.createElement('div');
        div.className = 'subject-item';
        div.innerHTML = `
            <div>
                <div class="subject-name">${s.name}</div>
                <div class="subject-coeff">المعامل: ${s.coeff}</div>
            </div>
            <div style="display:flex;gap:10px;align-items:center;">
                <div class="progress-bar" style="width:120px;height:18px;">
                    <div class="progress-fill" style="width:${p}%">${p}%</div>
                </div>
                <select onchange="setProgress(${i},this.value)" style="width:110px;margin:0;">
                    <option value="0" ${p===0?'selected':''}>لم يبدأ</option>
                    <option value="25" ${p===25?'selected':''}>25%</option>
                    <option value="50" ${p===50?'selected':''}>50%</option>
                    <option value="75" ${p===75?'selected':''}>75%</option>
                    <option value="100" ${p===100?'selected':''}>مكتمل</option>
                </select>
            </div>`;
        list.appendChild(div);
    });
}

function setProgress(i, v) {
    user.progress[i] = parseInt(v);
    save();
    renderSubjects();
    updateTotal();
}

function updateTotal() {
    const subjects = tracksData[user.level][user.track].subjects;
    let tw = 0, tc = 0;
    subjects.forEach((s, i) => {
        tw += (user.progress[i] || 0) * s.coeff;
        tc += s.coeff;
    });
    const total = Math.round(tw / tc);
    document.getElementById('totalProgress').textContent = total + '%';
    document.getElementById('totalProgressBar').style.width = total + '%';
}

function renderGrades() {
    const calc = document.getElementById('gradeCalculator');
    const subjects = tracksData[user.level][user.track].subjects;
    calc.innerHTML = '';
    subjects.forEach((s, i) => {
        const g = user.grades[i] || '';
        const div = document.createElement('div');
        div.className = 'grade-row';
        div.innerHTML = `
            <label style="flex:1;margin:0;">${s.name} (×${s.coeff})</label>
            <input type="number" min="0" max="100" step="1" value="${g}"
                   onchange="setGrade(${i},this.value)" placeholder="0-100">`;
        calc.appendChild(div);
    });
}

function setGrade(i, v) {
    user.grades[i] = parseFloat(v);
    save();
}

function calcTotal() {
    const subjects = tracksData[user.level][user.track].subjects;
    let tw = 0, tc = 0, ok = true;
    subjects.forEach((s, i) => {
        const g = user.grades[i];
        if (g === undefined || g === null || isNaN(g)) ok = false;
        else { tw += g * s.coeff; tc += s.coeff; }
    });
    const res = document.getElementById('totalResult');
    if (!ok) {
        res.innerHTML = '<span style="color:var(--warning)">⚠️ أدخل كل الدرجات</span>';
        return;
    }
    const total = (tw / tc).toFixed(2);
    const maxTotal = 410;
    const percent = ((total / maxTotal) * 100).toFixed(1);
    let msg = '', c = '';
    if (percent >= 90) { msg = 'ممتاز! 🌟'; c = 'var(--success)'; }
    else if (percent >= 80) { msg = 'جيد جداً 👍'; c = 'var(--success)'; }
    else if (percent >= 70) { msg = 'جيد 👌'; c = 'var(--primary)'; }
    else if (percent >= 60) { msg = 'مقبول ⚠️'; c = 'var(--warning)'; }
    else { msg = 'تحتاج مجهود أكتر 💪'; c = 'var(--danger)'; }
    res.innerHTML = `<span style="color:${c}">المجموع: ${total}/${maxTotal} (${percent}%) — ${msg}</span>`;
}

// ===== الشات بوت (مجاني بدون API Key) =====
const botPrompts = {
    arabic: 'أنت مساعد ذكي متخصص في اللغة العربية لطلاب الثانوية العامة في مصر. ساعد في شرح الدروس والنحو والصرف والبلاغة والأدب وحل التمارين. أجب بالعربية المبسطة.',
    english: 'You are a smart assistant for Egyptian Thanaweya Amma English students. Help with grammar, vocabulary, reading, writing, and exam prep. Answer in simple English.',
    history: 'أنت مساعد ذكي متخصص في التاريخ لطلاب الثانوية العامة في مصر. ساعد في شرح الدروس وتحليل الوثائق وحفظ التواريخ والأحداث المهمة. أجب بالعربية.',
    math: 'أنت مساعد ذكي متخصص في الرياضيات لطلاب الثانوية العامة في مصر. ساعد في شرح الدروس (جبر، هندسة، تفاضل، تكامل) وحل المسائل والتمارين. أجب بالعربية مع خطوات الحل.',
    physics: 'أنت مساعد ذكي متخصص في الفيزياء لطلاب الثانوية العامة في مصر. ساعد في شرح الدروس وحل المسائل والقوانين الفيزيائية. أجب بالعربية مع خطوات الحل.',
    chemistry: 'أنت مساعد ذكي متخصص في الكيمياء لطلاب الثانوية العامة في مصر. ساعد في شرح الدروس (عضوية، غير عضوية، كيمياء تحليلية) وحل المسائل. أجب بالعربية.',
    biology: 'أنت مساعد ذكي متخصص في الأحياء لطلاب الثانوية العامة في مصر. ساعد في شرح الدروس (وراثة، نبات، حيوان، أحياء مجهرية) وحل الأسئلة. أجب بالعربية.'
};

async function sendMsg() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    showTyping();
    try {
        const subject = document.getElementById('chatSubject').value;
        const prompt = botPrompts[subject];
        const fullPrompt = prompt + '\n\nسؤال الطالب: ' + text;
        const res = await fetch('https://text.pollinations.ai/' + encodeURIComponent(fullPrompt));
        const answer = await res.text();
        removeTyping();
        addMsg(answer, 'bot');
    } catch (e) {
        removeTyping();
        addMsg('عذراً، حصل خطأ. حاول تاني.', 'bot');
    }
}

function addMsg(text, who) {
    const c = document.getElementById('chatContainer');
    const d = document.createElement('div');
    d.className = 'chat-msg ' + who;
    d.innerHTML = `<div class="msg-content">${text.replace(/\n/g, '<br>')}</div>`;
    c.appendChild(d);
    c.scrollTop = c.scrollHeight;
}

function showTyping() {
    const c = document.getElementById('chatContainer');
    const d = document.createElement('div');
    d.className = 'chat-msg bot';
    d.id = 'typing';
    d.innerHTML = '<div class="msg-content"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
    c.appendChild(d);
    c.scrollTop = c.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById('typing');
    if (t) t.remove();
}

function save() {
    localStorage.setItem('thanawiUser', JSON.stringify(user));
}

function toggleDark() {
    document.body.classList.toggle('dark');
    localStorage.setItem('dark', document.body.classList.contains('dark'));
}

function logout() {
    if (confirm('متأكد تخرج؟')) {
        localStorage.removeItem('thanawiUser');
        window.location.href = 'index.html';
    }
}
