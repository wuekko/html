var PreventBb = ![];
getUrlParameter('b') === '0' ? PreventBb = !![] : PreventBb = ![];
! function() {
    if (!PreventBb) {
        var a;
        try {
            for (a = 0x0; 0xa > a; ++a) history['pushState']({}, '', '');
            onpopstate = function(b) {
                b['state'] && location['replace'](getUrlWithParam('x=1'));
            };
        } catch (b) {}
    }
}();

function getUrlParameter(a) {
    a = a['replace'](/[\[]/, '\x5c[')['replace'](/[\]]/, '\x5c]');
    var b = new RegExp('[\x5c?&]' + a + '=([^&#]*)'),
        c = b['exec'](location['search']);
    return c === null ? '' : decodeURIComponent(c[0x1]['replace'](/\+/g, '\x20'));
}

function getUrlWithParam(a) {
    var b = window['location']['href'];
    if (b['includes']('x=')) {
        b = b['replace'](/(x=)[0-9]{1,2}/, a);
    } else {
        b = b + '&' + a;
    }
    return b;
}