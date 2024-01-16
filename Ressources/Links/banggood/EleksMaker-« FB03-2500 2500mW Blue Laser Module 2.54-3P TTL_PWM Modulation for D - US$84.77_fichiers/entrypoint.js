var http = {
    get: function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    }
};
var query = {
    get: function (name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var url = window.location.href;
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    has: function (name) {
        if (null === this.get(name)) {
            return false;
        }
        return true;
    }
};
var cookie = {
    set: function (name, value, expiration, domain) {
        document.cookie = name + '=' + value + '; expires=' + new Date(expiration*1000) + '; path=/; domain=.' + domain + '; Secure; samesite=Lax';
    },
    get: function (name) {
        var cname = name + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return null;
    },
    has: function (name) {
        if (null !== this.get(name)) {
            return true;
        }
        return false;
    }
};
var util = {
    domain: function () {
        var domain = window.location.hostname;
        if (domain === '127.0.0.1') {
            return domain;
        }
        var domainParts = domain.split('.').filter(Boolean);
        if (domainParts[0] === 'www') {
            delete domainParts[0];
            domainParts = domainParts.filter(Boolean);
        }
        domainParts = domainParts.reverse();
        domain = domainParts[1] + '.' + domainParts[0];
        if (domainParts[0].length <= 3 &&
            domainParts[1].length <= 3 &&
            typeof domainParts[2] !== 'undefined'
        ) {
            domain = domainParts[2] + '.' + domainParts[1] + '.' + domainParts[0];
        }
        return domain;
    },
    env: function () {
        var domain = this.domain();
        var env = '';
        if (domain === 'testmytracking.com' ||
            domain === '127.0.0.1' ||
            window.location.hostname.includes('staging.trackmytarget.com')
        ) {
            env = 'staging.';
        }
        return env;
    },
    protocol: function () {
        if(this.env() === 'staging.') {
            return 'http';
        }
        return 'https';
    }
};
var tcEntrypoint = true;
(function () {
    var params = {
        offer_sid: 'offer sID',
        link_sid: 'affiliate link sID',
        tmt_data: 'event ID',
        exp: 'expiration time',
        r: 'redirect URL'
    };
    var cookiesEnabled = function () {
        if (!document.scripts[0].hasAttribute('data-cookie') || document.scripts[0].getAttribute('data-cookie') !== 'false') {
            return true;
        }
        return false;
    };
    for (var key in params) {
        if (query.has(key)) {
            window[key] = query.get(key);
            continue;
        }
        console.log('NOTICE: Undefined ' + params[key]);
    }
    if (typeof window['offer_sid'] === 'undefined') {
        if (typeof window['link_sid'] === 'undefined') {
            console.log('ERROR: Undefined ' + params['offer_sid'] + ' and ' + params['link_sid']);
            return;
        }
        var queryString = window.location.search;
        http.get('//c.' + util.env() + 'trackmytarget.com/' + window['link_sid'] + '?raw&' + queryString.replace('?', ''), function (response) {
            var responseObj = JSON.parse(response);
            if (cookiesEnabled()) {
                cookie.set('tc_' + responseObj.offer_sid, responseObj.tmt_data, responseObj.exp, util.domain());
            }
            window.location.href = responseObj.r;
        });
    } else {
        if (typeof window['tmt_data'] === 'undefined' ||
            typeof window['exp'] === 'undefined' ||
            typeof window['r'] === 'undefined'
        ) {
            console.log('ERROR: Undefined ' + params.tmt_data + ', ' + params.exp + ' or ' + params.r);
            return;
        }
        if (cookiesEnabled()) {
            cookie.set('tc_' + window['offer_sid'], window['tmt_data'], window['exp'], util.domain());
        }
        window.location.href = r;
    }
})();
