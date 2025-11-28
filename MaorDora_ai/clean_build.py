import os

# התיקייה שבה נמצא האתר המוכן
BUILD_DIR = r"_build/html"

print("--- STARTING CLEANUP ---")

# עובר על כל הקבצים בתיקייה
for root, dirs, files in os.walk(BUILD_DIR):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            try:
                # קורא את הקובץ
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                # --- כאן הקסם קורה ---
                # בודק אם המילים האסורות קיימות ומוחק אותן
                if "Made with MyST" in content or 'href="https://mystmd.org"' in content:
                    # מחליף את החלק הבעייתי בכלום
                    new_content = content.replace("Made with MyST", "")
                    # מוחק גם את כל הבלוק של הפוטר אם אפשר לזהות אותו
                    new_content = new_content.replace('class="myst-footer"', 'class="myst-footer" style="display:none !important;"')
                    
                    # שומר את הקובץ הנקי
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Cleaned: {file}")
                    
            except Exception as e:
                print(f"Error reading {file}: {e}")

print("--- CLEANUP FINISHED ---")