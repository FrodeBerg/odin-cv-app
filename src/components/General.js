import React from "react";

export class General extends React.Component {

    render() {
        return (
            <div className="general">
                <input 
                onChange={this.props.setInput}
                />
            </div>
        )
    }
}