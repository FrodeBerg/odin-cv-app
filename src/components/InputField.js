import React from "react"

export class InputField extends React.Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.field}>{this.props.title}</label>
                <input
                value={this.props.value}
                name={this.props.field} 
                onChange={this.props.function}
                />
            </div>            
        )
    }
}