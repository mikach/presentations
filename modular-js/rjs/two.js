define(['one'], function(one) {
    return function() {
        one();
        console.log('module two');
    };
})