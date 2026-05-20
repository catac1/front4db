import { Button, Input, Form, Flex } from 'antd';
import axios from 'axios';
import React from 'react';

const Update = () => {

    const onFinish = async (values) => {
        const url = "/api/board/update";
        const { data } = await axios.put(url, values);
        console.log(data);
    }

    return (
        <div>
            <Flex justify='center'>
                <Form onFinish={onFinish} style={{ width: 300 }}>
                    <Form.Item name="id" label="아이디">
                        <Input></Input>
                    </Form.Item>
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
                        <Button type="primary" htmlType='submit'> 수정 </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </div>
    );
};
export default Update;