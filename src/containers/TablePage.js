import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import Data from '../data';

const TablePage = () => {

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
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
    }
  };

  return (
    <PageBase title="Table Page"
              navigation="Application / Table Page">

      <Link to="/form" >
        <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.price}>Price</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.category}>Category</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.tablePage.items.map(item =>
            <TableRow key={item.id}>
              <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
              <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
              <TableRowColumn style={styles.columns.price}>{item.price}</TableRowColumn>
              <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>
              <TableRowColumn style={styles.columns.edit}>
                <Link className="button" to="/form">
                  <FloatingActionButton zDepth={0}
                                        mini={true}
                                        backgroundColor={grey200}
                                        iconStyle={styles.editButton}>
                    <ContentCreate  />
                  </FloatingActionButton>
                </Link>
              </TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </PageBase>
  );
};

export default TablePage;
