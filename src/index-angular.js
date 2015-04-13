// entry point
define(['./test', 'external/react', 'external/angular'], function(Test, React) {
    return function(props, target) {
        React.render(React.createElement(Test, props), target);
    };
});