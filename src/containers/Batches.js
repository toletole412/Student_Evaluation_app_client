import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { fetchBatches } from '../actions/students'
import PropTypes from 'prop-types'
import './Styles.css';



class Batches extends PureComponent {
  static propTypes = {
    fetchBatches: PropTypes.func.isRequired
  }


  componentWillMount() {
    this.props.fetchBatches()
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
                <button
                  onClick={
                    _ => window.location.href=`/batches/${batch.id}`
                  }>
                  details
                  </button>
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
      <div>
          <div style={{backgroundColor: "#f9f4f7", overflow: "scroll", color: 'black'}}
                 key={"b"}
                 _grid={{i: 'b',
                         x: 1,
                         y: 0,
                         w: 3,
                         h: 2,
                         minW: 2,
                         maxW: 4}}>
            <div class="wrapper">
              <div class="home">
                    <div class="articles">
                        <ul class="articles_list clear">
                        <li>
                          <article class="articles_contents">
                          {this.renderBatches()}
                          </article>
                        </li>
                        </ul>
                    </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  batchesInfo: state.batchesInfo,
  currentTeacher: state.currentTeacher
})

export default connect(mapStateToProps, { fetchBatches })(Batches)
