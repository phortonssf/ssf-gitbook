require(["gitbook", "jquery"], function (gitbook, $) {
    $('.closeLink').click(function(event){
    event.preventDefault();
});
    
    gitbook.events.bind("page.change", function () {
        $('ul[role="tablist"] a').on('click', function(e) {
        e.preventDefault();

            $(this).tab('show');
        });

        $('ul[role="tablist"] a:first').tab('show');
    });
});