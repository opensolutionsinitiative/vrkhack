import React from 'react'
import FA from 'react-fontawesome'
import './dataRelease.css'

export default class DataRelease extends React.Component {
    render() {
        return (
            <div key={this.props.key} class="dataRelease">
            <h3><FA name="sitemap" /> {this.props.organization}</h3>
            <p><FA name="user" />  {this.props.requestedBy}</p><p><FA name="calendar" /> {new Date(this.props.released).toLocaleDateString()}</p>
            </div>
        )
    }
}