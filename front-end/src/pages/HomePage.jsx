import { Accordion, AccordionDetails, AccordionSummary, Avatar } from "@mui/material";
import "./module.css"
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const HomePage = () => {
    const colorPalette = {
        magentaRed: '#ff007f',
        volcano: '#fa8c16',
        orange: '#faad14',
        gold: '#fadb14',
        lime: '#00f572',
        green: '#00fa9a',
        cyan: '#00f5d7',
        blue: '#1890ff',
        geekBlue: '#2f54eb',
        purple: '#7e57c2',
    };
    return (
        <>
            <div className="header row">
                <div className=" col-1">
                </div>
                <div className=" col-4 bg-white">
                    Logo
                </div>
                <div className=" col-2">
                    Blogs
                </div>
                <div className=" col-2 bg-white">
                </div>
                <div className=" col-1">
                    <PersonIcon sx={{ color: "gray" }} fontSize="large" />
                </div>
                <div className=" col-2">
                    Adam Levine
                </div>
            </div>
            <div className="post p-3">

                <h1 className="text-center mt-3">
                    Post title
                </h1>
                <div className="d-flex justify-content-between">
                    <div className="w-75" >
                        <p>Author:John Smith</p>
                        <p>Created at: Sep 27, 2024</p>
                    </div>
                    <div className="w-25">
                        <div className="color-palette d-flex flex-wrap  ">
                            <span className="outline-div" style={{ color: colorPalette.magentaRed, borderColor: colorPalette.magentaRed }}>Magenta</span>
                            <span className="outline-div" style={{ color: colorPalette.volcano, borderColor: colorPalette.volcano }}>Volcano</span>
                            <span className="outline-div" style={{ color: colorPalette.orange, borderColor: colorPalette.orange }}>Orange</span>
                            <span className="outline-div" style={{ color: colorPalette.gold, borderColor: colorPalette.gold }}>Gold</span>
                            <span className="outline-div" style={{ color: colorPalette.lime, borderColor: colorPalette.lime }}>Lime</span>
                            <span className="outline-div" style={{ color: colorPalette.green, borderColor: colorPalette.green }}>Green</span>
                            <span className="outline-div" style={{ color: colorPalette.cyan, borderColor: colorPalette.cyan }}>Cyan</span>
                            <span className="outline-div" style={{ color: colorPalette.blue, borderColor: colorPalette.blue }}>Blue</span>
                            <span className="outline-div" style={{ color: colorPalette.geekBlue, borderColor: colorPalette.geekBlue }}>Geek Blue</span>
                            <span className="outline-div" style={{ color: colorPalette.purple, borderColor: colorPalette.purple }}>Purple</span>
                        </div>
                    </div>
                </div>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Accordion className="p-4" >
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        2 replies
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className="d-flex reply mb-3 pt-3 gap-4">
                            <Avatar src="logo192.png"></Avatar>
                            <div className="comments">
                                <p>Han Solo <span>1 day ago</span></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <span>reply to</span>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
export default HomePage