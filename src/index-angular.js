define(['external/react', './components/test'], function(React, Test) {
    return {
        Component: Test,
        render: function(props, target) {
            React.render(React.createElement(Test, props), target);
        },
        registerDirective: function(app, name) {
            app.value('TestComponent', Test)
                .directive(name, ['reactDirective', function(reactDirective) {
                    return reactDirective('TestComponent');
                }]);
        }
    };
});
