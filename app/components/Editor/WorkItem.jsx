import React from 'react';

export default class WorkItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {
            workPlace,
            workPlaceLink,
            position,
            cityCountry,
            startYear,
            endYear,
            responsibilities,
        } = this.props.data

        return (
            <div className="work_experience__block">
                <p className="work_experience__workplace">work-place: <a href={workPlaceLink} target="_blank">{workPlace.english}</a>;</p>
                <p className="work_experience__position">position: {position.english};</p>
                <p className="work_experience__city-country">city-country: {cityCountry.english};</p>
                <p className="work_experience__start-year">start-year: {startYear.english};</p>
                <p className="work_experience__end-year">end-year: {endYear.english};</p>
                <p className="work_experience__responsibilities">
                    responsibilities:
                    {
                        responsibilities.english.map((item, index) => {
                            return (
                                item
                            )
                        })
                    };
                </p>
            </div>
        )
    }
}

WorkItem.propTypes = {
    data: React.PropTypes.shape({
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired,
        dateOfBirth: React.PropTypes.string.isRequired
    })
};