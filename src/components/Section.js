import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        const className = `section-container section ${this.props.className || ''}`
        return (
            <div className={className}>
                {this.props.children}
                <div className="line"></div>
            </div>
        )
    }
}