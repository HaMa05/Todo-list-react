import React, { Component } from 'react'

class Table extends Component {
    constructor() {
        super();
    }
    
    
    render() {
        let className = " ";
        let checkEven = function(demo) {
            if(demo % 2 === 0) {
                return className += " is-even";
            }
        }
        return(
            <div className="Container-table">
                <table>
                <thead>
                    <tr>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.infos.map((info, index) => {
                        return(
                            <tr key={index} className={checkEven(index)}>
                                <td>{info.first}</td>
                                <td>{info.last}</td>
                                <td>{info.handle}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
        );
    }
}

export default Table;