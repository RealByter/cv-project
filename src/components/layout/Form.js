import React, { Component } from 'react';
import PersonalForm from '../forms/PersonalForm';
import Button from '../elements/Button';
import ExperienceForm from '../forms/ExperienceForm';
import EducationForm from '../forms/EducationForm';

class Form extends Component {
	constructor(props) {
		super(props);

		this.onPersonalChange = this.onPersonalChange.bind(this);
		this.onExperienceChange = this.onExperienceChange.bind(this);
		this.onEducationChange = this.onEducationChange.bind(this);
		this.addExperience = this.addExperience.bind(this);
		this.addEducation = this.addEducation.bind(this);
	}

	onPersonalChange(value) {
		this.props.onChange({ personal: value });
	}

	onExperienceChange(index, value) {
		this.props.onChange({
			experience: this.props.value.experience.map((exp, i) => {
				if (i === index) {
					return value;
				} else {
					return exp;
				}
			}),
		});
	}

	onEducationChange(index, value) {
		this.props.onChange({
			education: this.props.value.education.map((edu, i) => {
				if (i === index) {
					return value;
				} else {
					return edu;
				}
			}),
		});
	}

	addExperience(e) {
		this.props.onChange({
			experience: this.props.value.experience.concat({
				companyName: '',
				position: '',
				from: '',
				to: '',
			}),
		});
	}

	addEducation(e) {
		this.props.onChange({
			education: this.props.value.education.concat({
				universityName: '',
				subject: '',
				from: '',
				to: '',
			}),
		});
	}

	render() {
		return (
			<div>
				<h2>Personal Information</h2>
				<PersonalForm
					value={this.props.value.personal}
					onChange={this.onPersonalChange}
				/>
				<h2>Experience</h2>
				{this.props.value.experience.map((edu, i) => (
					<ExperienceForm
						key={i}
						onChange={value => this.onExperienceChange(i, value)}
						value={edu}
					/>
				))}
				<Button text="Add" onClick={this.addExperience} />
				<h2>Education</h2>
				{this.props.value.education.map((exp, i) => (
					<EducationForm
						key={i}
						onChange={value => this.onEducationChange(i, value)}
						value={exp}
					/>
				))}
				<Button text="Add" onClick={this.addEducation} />
			</div>
		);
	}
}

export default Form;
