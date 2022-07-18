import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import NewsDialog from '../components/NewsDialog';
import { NewsData } from '../news/data/NewsData'

function News(){

    const [open, setOpen] = React.useState(false);
    const [newsData, setNewsData] = React.useState({date:"", title:"", Heading:"", detail:""},);
    return(
        <div style={{marginTop:"70px"}}>
        {open?<NewsDialog open={open} setOpen={setOpen} newsData={newsData} />:""}
            {NewsData.map((row) => (
                <Card style={{marginBottom:"25px"}} onClick={()=>{setNewsData(row); setOpen(true)}}>
                    <img src={row.image} alt="プロフ画像" style={{width:"100%"}} />
                    <CardContent>
                        {row.title}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default News;