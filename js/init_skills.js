$(() => {
  for (const skill of skills) {    
    drawSkill(skill);
  }

  for (const lang of languages) {    
    drawSkill(lang, 'lang-main');
  }
});

var GoogleBlue = '#4885ed';
var GoogleGreen = '#3cba54';
var GoogleRed = '#db3236';
var GoogleYellow = '#f4c20d';

var skills = [
  { name: 'Software Engineering', 'color': GoogleBlue, percentage: 0.85 },
  { name: 'Algorithms', 'color': GoogleRed, percentage: 0.7 },
  { name: 'Distributed Systems', 'color': GoogleYellow, percentage: 0.8 },
  { name: 'Mobile Application Development', 'color': GoogleBlue, percentage: 0.9 },
  { name: 'Web Development', 'color': GoogleGreen, percentage: 0.85 },
  { name: 'System Design', 'color': GoogleRed, percentage: 0.75 },
]

var languages = [
  { name: 'C++', 'color': GoogleBlue, percentage: 0.8 },
  { name: 'Python', 'color': GoogleRed, percentage: 0.7 },
  { name: 'JavaScript', 'color': GoogleYellow, percentage: 0.75 },
  { name: 'Swift', 'color': GoogleBlue, percentage: 0.8 },
  { name: 'Ruby', 'color': GoogleGreen, percentage: 0.8 },
  { name: 'SQL', 'color': GoogleRed, percentage: 0.6 }
]

var drawSkill = (skill, container='skills-main') => {
  var container = $(`#${container}`);

  var info = $('<p class="info"></p>');
  var percent = $('<p class="info percent"></p>');
  info.text(skill.name);
  var skillBar = $('<div class="skill"></div>');

  container.append(info);
  container.append(percent);
  container.append(skillBar);

  var bar = new ProgressBar.Line(skillBar.get(0), {
    color: skill.color,
    strokeWidth: 0.5,
    duration: 2000,
    step: (state, bar) => {
      percent.text(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(skill.percentage);
}