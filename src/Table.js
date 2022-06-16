import React, { Component, useCallback } from 'react';

class Table extends Component {

    state={
        sortedField:""
    } 

    render() {
        const { columns,data,rowKey } = this.props
        
      

        const mystyle = {
            color: "black",
            backgroundColor: "#fff",
            padding: "20px",
            fontFamily: "Thoma",
            borderCollapse: "separate",
            borderSpacing: "0 15px"

            
          };
        
        const   compareValues=(key)=>
        {
           
            return function innerSort(a, b) {
             if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    console.log(" property doesn't exist on either object")
                    return 0;
                }

            const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return comparison
          }
            }
          
          var feild;
          const trStyle={
           
            padding: "20px",
            display: "table-row"
          }
        return (
            <div>

            <table  style={mystyle}>
                <thead>
                    <tr>
                         {columns.map(column=>(
                              <th item={column} key={column.key} onClick={()=>{this.setState({sortedField:column.dataIndex})
                              feild=column.dataIndex;
                              data.sort(compareValues(feild));
                         }}>{column.title}</th>
               
              
           
             ))}
             </tr>
                </thead>
                <tbody>
                        {data.map(item=>(
                           <tr style={trStyle}  key={
                            typeof rowKey === 'function' ? rowKey(item) : item[rowKey]
                        } >
                      
                        {columns.map(column=>(
                             <Columns column={column} item={item} key={column.key}/>
                         ))}
                  </tr>
             ))}
            </tbody>
            </table>

          </div>
        );
    }
}



class Columns extends Component {
    render () {
      const { item,column } = this.props
  
      
      return (
        <>
         <td >{column.render  ?column.render(item[column.dataIndex],item) : item[column.dataIndex]}</td>
         
        </>
      )
    }
  }

export default Table;

Table.defaultProps={
    rowKey:'id'
}