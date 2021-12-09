import React, { Component } from "react";

class Event extends Component {
    state = {
        event: {},
        collapsed: true,
    };

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;
        return (
            <div className="event" >
                <div className="summary" as="h4">{event.summary}
                    <div className="event-body">
                        <p className="start-date">{event.start.dateTime} ({event.start.timeZone})</p>

                        <p className="location">@{event.summary} | {event.location}</p>

                        {!collapsed &&
                            <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
                                <br />
                                <h6 className="about">About Event</h6>
                                <a href={event.htmlLink} role="noopener" target="_blank">
                                    See deatails on Google calendar
                                </a>
                                <p className="event-description">{event.description}</p>

                            </div>
                        }
                        <button variant="light" size="md" id="eventButton" className={`${collapsed ? "show" : "hide"}-details-btn`} onClick={this.handleClick}>
                            {collapsed ? "show Details" : "Hide Details"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Event;