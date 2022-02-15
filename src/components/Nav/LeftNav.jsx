import React, { useState, useContext } from 'react';
import { RoutingContext, pagesMapping } from '../../Routing.js';
import Accordion from 'react-bootstrap/Accordion';
import './Nav.scss';
import {
  sidebar_items_components,
  sidebar_items_pages,
} from '../../MOCKS/sidebar_MOCK';
import SideBar from './SideBar';

const LeftNav = ({ open }) => {
  const { setPage } = useContext(RoutingContext);

  const [text, setText] = useState('');
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const accordion_items_pages = sidebar_items_pages.map((item, index) => {
    const onClick = () => {
      setText(`${item.sidebar}`);
      setSelectedItem(index);
      if (selectedItem === index) {
        setShow(false);
      } else if (selectedItem !== index) {
        setShow(true);
      }
    };

    return (
      <Accordion.Item
        eventKey={index}
        key={index}
        index={index}
        onClick={onClick}
      >
        <Accordion.Header className="accordion-header">
          {item.icon} {item.item_name}
        </Accordion.Header>
        {item.item_options.map((option, index) => (
          <a href="/template" key={index}>
            <Accordion.Body
              onClick={() => setPage(pagesMapping.template)}
              style={{ cursor: 'pointer' }}
            >
              {option}
            </Accordion.Body>
          </a>
        ))}
      </Accordion.Item>
    );
  });

  const accordion_items_components = sidebar_items_components.map(
    (item, index) => {
      const onClick = () => {
        setText(`${item.sidebar}`);
        setSelectedItem(index);
        if (selectedItem === index) {
          setShow(false);
        } else if (selectedItem !== index) {
          setShow(true);
        }
      };

      return (
        <Accordion.Item
          eventKey={index}
          key={index}
          index={index}
          onClick={onClick}
        >
          <Accordion.Header className="accordion-header">
            {item.icon} {item.item_name}
          </Accordion.Header>
          {item.item_options.map((option, index) => (
            <a href="/template" key={index}>
              <Accordion.Body
                onClick={() => setPage(pagesMapping.template)}
                style={{ cursor: 'pointer' }}
              >
                {option}
              </Accordion.Body>
            </a>
          ))}
        </Accordion.Item>
      );
    }
  );

  return (
    <div
      className="left-navbar"
      open={open}
      style={{ transform: open ? 'translateX(100%)' : 'translateX(0)' }}
    >
      <SideBar show={show} text={text} />
      <div className="accordion-group">
        <div className="accordion-group-item">PAGES</div>
      </div>
      <Accordion>{accordion_items_pages}</Accordion>
      <div className="accordion-group mt-3">
        <div className="accordion-group-item">COMPONENTS</div>
      </div>
      <Accordion>{accordion_items_components}</Accordion>
    </div>
  );
};

export default LeftNav;
