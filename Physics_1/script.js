// Capacitance Calculator
function calculateCapacitance() {
    const kappa = parseFloat(document.getElementById('kappa').value);
    const area = parseFloat(document.getElementById('area').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const epsilon0 = 8.85e-12;
    if (kappa && area && distance) {
        const C = (kappa * epsilon0 * area) / distance;
        document.getElementById('result').innerText = `Capacitance: ${C.toExponential(2)} F`;
        animateResult();
    } else {
        document.getElementById('result').innerText = 'Please fill all fields.';
    }
}

// Animate result
function animateResult() {
    const result = document.getElementById('result');
    result.style.animation = 'none';
    setTimeout(() => {
        result.style.animation = 'pulse 0.5s';
    }, 10);
}

// Quiz
function checkQuiz() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById('quizResult');
    if (answer && answer.value === 'Farad') {
        result.innerText = 'Correct! 🎉';
        result.style.color = 'green';
    } else {
        result.innerText = 'Incorrect. The unit is Farad.';
        result.style.color = 'red';
    }
    animateResult();
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.innerText = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('darkMode', isDark);
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerText = '☀️ Light Mode';
}

// Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add some particle effect (simple)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = '#4facfe';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.animation = 'floatUp 3s linear forwards';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}

setInterval(createParticle, 2000);

// CSS for particle animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    to {
        transform: translateY(-100vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);