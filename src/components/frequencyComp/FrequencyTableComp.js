import React , { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Data from './../../data';
import Paper from 'material-ui/Paper';
import {white, purple600, purple500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer} from 'recharts';
import {typography} from 'material-ui/styles';



const styles = {
    columns: {
        no: {
          width: '10%'
        },
        name: {
          width: '40%'
        },
        price: {
          width: '20%'
        },
        category: {
          width: '20%'
        },
        edit: {
          width: '10%'
        }
    },
    paper: {
        backgroundColor: purple500,
        height: 150
      },
      div: {
        height: 95,
        padding: '5px 15px 0 15px'
      },
      header: {
        fontSize: 24,
        fontWeight: typography.fontWeightLight,
        color: white,
        backgroundColor: purple600,
        padding: 10,
      }
};

class FrequencyTableComp extends Component {
    
    render(){
        return(
            
        <div>
            {/* <Paper style={styles.paper}>
                <div style={{...styles.header}}>New Orders</div>
                <div style={styles.div}>
                    <ResponsiveContainer >
                    <LineChart data={Data.dashBoardPage.newOrders}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </Paper> */}
            
            <Table>
            <TableHeader displaySelectAll={false}
                        adjustForCheckbox={false}>
                <TableRow>
                <TableHeaderColumn style={styles.columns.no}>No.</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.name}>Source</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.price}>Keyword</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.category}>Frequency</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.edit}>Date</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {Data.tablePage.items.map(item =>
                <TableRow key={item.no}>
                    <TableRowColumn style={styles.columns.no}>{item.no}</TableRowColumn>
                    <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
                    <TableRowColumn style={styles.columns.price}>{item.price}</TableRowColumn>
                    <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>
                    <TableRowColumn style={styles.columns.edit}></TableRowColumn>
                </TableRow>
                )}
            </TableBody>
            </Table>    
        </div>
        );
    }
}

export default FrequencyTableComp;