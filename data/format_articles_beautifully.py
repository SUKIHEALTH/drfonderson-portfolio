import os
import glob
import re
import json
from html.parser import HTMLParser

class ContentParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.in_title = False
        self.in_body = False
        self.body_html = []
        self.in_script_or_style = False

    def handle_starttag(self, tag, attrs):
        if tag.lower() in ['title', 'h1'] and not self.title:
            self.in_title = True
        if tag.lower() in ['script', 'style']:
            self.in_script_or_style = True
        if tag.lower() == 'body':
            self.in_body = True
        elif self.in_body and not self.in_script_or_style:
            attr_str = ' '.join([f'{k}="{v}"' for k, v in attrs if k.lower() not in ['style', 'class', 'width', 'height']])
            if attr_str:
                self.body_html.append(f'<{tag} {attr_str}>')
            else:
                self.body_html.append(f'<{tag}>')

    def handle_endtag(self, tag):
        if tag.lower() in ['title', 'h1']:
            self.in_title = False
        if tag.lower() in ['script', 'style']:
            self.in_script_or_style = False
        if tag.lower() == 'body':
            self.in_body = False
        elif self.in_body and not self.in_script_or_style:
            self.body_html.append(f'</{tag}>')

    def handle_data(self, data):
        if self.in_title and not self.title:
            self.title = data.strip()
        if self.in_body and not self.in_script_or_style:
            self.body_html.append(data)

# Read articles metadata
articles_meta = {}
if os.path.exists('data/articles.json'):
    with open('data/articles.json', 'r', encoding='utf-8') as f:
        meta_list = json.load(f)
        for item in meta_list:
            articles_meta[item['filename']] = item

files = glob.glob('articles/*.html')
print(f"Formatting {len(files)} articles...")

for fpath in files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        raw_html = f.read()

    parser = ContentParser()
    parser.feed(raw_html)

    title = parser.title
    if not title or len(title) < 3:
        clean_name = re.sub(r'^\d{4}-\d{2}-\d{2}\s+\d{2}_\d{2}_\d{2}\.\d-', '', fname)
        clean_name = clean_name.replace('.html', '').replace('-', ' ').replace('_', ' ')
        title = clean_name.strip()
    title = re.sub(r'\s*-\s*Sabine Fonderson.*$', '', title, flags=re.IGNORECASE).strip()

    meta = articles_meta.get(fname, {
        'category': 'Healthcare & Leadership',
        'date': 'Published Article'
    })
    category = meta.get('category', 'Healthcare & Leadership')
    date_str = meta.get('date', 'Published Article')

    # Get body content
    inner_body = ''.join(parser.body_html)
    
    # Remove redundant title headers if duplicate
    inner_body = re.sub(r'<h1[^>]*>.*?</h1>', '', inner_body, count=1, flags=re.IGNORECASE | re.DOTALL)
    
    # Clean up empty tags and formatting
    inner_body = re.sub(r'<p>\s*</p>', '', inner_body)
    inner_body = inner_body.strip()
    if not inner_body:
        inner_body = f"<p>{title}</p>"

    # Create beautiful template
    formatted_page = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Dr. Sabine Fonderson</title>
  <meta name="description" content="{title} - Insights on healthcare, medical leadership, and clinical AI by Dr. Sabine Fonderson.">
  <meta name="author" content="Dr. Sabine Fonderson">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  
  <style>
    :root {{
      --background: #f6f0e6;
      --foreground: #303535;
      --card: #fbf7ef;
      --primary: #174a47;
      --primary-hover: #2c625e;
      --primary-foreground: #f6f0e6;
      --accent: #c9785b;
      --muted: #ece3d3;
      --muted-foreground: #5f6b6a;
      --border: #ddd0bb;
      --font-serif: 'Libre Baskerville', Georgia, serif;
      --font-sans: 'Inter', system-ui, sans-serif;
    }}

    *, *::before, *::after {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      background-color: var(--background);
      color: var(--foreground);
      font-family: var(--font-sans);
      font-size: 1.125rem;
      line-height: 1.85;
      -webkit-font-smoothing: antialiased;
      padding: 0;
    }}

    /* Sticky Editorial Header */
    .article-header-bar {{
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background-color: rgba(246, 240, 230, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}

    .back-link {{
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary);
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: color 0.2s ease;
    }}

    .back-link:hover {{
      color: var(--accent);
    }}

    .header-cta {{
      background-color: var(--primary);
      color: var(--primary-foreground);
      padding: 0.5rem 1.15rem;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.2s ease;
    }}

    .header-cta:hover {{
      background-color: var(--primary-hover);
    }}

    /* Article Container */
    .article-container {{
      max-width: 760px;
      margin: 3.5rem auto 6rem;
      padding: 0 1.5rem;
    }}

    /* Meta Info */
    .article-meta-row {{
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }}

    .badge {{
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      background-color: rgba(201, 120, 91, 0.15);
      color: var(--accent);
    }}

    .article-date {{
      font-size: 0.85rem;
      color: var(--muted-foreground);
    }}

    /* Main Title */
    .article-main-title {{
      font-family: var(--font-serif);
      font-size: 2.35rem;
      line-height: 1.25;
      color: var(--foreground);
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }}

    @media (min-width: 768px) {{
      .article-main-title {{
        font-size: 2.85rem;
      }}
    }}

    .author-byline {{
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--border);
      margin-bottom: 2.5rem;
    }}

    .author-img {{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid var(--border);
    }}

    .author-name {{
      font-family: var(--font-serif);
      font-size: 1rem;
      font-weight: 700;
      color: var(--foreground);
    }}

    .author-role {{
      font-size: 0.825rem;
      color: var(--muted-foreground);
    }}

    /* Content Typography */
    .article-content {{
      color: var(--foreground);
    }}

    .article-content p {{
      margin-bottom: 1.65rem;
      color: #373f3e;
      font-size: 1.125rem;
      line-height: 1.85;
    }}

    .article-content h1, 
    .article-content h2, 
    .article-content h3 {{
      font-family: var(--font-serif);
      color: var(--foreground);
      margin-top: 2.5rem;
      margin-bottom: 1rem;
      line-height: 1.3;
    }}

    .article-content h2 {{
      font-size: 1.75rem;
    }}

    .article-content h3 {{
      font-size: 1.4rem;
    }}

    .article-content blockquote {{
      border-left: 3px solid var(--accent);
      padding-left: 1.5rem;
      margin: 2rem 0;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.25rem;
      color: var(--primary);
      line-height: 1.6;
    }}

    .article-content ul, 
    .article-content ol {{
      margin-bottom: 1.75rem;
      padding-left: 1.75rem;
    }}

    .article-content li {{
      margin-bottom: 0.65rem;
      color: #373f3e;
    }}

    .article-content a {{
      color: var(--primary);
      text-decoration: underline;
      text-underline-offset: 3px;
    }}

    .article-content a:hover {{
      color: var(--accent);
    }}

    /* Author Footer Card */
    .author-footer-card {{
      background-color: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 2.25rem;
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }}

    @media (min-width: 600px) {{
      .author-footer-card {{
        flex-direction: row;
        align-items: center;
      }}
    }}

    .author-footer-img {{
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--primary);
      flex-shrink: 0;
    }}

    .author-footer-title {{
      font-family: var(--font-serif);
      font-size: 1.2rem;
      color: var(--foreground);
      margin-bottom: 0.35rem;
    }}

    .author-footer-bio {{
      font-size: 0.9rem;
      color: var(--muted-foreground);
      line-height: 1.55;
      margin-bottom: 1rem;
    }}

    .author-footer-ctas {{
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }}

    .btn {{
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.55rem 1.15rem;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 500;
      text-decoration: none;
    }}

    .btn-primary {{
      background-color: var(--primary);
      color: var(--primary-foreground);
    }}

    .btn-outline {{
      border: 1px solid var(--border);
      color: var(--foreground);
    }}

    .btn-outline:hover {{
      border-color: var(--primary);
      color: var(--primary);
    }}
  </style>
</head>
<body>

  <!-- Top Bar -->
  <div class="article-header-bar">
    <a href="../index.html#articles" class="back-link">
      &larr; Back to Dr. Sabine Fonderson Portfolio
    </a>
    <a href="../index.html#book" class="header-cta">
      Book Sabine for Speaking
    </a>
  </div>

  <!-- Main Article Body -->
  <main class="article-container">
    <div class="article-meta-row">
      <span class="badge">{category}</span>
      <span class="article-date">{date_str}</span>
    </div>

    <h1 class="article-main-title">{title}</h1>

    <div class="author-byline">
      <img src="../assets/images/sabine-portrait.png" alt="Dr. Sabine Fonderson" class="author-img">
      <div>
        <p class="author-name">Dr. Sabine Fonderson</p>
        <p class="author-role">Physician · Health AI Innovator · Keynote Speaker</p>
      </div>
    </div>

    <article class="article-content">
      {inner_body}
    </article>

    <!-- Author Callout Box -->
    <div class="author-footer-card">
      <img src="../assets/images/sabine-portrait.png" alt="Dr. Sabine Fonderson" class="author-footer-img">
      <div>
        <h3 class="author-footer-title">About Dr. Sabine Fonderson</h3>
        <p class="author-footer-bio">
          Practising General Practitioner (Rotterdam), Health AI developer, and international keynote speaker delivering unfiltered talks on clinical AI, patient safety, and medical leadership.
        </p>
        <div class="author-footer-ctas">
          <a href="../index.html#book" class="btn btn-primary">Book for Speaking &rarr;</a>
          <a href="https://ai.drfonderson.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Explore AI Tools &nearr;</a>
        </div>
      </div>
    </div>
  </main>

</body>
</html>
"""
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(formatted_page)

print("All 67 articles have been beautifully reformatted with modern editorial typography and navigation!")
