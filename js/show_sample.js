$(() => {
  $('.owl-carousel').on('click', '.down', () => {
    var sampler = $('.sampler');

    sampler.slideDown(99, () => {
      loadSampleTemplate();
    });
  });
});

function loadSampleTemplate(templateName='veev') {
  $.get(`/templates/${templateName}.mst`, (template) => {
    var rendered = Mustache.render(template);
    $(rendered).appendTo($('.sampler').empty()).hide().fadeIn(444);
  });
}