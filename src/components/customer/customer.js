define(['external/react', 'external/react-bootstrap', './../loading', '../../model/account'], function(React, BS, Loading, AccountModel) {
    return React.createClass({
        displayName: 'account/account',
        getInitialState: function() {
            return {
                account : {
                    accountNumber: '',
                    status: '',
                    authorizedUsers: [],
                    billingAddress: {
                        street1: '',
                        street2: '',
                        city: '',
                        state: '',
                        zip: ''
                    },
                    ppvLimit: '',
                    bulkFlag: '',
                    paperlessFlag: '',
                    customer: {
                        id: '',
                        firstName: '',
                        lastName: '',
                        ssn: '',
                        type: '',
                        employeeFlag: '',
                        primaryTelephoneNumber: '',
                        alternateTelephoneNumber: '',
                        email: '',
                        securityCode: ''
                    },
                    location: {
                        id: '',
                        routingArea: '',
                        sysPrin: '',
                        agentId: '',
                        rateCenter: '',
                        headend: '',
                        comments: '',
                        serviceAddress: {
                            street1: '',
                            street2: '',
                            city: '',
                            state: '',
                            zip: ''
                        }
                    }
                }
            };
        },

        componentDidMount: function() {
            AccountModel.getAccount(function(response) {
                var account = response.account;
                if (this.isMounted()) {
                    this.setState({
                        account : account
                    });
                }
            }.bind(this));
        },
        render: function() {
            var loadingStyle = this.state.account.accountNumber === "" ? {backgroundColor: '#999999'} : null;

            return <div style={loadingStyle}>

                <BS.Row>
                    <BS.Col xs={4}>
                        <BS.Input type='static' label='Service Address' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.street1}/>
                        <BS.Input type='static' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.street2}/>
                        <BS.Input type='static' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.city}/>
                        <BS.Input type='static' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.state + ',' + this.state.account.location.serviceAddress.zip}/>
                    </BS.Col>
                    <BS.Col xs={6}>
                        <BS.Input type='text' label='Email:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.email}/>
                        <BS.Input type='static' label='Primary Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.primaryTelephoneNumber}/>
                        <BS.Input type='text' label='Alternate Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.alternateTelephoneNumber}/>
                    </BS.Col>
                    <BS.Col xs={2}>
                        <BS.Input type='text' label='Email:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.email}/>
                        <BS.Input type='static' label='Primary Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.primaryTelephoneNumber}/>
                        <BS.Input type='text' label='Alternate Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.alternateTelephoneNumber}/>
                    </BS.Col>
                </BS.Row>

            </div>;
        }
    });
});
