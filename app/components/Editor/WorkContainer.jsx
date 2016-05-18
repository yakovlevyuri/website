import React from 'react';
import WorkItem from './WorkItem';

export default class WorkContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workExperience = this.props.data;
        let workTemplate;

        if (workExperience.length > 0) {
            workTemplate = workExperience.map(function(item, index) {
                return (
                    <WorkItem data={item} key={index} />
                )
            })
        } else {
            workTemplate = <p>К сожалению Bio нет</p>
        }

        return (
            <div className="news">
                {workTemplate}
            </div>
        );
    }
}

WorkContainer.propTypes = { data: React.PropTypes.array.isRequired };
