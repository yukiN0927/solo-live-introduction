import { Card, CardContent } from "@material-ui/core";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function SeachTable(props){
    const { tableValue }=props;
    const navigate = useNavigate();
    return (
        <div style={{marginTop:"70px"}}>
            {tableValue.map((row) => (
                <Card style={{marginBottom:"25px"}} onClick={()=>{navigate(`/solo-live-introduction/${row.url}/`);}}>
                    <img src={row.image} alt="プロフ画像" style={{width:"100%" }} />
                    <CardContent>
                        {row.name}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

SeachTable.propTypes = {
    tableValue: PropTypes.array.isRequired,
};

export default SeachTable