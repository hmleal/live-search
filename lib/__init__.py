import HTMLParser
import re
from unicodedata import normalize


_punct_re = re.compile(r'[\t !"#$%&\'()*\-/<=>?@\[\\\]^_`{|},.]+')


def slugify(text, delim=u'-'):
    """Generates an slightly worse ASCII-only slug."""
    result = []
    for word in _punct_re.split(text.lower()):
        word = normalize('NFKD', word).encode('ascii', 'ignore')
        if word:
            result.append(word)
    return unicode(delim.join(result))


def html_entities_to_ascii(html_text):
    h = HTMLParser.HTMLParser()
    return normalize('NFKD', h.unescape(html_text)).encode('ascii', 'ignore')
