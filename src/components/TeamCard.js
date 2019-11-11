import React, {Component} from "react";

export default class TeamCard extends Component {
    render() {
        return <div className="item team">
            <img className="image" src={this.props.imgUrl} />
            <div className="component-title title">
                {this.props.subTitle}
            </div>
            { 
                this.props.description ? <div className="description">
                 {this.props.description}
                </div> : null
            }
        </div>
    }
}
