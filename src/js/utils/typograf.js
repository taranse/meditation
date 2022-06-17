import Typograf from 'typograf';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

function typograf(text = '') {
  if (Array.isArray(text)) {
    return text.map(t => typeof t === 'string' ? tp.execute(t) : t)
  }

  return tp.execute(text);
}

export default typograf