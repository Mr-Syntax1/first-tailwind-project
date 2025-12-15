const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const panel = toggle.nextElementSibling;
        const icon = toggle.querySelector('span');

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            icon.classList.remove('rotate-45');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            icon.classList.add('rotate-45');
        }
    });
});

// دیفالت رو پنل 1 قرار میگیره
const firstPanel = document.querySelector('.panel-1');
if (firstPanel) firstPanel.classList.remove('hidden');

const firstTab = document.querySelector('.tab[data-target="panel-1"]');
if (firstTab) firstTab.classList.add('border-b-4', 'border-gray-400');


// تنظیمات کلی تب ها
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // حذف حالت فعال از همه تب‌ها
        tabs.forEach(t => {
            t.classList.remove('border-b-4', 'border-gray-400');
        });

        // مخفی کردن همه پنل‌ها
        panels.forEach(panel => {
            panel.classList.add('hidden');
        });

        // اضافه کردن حالت فعال به تب کلیک شده
        tab.classList.add('border-b-4', 'border-gray-400');

        // نمایش پنل مرتبط
        const target = tab.getAttribute('data-target'); // مثال: "panel-1"
        const panelToShow = document.querySelector(`#panels .${target}`);
        if (panelToShow) {
            panelToShow.classList.remove('hidden');
        }
    });
});