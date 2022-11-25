import React, { Component } from 'react'
import Item from './Item';

export class FreshItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let url = 'http://localhost:8080/getproducts';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles});
    }

    render() {

        return (
            <div className="container my-3">
                <h1 className="text-center">Fresh recommendations</h1>
                <div className='row'>
                    {this.state.articles.map((e) => {
                        return <div className='col-md-4' key={e.productid} >
                            <Item title={e.itemname? e.itemname : ""}
                                desc={e.desc ? e.desc.substring(0, 90) : ""}
                                price={e.price}
                                imgUrl = {e.image}
                                sname={e.name}
                                email={e.email}
                                phone={e.phoneno}
                                />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default FreshItems
