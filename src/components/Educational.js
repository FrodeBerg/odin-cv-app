import React from "react";
import { InputField } from "./InputField";

export class Educational extends React.Component {
    render() {
        return (
            <div id={this.props.identifier}>
                <button onClick={this.props.remove}>Remove</button>
                <InputField field="school" title="School Name: " function={this.props.setInput} value={this.props.value.school}/>
                <InputField field="title" title="Title Of Study: " function={this.props.setInput} value={this.props.value.title}/>
                <InputField field="date" title="Date Of Study: " function={this.props.setInput} value={this.props.value.date}/>
            </div>
        )
    }
}