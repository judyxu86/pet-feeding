// Cute hand-drawn icons shared by index.html (owner side) and view.html (client report).
// Same style as the cartoon cat: brown outline, cream skin, shiny eyes, pink cheeks.
(function () {
    var LINE = '#8b5a3c', HAIR = '#c08457', SKIN = '#fde7cf', PINK = '#f9a8d4', HOT_PINK = '#f472b6';

    function svg(inner, size) {
        size = size || 22;
        return '<svg viewBox="0 0 40 40" width="' + size + '" height="' + size + '" aria-hidden="true" style="display:inline-block;vertical-align:middle">' + inner + '</svg>';
    }

    var face =
        '<ellipse cx="20" cy="23" rx="12" ry="11.5" fill="' + SKIN + '" stroke="' + LINE + '" stroke-width="2"/>';
    var features =
        '<ellipse cx="15" cy="24" rx="1.9" ry="2.3" fill="#3b2a20"/><ellipse cx="25" cy="24" rx="1.9" ry="2.3" fill="#3b2a20"/>' +
        '<circle cx="15.7" cy="23.1" r=".75" fill="#fff"/><circle cx="25.7" cy="23.1" r=".75" fill="#fff"/>' +
        '<ellipse cx="11.5" cy="28" rx="2.6" ry="1.6" fill="' + PINK + '" opacity=".8"/><ellipse cx="28.5" cy="28" rx="2.6" ry="1.6" fill="' + PINK + '" opacity=".8"/>' +
        '<path d="M17.5 29 Q20 31.5 22.5 29" stroke="' + LINE + '" stroke-width="1.6" stroke-linecap="round" fill="none"/>';

    // Girl: two short pigtails with pink hair ties
    var girl =
        '<ellipse cx="6.5" cy="26" rx="4" ry="5.5" transform="rotate(25 6.5 26)" fill="' + HAIR + '" stroke="' + LINE + '" stroke-width="2"/>' +
        '<ellipse cx="33.5" cy="26" rx="4" ry="5.5" transform="rotate(-25 33.5 26)" fill="' + HAIR + '" stroke="' + LINE + '" stroke-width="2"/>' +
        '<ellipse cx="20" cy="19" rx="13.5" ry="13.5" fill="' + HAIR + '" stroke="' + LINE + '" stroke-width="2"/>' +
        face +
        '<path d="M8 21 Q8 8 20 8 Q32 8 32 21 Q27 15 22 14 Q20 18 15 17 Q11 17 8 21 Z" fill="' + HAIR + '" stroke="' + LINE + '" stroke-width="2" stroke-linejoin="round"/>' +
        '<circle cx="9" cy="21" r="2.3" fill="' + HOT_PINK + '" stroke="' + LINE + '" stroke-width="1.2"/>' +
        '<circle cx="31" cy="21" r="2.3" fill="' + HOT_PINK + '" stroke="' + LINE + '" stroke-width="1.2"/>' +
        features;

    // Boy: short spiky hair with a little tuft on top
    var boy =
        '<ellipse cx="20" cy="18" rx="13" ry="12" fill="' + HAIR + '" stroke="' + LINE + '" stroke-width="2"/>' +
        face +
        '<path d="M8 21 Q8 8 20 8 Q32 8 32 21 Q30 16 27 15 L25 18 L22 14 L19 17.5 L16 14 Q10 15 8 21 Z" fill="' + HAIR + '" stroke="' + LINE + '" stroke-width="2" stroke-linejoin="round"/>' +
        '<path d="M19 7.5 Q19.5 2.5 25 3.5" stroke="' + LINE + '" stroke-width="2" stroke-linecap="round" fill="none"/>' +
        features;

    // House: pink roof with cat ears, cream walls, round door, heart and little window
    var house =
        '<path d="M11 15.5 L10.5 4.5 L18.5 10.5 Z" fill="' + PINK + '" stroke="' + LINE + '" stroke-width="2" stroke-linejoin="round"/>' +
        '<path d="M29 15.5 L29.5 4.5 L21.5 10.5 Z" fill="' + PINK + '" stroke="' + LINE + '" stroke-width="2" stroke-linejoin="round"/>' +
        '<path d="M12.3 11.5 L12 7.5 L15 10 Z" fill="' + SKIN + '"/><path d="M27.7 11.5 L28 7.5 L25 10 Z" fill="' + SKIN + '"/>' +
        '<rect x="8" y="18" width="24" height="17" rx="2.5" fill="' + SKIN + '" stroke="' + LINE + '" stroke-width="2"/>' +
        '<path d="M4.5 20 L20 7 L35.5 20 Z" fill="' + PINK + '" stroke="' + LINE + '" stroke-width="2" stroke-linejoin="round"/>' +
        '<path d="M17 35 V28 Q20 24.5 23 28 V35" fill="' + HAIR + '" stroke="' + LINE + '" stroke-width="2" stroke-linejoin="round"/>' +
        '<circle cx="21.6" cy="31" r=".8" fill="' + LINE + '"/>' +
        '<path d="M12.5 25.5 Q11 23.5 12.5 22.8 Q13.3 22.5 13.5 23.4 Q13.7 22.5 14.5 22.8 Q16 23.5 14.5 25.5 L13.5 26.6 Z" fill="' + HOT_PINK + '"/>' +
        '<rect x="25" y="22.5" width="4.5" height="4.5" rx="1" fill="#fff7d6" stroke="' + LINE + '" stroke-width="1.5"/>';

    window.SSIcons = {
        girl: function (size) { return svg(girl, size); },
        boy: function (size) { return svg(boy, size); },
        house: function (size) { return svg(house, size); },
        // Reports saved before the girl/boy choice existed have no value: show the girl icon.
        person: function (gender, size) { return gender === 'male' ? svg(boy, size) : svg(girl, size); }
    };

    // Fill any <span data-ss-icon="girl|boy|house" data-size="22"></span> on the page
    function fillIcons() {
        document.querySelectorAll('[data-ss-icon]').forEach(function (el) {
            var make = window.SSIcons[el.dataset.ssIcon];
            if (make) el.innerHTML = make(parseInt(el.dataset.size, 10) || 22);
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fillIcons);
    else fillIcons();
})();
