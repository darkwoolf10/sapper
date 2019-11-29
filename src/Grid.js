import React from 'react';
import './App.css';

class Grid extends React.Component {
    createGrid = () => {
        let grid = [];
        const data = [
            [0,1,0,0,0,1,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,1,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,0,0,0,0,0],
        ];

        for(let i = 0; i < data.length; i++) {
            let children = [];

            for (let j = 0; j < data[i].length; j++) {
                children.push(<td key={i + "," + j} data-status={data[i][j]} onClick={(element) => this.clickItem(element)}/>);
            }

            grid.push(<tr key={i}>{children}</tr>);
        }

        return grid;
    };

    clickItem = (element) => {
        const status = element.target.dataset.status;
        status === 1 ? console.log(status) : console.log(status);
    };

    render() {
        return <table className="chess-board">
            <tbody>
                {this.createGrid()}
            </tbody>
        </table>;
    };
}

export default Grid;
