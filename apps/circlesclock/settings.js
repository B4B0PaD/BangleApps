(function(back) {
  const SETTINGS_FILE = "circlesclock.json";
  const storage = require('Storage');
  let settings = storage.readJSON(SETTINGS_FILE, 1) || {};
  function save(key, value) {
    settings[key] = value;
    storage.write(SETTINGS_FILE, settings);
  }
  var valuesCircleTypes = ["steps", "stepsDist", "hr", "battery"];
  var namesCircleTypes = ["steps", "distance", "heart", "battery"];
  E.showMenu({
    '': { 'title': 'circlesclock' },
    'min heartrate': {
      value: "minHR" in settings ? settings.minHR : 40,
      min: 0,
      max : 250,
      step: 10,
      format: x => {
        return x;
      },
      onchange: x => save('minHR', x),
    },
    'max heartrate': {
      value: "maxHR" in settings ? settings.maxHR : 200,
      min: 20,
      max : 250,
      step: 10,
      format: x => {
        return x;
      },
      onchange: x => save('maxHR', x),
    },
    'step goal': {
      value: "stepGoal" in settings ? settings.stepGoal : 10000,
      min: 2000,
      max : 50000,
      step: 2000,
      format: x => {
        return x;
      },
      onchange: x => save('stepGoal', x),
    },
    'step length': {
      value: "stepLength" in settings ? settings.stepLength : 0.8,
      min: 0.1,
      max : 1.5,
      step: 0.01,
      format: x => {
        return x;
      },
      onchange: x => save('stepLength', x),
    },
    'step dist goal': {
      value: "stepDistanceGoal" in settings ? settings.stepDistanceGoal : 8000,
      min: 2000,
      max : 30000,
      step: 1000,
      format: x => {
        return x;
      },
      onchange: x => save('stepDistanceGoal', x),
    },
    'battery warn': {
      value: "batteryWarn" in settings ? settings.batteryWarn : 30,
      min: 10,
      max : 100,
      step: 10,
      format: x => {
        return x + '%';
      },
      onchange: x => save('batteryWarn', x),
    },
    'show widgets': {
      value: "showWidgets" in settings ? settings.showWidgets : false,
      format: () => (settings.showWidgets ? 'Yes' : 'No'),
      onchange: x => save('showWidgets', x),
    },
    'left': {
      value: Math.max(0,0 | valuesCircleTypes.indexOf(settings.circle1)),
      min: 0, max: 3,
      format: v => namesCircleTypes[v],
      onchange: x => save('circle1', x),
    },
    'middle': {
      value: Math.max(0,2 | valuesCircleTypes.indexOf(settings.circle2)),
      min: 0, max: 3,
      format: v => namesCircleTypes[v],
      onchange: x => save('circle2', x),
    },
    'right': {
      value: Math.max(0,3 | valuesCircleTypes.indexOf(settings.circle3)),
      min: 0, max: 3,
      format: v => namesCircleTypes[v],
      onchange: x => save('circle3', x),
    },
    '< Back': back,
  });
});
