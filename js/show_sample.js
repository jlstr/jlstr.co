$(() => {
  var sampler = $('.sampler');

  $('.owl-carousel').on('click', '.down', (event) => {

    var target = $(event.target).parent();
    var classes = target.attr('class').split(' ');
    var templateName = (classes.length > 1) ? classes.slice(-1)[0] : null;

    if (!templateName) {
      sampler.fadeOut(180, () => {
        sampler.empty();
      });

      return;
    }

    sampler.slideDown(299, () => {
      loadSampleTemplate(templateName);
    });
  });

  $('.sampler').on('click', '.dismiss', () => {    
    sampler.slideUp(150).empty();
  });
});

function loadSampleTemplate(templateName='veev') {
  $.get(`/templates/${templateName}.mst`, (template) => {
    var sampler = $('.sampler');
    var rendered = $(Mustache.render(template));

    sampler.empty().hide();
    sampler.append(rendered).fadeIn(400);
  });
}