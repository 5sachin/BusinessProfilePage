import React from "react";
import axios from "axios";
import withRouter from "../withRouter";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://smart-business-card.onrender.com/user/" + this.props.params.id
      )
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div class="muck-up">
          <div class="overlay"></div>
          <div class="top">
            <div class="nav">
              <span class="ion-android-menu"></span>
              <p>Timeline</p>
              <span class="ion-ios-more-outline"></span>
            </div>
            <div class="user-profile">
              <img
                alt="sample"
                src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/profile.jpg"
              />
              <div class="user-details">
                <h4>{this.state.user.name}</h4>
                <p>{this.state.user.description}</p>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="clearfix"></div>
          <div class="bottom">
            <div class="title">
              <h3>{this.state.user.id}</h3>
              <small>February 8,2015</small>
            </div>
            <ul class="tasks">
              <li class="one red">
                <span class="task-title">Email</span>
                <span class="task-time">{this.state.user.email}</span>
              </li>
              <li class="one red">
                <span class="task-title">Phone No</span>
                <span class="task-time">{this.state.user.phoneno}</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ProfilePage);
