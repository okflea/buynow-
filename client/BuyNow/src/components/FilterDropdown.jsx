import { Dropdown } from "flowbite-react";

const FilterDropdown = (props) => {
  const {items ,title,setChange} = props;

  const handleFilter = (e) => {
    console.log("clicked",e.target.innerText);
    // console.log("clicked",e.target)
    const filterBy = e.target.innerText;
    //handling color
    if(filterBy === "Red"){
      setChange(prev=>prev.filter(item=>item.OEMspec.color === "Red"))
    }
    else if(filterBy === "Black"){
      setChange(prev=>prev.filter(item=>item.OEMspec.color === "Black"))
    }
    else if(filterBy === "White"){
      setChange(prev=>prev.filter(item=>item.OEMspec.color === "White"))
    }
    else if(filterBy === "Blue"){
      setChange(prev=>prev.filter(item=>item.OEMspec.color === "Blue"))
    }
    //handling Mileage
    else if(filterBy==="<50000km"){
      setChange(prev=>prev.filter(item=>item.MarketPlaceSpec.odometer<50000))
    }
    else if(filterBy==="<100000km"){
      setChange(prev=>prev.filter(item=>item.MarketPlaceSpec.odometer<100000))
    }
    else if(filterBy==="<150000km"){
      setChange(prev=>prev.filter(item=>item.MarketPlaceSpec.odometer<150000))
    }
//handling Price
    else if(filterBy==="<₹1000000"){
      setChange(prev=>prev.filter(item=>item.MarketPlaceSpec.price<1000000))
    }
    else if(filterBy==="<₹1200000"){
      setChange(prev=>prev.filter(item=>item.MarketPlaceSpec.price<1200000))
    }
    else if(filterBy==="<₹1500000"){
      setChange(prev=>prev.filter(item=>item.MarketPlaceSpec.price<1500000))
    }
    else if(filterBy==="<₹2000000"){
      setChange(prev=>prev.filter(item=>item.MarketPlaceSpec.price<2000000))
    } 
  }
  return (
    <div>
      <Dropdown label={title}>
        {items.map((item) => (
          <div key={item} title={title} onClick={handleFilter}>
            <Dropdown.Item >{item}</Dropdown.Item>
          </div>
        ))}
      </Dropdown>
    </div>
  )
}

export default FilterDropdown
