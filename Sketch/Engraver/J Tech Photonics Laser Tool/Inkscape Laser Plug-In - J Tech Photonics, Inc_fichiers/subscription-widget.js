!function(t){"use strict";t(function(){if("undefined"==typeof wc_newsletter_subscription_widget_params)return!1;(function(){t("form#subscribeform").submit(function(e){var r=t(this),s=r.find('input[type="submit"]');return e.preventDefault(),s.prop("disabled",!0),t.post({url:wc_newsletter_subscription_widget_params.ajax_url,data:r.serialize(),dataType:"json",success:function(e){var s=t(".wc-subscribe-to-newsletter-notice").html(e.data.message).removeClass("woocommerce-message woocommerce-error").addClass(e.success?"woocommerce-message":"woocommerce-error");r.before(s),e.success&&r.remove()},complete:function(){s.prop("disabled",!1)}}),!1})})()})}(jQuery);