import os
import json

from flask import Flask, render_template, request, jsonify
from lib import slugify, html_entities_to_ascii


BASE_DIR = os.path.dirname(os.path.dirname(__file__))

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/suggests/')
def suggests():
    q = slugify(request.args.get('q'))

    with open(os.path.join(BASE_DIR, 'static', 'suggests.json')) as file:
        data = json.load(file)

    suggests = {
        'query': q,
        'suggestions': [],
        'suggestions_highlithed': []
    }

    has_header = False
    for header in data['hightlights']:
        for query in header['queries']:
            query = html_entities_to_ascii(query)
            if query.startswith(q):
                has_header = True
        if has_header:
            suggests['has_header'] = True
            suggests['header'] = header
            break

    for suggest in data['suggestions']:
        suggest = html_entities_to_ascii(suggest)
        if suggest.startswith(q):
            new_suggest = {
                'query': suggest,
                'text': suggest.replace(q, '<b>%s</b>' % q)
            }
            suggests['suggestions'].append(new_suggest)

    return jsonify(suggests)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    if port == 5000:
        app.debug = True
    app.run()
