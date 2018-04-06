import React, {PureComponent} from 'react'
import { fetchOneStudent, doEvaluation, editStudent, deleteStudent } from '../actions/students'
import EvaluationForm from '../components/EvaluationForm'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'


import EditStudentForm from '../components/EditStudentForm'


const style = {
  margin: 5,
};


class Evaluation extends PureComponent {

  componentWillMount() {
      this.props.fetchOneStudent(this.props.match.params.id)
  }

   doEvaluation = evaluation => {
     this.props.doEvaluation(evaluation, this.props.match.params.id)
   }

   editStudent = student => {
     this.props.editStudent(student, this.props.match.params.id)
   }

   deleteStudent = () => {
     this.props.deleteStudent(this.props.match.params.id)
   }


  render() {
    const { student } = this.props

    return (
        <table>
        <AppBar
          title="Evaluation"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
          <tr>
            <th>fullName</th>
            <th>picture</th>
            <th>evaluation history</th>
          </tr>
          <tr>
            <td width="5%">{student.fullName}</td>
            <td width="10%"><img src={student.picture} /></td>

                <table>
                <th>date</th>
                <th>coulourCode</th>
                <th>remark</th>
                <th>edit</th>
                {student.evaluations &&
                  student.evaluations.map(evaluation => (
                  <tr>
                    <td width="30%">{evaluation.date}</td>
                    <td width="30%">{evaluation.colourCode}</td>
                    <td width="30%">{evaluation.remark}</td>
                    <td width="30%"><RaisedButton label="edit/delete" primary={true} style={style} onClick={
                      _ => window.location.href=`/${evaluation.id}/edit`
                    } /></td>
                  </tr>
                ))}
                </table>
            </tr>
          <p>new evaluation</p>
            <EvaluationForm onSubmit={this.doEvaluation}/>
          <p>edit student Info</p>
            <EditStudentForm onSubmit={this.editStudent}/>
            <button
                onClick={
                  this.deleteStudent
                }>
                delete student
            </button>

        </table>
    )
  }
}

const mapStateToProps = (state) => ({
  student: state.student,
  batch: state.batch
})

export default connect(
  mapStateToProps,
  { fetchOneStudent, doEvaluation, editStudent, deleteStudent }
)(Evaluation)
