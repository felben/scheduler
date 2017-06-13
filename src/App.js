import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weekStart: moment('06-11-2017'),
      weekEnd: moment('06-17-2017'),
      tasks: [
        {
          objType: 'Task',
          ID: '1',
          name: 'Task One',
          startDate: '06-11-2017',
          endDate: '06-16-2017',
          projectID: '1',
          assignments: ['1', '2']
        },
        {
          objType: 'Task',
          ID: '2',
          name: 'Task Dos',
          startDate: '06-13-2017',
          endDate: '06-16-2017',
          projectID: '2',
          assignments: ['3', '4'],
          complete: true,
        },
        {
          objType: 'Task',
          ID: '3',
          name: 'Another Task',
          startDate: '06-17-2017',
          endDate: '06-17-2017',
          projectID: '1',
          assignments: ['5']
        }
      ]
    }
  }
  getDateWidth(task) {
    return moment(task.endDate).diff(moment(task.startDate), 'days')
  }

  getOffset(task) {
    return moment(task.startDate).diff(this.state.weekStart, 'days')
  }

  openTask(task){
    
  }

  render() {
    const tasks = this.state.tasks.map((task) => {
      const daySpan = this.getDateWidth(task)
      const offSet = moment(task.startDate).diff(moment(this.state.weekStart), 'days') -1

      if (task.projectID == 1) {
        return (
          <div key={task.ID} onClick={this.openTask} className={`day-width-${daySpan} day-offset-${offSet} bg-primary`}>
            &gt; {task.name}
          </div>
        )
      }
      else if (task.projectID == 2) {
        return (
          <div key={task.ID} onClick={this.openTask} className={`day-width-${daySpan} day-offset-${offSet} bg-danger`}>
           &gt;  {task.name}
          </div>
        )
      }


    })

    return (
      <div className="App">
        <main className="container col-sm-12">
          <header className="row text-center">
            <div className="custom-col"><p>Sun</p>11</div>
            <div className="custom-col"><p>Mon</p>12</div>
            <div className="custom-col"><p>Tue</p>13</div>
            <div className="custom-col"><p>Wed</p>14</div>
            <div className="custom-col"><p>Thu</p>15</div>
            <div className="custom-col"><p>Fri</p>16</div>
            <div className="custom-col"><p>Sat</p>17</div>
          </header>
          <div className="row content-row flex-wrap">
            {tasks}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
