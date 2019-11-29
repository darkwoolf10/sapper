import React from 'react';
import './App.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            goodItemsCount: 0,
            grid: [
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
            ]
        };
    }

    componentDidMount() {
        this.findGoodItemsCount();
    }

    createGrid = () => {
        let grid = [];

        for(let i = 0; i < this.state.grid.length; i++) {
            let children = [];

            for (let j = 0; j < this.state.grid[i].length; j++) {
                children.push(<td key={i + "," + j} data-status={this.state.grid[i][j]} onClick={
                    (element) => this.clickItem(element)
                }/>);
            }

            grid.push(<tr key={i}>{children}</tr>);
        }

        return grid;
    };

    findGoodItemsCount = () => {
        for(let i = 0; i < this.state.grid.length; i++) {
            for (let j = 0; j < this.state.grid[i].length; j++) {
                if (this.state.grid[i][j] === 0) {
                    // eslint-disable-next-line react/no-direct-mutation-state
                    this.state.goodItemsCount++
                }
            }
        }
    };

    boom = (item) => {
        item.className += 'boom';

        window.setTimeout(() => {
            alert('The end!');
            window.location.reload();
        }, 50);
    };

    clickItem = (element) => {
        const item = element.target;
        const status = item.dataset.status;

        if (status === '1') {
            this.boom(item);
            return;
        }

        item.className += 'done';

        // eslint-disable-next-line react/no-direct-mutation-state
        if (++this.state.count === this.state.goodItemsCount) {
            alert("You are a winner. Start over")
        }
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
