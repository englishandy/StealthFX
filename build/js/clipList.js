module.exports = {
    el: '#soundBoard',
    data: {
        items: [{
            message: '!patrick',
            audioSrc: 'sounds/patrick.mp3'
        },{
        	message: '!fiddle',
        	audioSrc: 'sounds/fiddle.mp3'
        },{
        	message: '!illuminati',
        	audioSrc: 'sounds/confirmed.mp3'
        },{
        	message: '!shit',
        	audioSrc: 'sounds/shit.mp3'
        },{
        	message: '!magic',
        	audioSrc: 'sounds/magic.mp3'
        },{
        	message: '!fail',
        	audioSrc: 'sounds/fail.mp3'
        },{
        	message: '!lying',
        	audioSrc: 'sounds/lying.mp3'
        }, {
        	message: '!allded',
        	audioSrc: 'sounds/ded.mp3'
        },{
        	message: '!nope',
        	audioSrc: 'sounds/nope.mp3'
        },{
        	message: '!sexy',
        	audioSrc: 'sounds/sexy.mp3'
        }]
    },
    methods: {
        getEL: function(e) {
            var element = e.target;
            console.log(element);
            element.querySelector('audio').play();
        }
    }

}
