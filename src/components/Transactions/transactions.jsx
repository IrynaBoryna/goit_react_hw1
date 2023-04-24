import PropTypes from 'prop-types'; 
	import css from './transactions.module.css';
	

	export const TransactionHistory =({items}) => {
	    return (
	 <table className={css.table}>
	  <thead>
	    <tr>
	      <th className ={css.tableHeadType}>Type</th>
	      <th className = {css.tableHead}>Amount</th>
	      <th className ={css.tableHead}>Currency</th>
	    </tr>
	  </thead>
	

	  <tbody>
	    { items.map(items => (
	   <TrTable key= {items.id}
	    type = {items.type}
	    amount = {items.amount}
	    currency = {items.currency}
	   />
	))}
	     </tbody>
	</table>
	    )
	}
	 
	const TrTable = ({type, amount, currency}) => {
	    return (
	        <tr>
	        <td className={css.tableBodyType}>{type}</td>
	        <td className={css.tableBody}>{amount}</td>
	        <td className={css.tableBody}>{currency}</td>
	      </tr> 
	    )
	}
	

	TransactionHistory.propTypes = {
	    items: PropTypes.array,
	    id: PropTypes.string,
	    type: PropTypes.string,
	    amount: PropTypes.string,
	    currency: PropTypes.string
	}
	TrTable.propTypes = {
	    id: PropTypes.string,
	    type: PropTypes.string,
	    amount: PropTypes.string,
	    currency: PropTypes.string
	}
