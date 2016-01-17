module.exports = {
    el: '#pill',
    methods: {
        getEL: function(e) {
            var element = e.target;
            console.log(element);
            element.querySelector('audio').play();
        }
    }
}
