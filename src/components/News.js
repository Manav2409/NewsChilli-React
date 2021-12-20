import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h1>NewsChilli - Top Headlines</h1>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://beebom.com/wp-content/uploads/2021/12/shutterstock_2010089492-min.jpg?w=750&quality=75"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                </div>
            </div>
        )
    }
}
