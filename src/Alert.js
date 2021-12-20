import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.marginTop = null;
        this.fontSize = '16px';
    };


    getStyle = () => {
        return {
            color: this.color,
            marginTop: this.marginTop,
            fontSize: this.fontSize,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
        this.fontSize = '16px';
        this.marginTop = '0';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.fontSize = '16px';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'orange';
        this.fontSize = '16px';
    }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };