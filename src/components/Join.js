import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';

const Join = () => {

    const onFinish = async (values) => {
        console.log(values);
        const url = `/api/customer/join.do`;
        try {
            const { data } = await axios.post(url, values);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item name={"email"} label="이메일" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={"name"} label="이름" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={"password"} label="암호" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item name={"phone"} label="연락처" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>회원가입</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Join;