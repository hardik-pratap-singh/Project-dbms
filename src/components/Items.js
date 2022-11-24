import React, { Component } from 'react'
// import NewsItem from './NewsItem'
import Item from './Item';

export class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            // loading: false,
            // page: 1
        };
    }

    async componentDidMount() {
        let url = 'http://localhost:8080/hardik';
        // this.props.setProgress(10);
        let data = await fetch(url);
        // this.props.setProgress(30);
        let parsedData = await data.json();
        // this.props.setProgress(60);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles});
        // this.props.setProgress(100);
        
    }


    render() {

        return (
            <div className="container my-3">
                {/* <h1 className="text-center"></h1> */}


                <div className='row'>

                    {this.state.articles.map((e) => {
                        return <div className='col-md-4' key={e.productid} >
                            <Item title={e.itemname ? e.itemname : ""}
                                desc={e.desc ? e.desc.substring(0, 90) : ""}
                                price={e.price}
                                imgUrl={e.image ? e.image.toString() : "https://www.middleweb.com/wp-content/uploads/2017/08/breaking-news-blue-600.jpg"}
                                // newsUrl={e.url}
                                 />
                        </div>
                    })}

                </div>



                {/* <div className="d-flex justify-content-around my-5">
                    <button disabled={this.state.page <=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}


            </div>
        )
    }
}

export default Items ; 