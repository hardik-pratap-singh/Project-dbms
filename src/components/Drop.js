import React, { Component } from 'react'
import "../styles/cont.css";

export class Drop extends Component{

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let url = 'http://localhost:8080/getfields';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles});
    }

    render(){
        return(
            <div className="lol">
                {this.state.articles.map((e) => {
                    return <div key={e.productid} >
                        <div className="itemContainer">
                        <h1>Your Products on Sale</h1><br /><br />
                        <form action="/hehe.php" method='get'>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    <tr>
                                        <td>{e.itemname}</td>
                                        <td>{e.category}</td>
                                        <td>{e.price}</td>
                                        <td><button className='drop' type='submit'>Drop</button></td>
                                    </tr>
                                    <tr>
                                        <td>{e.itemname}</td>
                                        <td>{e.category}</td>
                                        <td>{e.price}</td>
                                        <td><button className='drop' type='submit'>Drop</button></td>
                                    </tr>
                                    <tr>
                                        <td>{e.itemname}</td>
                                        <td>{e.category}</td>
                                        <td>{e.price}</td>
                                        <td><button className='drop' type='submit'>Drop</button></td>
                                    </tr>
                                
                            </tbody>
                        </table>
                        </form>
                        </div>
                    </div>
                })}
            </div>

        )
    }

}
export default Drop