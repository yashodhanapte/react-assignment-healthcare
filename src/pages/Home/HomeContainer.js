
import { connect } from 'react-redux'
import Home from './Home';

const mapStateToProps = (state) => ({
    docData: state.DataReducer.docData
})

export default connect(mapStateToProps, null)(Home);