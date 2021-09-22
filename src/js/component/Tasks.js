import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks, task}) => {
    return (
        <div>
            <ul className="list-group">
                <Task task={task} index={index}/>
                <li className="list-group-item">{`${count} item left`}</li>
			</ul> 
        </div>
    )
}

Tasks.propTypes = {
    tasks = PropTypes.array

}

export default Tasks
