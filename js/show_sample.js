$(() => {
  $('.owl-carousel').on('click', '.down', (event) => {
    var sampler = $('.sampler');

    var target = $(event.target).parent();
    var classes = target.attr('class').split(' ');
    var templateName = (classes.length > 1) ? classes.slice(-1)[0] : null;

    if (!templateName) {
      sampler.fadeOut(180, () => {
        sampler.empty();
      });

      return;
    }

    sampler.slideDown(99, () => {
      loadSampleTemplate(templateName);
    });
  });
});

function loadSampleTemplate(templateName='veev') {
  $.get(`/templates/${templateName}.mst`, (template) => {
    var rendered = Mustache.render(template);
    $(rendered).appendTo($('.sampler').empty()).hide().fadeIn(444);
  });
}