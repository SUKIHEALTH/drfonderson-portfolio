import os
import glob
import re
import json
from html.parser import HTMLParser

class SimpleTextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.title = ''
        self.in_title = False
    def handle_starttag(self, tag, attrs):
        if tag.lower() in ['h1', 'title']:
            self.in_title = True
    def handle_endtag(self, tag):
        if tag.lower() in ['h1', 'title']:
            self.in_title = False
    def handle_data(self, data):
        if self.in_title and not self.title:
            self.title = data.strip()
        self.text.append(data)

articles_dir = r'C:\Users\SabineFonderson\antigravity\Articles-20260819T161115Z-1-001\Articles'
article_files = glob.glob(os.path.join(articles_dir, '*.html'))

parsed_articles = []
for fpath in article_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    parser = SimpleTextExtractor()
    parser.feed(content)
    all_text = ' '.join(' '.join(parser.text).split())
    
    title = parser.title
    if not title or len(title) < 3:
        clean_name = re.sub(r'^\d{4}-\d{2}-\d{2}\s+\d{2}_\d{2}_\d{2}\.\d-', '', fname)
        clean_name = clean_name.replace('.html', '').replace('-', ' ').replace('_', ' ')
        title = clean_name.strip()
    
    title = re.sub(r'\s*-\s*Sabine Fonderson.*$', '', title, flags=re.IGNORECASE).strip()
    
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})', fname)
    date_str = date_match.group(1) if date_match else '2025'
    
    body_excerpt = all_text
    if title in body_excerpt:
        body_excerpt = body_excerpt.replace(title, '', 1)
    body_excerpt = ' '.join(body_excerpt.split())[:180].strip() + '...'
    
    cat = 'Healthcare & Leadership'
    lower = (title + ' ' + body_excerpt).lower()
    if any(k in lower for k in ['ai', 'extension', 'snippet', 'transcriber', 'simulator', 'automation', 'build', 'tool', 'situgram', 'code']):
        cat = 'AI & Clinical Tech'
    elif any(k in lower for k in ['burnout', 'stress', 'pause', 'flow', 'permission', 'tired', 'feeling']):
        cat = 'Physician Wellbeing'
    elif any(k in lower for k in ['e-health', 'telemedicine', 'digital', 'transformation', 'online', 'virtual']):
        cat = 'Digital Health'
    elif any(k in lower for k in ['immigrant', 'second language', 'foreign', 'language', 'scotland', 'nhs']):
        cat = 'Multilingual Medicine'
        
    parsed_articles.append({
        'title': title,
        'filename': fname,
        'date': date_str,
        'category': cat,
        'excerpt': body_excerpt
    })

parsed_articles.sort(key=lambda x: x['date'], reverse=True)

os.makedirs('data', exist_ok=True)
with open('data/articles.json', 'w', encoding='utf-8') as out:
    json.dump(parsed_articles, out, indent=2)

print(f"Successfully processed {len(parsed_articles)} articles.")
