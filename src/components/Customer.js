import React from 'react';


class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomermerProfile id={this.props.id} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>        
            </div>           
        )
    }
}


class CustomermerProfile extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>           
        )
    }
}




class CustomerInfo extends React.Component{

    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;