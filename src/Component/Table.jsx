import React from "react";

const TableCom = ({data,headers,filterData}) =>{
    return (
        <table className="table">
        <thead>
          <tr>
            {data &&
              data?.length &&
              headers?.map((obj, key) => {
                return <th key={key}>{obj}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length &&
            filterData?.map((obj, key) => {
              return (
                <React.Fragment key={key}>
                  <tr className={key % 2 === 0 ? "lightGray" : "darkGray"}>
                    {headers?.map((obj1, index) => {
                      return (
                        <td key={index}>
                          <div>
                            <div className={`tbody_title font-size-15`}>
                              {obj1}
                            </div>
                            {obj[obj1]}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    )
}
export default TableCom