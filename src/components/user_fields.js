import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  field: {
    width: 160
  },
  age_field: {
    width: 60
  },
  label: {
  	padding: 15
  }
};

class TextFieldTest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Johnny Appleseed',
      age: 33,
      email:'Johnny@applepicker.com',
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
        />
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