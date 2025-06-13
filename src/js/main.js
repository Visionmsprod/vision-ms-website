// --- SCRIPT GENERAL PARA TODAS LAS PÁGINAS ---

// Inicializar AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
}

// Lógica del Menú Móvil
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('is-active');
        menuToggle.innerHTML = mainNav.classList.contains('is-active') ? '✕' : '☰';
    });
}


// --- LÓGICA ESPECÍFICA PARA EL COTIZADOR ---
const calculatorForm = document.getElementById('calculator-form');
if (calculatorForm) {
    const allCalculatorInputs = calculatorForm.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    const totalDisplay = document.getElementById('total-display');
    const totalInput = document.getElementById('total-estimado-input');
    const serviceTypeInput = document.getElementById('tipo_servicio_cotizado');
    const selectionButtons = document.querySelectorAll('.service-selection-menu .btn');
    const calculatorSections = document.querySelectorAll('.calculator-section');
    const formatter = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });

    const calculateTotal = () => {
        let currentTotal = 0;
        const activeSection = document.querySelector('.calculator-section.active');
        if (activeSection) {
            activeSection.querySelectorAll('input:checked').forEach(input => {
                currentTotal += parseFloat(input.dataset.price);
            });
        }
        if (totalDisplay && totalInput) {
            totalDisplay.textContent = formatter.format(currentTotal);
            totalInput.value = formatter.format(currentTotal);
        }
    };

    const toggleDescription = (input) => {
        const item = input.closest('.service-item');
        const description = item.querySelector('.description');
        if (description) {
            description.style.display = input.checked ? 'block' : 'none';
        }
    };

    selectionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.dataset.target;
            selectionButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            calculatorSections.forEach(section => section.classList.remove('active'));
            
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.classList.add('active');
            }
            
            if(serviceTypeInput) {
                serviceTypeInput.value = button.textContent;
            }

            allCalculatorInputs.forEach(input => {
                input.checked = false;
                const desc = input.closest('.service-item').querySelector('.description');
                if (desc) desc.style.display = 'none';
            });
            calculateTotal();
        });
    });

    allCalculatorInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.type === 'radio') {
                const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
                radioGroup.forEach(radio => {
                    const desc = radio.closest('.service-item').querySelector('.description');
                    if (desc) desc.style.display = 'none';
                });
            }
            toggleDescription(input);
            calculateTotal();
        });
    });
    
    // Activar la primera sección al cargar la página del cotizador
    const initiallyActiveButton = document.querySelector('.service-selection-menu .btn.active');
    if (initiallyActiveButton) {
        const initialTarget = initiallyActiveButton.dataset.target;
        const initialSection = document.getElementById(initialTarget);
        if(initialSection) {
             initialSection.classList.add('active');
        }
    }
    calculateTotal();
}
