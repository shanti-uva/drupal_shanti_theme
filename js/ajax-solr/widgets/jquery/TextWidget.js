/**
 * Created by ys2n on 8/27/14.
 */

(function ($) {

    AjaxSolr.TextWidget = AjaxSolr.AbstractTextWidget.extend({
        init: function () {
            var self = this;
            console.log("TEXTWIDGET: " + $(this.target) )
            console.dir($(this.target));

            $(this.target).on('keyup', function(e) {
                console.log("keyup " + e);
                // alert("blurt");
                if (e.which == 13) {
                    var value = $(this).val();

                    //  If the user inserts wildcards, assume they know what they are doing.
                    if (value.indexOf('*') < 0 ) {

                        // Process advanced search

                        console.log ("SEARCH GROUP:" + $('#searchAnchorGroup'));
                        console.log ("SEARCH ANCHOR: " + $('#searchAnchorGroup div.checked > input').val());
                        console.log ("SEARCH SCOPE: " + $('#searchScopeGroup div.checked > input').val());

                        var anchor = $('#searchAnchorGroup div.checked > input').val();
                        var scope = $('#searchScopeGroup div.checked > input').val();

                        switch(anchor) {
                            case 'startsWith':
                                value = value + "*";
                                break;
                            case 'contains':
                                value = "*" + value + "*";
                                break;
                            case 'exact':
                                // fall through
                                break;
                            default:
                                alert("Error: unknown anchor: '" + anchor + "'")
                        }

                        switch(scope) {
                            case 'name':
                                console.log("name scope");
                                self.manager.store.addByValue('df', 'name');
                                break;
                            case 'all':
                                console.log('all scope');
                                self.manager.store.addByValue('df', 'text');
                                break;
                            default:
                                alert("Error: unknown scope: '" + scope + "'");
                        }
                    }

                    // alert("search " + value);

                    console.log("TEXTWIDGET: search " + value);
                    self.set(value);
                    if (value /* && self.set(value) */) {
                        console.log("TEXTWIDGET: do Request " + value);

                        self.doRequest();
                    }

                }
            });
            // console.dir($._data($('#searchy').get(0)));
        },

        afterRequest: function () {
            $(this.target).find('input').val('');
        }
    });

})(jQuery);