import React, { setState } from 'react'
import { Form, Input, Radio, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './index.less'
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
};
function SignIn() {

  const onFinish = (values) => {
    console.log('Success:', values);
    // this.props.history.push('/love/index')
  };
  const options = [{ label: '男', value: '1' }, { label: '女', value: '2' }, { label: '未知', value: '0' }]
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="signin-container">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请设置用户名" />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '请输入邮箱' }]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { min: 8, message: '密码最少要8位' },
            { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, message: '密码应包含数字、字母' }
          ]}
        >
          <Input.Password placeholder="请设置密码" />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('两次输入的密码不一样!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="请确认密码" />
        </Form.Item>
        {/* <Form.Item
          label="性别"
          name="gender"
          initialValue='0'
          rules={[{ required: true, message: '选择性别' }]}
        >
          <Radio.Group
            options={options}
            optionType="button"
          />
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button style={{ width: '85%' }} type="primary" htmlType="submit">注册</Button>
        </Form.Item>
        <Form.Item
          name="agree"
          valuePropName="checked"
          wrapperCol={{ offset: 4 }}
          rules={[{ required: true, message: '请勾选用户协议' }]}
        >
          <Checkbox>阅读并接受<a href="#">《用户协议》</a>及 <a href="">《隐私权保护声明》</a> </Checkbox>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignIn
