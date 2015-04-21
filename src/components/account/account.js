define(['external/react', 'external/react-bootstrap', './../loading', './header', '../../model/account'], function(React, BS, Loading, Header, AccountModel) {
    var Input = React.createClass({
        displayName: "account/account#Input",
        render: function() {
            return <BS.Input
                        type='static'
                        label={this.props.label}
                        labelClassName='col-xs-6'
                        wrapperClassName='col-xs-6'
                        value={this.props.value}
                    />;
        }
    });
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
            AccountModel.on("accountUpdate", this.loadAccount.bind(this));
            //console.log("account props (mount)", this.props);
        },
        componentDidUpdate: function() {
            console.log("account props (update)", this.props);
            if(this.props.accountNumber !== this.state.accountNumber) {
                this.loadAccount();
            }


            //this.loadAccount(this.props.accountNumber);
            //"1234567890123456"
        },
        loadAccount: function() {
            console.log("loading account...");
            AccountModel.getAccount(this.props.accountNumber).then(function(response) {
                console.log("got", response.account);
                var account = response.account;
                this.setState({
                    account : account,
                    accountNumber: this.props.accountNumber
                });
            }.bind(this)).catch(function(error) {
                console.log("!!!", error);
            });
        },
        render: function() {
            var loadingStyle = this.state.account.accountNumber === "" ? {backgroundColor: '#999999'} : null;
            return <div>

                <BS.Panel style={loadingStyle} header={<Header account={this.state.account}/>}>

                    <BS.Row>
                        <BS.Col xs={6}>
                            <Input label="Name: " value={this.state.account.customer.firstName + ' ' + this.state.account.customer.lastName} />
                            <Input label='SSN:' value={this.state.account.customer.ssn}/>
                            <Input label='Customer Type:' value='?'/>
                            <Input label='Employee:' value={this.state.account.customer.employeeFlag ? 'Y' : 'N'}/>
                            <Input label='Status:' value={this.state.account.status}/>
                        </BS.Col>
                        <BS.Col xs={6}>
                            <Input label='Location ID:' value={this.state.account.location.id}/>
                            <Input label='Routing Area:' value={this.state.account.location.routingArea}/>
                            <Input label='PPV Limit:' value={this.state.account.ppvLimit}/>
                            <Input label='Security Code:' value={this.state.account.customer.securityCode}/>
                            <Input label='Bulk:' value={this.state.account.bulkFlag ? 'Y' : 'N'}/>
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
