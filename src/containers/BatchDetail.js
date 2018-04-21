import React, {PureComponent} from 'react'
import { fetchOneBatch } from '../actions/students'
import { connect } from 'react-redux'
import { addStudent, askQuestion, getRedP, getGreenP, getYellowP } from '../actions/students'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import './Styles.css'


import StudentForm from '../components/StudentForm'




const style = {
  margin: 12,
};

class BatchDetail extends PureComponent {

  componentWillMount() {
      this.props.fetchOneBatch(this.props.match.params.id)
      this.props.getRedP(this.props.match.params.id)
      this.props.getYellowP(this.props.match.params.id)
      this.props.getGreenP(this.props.match.params.id)
  }

   addStudent = student => {
     this.props.addStudent(student, this.props.match.params.id)
   }

   askQuestion = () => {
     this.props.askQuestion(this.props.match.params.id)
   }


  renderBatch() {
    const { batch } = this.props
    console.log(batch)

    return (
      <div>
        <table>
          <tr>
            <th>fullName</th>
            <th>picture</th>
            <th>color code</th>
          </tr>
          {batch.students &&
            batch.students.map(student => (
          <tr>
            <td width="30%">{student.fullName}</td>
            <td width="50%"><img src={student.picture} alt="student"/></td>
            <td width="100%">{student.evaluations
              .sort()
              .slice(-1)
              .map(data => data.colourCode) }
            </td>
            <RaisedButton label="evaluation" primary={true} style={style} onClick={
              _ => window.location.href=`/${student.id}/evaluation`
            } />
          </tr>
        ))}
        </table>
      </div>
    )
  }

  render() {
    const { batch, question, redP, yellowP, greenP } = this.props


    return (
      <div>
      <AppBar
        title="Batch Detail"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
          <div id="red">
            <div id="myBar_red">{redP * 100}%</div>
          </div>
          <div id="yellow">
            <div id="myBar_yellow">{yellowP * 100}%</div>
          </div>
          <div id="green">
            <div id="myBar_green">{greenP * 100}%</div>
          </div>
        <table>

          <tr>
            <th>Batch #</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
          <tr>
            <td width="5%"> { batch.id } </td>
            <td width="30%"> { batch.startDate } </td>
            <td width="30%"> { batch.endDate } </td>
          </tr>
            <div>
            { this.renderBatch() }
            </div>
          <span>Add new student</span>
          <StudentForm onSubmit={this.addStudent}/>
          <RaisedButton
            label="ask"
            primary={true}
            style={style}
            onClick={this.askQuestion} />
          <span>{question.map(q => q.fullName)} </span>
          <img src={question.map(q => q.picture)} />

        </table>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  batch: state.batch,
  question: state.question,
  redP: state.redP,
  yellowP: state.yellowP,
  greenP: state.greenP
})

export default connect(
  mapStateToProps,
  { fetchOneBatch, addStudent, askQuestion, getRedP, getYellowP, getGreenP }
)(BatchDetail)
