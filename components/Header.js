import { Component } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
// import getConfig from 'next/config';

const { Header } = Layout;

// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
// const { publicRuntimeConfig: { staticFolder } } = getConfig();

class HeaderApp extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: ''
  }
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = { title };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title
      };
    }
    return null;
  }

  render() {
    // const { title } = this.state;
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderApp;
