import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { fetchBatches, createBatch } from '../actions/students'
import BatchForm from '../components/BatchForm'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import './Styles.css';



const style = {
  margin: 12,
};



class Batches extends PureComponent {
  static propTypes = {
    fetchBatches: PropTypes.func.isRequired,
    createBatch: PropTypes.func.isRequired
  }


  componentWillMount() {
    this.props.fetchBatches()
  }

  createBatch = batch => {
    this.props.createBatch(batch)
  }

  renderBatches() {
    const { batchesInfo } = this.props
  //  console.log( batchesInfo[0] )

    return batchesInfo.map(batch => {
      return (

         <div>
              <div class="articles_header">
                <h1 class="articles_title">
                    Batch #{batch.id}
                </h1>
                <RaisedButton label="details" primary={true} style={style} onClick={
                  _ => window.location.href=`/batches/${batch.id}`
                } />
              </div>
            <div class="articles_body">
              <div class="contents">
                <div class="contents_inner">
                  <p> {batch.students.length} students </p>
                </div>
              </div>
            </div>
        </div>

      )
    })
  }



  render() {

    return (

      <body>
      <AppBar
        title="Batches"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
        <div class="container">
          <BatchForm onSubmit={this.createBatch} />
              <li>
                <article class="articles_contents">
                  {this.renderBatches()}
                </article>
              </li>
        </div>
      </body>
    );
  }
}

const mapStateToProps = (state) => ({
  batchesInfo: state.batchesInfo,
  currentTeacher: state.currentTeacher
})

export default connect(mapStateToProps, { fetchBatches, createBatch })(Batches)
