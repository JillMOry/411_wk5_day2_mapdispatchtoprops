import { connect } from "react-redux";
import AddCar from "../components/AddCar";
// import { bindActionCreators } from 'redux'
import { addCar } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
	return {
		addCar: (car) => dispatch(addCar(car))
		// removeCar: (index) => dispatch(removeCar(index))
	};
};

export default connect(null, mapDispatchToProps)(AddCar);

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ addCar, removeCar }, dispatch)
// }
