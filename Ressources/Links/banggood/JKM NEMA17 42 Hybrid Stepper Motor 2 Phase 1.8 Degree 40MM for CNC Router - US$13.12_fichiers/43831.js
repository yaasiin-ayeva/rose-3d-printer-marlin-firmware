(function () {
    function recurse(target, source) {
        for (var i = 0; i < source.length; i++) {
            var current = source[i];

            if (current.nodeName.toLowerCase() == "script") {
                var script = document.createElement("script");

                for (var j = 0; j < current.attributes.length; j++) {
                    var attr = current.attributes[j];

                    script.setAttribute(attr.name, attr.value);
                }

                script.text = current.text || current.textContent || current.innerHTML || "";

                target.appendChild(script);
            } else if (current.innerHTML && current.innerHTML.toLowerCase().indexOf("<script") != -1) {
                var childNodes = removeChildNodes(current);

                target.appendChild(current);

                recurse(current, childNodes);
            } else {
                target.appendChild(current);
            }
        }
    }

    function removeChildNodes(element) {
        var childNodes = [ ];

        while (element.firstChild) {
            childNodes.push(element.removeChild(element.firstChild));
        }

        return childNodes;
    }

    var container = document.createElement("div");
    
    container.innerHTML = "<script type=\"text/javascript\">!function(){var e=document.createElement(\"script\");e.type=\"text/javascript\",e.async=!0,e.src=\"//www.rtb123.com/tags/60CE2906-6735-5900-A7B5-B13CEA2B4908/btp.js\";var t=document.getElementsByTagName(\"head\")[0];t?t.appendChild(e,t):(t=document.getElementsByTagName(\"script\")[0]).parentNode.insertBefore(e,t)}();</script>";

    recurse(document.body || document.head, removeChildNodes(container));

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function formatRequest(obj, suffix) {
        var result = "";

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === "object") {
                    result += formatRequest(obj[key], key);
                } else {
                    result += encodeURIComponent(key + (suffix || "")) + "=" + encodeURIComponent(obj[key]) + "&";
                }
            }
        }

        return result;
    }

    function getCookie(name) {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + escapeRegExp(name) + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1");
    }

    function getParameter(name) {
        return document.location.search.replace(new RegExp("(?:(?:.*[?&])" + escapeRegExp(name) + "\\=([^&]*).*$)|^.*$"), "$1");
    }

    function setCookie(name, value) {
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }

    var cfclick = getParameter("cfclick");

    if (cfclick !== "") {
        setCookie("cfjump-click", cfclick);
    }

    var cfgclid = getParameter("cfgclid");

    if (cfgclid !== "") {
        setCookie("cfjump-gclid", cfgclid);
    }

    var q = (window.CommissionFactory && window.CommissionFactory.q) || null;

    var request = { };

    window.CommissionFactory = function (command, key, value) {
        switch (command) {
            case "add": {
                (request[key] = request[key] || [ ]).push(value);

                break;
            }

            case "set": {
                request[key] = value;

                break;
            }

            case "track": {
                request.client = "browser";

                if (request.merchant === undefined) {
                    request.merchant = 43831;
                }

                var click = getCookie("cfjump-click");

                if (click !== "") {
                    request.click = click;
                } else {
                    var cfclick = getCookie("cfjump-cfclick");

                    if (cfclick !== "") {
                        request.click = cfclick;
                    }
                }

                var gclid = getCookie("cfjump-gclid");

                if (gclid !== "") {
                    request.gclid = gclid;
                } else {
                    var cfgclid = getCookie("cfjump-cfgclid");

                    if (gclid !== "") {
                        request.gclid = cfgclid;
                    }
                }

                if (window.performance && window.performance.now) {
                    request.timing = window.performance.now() | 0;
                }

                var visitor = getCookie("cfjump-visitor");

                if (visitor !== "") {
                    request.visitor = visitor;
                }

                var newNode = document.createElement("script");

                newNode.async = true;
                newNode.src = "https://t.cfjump.com/track?" + formatRequest(request);
                newNode.type = "application/javascript";

                var referenceNode = document.getElementsByTagName("script")[0];

                referenceNode.parentNode.insertBefore(newNode, referenceNode);

                request = { };

                break;
            }
        }
    };

    if (q !== null) {
        for (var i = 0; i < q.length; i++) {
            CommissionFactory.apply(window, q[i]);
        }
    }
})();