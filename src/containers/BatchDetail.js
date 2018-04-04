import React, {PureComponent} from 'react'
import { fetchOneBatch } from '../actions/students'
import { connect } from 'react-redux'
import { addStudent } from '../actions/students'

import StudentForm from '../components/StudentForm'

class BatchDetail extends PureComponent {

  componentWillMount() {
      this.props.fetchOneBatch(this.props.match.params.id)
  }

   addStudent = student => {
     this.props.addStudent(student, this.props.match.params.id)
   }

  renderBatch() {
    const { batch } = this.props
    console.log(batch)

    return (
      <div>
        {batch.students &&
          batch.students.map(student => (
        <li>
          <p>fullName: {student.fullName}</p>
          <img src={student.picture} />
        </li>
      ))}
      </div>
    )
  }

  render() {
    const { batch } = this.props


    return (
        <div>
          <p> batch  #{ batch.id } </p>
          <p> startDate: { batch.startDate } </p>
          <p> endDate: { batch.endDate } </p>
          { this.renderBatch() }
          <StudentForm onSubmit={this.addStudent}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  batch: state.batch
})

export default connect(mapStateToProps, { fetchOneBatch, addStudent })(BatchDetail)
