$(function() {
    var suggestions = $('#suggestions'),
        input = $('input[name=search]'),
        source = $('#suggests-template').html(),
        template = Handlebars.compile(source);

    input.on('blur', function(e) {
        e.preventDefault();
        $(this).val('');
    });

    input.on('keyup', function() {
        $.ajax({
            url: '/suggests?q=' + $(this).val(),
            dataType: 'json',
            success: function(data) {
                $('#suggestions ul li').remove();
                $('#suggestions ul').append(template(data));
                suggestions.show();
            }
        });
    });

    $(document.body).on('click', function(e) {
        var clicked = $(e.target);
        if ( !(clicked.is(suggestions) || clicked.is(input)) ) {
            suggestions.hide();
        }
    });

});
