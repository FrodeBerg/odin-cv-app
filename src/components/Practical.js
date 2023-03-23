import React from "react";
import { InputField } from "./InputField";

export class Practical extends React.Component {
    render() {
        return (
            <div id={this.props.identifier}>
                <button onClick={this.props.remove}>Remove</button>
                <InputField field="company" title="Company Name: " function={this.props.setInput} value={this.props.value.company}/>
                <InputField field="position" title="Position Title: " function={this.props.setInput} value={this.props.value.position}/>
                <InputField field="tasks" title="Main Tasks: " function={this.props.setInput} value={this.props.value.tasks}/>
                <InputField field="time" title="From-To: " function={this.props.setInput} value={this.props.value.time}/>
            </div>
        )
    }
}