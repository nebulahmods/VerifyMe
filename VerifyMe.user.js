// ==UserScript==
// @name         VerifyMe
// @namespace    Verifyme
// @version      1.2
// @description  verifies usernames.
// @author       nebulah
// @match        https://www.youtube.com/*
// @match        https://twitter.com/*
// @icon         http://img.wonderhowto.com/img/original/78/11/63483737655892/0/634837376558927811.jpg
// @grant 		 GM_setValue
// @grant 		 GM_getValue
// @grant        GM_xmlhttpRequest
// @noframes
// ==/UserScript==
// twitter html - <span class="ProfileHeaderCard-badges"><a href="/help/verified" class="js-tooltip" target="_blank" data-placement="right" data-original-title="Verified account"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></a></span>

if (document.getElementById('watch7-user-header').innerHTML.indexOf('n7bulah') != -1) {
verifyChannel("n7bulah", 'UCiudOPQFLM6sSH3jGw8dcyQ', 'https://yt3.ggpht.com/--Ywfvd_YynQ/AAAAAAAAAAI/AAAAAAAAAAA/Rl8cnR1TlKA/s100-c-k-no-mo-rj-c0xffffff/photo.jpg', 2,234);
}

if (document.getElementById('watch7-user-header').innerHTML.indexOf('rflxvVEVO') != -1) {
verifyChannel("rflxvVEVO", 'UCiudOPQFLM6sSH3jGw8dcyQ', 'https://yt3.ggpht.com/--Ywfvd_YynQ/AAAAAAAAAAI/AAAAAAAAAAA/Rl8cnR1TlKA/s100-c-k-no-mo-rj-c0xffffff/photo.jpg', 2,221,834);
}

function verifyTwitter(){
    
$("body").children().each(function () {
    $(this).html( $(this).html().replace(/@/g,"$") );
});
}

function verifyChannel(name, channelid, pic, subs) {
    
        document.getElementById("eow-description").innerHTML = document.getElementById("eow-description").innerHTML + "\n---------------\nverifyme by nebulah 2016";

        document.getElementById("watch7-user-header").innerHTML = '<a href="/channel/' + channelid + '" class="yt-uix-sessionlink yt-user-photo g-hovercard spf-link " data-sessionlink="itct=CCoQ4TkiEwicwPeK8ojQAhWPflgKHRzyDIwo-B0" data-ytid="' + channelid + '"> <span class="video-thumb yt-thumb yt-thumb-48 g-hovercard" data-ytid="' + channelid + '"> <span class="yt-thumb-square"> <span class="yt-thumb-clip"> <img height="48" alt="' + name + '" width="48" data-ytimg="1" onload=";__ytRIL(this)" src="' + pic + '"> <span class="vertical-align"></span> </span> </span> </span> </a> <div class="yt-user-info"> <a href="/channel/' + channelid + '" class="g-hovercard yt-uix-sessionlink spf-link " data-sessionlink="itct=CDIQ4TkiEwi4zsHn7ojQAhXKd1gKHUo5D54o-B0" data-ytid="' + channelid + '">' + name +'</a> <span data-tooltip-text="Verified" class="yt-channel-title-icon-verified yt-uix-tooltip yt-sprite" aria-label="Verified" title="Verified" aria-labelledby="yt-uix-tooltip3514-arialabel"></span> </div> <span id="watch7-subscription-container"><span class=" yt-uix-button-subscription-container"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-subscribe-branded yt-uix-button-has-icon no-icon-markup yt-uix-subscription-button yt-can-buffer" type="button" onclick=";return false;" aria-live="polite" aria-busy="false" data-clicktracking="itct=CDMQmysiEwi4zsHn7ojQAhXKd1gKHUo5D54o-B0yBXdhdGNo" data-style-type="branded" data-channel-external-id="UCpG4tPSu_fcBBUAaIo55WXA"><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="Subscribe">Subscribe</span><span class="subscribed-label" aria-label="Unsubscribe">Subscribed</span><span class="unsubscribe-label" aria-label="Unsubscribe">Unsubscribe</span></span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon yt-uix-subscription-preferences-button" type="button" onclick=";return false;" aria-label="Subscription preferences" aria-live="polite" aria-role="button" aria-busy="false" data-channel-external-id="' + channelid + '"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-subscription-preferences yt-sprite"></span></span></button><span class="yt-subscription-button-subscriber-count-branded-horizontal yt-subscriber-count" title="' + subs + '" aria-label="' + subs + '" tabindex="0">' + subs + '</span><span class="yt-subscription-button-subscriber-count-branded-horizontal yt-short-subscriber-count" title="' + subs + '" aria-label="' + subs + '" tabindex="0">' + subs + '</span> <div class="yt-uix-overlay " data-overlay-style="primary" data-overlay-shape="tiny"> <div class="yt-dialog hid "> <div class="yt-dialog-base"> <span class="yt-dialog-align"></span> <div class="yt-dialog-fg" role="dialog"> <div class="yt-dialog-fg-content"> <div class="yt-dialog-loading"> <div class="yt-dialog-waiting-content"> <p class="yt-spinner "> <span class="yt-spinner-img yt-sprite" title="Loading icon"></span> <span class="yt-spinner-message"> Loading... </span> </p> </div> </div> <div class="yt-dialog-content"> <div class="subscription-preferences-overlay-content-container"> <div class="subscription-preferences-overlay-loading "> <p class="yt-spinner "> <span class="yt-spinner-img yt-sprite" title="Loading icon"></span> <span class="yt-spinner-message"> Loading... </span> </p> </div> <div class="subscription-preferences-overlay-content"> </div> </div> </div> <div class="yt-dialog-working"> <div class="yt-dialog-working-overlay"></div> <div class="yt-dialog-working-bubble"> <div class="yt-dialog-waiting-content"> <p class="yt-spinner "> <span class="yt-spinner-img yt-sprite" title="Loading icon"></span> <span class="yt-spinner-message"> Working... </span> </p> </div> </div> </div> </div> <div class="yt-dialog-focus-trap" tabindex="0"></div> </div> </div> </div> </div> </span></span></div>'; 
}
