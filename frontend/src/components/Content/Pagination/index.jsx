import { Grid, Pagination } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { pageChangePagination } from "../../../actions/dataAction"


const PaginationBar = () => {
    const dispatch = useDispatch()
    const { pagination } = useSelector(state => state.data)
    console.log(pagination)
    const onChangePagination = (event, value) => {
        dispatch(pageChangePagination(value));
    }

    return (
        <Grid item lg={12} md={12} sm={12} xs={12} mt={4} style={{ display: "flex", justifyContent: "center" }} >
            <Pagination count={pagination.noPage} page={pagination.currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
        </Grid>

    )
}
export default PaginationBar
