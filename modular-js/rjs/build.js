
define('one',[],function() {
    return function() {
        console.log('module one');
    }
});
define('two',['one'], function(one) {
    return function() {
        one();
        console.log('module two');
    };
});
define('main',['two'], function(mod) {
    mod();
});