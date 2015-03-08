$(function() {
    var suggestions = $('#suggestions'),
        source = $('#suggests-template').html(),
        template = Handlebars.compile(source);

    $('input[name=search]').on('focusout', function() {
        /* esconde o pop-up de sugestões e limpa a busca antiga */
        suggestions.hide();
        $('#suggestions ul li').remove();
    });

    $('input[name=search]').keyup(function() {
        var input = $(this);
        $.ajax({
            url: '/suggests?q=' + input.val(),
            dataType: 'json',
            success: function(data) {
                $('#suggestions ul li').remove();
                $('#suggestions ul').append(template(data));
                suggestions.show();
            }
        });
    });
});
