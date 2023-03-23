import React from "react";
import { InputField } from "./InputField";

export class General extends React.Component {

    render() {
        return (
            <div className="general">
                <InputField field="name" title="Full Name: " function={this.props.setInput} value={this.props.value.name}/>
                <InputField field="email" title="Email: " function={this.props.setInput} value={this.props.value.email}/>
                <InputField field="phone" title="Phone Number: " function={this.props.setInput} value={this.props.value.phone}/>
            </div>
        )
    }
}

