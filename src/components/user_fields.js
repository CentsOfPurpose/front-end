import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  field: {
    width: 160
  },
  age_field: {
    width: 60
  },
  money_box: {
  	padding: 15,
  	float: 'right'
  },
  prof_box: {
  	padding: 15,
  	float: 'left'
  },
  label: {
  	padding: 15
  }
};

class TextFieldTest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Sally Seashells',
      age: 29,
      email:'sally@seashellheaven.com',
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.name,
      age: event.target.age,
      email: event.target.email,
    });
  };

  render() {
    return (
      <div>
        <div style={styles.label}>
	        <h2 style={styles.label}>User Information</h2>
	        <label style={styles.label}><b>Name:</b></label><TextField
	          id="text-field-controlled"
	          value={this.state.name}
	          onChange={this.handleChange}
	        /><br/>
	        <label style={styles.label}><b>Age:</b></label><TextField style={styles.age_field}
	          id="text-field-controlled"
	          value={this.state.age}
	          onChange={this.handleChange}
	        /><br/>
	        <label style={styles.label}><b>Email:</b></label><TextField
	          id="text-field-controlled"
	          value={this.state.email}
	          onChange={this.handleChange}
	        /><br/>
	        <RaisedButton label="Save Profile" onTouchTap={this.handleOpen} style={styles.label} secondary={true} />
        </div>
      	<div style={styles.label}>
	      	<h2 style={styles.label}>Total Change collected: $14.64</h2>
	      	<p style={styles.label}>Total for SF Safehouse: $8.23</p>
	      	<p style={styles.label}>Total for W.O.M.A.N. Inc: $6.41</p>
        </div><br/>
      </div>
    );
  }
}

export default TextFieldTest;

// import React from 'react';
// import DocumentTitle from 'react-document-title';
// import { UserProfileForm } from 'react-stormpath';
 
// export default class ProfilePage extends React.Component {
//   render() {
//     return (
//       <DocumentTitle title={`My Profile`}>
//       <div className="container">
//           <div className="row">
//             <div className="col-xs-12">
//               <h3>My Profile</h3>
//               <hr />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-xs-12">
//               <UserProfileForm />
//             </div>
//           </div>
//         </div>
//       </DocumentTitle>
//     );
//   }
// }