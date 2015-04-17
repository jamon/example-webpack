define(['external/react', 'external/react-bootstrap', './../loading', './header', '../../model/account'], function(React, BS, Loading, Header, AccountModel) {
    return React.createClass({
        displayName: 'account/account',
        propTypes: {
            account: React.PropTypes.string.isRequired
        },
        getDefaultProps: function() {
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
        render: function() {
            var loadingStyle = this.props.account.accountNumber === "" ? {backgroundColor: '#999999'} : null;

            console.log(this.props);
            return <div>

                <BS.Panel style={loadingStyle} header={<Header account={this.props.account}/>}>
                    <BS.Row>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Name:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.customer.firstName + ' ' + this.props.account.customer.lastName}/>
                            <BS.Input type='static' label='SSN:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.customer.ssn}/>
                            <BS.Input type='static' label='Customer Type:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value='?'/>
                            <BS.Input type='static' label='Employee:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.customer.employeeFlag ? 'Y' : 'N'}/>
                            <BS.Input type='static' label='Status:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.status}/>
                        </BS.Col>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Location ID:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.location.id}/>
                            <BS.Input type='static' label='Routing Area:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.location.routingArea}/>
                            <BS.Input type='static' label='PPV Limit:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.ppvLimit}/>
                            <BS.Input type='static' label='Security Code:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.customer.securityCode}/>
                            <BS.Input type='static' label='Bulk:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.bulkFlag ? 'Y' : 'N'}/>
                        </BS.Col>
                    </BS.Row>
                </BS.Panel>

                <BS.Panel style={loadingStyle} header='Contact Information'>
                    <BS.Row>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Primary Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.customer.primaryTelephoneNumber}/>
                            <BS.Input type='static' label='Alternate Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.customer.alternateTelephoneNumber}/>
                        </BS.Col>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Email:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.customer.email}/>
                            <BS.Input type='static' label='Authorized Users:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.authorizedUsers}/>
                        </BS.Col>
                    </BS.Row>
                </BS.Panel>

                <BS.Panel style={loadingStyle} header='Address Information'>
                    <BS.Row>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Contact Address Line 1:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.location.serviceAddress.street1}/>
                            <BS.Input type='static' label='Contact Address Line 2:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.location.serviceAddress.street2}/>
                            <BS.Input type='static' label='City:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.location.serviceAddress.city}/>
                            <BS.Input type='static' label='State:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.location.serviceAddress.state}/>
                            <BS.Input type='static' label='Zip:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.location.serviceAddress.zip}/>
                        </BS.Col>
                        <BS.Col xs={6}>
                            <BS.Input type='static' label='Billing Address Line 1:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.billingAddress.street1}/>
                            <BS.Input type='static' label='Billing Address Line 2:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.billingAddress.street2}/>
                            <BS.Input type='static' label='City:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.billingAddress.city}/>
                            <BS.Input type='static' label='State:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.billingAddress.state}/>
                            <BS.Input type='static' label='Zip:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.account.billingAddress.zip}/>
                        </BS.Col>
                    </BS.Row>
                </BS.Panel>

            </div>;
        }
    });
});
