const full_width = g.getWidth();
const full_height = g.getHeight();

const bg_color = '#000000';
const active_color = '#ffffff';
const text_color = 0x03E0;

const letter_size = 14;
const letter_pad_x = 15;
const letter_pad_y = 14;

let last_time = '';

class Char {
  constructor(letter) {
    this.letter = letter;
    this.is_active = false;
  }

  setActive(is_active) {
    this.is_active = is_active;
  }

  print(x, y) {
    g
      .setColor(this.is_active ? active_color : text_color)
      .drawString(this.letter, x, y);
  }
}

const chars = [
  [new Char('S'), new Char('O'), new Char('N'), new Char('O'), new Char('R'), new Char('L'), new Char('E'), new Char('B'), new Char('O'), new Char('R'), new Char('E')],
  [new Char('È'), new Char('R'), new Char('L'), new Char('U'), new Char('N'), new Char('A'), new Char('S'), new Char('D'), new Char('U'), new Char('E'), new Char('Z')],
  [new Char('T'), new Char('R'), new Char('E'), new Char('O'), new Char('T'), new Char('T'), new Char('O'), new Char('N'), new Char('O'), new Char('V'), new Char('E')],
  [new Char('D'), new Char('I'), new Char('E'), new Char('C'), new Char('I'), new Char('U'), new Char('N'), new Char('D'), new Char('I'), new Char('C'), new Char('I')],
  [new Char('D'), new Char('O'), new Char('D'), new Char('I'), new Char('C'), new Char('I'), new Char('S'), new Char('E'), new Char('T'), new Char('T'), new Char('E')],
  [new Char('Q'), new Char('U'), new Char('A'), new Char('T'), new Char('T'), new Char('R'), new Char('O'), new Char('C'), new Char('S'), new Char('E'), new Char('I')],
  [new Char('C'), new Char('I'), new Char('N'), new Char('Q'), new Char('U'), new Char('E'), new Char('A'), new Char('M'), new Char('E'), new Char('N'), new Char('O')],
  [new Char('E'), new Char('C'), new Char('U'), new Char('N'), new Char('O'), new Char('Q'), new Char('U'), new Char('A'), new Char('R'), new Char('T'), new Char('O')],
  [new Char('V'), new Char('E'), new Char('N'), new Char('T'), new Char('I'), new Char('C'), new Char('I'), new Char('N'), new Char('Q'), new Char('U'), new Char('E')],
  [new Char('D'), new Char('I'), new Char('E'), new Char('C'), new Char('I'), new Char('P'), new Char('M'), new Char('E'), new Char('Z'), new Char('Z'),new Char('A')]
];

const lightWord = (word, is_hour) => {
  switch (word) {
    case 'ore':
      chars[0][8].setActive(true);
      chars[0][9].setActive(true);
      chars[0][10].setActive(true);
      break;
    case 'cinque':
      if (is_hour) {
        chars[6][0].setActive(true);
        chars[6][1].setActive(true);
        chars[6][2].setActive(true);
        chars[6][3].setActive(true);
        chars[6][4].setActive(true);
        chars[6][5].setActive(true);
      } else {
        chars[8][5].setActive(true);
        chars[8][6].setActive(true);
        chars[8][7].setActive(true);
        chars[8][8].setActive(true);
        chars[8][9].setActive(true);
        chars[8][10].setActive(true);
      }
      break;
    case 'dieci':
      if (is_hour) {
        chars[3][0].setActive(true);
        chars[3][1].setActive(true);
        chars[3][2].setActive(true);
        chars[3][3].setActive(true);
        chars[3][4].setActive(true);
      } else {
        chars[9][0].setActive(true);
        chars[9][1].setActive(true);
        chars[9][2].setActive(true);
        chars[9][3].setActive(true);
        chars[9][4].setActive(true);
      }
      break;
    case 'un quarto':
      chars[7][2].setActive(true);
      chars[7][3].setActive(true);
      chars[7][5].setActive(true);
      chars[7][6].setActive(true);
      chars[7][7].setActive(true);
      chars[7][8].setActive(true);
      chars[7][9].setActive(true);
      chars[7][10].setActive(true);
      break;
    case 'venti':
      chars[8][0].setActive(true);
      chars[8][1].setActive(true);
      chars[8][2].setActive(true);
      chars[8][3].setActive(true);
      chars[8][4].setActive(true);
      break;
    case 'venticinque':
      chars[8][0].setActive(true);
      chars[8][1].setActive(true);
      chars[8][2].setActive(true);
      chars[8][3].setActive(true);
      chars[8][4].setActive(true);
      chars[8][5].setActive(true);
      chars[8][6].setActive(true);
      chars[8][7].setActive(true);
      chars[8][8].setActive(true);
      chars[8][9].setActive(true);
      chars[8][10].setActive(true);
      break;
    case 'è':
      chars[1][0].setActive(true);
      break;
    case 'luna':
      chars[1][2].setActive(true);
      chars[1][3].setActive(true);
      chars[1][4].setActive(true);
      chars[1][5].setActive(true);
      break;
    case 'e':
      chars[7][0].setActive(true);
      break;
    case 'meno':
      chars[6][7].setActive(true);
      chars[6][8].setActive(true);
      chars[6][9].setActive(true);
      chars[6][10].setActive(true);
      break;
    case 'due':
      chars[1][7].setActive(true);
      chars[1][8].setActive(true);
      chars[1][9].setActive(true);
      break;
    case 'tre':
      chars[2][0].setActive(true);
      chars[2][1].setActive(true);
      chars[2][2].setActive(true);
      break;
    case 'quattro':
      chars[5][0].setActive(true);
      chars[5][1].setActive(true);
      chars[5][2].setActive(true);
      chars[5][3].setActive(true);
      chars[5][4].setActive(true);
      chars[5][5].setActive(true);
      chars[5][6].setActive(true);
      break;
    case 'sei':
      chars[5][8].setActive(true);
      chars[5][9].setActive(true);
      chars[5][10].setActive(true);
      break;
    case 'sette':
      chars[4][6].setActive(true);
      chars[4][7].setActive(true);
      chars[4][8].setActive(true);
      chars[4][9].setActive(true);
      chars[4][10].setActive(true);
      break;
    case 'otto':
      chars[2][3].setActive(true);
      chars[2][4].setActive(true);
      chars[2][5].setActive(true);
      chars[2][6].setActive(true);
      break;
    case 'nove':
      chars[2][7].setActive(true);
      chars[2][8].setActive(true);
      chars[2][9].setActive(true);
      chars[2][10].setActive(true);
      break;
    case 'undici':
      chars[3][5].setActive(true);
      chars[3][6].setActive(true);
      chars[3][7].setActive(true);
      chars[3][8].setActive(true);
      chars[3][9].setActive(true);
      chars[3][10].setActive(true);
      break;
    case 'dodici':
      chars[4][0].setActive(true);
      chars[4][1].setActive(true);
      chars[4][2].setActive(true);
      chars[4][3].setActive(true);
      chars[4][4].setActive(true);
      chars[4][5].setActive(true);
      break;
    case 'sono le':
      chars[0][0].setActive(true);
      chars[0][1].setActive(true);
      chars[0][2].setActive(true);
      chars[0][3].setActive(true);
      chars[0][5].setActive(true);
      chars[0][6].setActive(true);
      break;
    case 'mezza':
      chars[9][6].setActive(true);
      chars[9][7].setActive(true);
      chars[9][8].setActive(true);
      chars[9][9].setActive(true);
      chars[9][10].setActive(true);
      break;
  }
};

const updateTime = () => {
  for(let row of chars) {
    for(let character of row) {
      character.setActive(false);
    }
  }

  let dt = new Date();
  let hours = ((dt.getHours() % 12) || 12);
  let minutes = dt.getMinutes();
  minutes += 5 - (minutes % 5 || 5);
  let back_flag = minutes > 30;

  if (back_flag) {
    hours += hours === 12 ? -11 : 1;
    if (60 > minutes && minutes > 0) lightWord('meno', false);
  } else {
    if (60 > minutes && minutes > 0) lightWord('e', false);
  }

  switch(minutes) {
    case 0:
      if (hours !== 1) lightWord('ore', true);
      break;
    case 5:
      if (hours !== 1) lightWord('ore', true);
      lightWord('cinque', false);
      break;
    case 10:
      if (hours !== 1) lightWord('ore', true);
      lightWord('dieci', false);
      break;
    case 15:
      lightWord('un quarto', false);
      break;
    case 20:
      if (hours !== 1) lightWord('ore', true);
      lightWord('venti', false);
      break;
    case 25:
      if (hours !== 1) lightWord('ore', true);
      lightWord('venticinque', false);
      break;
    case 30:
      lightWord('mezza', false);
      break;
    case 35:
      lightWord('venticinque', false);
      break;
    case 40:
      lightWord('venti', false);
      break;
    case 45:
      lightWord('un quarto', false);
      break;
    case 50:
      lightWord('dieci', false);
      break;
    case 55:
      lightWord('cinque', false);
      break;
  }

  switch(hours) {
    case 1:
      lightWord('è', true);
      lightWord('luna', true);
      break;
    case 2:
      lightWord('sono le', true);
      lightWord('due', true);
      break;
    case 3:
      lightWord('sono le', true);
      lightWord('tre', true);
      break;
    case 4:
      lightWord('sono le', true);
      lightWord('quattro', true);
      break;
    case 5:
      lightWord('sono le', true);
      lightWord('cinque', true);
      break;
    case 6:
      lightWord('sono le', true);
      lightWord('sei', true);
      break;
    case 7:
      lightWord('sono le', true);
      lightWord('sette', true);
      break;
    case 8:
      lightWord('sono le', true);
      lightWord('otto', true);
      break;
    case 9:
      lightWord('sono le', true);
      lightWord('nove', true);
      break;
    case 10:
      lightWord('sono le', true);
      lightWord('dieci', true);
      break;
    case 11:
      lightWord('sono le', true);
      lightWord('undici', true);
      break;
    case 12:
      lightWord('sono le', true);
      lightWord('dodici', true);
      break;
  }

  return hours + ':' + minutes;
};

const printTime = () => {
  let x = 13;
  let y = 39;
  for(let row of chars) {
    x = 13;
    for(let character of row) {
      character.print(x,y);
      x += letter_pad_x;
    }
    y += letter_pad_y;
  }
};

const drawClock = () => {
  let current_time = updateTime();

  if (current_time === last_time) return;

  last_time = current_time;

  // .setColor(bg_color)
  // .fillRect(0, 0, full_width, full_height)
  g
    .clear()
    .setFont("Vector", letter_size)
    .setFontAlign(0, 0, 0);

  printTime();

  // Apostrophe handler
  g
    .setColor(current_time.split(':')[0] === '1' ? active_color : text_color)
    .drawLine(46,45,46,48);
};



let dt = new Date();
let minutes = dt.getMinutes();
setTimeout(() => {drawClock(); setInterval(() => drawClock(), 60 * 1000);},
  (60 - (new Date()).getSeconds()) * 1000
);

drawClock();

Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();