import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import NewsDialog from '../components/NewsDialog';
import { NewsData } from '../news/data/NewsData'

function News(){

    const [open, setOpen] = React.useState(false);
    const [newsData, setNewsData] = React.useState({date:"", title:"", Heading:"", detail:""},);
    return(
        <>
        {open?<NewsDialog open={open} setOpen={setOpen} newsData={newsData} />:""}
            {NewsData.map((row) => (
                <Card style={{marginBottom:"2px"}} onClick={()=>{setNewsData(row); setOpen(true)}}>
                    <CardContent>
                        {row.title}
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default News;