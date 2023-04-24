import PropTypes from 'prop-types'; 
	import css from './statistics.module.css'
	

	

	export const StatisticsTitle = ({title}) => {
	    return (
	    <h2 className={css.statTitle}>{title}</h2>
	     )
	}
	export const Statistics = ({stats}) => {
	    return (
	     <ul className={css.statList}>
	        {stats.map(stats => (
	         <StatisticsLi key = {stats.id} 
	          label = {stats.label}
	          percentage = {stats.percentage}/> 
	        ))
	        }
	      </ul>
	)
	 }
	

	

	

	const StatisticsLi = ({label, percentage, id}) => {
	    return (
	 <li className={css.statItem} style = {{backgroundColor: getRandomHexColor()}}>
	      <span className={css.statistLabel}>{label}</span>
	      <span className={css.statist}>{percentage}%</span>
	</li> 
	)
	 }
	

	 Statistics.propTypes= {
	  stats: PropTypes.array,
	 }
	

	StatisticsLi.propTypes = {
	    id: PropTypes.string,
	    label: PropTypes.string.isRequired,
	    percentage: PropTypes.number.isRequired,
	}
	

	StatisticsTitle.propTypes = {
	        title: PropTypes.string,
	}
	

	

	function getRandomHexColor() {
	    return `#${Math.floor(Math.random() * 16777215)
	      .toString(16)
	      .padStart(6, 0)}`;
	  }
