// import React, { memo } from "react";
// import { Table } from "antd";

// const TableComponent = (props) => {
//     const { columns, data, footer, total, fechData, pagination = true, pageSize = 10, queries = {} } = props;


//     const dataTable =
//         data?.length &&
//         data?.map((item) => {
//             return { ...item, key: item._id };
//         });


//     return (
//         <div>
//             <Table
//                 className=" mt-5"

//                 pagination={pagination && {
//                     hideOnSinglePage: true,
//                     pageSize: pageSize,
//                     total,
//                     onChange: (page) => {
//                         fechData({ ...queries, page, sort: "-createdAt" })
//                     }

//                 }}
//                 columns={columns}
//                 dataSource={dataTable}
//                 footer={footer}
//             // scroll={{
//             //     y: 550
//             // }}
//             />
//         </div>
//     );
// };
// export default memo(TableComponent);
