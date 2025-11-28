console.log("--- FORCE REMOVE ENGAGED ---");

// חלק 1: הזרקת ה-CSS ישירות לדף (חזק יותר מקובץ חיצוני)
const style = document.createElement('style');
style.innerHTML = `
  /* מעלים כל קישור שמכיל את המילה myst או הולך לאתר שלהם */
  a[href*="myst"], 
  .made-with-myst,
  .myst-footer {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
      position: absolute !important;
      top: -10000px !important;
  }
`;
document.head.appendChild(style);

// חלק 2: מחיקה פיזית של האלמנטים
function killLogo() {
    const targets = document.querySelectorAll('a[href*="myst"], .made-with-myst');
    if (targets.length > 0) {
        targets.forEach(el => el.remove());
        console.log("Logo removed.");
    }
}

// מפעיל מיד, בטעינה, וכל 100 מילי-שניות (למקרה שהלוגו עקשן)
killLogo();
window.addEventListener('load', killLogo);
setInterval(killLogo, 100);