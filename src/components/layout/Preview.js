import React, { Component } from 'react';
import Linebreak from '../elements/Linebreak';
import TimePeriod from '../elements/TimePeriod';
import MainSubText from '../elements/MainSubText';

class Preview extends Component {
	render() {
		const { personal, education, experience } = this.props.info;

		return (
			<div className="preview">
				<div className="header">
					<h1 className="name">
						{personal.firstName} {personal.lastName}
					</h1>
				</div>
				<div className="general">
					<div>
						<h3>Experience</h3>
						<Linebreak />
						<div className="time-period-list">
							{experience.map((exp, index) => (
								<TimePeriod
									key={index}
									from={exp.from}
									to={exp.to}
									main={exp.position}
									sub={exp.companyName}
								/>
							))}
						</div>
					</div>
					<div>
						<h3>Education</h3>
						<Linebreak />
						<div className="time-period-list">
							{education.map((edu, index) => (
								<TimePeriod
									key={index}
									from={edu.from}
									to={edu.to}
									main={edu.universityName}
									sub={edu.subject}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="personal">
					<div>
						<h3>Personal Details</h3>
						<Linebreak />
					</div>
					<div>
						<MainSubText main="Phone Number" sub={personal.phoneNumber} />
						<MainSubText main="Email" sub={personal.email} />
					</div>
				</div>
			</div>
		);
	}
}

export default Preview;
