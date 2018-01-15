import React, {PropTypes} from 'react';
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: ""
            }
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
        this.props.createCourse(this.state.course);
    }

    courseRow(course,index){
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                {this.props.courses.map(this.courseRow)}
                <input
                    type="text"
                    value={this.state.course.title}
                    onChange={this.onTitleChange}/>

                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>

        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse : PropTypes.func.isRequired
};

// state is redux state
function mapStateToProps(state, ownProps) {
    return({
        courses: state.courses
    });
}

function mapDispatchToProps(dispatch){
    return {
        createCourse : course => dispatch(courseActions.createCourse(course))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);