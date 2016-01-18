var Vue = require('vue/dist/vue.min.js');

var Clipboard = require('clipboard');

var successEl = document.getElementById('success');
var errEl = document.getElementById('err');


// Initialize clipboard.js
var clip = new Clipboard('.copy');

clip.on('success', function(e) {
    console.info('Action: ', e.action);
    console.info('Text: ', e.text);
    console.info('Trigger: ', e.trigger);
    console.log(successEl);
    // successEl.style.visibility = 'visible';
    successEl.style.opacity = 1;
    successEl.style.top = 0;
    setTimeout(function() {
        successEl.style.opacity = 0;
        successEl.style.top = '-50vh';
    }, 3000);
    e.clearSelection();
});

clip.on('error', function(e){
	errEl.style.opacity = 1;
	errEl.style.top= 0;
	setTimeout(function(){
		errEl.style.opacity = 0;
		errEl.style.top = '-50vh';
	}, 3000);
})

// Controller for audio listing and playing
var soundBoard = new Vue(require('./clipList'));
