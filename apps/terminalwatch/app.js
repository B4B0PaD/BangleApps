//token: ghp_89QJDS8cuZrH8 XXXXXXX Un3VM7TgmJrd2QwSX0nMV6d
const full_width = g.getWidth();
const full_height = g.getHeight();

const bg_color = '#000000';
const main_color = '#00ff00';
const secondary_color = '#00cc00';
const screen_padding = 20;

const text_color = main_color;
const theme_color = main_color;

const circle_radius = 11;
const circle_border_color = secondary_color;
const circle_border_color_active = main_color;
const circle_color_active = main_color;
const circle_color_notactive = bg_color;

const circle_hours_padding = 23;
const circle_minutes_padding = 5;

const circle_hours_y = full_height / 10 * 8 - circle_radius * 2 - circle_minutes_padding * 3 + 10;
const circle_minutes_y = full_height / 10 * 8 + 10;
const main_text_x = screen_padding / 2;
const main_text_y = full_height / 10 * 2 + 6;
const second_text_x = main_text_x + 55;
const second_text_y = main_text_y + 3;
const third_text_x = second_text_x;
const third_text_y = second_text_y + 17;

const drawDate = () => {
  let dt = new Date();

  let date_string_first = dt.getDate();
  date_string_first = (date_string_first < 10 ? '0' : '') + date_string_first;
  let date_string_second = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno","Agosto", "Settembre", "Ottobre", "Novembre","Dicembre"][dt.getMonth()] + ' ' + dt.getFullYear();
  let date_string_third = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì","Sabato"][dt.getDay()];

  g
    .setColor(bg_color)
    .fillRect(0, main_text_y - 2, full_width, third_text_y + 16 + 2)
    .setColor(text_color)
    .setFont("Vector", 42)
    .drawString(date_string_first, main_text_x, main_text_y)
    .setFont("Vector", 12)
    .drawString(date_string_second, second_text_x, second_text_y)
    .setFont("Vector", 16)
    .drawString(date_string_third, third_text_x, third_text_y);
};

const drawCircle = (x, y, is_active = false) => {
  g
    .setColor(is_active ? circle_border_color_active : circle_border_color)
    .fillCircle(x, y, circle_radius)
    .setColor(is_active ? circle_color_active : circle_color_notactive)
    .fillCircle(x, y, circle_radius - 4);
};

const drawClock = () => {
  let dt = new Date();
  let hours = ((dt.getHours() % 12) || 12).toString(2);
  while (hours.length < 4) { hours = '0' + hours; }
  let minutes = dt.getMinutes().toString(2);
  while (minutes.length < 6) { minutes = '0' + minutes; }

  for (let i = 0; i < 6; i++) {
    // MINUTES
    drawCircle(
      screen_padding + (circle_radius * 2 + circle_minutes_padding) * i,
      circle_minutes_y,
      minutes.charAt(i) === '1'
    );

    // HOURS
    if (i < 4) drawCircle(
      screen_padding + (circle_radius * 2 + circle_hours_padding) * i,
      circle_hours_y,
      hours.charAt(i) === '1'
    );
  }
};

const drawTheme = () => {
  let separator_y_up = second_text_y - 14;
  let separator_y_down = third_text_y + 22;
  g
    .setColor(bg_color)
    .fillRect(0, 0, full_width, full_height)
    .setColor(theme_color)

    .drawLine(screen_padding / 2, separator_y_down, full_width - screen_padding / 2, separator_y_down)
    .drawLine(screen_padding / 2, separator_y_down + 1, full_width - screen_padding / 2, separator_y_down + 1)
    .drawLine(screen_padding / 2, separator_y_down + 4, full_width - screen_padding / 2, separator_y_down + 4)

    .drawLine(screen_padding / 2, separator_y_up + 1, full_width - screen_padding / 2, separator_y_up + 1)
    .drawLine(screen_padding / 2, separator_y_up + 4, full_width - screen_padding / 2, separator_y_up + 4)
    .drawLine(screen_padding / 2, separator_y_up + 5, full_width - screen_padding / 2, separator_y_up + 5);
};

const run_crons = () => {
  let today = new Date();
  let tommorow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1);
  let midnight = tommorow - today;

  // DATE UPDATE
  setTimeout(
    () => drawDate() && setInterval(() => drawDate(), 1000 * 60 * 60 * 24),
    midnight
  );

  // CLOCK UPDATE
  setTimeout(() => drawClock() && setInterval(() => drawClock(), 60 * 1000),
    (60 - (new Date()).getSeconds()) * 1000
  );
};

const handleEvents = () => {
  Bangle.on('lcdPower', on => {
    if (on) drawClock();
  });
};

g.clear();

// =============
run_crons();
drawTheme();
drawDate();
drawClock();
handleEvents();
// =============

Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();
