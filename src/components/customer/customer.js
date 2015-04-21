define(['external/react', 'external/react-bootstrap', './../loading', '../../model/account'], function(React, BS, Loading, AccountModel) {

    function clone(obj) {
        if(obj == null || typeof(obj) != 'object')
            return obj;

        var temp = obj.constructor(); // changed

        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                temp[key] = clone(obj[key]);
            }
        }
        return temp;
    }

    var Customer =  React.createClass({
        displayName: 'account/customer',

        linkState: function(propertyName) {
            console.log("props", this.props);
            return {
                value: typeof this.props.valueLink.value === "undefined" ? undefined : this.props.valueLink.value[propertyName],
                requestChange: function(e) {
                    var change = this.props.valueLink.value;
                    change[propertyName] = e;
                    this.requestChange(change); // {email: "abcd@gmail.com"}
                }.bind(this)
            }
        },
        render: function() {
            return <div>
                <BS.Input type='text' label='Email:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' valueLink={this.linkState("email")}/>
                <BS.Input type='static' label='Primary Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.primaryTelephoneNumber}/>
                <BS.Input type='text' label='Alternate Phone:' labelClassName='col-xs-6' wrapperClassName='col-xs-6' valueLink={this.linkState("alternateTelephoneNumber")}/>
            </div>;
        }
    });

    var ServiceAddress =  React.createClass({
        displayName: 'account/serviceAddress',

        render: function() {

            return <div>
                <BS.Input type='static' label='Service Address' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.street1}/>
                <BS.Input type='static' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.street2}/>
                <BS.Input type='static' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.city}/>
                <BS.Input type='static' labelClassName='col-xs-6' wrapperClassName='col-xs-6' value={this.props.state + ',' + this.props.zip}/>
            </div>;
        }
    });

    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
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
                    account : account,
                    customer: clone(account.customer)
                });
            }.bind(this));
        },

        cancelCustomer: function() {
            this.setState({customer: clone(account.customer)});
        },

        saveCustomer: function() {
            AccountModel.saveCustomer(this.state.account.accountNumber, this.state.customer, function(response) {
                var account = response.account;
                this.setState({
                    account : account
                });
            }.bind(this));
        },

        render: function() {
            var loadingStyle = this.state.account.accountNumber === "" ? {backgroundColor: '#999999'} : null;

            return <div style={loadingStyle}>

                <BS.Row>
                    <BS.Col xs={4}>
                        <ServiceAddress {...this.state.account.location.serviceAddress} />
                    </BS.Col>
                    <BS.Col xs={6}>
                        <Customer valueLink={this.linkState("customer")} />
                    </BS.Col>
                    <BS.Col xs={2}>
                        <BS.Button onClick={this.saveCustomer}>Save</BS.Button>
                        <BS.Button onClick={this.cancelCustomer}>Cancel</BS.Button>
                    </BS.Col>
                </BS.Row>

            </div>;
        }
    });
});
