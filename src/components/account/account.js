define(['external/react', 'external/react-bootstrap', './../loading', './header', '../../model/account'], function(React, BS, Loading, Header, AccountModel) {
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
                this.setState({
                    account : account
                });
            }.bind(this));
        },
        render: function() {
            var loadingStyle = this.state.account.accountNumber === "" ? {backgroundColor: '#999999'} : null;
            return <div>

                <BS.Panel style={loadingStyle} header={<Header account={this.state.account}/>}>
                    <BS.Row>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Name:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.firstName + ' ' + this.state.account.customer.lastName}/>
                            <BS.Input type='static' label='SSN:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.ssn}/>
                            <BS.Input type='static' label='Customer Type:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value='?'/>
                            <BS.Input type='static' label='Employee:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.employeeFlag ? 'Y' : 'N'}/>
                            <BS.Input type='static' label='Status:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.status}/>
                        </BS.Col>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Location ID:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.id}/>
                            <BS.Input type='static' label='Routing Area:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.routingArea}/>
                            <BS.Input type='static' label='PPV Limit:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.ppvLimit}/>
                            <BS.Input type='static' label='Security Code:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.securityCode}/>
                            <BS.Input type='static' label='Bulk:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.bulkFlag ? 'Y' : 'N'}/>
                        </BS.Col>
                    </BS.Row>
                </BS.Panel>

                <BS.Panel style={loadingStyle} header='Contact Information'>
                    <BS.Row>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Primary Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.primaryTelephoneNumber}/>
                            <BS.Input type='static' label='Alternate Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.alternateTelephoneNumber}/>
                        </BS.Col>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Email:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.customer.email}/>
                            <BS.Input type='static' label='Authorized Users:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.authorizedUsers}/>
                        </BS.Col>
                    </BS.Row>
                </BS.Panel>

                <BS.Panel style={loadingStyle} header='Address Information'>
                    <BS.Row>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Contact Address Line 1:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.street1}/>
                            <BS.Input type='static' label='Contact Address Line 2:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.street2}/>
                            <BS.Input type='static' label='City:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.city}/>
                            <BS.Input type='static' label='State:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.state}/>
                            <BS.Input type='static' label='Zip:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.location.serviceAddress.zip}/>
                        </BS.Col>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Billing Address Line 1:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.billingAddress.street1}/>
                            <BS.Input type='static' label='Billing Address Line 2:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.billingAddress.street2}/>
                            <BS.Input type='static' label='City:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.billingAddress.city}/>
                            <BS.Input type='static' label='State:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.billingAddress.state}/>
                            <BS.Input type='static' label='Zip:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.state.account.billingAddress.zip}/>
                        </BS.Col>
                    </BS.Row>
                </BS.Panel>

            </div>;
        }
    });
});
