$(function() {
    var suggestions = $('#sugestoes'),
        source = $('#suggests-template').html(),
        template = Handlebars.compile(source);

    suggestions.on('mouseover', '.sugestao', function() {
        $this = $(this);
        $this.addClass('sugestao-hover');
    });
    suggestions.on('mouseout', '.sugestao', function() {
        $this = $(this);
        $this.removeClass('sugestao-hover');
    });
    suggestions.on('click', '.sugestao', function(e) {
        /* efetua o redirectionamento da página */
        e.preventDefault();
        url = $(this).data('url');
        if (url !== "") {
            window.location.href = url;
        }
    });

    $('input[name=search]').on('focusout', function() {
        /* esconde o pop-up de sugestões e limpa a busca antiga
        $('#sugestoes').hide();
        $('#sugestoes ul li').remove();
        */
    });

    $('input[name=search]').keyup(function() {
        var input = $(this);
        $.ajax({
            url: '/suggests?q=' + input.val(),
            dataType: 'json',
            success: function(data) {
                $('#sugestoes ul li').remove();
                $('#sugestoes ul').append(template(data));
                suggestions.show();
            }
        });
    });
});
