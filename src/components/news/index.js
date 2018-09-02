import React, { Component } from 'react'
import NewsSection from './NewsSection'
import NewsSources from './NewsSources'
// import {
//     Grid
// } from '@material-ui/core'

export default class News extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="news_container">
                {/* <Grid container spacing={24}>
                    <Grid item md={8} sm={8} xs={12}> */}
                        <NewsSection/>
                    {/* </Grid>
                    <Grid item md={1}> */}
                        <div className="vertical_seperator"></div>
                    {/* </Grid>
                    <Grid item md={4} sm={4} xs={12}> */}
                        <NewsSources/>
                    {/* </Grid>
                </Grid> */}
            </div>
        </React.Fragment>
        )
    }
}
