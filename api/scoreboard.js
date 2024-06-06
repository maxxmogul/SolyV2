if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", function() {
        window.showScore = function() {
            return window.SCORE_DATA;
        }
    });
}
