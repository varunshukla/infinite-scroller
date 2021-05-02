import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/contact.css';
import '../assets/styles/loader.css';

const ContactRow = (props) => {
  return (
    <div className="contact-row">
      <i className="fa fa-fw fa-user"></i>&nbsp;{props.contact}
    </div>
  );
};

const FilterableContactTable = () => {
  const [items, setitems] = useState(20);
  const [loading, setloading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current.scrollHeight - ref.current.scrollTop === ref.current.clientHeight) {
        loadMore();
      }
    });
  });

  function loadMore() {
    setloading(true);
    setTimeout(() => {
      setitems(items + 20);
      setloading(false);
    }, 2000);
  }

  var rows = [];
  for (var i = 0; i < items; i++) {
    rows.push(
      <ContactRow contact={`Person ${i}`} />
    );
  }

  return (
    <div className="row" ref={ref}>
      <div className="col-md-8">
        <div className='table table-hover'>
          <div>{rows}</div>
          {loading &&
            <div>
              <div className="loader"></div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default FilterableContactTable;
