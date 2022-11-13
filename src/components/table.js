import React, {useState} from 'react';
import styles from './table.module.css';
import searchSvg from './../assets/search-icon.svg';


const Table = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [dataSource, setDataSource] = useState(props.list)
    const [tableFilter, setTableFilter] = useState([]);

    const changeFilter = (event) => {
        let val = event.target.value;
        if(val !== ''){
            setEnteredValue(val);
            const filterTable = dataSource.filter(obj => Object.keys(obj).some(k => String(obj[k]).toLowerCase().includes(val.toLowerCase())));
            setTableFilter([...filterTable]);
        }else{
            setEnteredValue(val);
            setDataSource([...dataSource])
        }
    }
    var tableData;
    if(enteredValue.length > 0){
        tableData = tableFilter;
    }
    else{
        tableData = dataSource;
    }

    return (
        <div className={styles.main}>
            <h2>Searchable Table</h2>
            <div className={styles.search} >
                <div className={styles['search-box']}>
                    <input type="text" placeholder='Search' onChange={changeFilter} value={enteredValue}></input>
                </div>
                <div className={styles['search-icon']}  >
                    <img src={searchSvg} alt='Search-Box' />
                </div>
            </div>
            <div className={styles.table}>
                <table cellSpacing='0' >
                    <thead>
                        <tr>
                            {props.colNames.map((item, index) => {
                                return (
                                    <th key={index}>
                                        {item.toUpperCase()}
                                    </th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(tableData).map((obj, index) => {
                            return (
                                <tr key={index}>
                                    {Object.values(obj).map((value, index2) => {
                                        return (
                                            <td key={index2}>
                                                {value}
                                            </td>)
                                    })}
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;