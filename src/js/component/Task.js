import React from 'react'
import PropTypes from 'prop-types'

const Task = ({task, index}) => {
    return (
        <li
			className="list-group-item"
			key={index}
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}>
			{task}
			{show && (
				<i
					className="fas fa-times float-end"
					onClick={() => deleteTask(index)}></i>
			)}
		</li>
    )
}

Tasks.propTypes = {
    task = PropTypes.string,
    index = PropTypes.number
}

export default Task
