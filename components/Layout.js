import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';
// import DynamicAntdTheme from 'dynamic-antd-theme';
const { Content, Footer } = Layout;
import Header from './Header';

const LayoutApp = ({ title, children }) => (
    <Layout>
        <Header title={title} />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);
export default LayoutApp;

LayoutApp.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};

LayoutApp.defaultProps = {
    title: '',
    children: null
};