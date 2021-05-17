import React, { Component } from 'react'
import './index.less'
import { Form, Button, Input, Checkbox, Row, Col, Divider } from 'antd'
import { Link } from 'react-router-dom'
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
};
export default class LoveLogin extends Component {
  onFinish = (values) => {
    // console.log('Success:', this.props);
    this.props.history.push('/index')
  };
  toPath = (type) => {
    if (type === 1) {
      this.props.history.push('/signin')

    } else {
      this.props.history.push('/getPassword')

    }
  }
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (


      <div className="container">

        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Row>
            <Col span={6} offset={5}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
              </Form.Item>
            </Col>
            <Col span={10} offset={3}>
              <Form.Item>
                <div className="otherOpt">
                  <Link style={{ marginRight: 20 }} to="/signin">注册账号</Link>
                  <Link to="/getPassword">忘记密码</Link>
                  {/* <span style={{ marginRight: 20 }} onClick={() => this.toPath(1)}>注册账号</span>
                    <span onClick={() => this.toPath(1)}>忘记密码</span> */}
                </div>
              </Form.Item>
            </Col>
          </Row>


          <Form.Item wrapperCol={{ offset: 11 }}>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>

    )
  }
}
