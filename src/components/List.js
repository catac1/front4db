import { Pagination, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const List = () => {

    const [searchParams] = useSearchParams();
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(searchParams.get('page') || 1);
    const [limit, setLimit] = useState(searchParams.get('limit') || 3);
    const [total, setTotal] = useState(0); // total is needed for pagination.

    const navigate = useNavigate();

    const columns = [
        { title: 'no', dataIndex: 'no', key: 'no' },
        { title: 'title', dataIndex: 'title', key: 'title' },
        { title: 'content', dataIndex: 'content', key: 'content' },
        { title: 'author', dataIndex: 'author', key: 'author' },
    ];

    const handleData = async () => {
        const url = `/api/board/listpage?page=${page}&limit=${limit}`;
        const { data } = await axios.get(url);
        console.log("foo", data.total, data.writings);
        if (data) {
            setRows(data.writings);
            setTotal(data.total);
        }
    }

    const onChange = (page) => {
        // console.log(page);
        setPage(page);
        navigate(`/list?page=${page}&limit=${limit}`);
    };

    const onRow = (record, rowIndex) => {
        return {
            onClick: () => {
                // we don't need await in this scope
                console.log(record);
                navigate(`/detail?no=${record.no}`);
            }
        };

    };


    useEffect(() => {
        handleData();
    }, [page]);

    return (
        <div>
            <Table dataSource={rows} columns={columns} rowKey={"no"}
                pagination={false} size='small'
                onRow={onRow}></Table>
            <Pagination showSizeChanger={false}
                showTotal={(total) => `Total ${total} items`}
                align='center' defaultCurrent={2} total={total}
                pageSize={limit}
                onChange={onChange} />

        </div>
    );
};

export default List;