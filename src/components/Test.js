import React, { Component } from 'react'
import Item from './Item';

export class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let url = 'http://localhost:8080/hardik';
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
                                description={e.desc ? e.desc.substring(0, 90) : ""}
                                price={e.price}
                                imgUrl={e.image.toString()  ? e.image.toString()  : "https://www.middleweb.com/wp-content/uploads/2017/08/breaking-news-blue-600.jpg"}
                                // newsUrl={e.url} 
                                />
                        </div>
                    })}

                </div>


            </div>
        )
    }
}

export default Test
