jQuery(function() {
    jQuery(".sad").click(function() {
        jQuery(".single").hide();
        jQuery(".image" + $(this).attr('target')).show();
    })
})