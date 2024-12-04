import React , {useState , useRef} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faEdit , faDesktop , faTable , faBarChart , faClone , faBug , faWindowClose , faSitemap , faPhone , faChevronDown , faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Link} from "react-router-dom";
import "./style.css";
const NavigationMenu = () => {

  const refsMenu = useRef([]);
  const [menuItems , setMenuItems] = useState([
    {
      label: 'Home',
      icon: faHome,
      children: [
        { label: 'Dashboard', link:'/post'},
        { label: 'Home', link: '/' },
        { label: 'Dashboard3', link: 'index3.html' }
      ]
    },
    {
      label: 'Forms',
      icon: faEdit,
      children: [
        { label: 'General Form', link: 'form.html' },
        { label: 'Advanced Components', link: 'form_advanced.html' },
        { label: 'Form Validation', link: 'form_validation.html' },
        { label: 'Form Wizard', link: 'form_wizards.html' },
        { label: 'Form Upload', link: 'form_upload.html' },
        { label: 'Form Buttons', link: 'form_buttons.html' }
      ]
    },
    {
      label: 'UI Elements',
      icon: faDesktop,
      children: [
        { label: 'General Elements', link: 'general_elements.html' },
        { label: 'Media Gallery', link: 'media_gallery.html' },
        { label: 'Typography', link: 'typography.html' },
        { label: 'Icons', link: 'icons.html' },
        { label: 'Glyphicons', link: 'glyphicons.html' },
        { label: 'Widgets', link: 'widgets.html' },
        { label: 'Invoice', link: 'invoice.html' },
        { label: 'Inbox', link: 'inbox.html' },
        { label: 'Calendar', link: 'calendar.html' }
      ]
    },
    {
      label: 'Tables',
      icon: faTable,
      children: [
        { label: 'Tables', link: 'tables.html' },
        { label: 'Table Dynamic', link: 'tables_dynamic.html' }
      ]
    },
    {
      label: 'Data Presentation',
      icon: faBarChart,
      children: [
        { label: 'Chart JS', link: 'chartjs.html' },
        { label: 'Chart JS2', link: 'chartjs2.html' },
        { label: 'Moris JS', link: 'morisjs.html' },
        { label: 'ECharts', link: 'echarts.html' },
        { label: 'Other Charts', link: 'other_charts.html' }
      ]
    },
    {
      label: 'Layouts',
      icon: faClone,
      children: [
        { label: 'Fixed Sidebar', link: 'fixed_sidebar.html' },
        { label: 'Fixed Footer', link: 'fixed_footer.html' }
      ]
    },
    {
      label: 'Additional Pages',
      icon: faBug,
      children: [
        { label: 'E-commerce', link: 'e_commerce.html' },
        { label: 'Projects', link: 'projects.html' },
        { label: 'Project Detail', link: 'project_detail.html' },
        { label: 'Contacts', link: 'contacts.html' },
        { label: 'Profile', link: 'profile.html' }
      ]
    },
    {
      label: 'Extras',
      icon: faWindowClose,
      children: [
        { label: '403 Error', link: 'page_403.html' },
        { label: '404 Error', link: 'page_404.html' },
        { label: '500 Error', link: 'page_500.html' },
        { label: 'Plain Page', link: 'plain_page.html' },
        { label: 'Login Page', link: 'login.html' },
        { label: 'Pricing Tables', link: 'pricing_tables.html' }
      ]
    },
    {
      label: 'Multilevel Menu',
      icon: faSitemap,
      children: [
        { label: 'Level One', link: '#level1_1' },
        {
          label: 'Level One',
          children: [
            { label: 'Level Two', link: 'level2.html', className: 'sub_menu' },
            { label: 'Level Two', link: '#level2_1' },
            { label: 'Level Two', link: '#level2_2' }
          ]
        },
        { label: 'Level One', link: '#level1_2' }
      ]
    },
    {
      label: 'Landing Page',
      icon: faPhone,
      link: 'javascript:void(0)',
      badge: { label: 'Coming Soon', type: 'success' }
    }
  ]) ;


  const onClickActiveMenu = (index ) =>{
   

    const updatedMenuItems = menuItems.map((item, i) => {
      
      const childRef = refsMenu.current[index];
      let scrollHeight = 0;
      if (childRef && i === index) {
        scrollHeight = childRef.scrollHeight;
      }
      return ({
        ...item,
        scrollHeight : item?.active === false ? scrollHeight: 0  ,
        active: i === index && item?.active === false, // Set `active` to true only for the clicked index
      })
    });
      
    setMenuItems(updatedMenuItems)
  }

  return (
  
    <>
      <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
        <div className="menu_section">
          <h3>General</h3>
          <ul className="nav side-menu">
            {menuItems.map((item , index) =>(
                <li key={index} className={(item.active)?"active":""} onClick={()=>onClickActiveMenu(index  )}>
                  <a >
                    <FontAwesomeIcon icon={item.icon} /> {item.label} 
                    <FontAwesomeIcon icon={(item.active)?faChevronDown:faChevronRight} />  </a>
                  {item.children && 
                      <ul 
                      ref={(el) => (refsMenu.current[index] = el)}
                      style={{height:`${item?.scrollHeight}px`}}
                      className={(item.active)?"nav child_menu showchild":"nav child_menu"} >
                           {
                             (item.children).map((item , index) =>(
                              <li key={index}> <Link to={item.link}> {item.label} </Link></li>
                            ))
                           }
                      </ul>
                  }
                  
                </li> 
            ))}
 </ul>
        </div>

      </div>
     
      <div className="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
          <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
          <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
          <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
          <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
      </div>
      </>
  );
};


export default NavigationMenu;