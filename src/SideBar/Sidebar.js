import { useState } from 'react';
import { FaBars, FaStethoscope, FaHome } from 'react-icons/fa';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const Side = props => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>

            <ProSidebar collapsed={isToggled}>

                <div>
                    <Menu iconShape="square" popperArrow={true}>
                        <MenuItem><button className="btn btn-success btn-block" style={{ marginTop: "1em" }} onClick={() => setIsToggled(!isToggled)}><FaBars /></button></MenuItem>
                        <MenuItem icon={<FaHome />}><Link to="/">Home</Link></MenuItem>
                        <MenuItem icon={<FaStethoscope />}><Link to="/book-appointment">Book Appointment</Link> </MenuItem>
                    </Menu>
                </div>
            </ProSidebar>


        </>
    );
};
const Sidebar = Side
export default Sidebar