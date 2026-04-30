import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Board = () => {

    const [searchParams] = useSearchParams();

    const page = searchParams.get('page') || 1;
    const size = searchParams.get('size') || 10;

    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    // 컬럼의 명칭, dataIndex는 백엔드에서 오는 키값, key는 Table을 위한 고유 키값
    const columns = [
        { title: '번호', dataIndex: 'no', key: 'no' },
        { title: '제목', dataIndex: 'title', key: 'title' },
        { title: '내용', dataIndex: 'content', key: 'content' },
        { title: '작성자', dataIndex: 'writer', key: 'writer' },
        { title: '조회수', dataIndex: 'hit', key: 'hit' },
        { title: '작성일', dataIndex: 'create_at', key: 'create_at' },
    ];

    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    const handleData = async () => {
        setLoading(true);
        const url = `/api/board/selectlist.json?page=${page}&size=${size}`;
        try {
            const { data } = await axios.get(url);
            // if (data.status === 200) {
            setRows(data.result);
            console.log(data.result);
            // }
            await timeout(2000);
            setLoading(false);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={rows}
                loading={loading}
                pagination={false} size='small'
                style={{ cursor: 'pointer' }}
                rowKey={"no"}
            />
        </div>
    );
};

export default Board;