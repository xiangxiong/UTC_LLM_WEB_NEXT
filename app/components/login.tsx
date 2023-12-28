import styles from "./login.module.scss";
import Logo from "../icons/logo_utc.png";
import { Tabs,Button, Checkbox, Form, Input,InputNumber } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export const Login = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };



    const renderRegister = () => {
        return (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入手机号' }]}
              >
                <Input placeholder="手机号" prefix={"+86"}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入验证码' }]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="验证码"
                />
                <a id="startButton" onClick={startCountdown} className={styles['login-form-validate']}>
                  获取验证码
                </a>
              </Form.Item>
              <Form.Item className="login-form-container">
                <Button type="primary" htmlType="submit" style={{width:'100%'}} className="login-form-button">
                  登 录
                </Button>
              </Form.Item>
            </Form>
          );
    }

    let seconds = 60;
    let countdownTimer = 0;

    function updateCountdown() {
        document.getElementById('startButton').innerText = `重新发送(${seconds}s)`;
    }

    function startCountdown() {
        // 禁用按钮以防止多次点击
        document.getElementById('startButton').disabled = true;

        countdownTimer = setInterval(function () {
            seconds--;
            updateCountdown();

            if (seconds <= 0) {
                clearInterval(countdownTimer);
                // 倒计时结束后重新启用按钮
                document.getElementById('startButton').disabled = false;
                seconds = 60; // 重置秒数
                updateCountdown();
            }
        }, 1000);
    }

    return (
    <div className={styles['login']}>
        <div className={styles['login-container']}>
            <div className={styles['login-top']}>
                <div className={styles['login-header']}> 
                    <span className={styles['login-logo']}>
                        <img src={Logo.src} width={40} height={40} alt="logoUtcPic" />
                    </span>
                    <span className={styles['login-title']}>UTC </span>
                </div>
                <div className={styles['login-desc']}>
                  人工智能工具
                </div>
            </div>
            <div className={styles['login-main']}>
            <Tabs
                defaultActiveKey="1"
                centered
                items={[
                      {
                        label: '手机号登录',
                        key: '2',
                        children: <>
                        {renderRegister()}
                        </>,
                      }
                ]}
            />
            </div>
        </div>
    </div>)
}