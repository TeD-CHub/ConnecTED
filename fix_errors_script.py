import os
import re

# Define the root directory
project_dir = r"C:\Users\teddy\Desktop\GRIND\Projects\ConnecTED"

# RegEx patterns and replacements
replacements = [
    # SVG Attributes
    (r'clip-rule=', 'clipRule='),
    (r'fill-rule=', 'fillRule='),
    (r'stroke-width=', 'strokeWidth='),
    
    # Public Folder Paths (quote variants)
    (r'src="/public/', 'src="/'),
    (r'href="/public/', 'href="/'),
    (r'src="public/', 'src="'),
    (r'href="public/', 'href="'),
    
    # Manifest & Absolute Links
    (r'href="https://www.get--connected.com/site.webmanifest"', 'href="/site.webmanifest"'),
    (r'href="https://www.get--connected.com/site.webmanifest"', 'href="/site.webmanifest"'), # duplicate just in case
]

def process_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        for pattern, replacement in replacements:
            # Simple string replacement for these specific cases is safer/easier than regex for some, 
            # but using re.sub for flexibility if needed. 
            # Here we actully use string replace for exact matches on attributes to be safe.
            # However, the public path one might be tricky.
            # Let's use simple string replacement as the patterns are quite specific.
            content = content.replace(pattern, replacement)
            
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {file_path}")
        else:
            print(f"No changes: {file_path}")
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    print(f"Scanning directory: {project_dir}")
    for root, dirs, files in os.walk(project_dir):
        # sensitive directories to skip
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
            
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                process_file(file_path)

if __name__ == "__main__":
    main()
