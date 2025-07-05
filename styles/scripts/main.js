document.addEventListener('DOMContentLoaded', () => {

  // — Check-in Emocional —
  const form = document.getElementById('checkin-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const mood = form.mood.value;
      const messages = {
        flujo:        '¡Genial! Aprovecha ese flujo.',
        ligero:      'Modo Ligero activado. Sin presiones.',
        vegetal:     'Modo Vegetal: permítete pausar.',
        no_me_hables:'Modo No Me Hables activado. 🛑'
      };
      document.getElementById('checkin-response').textContent = messages[mood] || '';
      form.reset();
    });
  }

  // — Modo Sarcástico —
  // Detectamos id por si alguien lo nombró 'sarcasm-btn' o 'sarcastic-btn'
  const sarcasmBtn = document.getElementById('sarcastic-btn')
                   || document.getElementById('sarcasm-btn');
  const sarcasmOut = document.getElementById('sarcastic-output')
                   || document.getElementById('sarcasm-output');

  if (sarcasmBtn && sarcasmOut) {
    const quips = [
      'Claro, solo necesitas otro café para rendir al 200%.',
      'Modo Vegetal: como un zombi, pero con wifi.',
      'Reuniones, ah sí, justo lo que tu cerebro pidió a gritos.',
      'Funcional: como un microondas averiado: calienta, pero no muy bien.',
      '¿Otra reunión? ¡Qué idea tan fresca!',
      'Si pudieras traducir tu cara a un emoji, hoy sería 💀.'
    ];
    sarcasmBtn.addEventListener('click', e => {
      e.preventDefault();
      const idx = Math.floor(Math.random() * quips.length);
      sarcasmOut.textContent = quips[idx];
    });
  }

  // — Formulario de Contacto —
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Gracias por tu mensaje. Te responderemos pronto.');
      contactForm.reset();
    });
  }

});

