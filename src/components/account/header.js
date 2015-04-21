define(['external/react', 'external/react-bootstrap'], function(React, BS) {
    return React.createClass({
        displayName: 'account/header',
        render: function() {
            return <BS.Row>

                <BS.Col xs={6}>
                    Account
                </BS.Col>

                <BS.Col xs={6}>
                    <BS.Row>
                        <BS.Col xs={6}>
                            <BS.DropdownButton title='Acct: 123456789 (1)' bsSize='small'>
                                <BS.MenuItem eventKey='1'>123456789</BS.MenuItem>
                            </BS.DropdownButton>
                        </BS.Col>

                        <BS.Col xs={6}>
                            <BS.DropdownButton title='Tasks' bsSize='small'>
                                <BS.MenuItem >Edit Customer</BS.MenuItem>
                            </BS.DropdownButton>
                        </BS.Col>
                    </BS.Row>
                </BS.Col>

            </BS.Row>;

        }
    });
});
