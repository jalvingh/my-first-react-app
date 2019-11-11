import React, {Component} from "react";

export default class SectionCard extends Component{
    render(){
        return  <div className="component-section-header">
                        <div className="title-badge">
                            <div className="title-badge-title">
                                {this.props.badgeTitle}
                            </div>
                        </div>

                        <h2>
                            <div className="component-title ">
                                {this.props.componentTitle}
                            </div>
                        </h2>

                        <div className="description">
                            {this.props.description}
                        </div>
                </div>
    }    
}
