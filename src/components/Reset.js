import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';

const Reset = () => {

    const onFinish = async (values) => {
        console.log(values);
        const url = `/api/admin/password_reset.do`;
        try {
            const { data } = await axios.post(url, values);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item name={"email"} label="이메일" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={"password"} label="암호" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>ㅂ</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Reset;