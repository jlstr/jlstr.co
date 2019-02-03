$(() => {
  for (const skill of skills) {    
    drawSkill(skill);
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

var drawSkill = (skill) => {
  var info = $('<p class="info"></p>');
  info.text(skill.name);
  var skillBar = $('<div class="skill"></div>');
  var container = $('#skills-main');
  container.append(info);
  container.append(skillBar);

  var bar = new ProgressBar.Line(skillBar.get(0), {
    color: skill.color,
    strokeWidth: 0.5,
    duration: 2000
  });

  bar.animate(skill.percentage);
}