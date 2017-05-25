import * as React from 'react';
import { connect } from 'react-redux';
import User from './user';

// Redux connected component to control users
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      self: props.self
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users,
      self: nextProps.self
    });
  }

  render() {
    return (
      <div>
        {
          this.state.users.map((user) => (
            <User key={user.id}
                  self={this.state.self === user.name}
                  name={user.name} />
          ))
        }
      </div>
    );
  }
}

export default connect((state) => ({ users: state.conversation.users, self: state.userName }))(Users);
