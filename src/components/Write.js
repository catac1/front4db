import { Button, Input, Form, Flex } from 'antd';
import axios from 'axios';
import React from 'react';

const Write = () => {

    const onFinish = async (values) => {
        const url = "/api/board/write";
        const { data } = await axios.post(url, values);
        console.log(data);
    }

    return (
        <div>
            <Flex justify='center'>
                <Form onFinish={onFinish} style={{ width: 300 }}>
                    <Form.Item name="title" label="제목">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item name="content" label="내용">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item name="author" label="작성자">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'> 등록 </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </div>
    );
};
export default Write;