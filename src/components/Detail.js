import { Button, Flex, Form, Input } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Detail = () => {
    const [searchParams] = useSearchParams();
    const no = searchParams.get("no");
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleClick = () => {
        navigate(-1)
    }

    const handleData = async () => {
        const url = `/api/board/detail?no=${no}`;
        const { data } = await axios.get(url);
        console.log(data);
        if (data) {
            form.setFieldsValue(data);
        }
    }

    const onFinish = async (values) => {
        const url = "/api/board/update";
        const { data } = await axios.put(url, values);
        // console.log(data);
    }

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div>
            <Button onClick={handleClick}> 목록으로</Button>
            <hr />
            <Flex justify='center'>
                <Form form={form} onFinish={onFinish} style={{ width: 300 }}>
                    <Form.Item name="no" label="번호">
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

export default Detail;