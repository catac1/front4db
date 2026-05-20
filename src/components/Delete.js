import { Button, Input, Form, Flex } from 'antd';
import axios from 'axios';
import React from 'react';

const Delete = () => {

    const onFinish = async (values) => {
        const url = "/api/board/delete";
        console.log(values);
        const { data } = await axios.delete(url, { data: values });
        console.log(data);
    }

    return (
        <div>
            <Flex justify='center'>
                <Form onFinish={onFinish} style={{ width: 300 }}>
                    <Form.Item name="id" label="아이디">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'> 삭제 </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </div>
    );
};
export default Delete;